#!/usr/bin/env bash
#
# 部署脚本：将当前仓库静态资源同步到 BWG 服务器。
# 使用方式：
#   BWG_HOST=example.com \
#   BWG_USER=deployer \
#   BWG_TARGET_DIR=/srv/www/tia \
#   BWG_SSH_KEY="$(cat ~/.ssh/id_rsa)" \
#   ./scripts/deploy_bwg.sh
#
# 支持变量：
#   BWG_HOST         —— 目标服务器地址（必填）。
#   BWG_USER         —— ssh 登录用户（必填）。
#   BWG_TARGET_DIR   —— 同步到服务器的目录（必填）。
#   BWG_SSH_KEY      —— 私钥字符串，CI 中通过 Secret 注入（必填）。
#   BWG_PORT         —— ssh 端口（默认 22，可选）。
#   BWG_RSYNC_EXCLUDE —— 逗号分隔的排除模式（可选）。
#
# 设计说明：
#   - 通过 mktemp 写入临时私钥文件，严格 600 权限。
#   - 使用 rsync --delete 保障目标目录与仓库保持一致。
#   - 提供排除列表，默认忽略 .git、.github 等非站点文件。
#   - 部署过程中开启 set -euo pipefail，避免静默失败。

set -euo pipefail

require_var() {
  local name=$1
  if [[ -z ${!name:-} ]]; then
    echo "[deploy_bwg] 缺少必要环境变量: ${name}" >&2
    exit 1
  fi
}

require_var "BWG_HOST"
require_var "BWG_USER"
require_var "BWG_TARGET_DIR"
require_var "BWG_SSH_KEY"

export BWG_PORT=${BWG_PORT:-22}

tmp_key=$(mktemp)
trap 'rm -f "${tmp_key}"' EXIT
printf "%s\n" "${BWG_SSH_KEY}" >"${tmp_key}"
chmod 600 "${tmp_key}"

IFS=',' read -r -a exclude_items <<< "${BWG_RSYNC_EXCLUDE:-.git,.github,.DS_Store,README.md,scripts}"
rsync_excludes=()
for item in "${exclude_items[@]}"; do
  [[ -z ${item} ]] && continue
  rsync_excludes+=("--exclude=${item}")
done

ssh_options=("-i" "${tmp_key}" "-p" "${BWG_PORT}" "-o" "StrictHostKeyChecking=no" "-o" "UserKnownHostsFile=/dev/null")

echo "[deploy_bwg] 开始同步到 ${BWG_USER}@${BWG_HOST}:${BWG_TARGET_DIR}"

ssh "${ssh_options[@]}" "${BWG_USER}@${BWG_HOST}" "mkdir -p '${BWG_TARGET_DIR}'"

echo "[deploy_bwg] 目标目录已准备"

ssh "${ssh_options[@]}" "${BWG_USER}@${BWG_HOST}" "command -v rsync >/dev/null 2>&1 || (export DEBIAN_FRONTEND=noninteractive; apt-get update -y && apt-get install -y rsync)"

echo "[deploy_bwg] 远端 rsync 准备完成"

rsync -avz --delete "${rsync_excludes[@]}" \
  -e "ssh ${ssh_options[*]}" \
  ./ "${BWG_USER}@${BWG_HOST}:${BWG_TARGET_DIR}"

echo "[deploy_bwg] 同步完成"
