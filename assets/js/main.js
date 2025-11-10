        const navToggle = document.querySelector('.nav-toggle');
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                const expanded = navToggle.getAttribute('aria-expanded') === 'true';
                navToggle.setAttribute('aria-expanded', String(!expanded));
                document.body.classList.toggle('nav-open', !expanded);
            });
        }

        const navLinks = document.querySelectorAll('.nav-links a[data-page]');
        const currentPage = document.body.dataset.page;
        navLinks.forEach((link) => {
            if (currentPage) {
                link.classList.toggle('active', link.dataset.page === currentPage);
            }
            link.addEventListener('click', () => {
                if (navToggle) {
                    navToggle.setAttribute('aria-expanded', 'false');
                }
                document.body.classList.remove('nav-open');
            });
        });

        function initHeroVideo() {
            const video = document.querySelector('.hero-video');
            if (!video) return;

            ['muted', 'autoplay', 'playsinline', 'webkit-playsinline'].forEach((attr) => {
                if (!video.hasAttribute(attr)) {
                    video.setAttribute(attr, '');
                }
            });

            const attemptPlay = () => {
                const promise = video.play();
                if (promise !== undefined) {
                    promise.catch(() => {
                        const retry = () => {
                            video.play().catch(() => {});
                        };
                        video.addEventListener('click', retry, { once: true });
                        video.addEventListener('touchstart', retry, { once: true });
                    });
                }
            };

            if ('IntersectionObserver' in window) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            attemptPlay();
                        }
                    });
                }, { threshold: 0.2 });
                observer.observe(video);
            } else {
                attemptPlay();
            }
        }

        initHeroVideo();

        const translations = {
            de: {
                'meta.title': 'Tethys Investment Alliance | KI-gestützte Quant-Plattform',
                'meta.description': 'Tethys Investment Alliance verbindet KI und quantitative Strategien, automatisiert Research-Workflows, liefert Echtzeit-Signale und steuert Risiken auf institutionellem Niveau.',
                'nav.home': 'Startseite',
                'nav.solutions': 'Lösungen',
                'nav.services': 'Serviceprogramme',
                'nav.about': 'Über & Kontakt',
                'nav.platform': 'Intelligente Plattform',
                'nav.team': 'Research-Team',
                'nav.alumni': 'Alumni',
                'nav.education': 'Unterricht &amp; Reports',
                'nav.elections': 'Abstimmungen',
                'nav.lottery': 'Verlosung',
                'nav.contact': 'Kontakt',
                'nav.cta': 'Kostenlose Demo',
                'nav.toggle': 'Navigation umschalten',
                'language.switcherLabel': 'Sprache wählen',
                'hero.eyebrow': 'AI-gestützte Quant Intelligence',
                'hero.headline': 'Globale Märkte in Echtzeit erkennen und präzise Quant-Entscheidungen treffen',
                'hero.paragraph': 'Wir kombinieren Deep Learning, natürliche Sprachverarbeitung und jahrzehntelange Buy-Side-Expertise, um eine durchgängige Plattform zu liefern, die Discovery, Validierung und Ausführung automatisiert.',
                'hero.primary': 'Beratungstermin vereinbaren',
                'hero.secondary': 'Plattformfunktionen ansehen',
                'hero.highlight1': '<strong>24/7</strong> KI-gestützte Marktüberwachung',
                'hero.highlight2': '<strong>120&nbsp;ms</strong> Signallaufzeit bis zum Desk',
                'hero.highlight3': '<strong>99,9&nbsp;%</strong> Datenqualität mit Audit-Trail',
                'hero.badgeTitle': 'Quant Research as a Service',
                'hero.badgeText': 'Multi-Asset-Strategiebibliothek · Automatisiertes Backtesting · Mehrsprachige Kollaboration',
                'hero.mediaAlt': 'Visualisiertes Quant-Dashboard mit Echtzeitkennzahlen',
                'metrics.eyebrow': 'Institutionelle Ergebnisse',
                'metrics.heading': 'Von Szenario-Strategien bis Risk Controls – messbare Resultate aus einer Hand',
                'metrics.paragraph': 'Tethys Investment Alliance begleitet Family Offices, Broker-Dealer und Hedgefonds dabei, differenzierte Portfolios aufzubauen und sie in vollautomatisierte Execution-Infrastrukturen einzubetten.',
                'metrics.card1.label': 'Backtesting-Szenarienbibliothek',
                'metrics.card1.text': 'Über Aktien, ETFs, Futures und digitale Assets hinweg mit frei kombinierbaren Faktoren.',
                'metrics.card2.label': 'Beschleunigte Signalauslieferung',
                'metrics.card2.text': 'Der KI-Engine verkürzt den Weg von der Hypothese zur produktiven Strategie drastisch.',
                'metrics.card3.label': 'Regulatorische Märkte im Fokus',
                'metrics.card3.text': 'Integrierte Audit-Trails, Anomalieerkennung und Risk Playbooks für globale Aufsichten.',
                'services.eyebrow': 'Serviceprogramme',
                'services.heading': 'Strukturiertes Engagement vom Campus bis zum Kapital',
                'services.paragraph': 'Wir erweitern das VenusIN-Erbe innerhalb der TIA-Experience um kuratierte Servicepfade, die Teams vom Lernen bis zur Live-Implementierung führen.',
                'services.card1.title': 'Strategic Advisory Lab',
                'services.card1.desc': 'Discovery-Sprints richten Governance, Datenfundamente und Marktprioritäten aus.',
                'services.card1.point1': 'Architektur-Workshops gemeinsam mit Senior-Partnern',
                'services.card1.point2': 'Regulatorische, Compliance- und Risiko-Playbooks',
                'services.card1.point3': 'KPI-Roadmaps zwischen VenusIN-Kohorten und institutionellen Mandaten',
                'services.card2.title': 'Quant Skills Accelerator',
                'services.card2.desc': 'Hybride Unterrichtsmodule verbinden Mentor:innen mit produktiven Toolchains.',
                'services.card2.point1': 'Wöchentliche Masterclasses unter Leitung der Research-Direktor:innen',
                'services.card2.point2': 'KI-gestütztes Übungsumfeld auf Basis echter Desks',
                'services.card2.point3': 'Portfoliolabore vereinen Unterrichts-Challenges und Live-Daten',
                'services.card3.title': 'Capital Partnership Desk',
                'services.card3.desc': 'Alumni-Strategien vernetzen wir mit unserem Co-Investment- und Operations-Netzwerk.',
                'services.card3.point1': 'Matching-Fonds und Angel-Syndikat-Intros',
                'services.card3.point2': 'Dedizierter Execution-, Risiko- und Reporting-Concierge',
                'services.card3.point3': 'Post-Deployment-Analytics mit vierteljährlichen Stewardship-Reviews',
                'features.eyebrow': 'Plattform im Detail',
                'features.heading': 'Modularer Aufbau, exakt auf Ihre Research-Pipelines abgestimmt',
                'features.card1.title': 'AI-Signalfabrik',
                'features.card1.desc': 'Aggregiert Datenquellen, extrahiert Features in Echtzeit und generiert erklärbare Handelssignale.',
                'features.card1.point1': 'Früherkennung von Anomalien und Risikosignalen',
                'features.card1.point2': 'Lifecycle-Governance für jede Strategie',
                'features.card1.point3': 'Visualisierte Modell-Performance in Echtzeit',
                'features.card2.title': 'Quant Execution Hub',
                'features.card2.desc': 'Direkte Anbindung an Broker und Exchanges für Algo-, Basket- und Auto-Rebalancing-Orders.',
                'features.card2.point1': 'Rollenbasierte Zugriffe über mehrere Konten',
                'features.card2.point2': 'Intelligentes Order-Routing mit Slippage-Kontrolle',
                'features.card2.point3': 'Live-Nettovermögen und Allokationsansichten',
                'features.card3.title': 'Insight Visual Center',
                'features.card3.desc': 'Dashboards verwandeln KI-Erkenntnisse in abgestimmte Entscheidungen über Teams hinweg.',
                'features.card3.point1': 'Szenario-KPIs und individuelle Reports',
                'features.card3.point2': 'Marktbriefings aus natürlicher Sprache',
                'features.card3.point3': 'Nahtlose Integration via API und Webhooks',
                'page.platform.intro': 'Lernen Sie die Bausteine der Tethys Investment Alliance kennen – von der AI-Signalfabrik bis zum Execution Hub – und orchestrieren Sie Research, Trading und Governance auf einer Plattform.',
                'page.platform.cta': 'Strategiegespräch buchen',
                'page.platform.secondary': 'Reports ansehen',
                'about.eyebrow': 'Über uns',
                'about.heading': 'Ein gemeinsamer Campus für quantitative Innovation',
                'about.paragraph': 'Tethys Investment Alliance vereint Bildungsakteure, Investor:innen und Builder, um Forschungserfolge in belastbare Kapitalprogramme zu überführen.',
                'page.about.intro': 'TIA vereint Bildungsakteure, Investor:innen und Builder, um Forschungserfolge in nachhaltige Kapitalprogramme zu überführen. Unser Ziel: jede Phase vom Insight bis zur Ausführung transparent, messbar und resilient zu gestalten.',
                'about.list1': 'Grenzüberschreitendes Gründerteam verbindet europäische Präzision mit asiatischer Geschwindigkeit.',
                'about.list2': 'End-to-End-Infrastruktur für Bildung, Inkubation und Execution auf einer Datenbasis.',
                'about.list3': 'Wirkung messen wir an live ausgerollten Strategien, geschaffenen Jobs und Community-Governance.',
                'about.button': 'Leadership kennenlernen',
                'about.media.heading': 'Community Snapshot',
                'about.media.paragraph': 'Das VenusIN-Erbe speist eine globale Gilde aus Analyst:innen, Gründer:innen und Partnern.',
                'about.stat1.value': '180+',
                'about.stat1.label': 'Aktive Mitglieder',
                'about.stat2.value': '42',
                'about.stat2.label': 'Gestartete Strategien',
                'about.stat3.value': '12',
                'about.stat3.label': 'Vertretene Länder',
                'ros.mediaAlt': 'KI-gestützte Oberfläche für Strategie-Backtesting',
                'ros.eyebrow': 'Research Operating System',
                'ros.heading': 'Jede Minute des Research-Teams ist messbar, nachvollziehbar und skalierbar',
                'ros.paragraph': 'Ein konfigurierbares Operating System zerlegt den Research-Prozess in wiederverwendbare Bausteine und baut ein strategisches Wissensgraph-Backbone auf.',
                'ros.list1': 'Genehmigungs- und Audit-Trails für funktionsübergreifende Teams',
                'ros.list2': 'End-to-End KPI-Tracking vom Insight bis zur Ausführung',
                'ros.list3': 'Mehrsprachige Schnittstellen für globale Zusammenarbeit',
                'ros.button': 'Online-Demo buchen',
                'alumni.eyebrow': 'Alumni-Highlights',
                'alumni.heading': 'Herausragende Alumni prägen Märkte und Klassenzimmer',
                'alumni.paragraph': 'Ausgewählte TIA-Alumni leiten heute führende Trading-Desks, Venture-Studios und Lernnetzwerke.',
                'education.eyebrow': 'Bildung &amp; Reports',
                'education.heading': 'Unterricht trifft Reporting in Institutionqualität',
                'education.paragraph': 'Wir verbinden Lehrsaal, Research-Observatorium und Governance-Rhythmus zu einem nahtlosen Takt.',
                'education.card1.title': 'Classroom Teaching',
                'education.card1.desc': 'Immersive Programme für Analyst:innen, Gründer:innen und politische Gestalter.',
                'education.card1.point1': 'Modulare Kurse zu Makro, KI und Risikotechnik',
                'education.card1.point2': 'Co-Teaching mit Alumni, die heute aktive Fonds führen',
                'education.card1.point3': 'Abschluss-Demos mit Community-Reviews aus VenusIN',
                'education.card2.title': 'Investment Reports',
                'education.card2.desc': 'Datenreiche Publikationen übersetzen Kohorten-Insights in entscheidungsreife Intelligence.',
                'education.card2.point1': 'Monatliche Marktüberblicke mit Szenario-Simulationen',
                'education.card2.point2': 'Thematische Deep Dives mit Partnerinstitutionen',
                'education.card2.point3': 'Interaktive Dashboards über die TIA-Plattform',
                'page.education.intro': 'Kuratierte Module für Analyst:innen, Gründer:innen und Governance-Gremien. Jede Einheit bringt ein sofort nutzbares PDF, Datenset oder Replay mit – bereit für Ihre Knowledge Base.',
                'education.module1.category': 'Unterricht',
                'education.module1.title': 'Quant Foundations Sprint',
                'education.module1.desc': 'Dreiwöchige Intensivreihe über Makro-Mindsets, AI-Feature-Engineering und Risikorahmen – begleitet von praxisnahen Aufgaben.',
                'education.module1.point1': 'Tägliche zweisprachige Live-Sessions mit Replay-Archiv',
                'education.module1.point2': 'Begleitende Jupyter-Notebooks und Datensätze',
                'education.module1.point3': 'Abschluss mit Strategie-Review und KPI-Checkliste',
                'education.module1.meta': 'Aktualisiert: 2025 Q3 Kohorte',
                'education.module1.link': 'PDF herunterladen',
                'education.module1.href': '#',
                'education.module2.category': 'Unterricht',
                'education.module2.title': 'Mentor Studio · Execution Playbooks',
                'education.module2.desc': 'Intensiv-Workshop zur Zusammenarbeit am Execution Desk – von Order-Design bis zu länderübergreifender Risikosteuerung.',
                'education.module2.point1': 'Co-Teaching mit Alumni, die aktive Desks leiten',
                'education.module2.point2': 'Simulationen realer Handelsfälle mit Review',
                'education.module2.point3': 'Compliance-Checklisten für mehrere Jurisdiktionen',
                'education.module2.meta': 'Aktualisiert: 2025 Q2 Praxisprogramm',
                'education.module2.link': 'PDF herunterladen',
                'education.module2.href': '#',
                'education.module3.category': 'Report',
                'education.module3.title': 'Global Macro Radar',
                'education.module3.desc': 'Monatsreport mit Makro-Szenarien, FX-/Rates-Tilts und quantitativen Frühwarnsignalen.',
                'education.module3.point1': 'Interaktives Dashboard mit Live-Daten',
                'education.module3.point2': 'Sensitivitäten und Stresstests je Strategie',
                'education.module3.point3': 'Politik-, Liquiditäts- und Cross-Asset-Beobachtungen',
                'education.module3.meta': 'Neueste Ausgabe: September 2025',
                'education.module3.link': 'PDF herunterladen',
                'education.module3.href': '#',
                'education.module4.category': 'Report',
                'education.module4.title': 'Digital Asset Liquidity Review',
                'education.module4.desc': 'Analyse der Liquiditätsstufen, Gegenparteien und DeFi-Kennzahlen für digitale Assets.',
                'education.module4.point1': 'Vergleich von Börsen- und OTC-Tiefe',
                'education.module4.point2': 'On-Chain-Flüsse und Funding-Bewegungen',
                'education.module4.point3': 'Ausführungsrisiken und Überwachungsmetriken',
                'education.module4.meta': 'Neueste Ausgabe: August 2025',
                'education.module4.link': 'PDF herunterladen',
                'education.module4.href': '#',
                'education.note': '* Hinweis: Die PDF-Links sind Platzhalter. Bitte nach dem Upload durch die finalen Dokumente ersetzen.',
                'education.banner.eyebrow': 'Co-Creation',
                'education.banner.heading': 'Brauchen Sie maßgeschneiderte Kurse oder Reports?',
                'education.banner.paragraph': 'Wir co-kreieren zweisprachige Programme, Daten-Stacks und Governance-Rhythmen mit Hochschulen, Family Offices und Institutionen.',
                'education.banner.primary': 'Co-Creation-Termin buchen',
                'education.banner.secondary': 'Beraterteam kennenlernen',
                'education.viewer.title': 'PDF-Vorschau',
                'education.viewer.download': 'Download',
                'elections.eyebrow': 'Abstimmungen &amp; Wahlen',
                'elections.heading': 'Transparente Governance aus der Community heraus',
                'elections.paragraph': 'Mitglieder nominieren Initiativen, Mentoring Councils und Fondsallokationen über sichere Wahlgänge, synchronisiert mit den TIA Identity Services.',
                'elections.primary': 'Aktuelle Wahlgänge ansehen',
                'elections.secondary': 'Wahlstatut prüfen',
                'page.elections.intro': 'Von der Einreichung bis zur Umsetzung durchlaufen alle Abstimmungen verifizierte Identitäten, auditierbare Logs und mehrsprachige Benachrichtigungen. Die folgenden Module unterstützen Ihren Governance-Rhythmus.',
                'elections.overview.eyebrow': 'Leadership-Auswahl 2025',
                'elections.overview.heading': 'Kerndaten der TIA Wahl',
                'elections.overview.intro': 'Aus den vollständigen Wahlunterlagen destilliert: die wichtigsten Fakten, damit Sie schnell entscheiden können, wem Ihre Stimme gehört.',
                'elections.overview.scoring.title': 'Jury & Bewertung',
                'elections.overview.scoring.point1': 'Der TIA-Vorstand bewertet auf Basis eines 100-Punkte-Rasters.',
                'elections.overview.scoring.point2': 'Community-Stimmen können bis zu 50 Zusatzpunkte einbringen.',
                'elections.overview.reward.title': 'Belohnung für die Führung',
                'elections.overview.reward.point1': 'Fünfjährige Leitung der Allianz und Freedom-Award-Nominierung.',
                'elections.overview.reward.point2': '500 Mio. € Projektbudget plus 5 Mio. € Preisgeld.',
                'elections.overview.reward.point3': '20 % Equity und ein Maybach S680 für fünf Jahre.',
                'elections.overview.support.title': 'Vorteile für Unterstützer:innen',
                'elections.overview.support.point1': 'Dreijähriger Zugang zum Siegermodell (erwartete Rendite ≥ 380 %).',
                'elections.overview.support.point2': '20 % Anteil am Preisgeld sowie an jährlichen Dividenden.',
                'elections.overview.support.point3': 'Lebenslange Ehrenmitgliedschaft und Platz im Rendite-Boost-Programm.',
                'elections.overview.phase1.title': 'Vorrunde · 01.04 – 30.06.2025',
                'elections.overview.phase1.desc': '195 Trading-Desks werden nach Performance, Strategie-Essay und Systemanteil bewertet.',
                'elections.overview.phase1.point1': 'Gesamtertrag & maximaler Verlust im Zeitraum (50 Punkte)',
                'elections.overview.phase1.point2': 'Essay: „Wenn ich der nächste Anführer von TIA wäre …“ (30 Punkte)',
                'elections.overview.phase1.point3': 'Quantitativer Anteil des eigenen Investment-Systems (20 Punkte)',
                'elections.overview.phase1.result': 'Ergebnis: 195 Teilnehmende qualifizieren sich für die Zwischenrunde.',
                'elections.overview.phase2.title': 'Zwischenrunde · 01.07 – 31.10.2025',
                'elections.overview.phase2.desc': 'Top 20 % entwickeln einen Fünfjahresplan und legen teilbare IP sowie Risikoergebnisse offen.',
                'elections.overview.phase2.point1': 'Handelsertrag & maximaler Verlust im Zeitraum (50 Punkte)',
                'elections.overview.phase2.point2': 'TIA Fünfjahresplan und Skalierungsstrategie (30 Punkte)',
                'elections.overview.phase2.point3': 'Teilbarer Anteil des eigenen Systems (20 Punkte)',
                'elections.overview.phase2.result': 'Ergebnis: Zwei Finalist:innen ziehen in die Endrunde ein.',
                'elections.overview.phase3.title': 'Finale · 01.11.2025 – 30.04.2026',
                'elections.overview.phase3.desc': 'Zwei Finalist:innen liefern sechs Monate Live-Trading und globale Skalierungspläne.',
                'elections.overview.phase3.point1': 'Sechs Monate Live-Trading (Ertrag & maximaler Verlust) (50 Punkte)',
                'elections.overview.phase3.point2': 'Globaler Plan zur Skalierung professioneller Strategien (30 Punkte)',
                'elections.overview.phase3.point3': 'International teilbare Systemanteile (20 Punkte)',
                'elections.overview.phase3.result': 'Ergebnis: Eine Person übernimmt die Führung der Allianz.',
                'elections.overview.leader.title': 'Neue Führung erhält',
                'elections.overview.leader.point1': 'Fünfjährige Leitung der TIA.',
                'elections.overview.leader.point2': 'Freedom-Award-Nominierung.',
                'elections.overview.leader.point3': '500 Mio. € Startkapital für das „Fünfjahres-Traumprogramm“.',
                'elections.overview.leader.point4': '5 Mio. € Bonus plus 20 % Unternehmensanteile.',
                'elections.overview.leader.point5': 'Maybach S680 4MATIC (fünf Jahre Nutzung).',
                'elections.overview.supporters.title': 'Unterstützer profitieren',
                'elections.overview.supporters.point1': 'Dreijähriger Gratiszugang zum Siegermodell (≥ 380 % Rendite erwartet).',
                'elections.overview.supporters.point2': 'Teilnahme am „Fünfjahres-Traumprogramm“ der Allianz.',
                'elections.overview.supporters.point3': '20 % Anteil an der Preisprämie (1 Mio. €).',
                'elections.overview.supporters.point4': '20 % Anteil an den jährlichen Dividenden der Unternehmensanteile (≥ 5 Mio. € erwartet).',
                'elections.overview.supporters.point5': 'Lebenslange Ehrenmitgliedschaft inklusive Medaille und Urkunde.',
                'elections.overview.supporters.point6': 'Teilnahme am jährlichen Rendite-Boost-Programm.',
                'elections.overview.supporters.point7': 'Quartalsweise Revenue-Sharing aus dem proprietären Fonds.',
                'elections.overview.banner': 'Die heißeste Phase beginnt: Die Zwischenrunde endet, die finale Abstimmung steht bevor. Geben Sie Ihrer Favoritin oder Ihrem Favoriten Ihre Stimme und gestalten Sie die Zukunft von TIA aktiv mit!',
                'elections.candidates.eyebrow': 'Boardwahl 2025',
                'elections.candidates.heading': 'Lernen Sie die Kandidierenden kennen',
                'elections.candidates.description': 'Zwei Stimmen, ein Mandat: Prüfen Sie die Profile und vergeben Sie Ihre Stimme direkt über die Buttons.',
                'elections.candidates.thomas.summary': 'Fokus auf Identity-Governance und Member-Onboarding.',
                'elections.candidates.thomas.vote': 'Für Thomas stimmen',
                'elections.candidates.thomas.voteAria': 'Für Thomas stimmen – 1.284 Stimmen',
                'elections.candidates.teo.summary': 'Skaliert Execution-Playbooks und Desk-Automatisierung.',
                'elections.candidates.teo.vote': 'Für Teo stimmen',
                'elections.candidates.teo.voteAria': 'Für Teo stimmen – 1.096 Stimmen',
                'elections.candidates.thomas.votes': '1.284',
                'elections.candidates.teo.votes': '1.096',
                'elections.details.phase1': '<h3>Vorrunde · 01.04 – 30.06.2025</h3><p>Teilnehmende: Professionelle Trader:innen aus allen Handelsabteilungen.</p><ul><li>Gesamtertrag &amp; maximaler Verlust im Zeitraum (50 Punkte)</li><li>Essay: „Wenn ich der nächste Anführer von TIA wäre …“ (30 Punkte)</li><li>Quantitativer Anteil des eigenen Investment-Systems (20 Punkte)</li></ul><p class=\"phase-result\">Ergebnis: 195 Teilnehmende qualifizieren sich für die Zwischenrunde.</p>',
                'elections.details.phase2': '<h3>Zwischenrunde · 01.07 – 31.10.2025</h3><p>Teilnehmende: Top-20&nbsp;% der Vorrunde (39 Trader:innen).</p><ul><li>Handelsertrag &amp; maximaler Verlust im Zeitraum (50 Punkte)</li><li>Fünfjahres-Strategieplan für die Allianz (30 Punkte)</li><li>Teilbarer Anteil des eigenen Systems (20 Punkte)</li></ul><p class=\"phase-result\">Ergebnis: Zwei Finalist:innen ziehen in die Endrunde ein.</p>',
                'elections.details.phase3': '<h3>Endrunde · 01.11.2025 – 30.04.2026</h3><p>Teilnehmende: Die beiden Bestplatzierten der Zwischenrunde.</p><ul><li>Sechs Monate Live-Trading-Performance (Ertrag &amp; maximaler Verlust) (50 Punkte)</li><li>Globaler Plan zur Skalierung professioneller Strategien (30 Punkte)</li><li>International teilbare Systemanteile (20 Punkte)</li></ul><p class=\"phase-result\">Ergebnis: Eine Person übernimmt die Führung der Allianz.</p>',
                'elections.details.rewards': '<h3>Ehrungen für die neue Führungskraft</h3><ul><li>Fünfjährige Leitung der Tethys Investment Alliance.</li><li>Nominierung für den Orden der Freiheit.</li><li>500&nbsp;Mio. € Startkapital für das „Fünfjahres-Traumprogramm“.</li><li>5&nbsp;Mio. € Preisgeld plus 20&nbsp;% Unternehmensanteile.</li><li>Maybach S680 4MATIC (Vollausstattung) zur Nutzung für fünf Jahre.</li></ul>',
                'elections.details.supporters': '<h3>Vorteile für Unterstützer:innen</h3><ul><li>Dreijähriger Gratis-Zugang zum Investment-System der Siegerperson (≥ 380&nbsp;% erwartete Rendite).</li><li>Teilnahme am „Fünfjahres-Traumprogramm“.</li><li>20&nbsp;% Anteil an der persönlichen Preisprämie (1&nbsp;Mio. €).</li><li>20&nbsp;% Beteiligung an den jährlichen Dividenden der Unternehmensanteile (≥ 5 Mio. € erwartet).</li><li>Lebenslange Ehrenmitgliedschaft inklusive Medaille und Urkunde.</li><li>Teilnahme am jährlichen Rendite-Boost-Programm.</li><li>Quartalsweise Revenue-Sharing aus dem proprietären Handelsfonds.</li></ul>',
                'elections.details.closing': '<p>Die heißeste Phase hat begonnen: Die Zwischenrunde endet, die finale Abstimmung steht bevor. Wer führt die Allianz in die nächste Ära?</p><p>Das kommende Kapitel verspricht neue Erfolge und Meilensteine. Geben Sie Ihrer Favoritin oder Ihrem Favoriten jetzt Ihre Stimme und gestalten Sie die Zukunft von TIA aktiv mit.</p>',
                'elections.card1.title': 'Proposal- &amp; Eligibility-Management',
                'elections.card1.desc': 'Mehrdimensionale Regeln mit dem TIA Identity Service sorgen dafür, dass nur verifizierte Mitglieder Vorschläge einreichen und abstimmen.',
                'elections.card1.point1': 'Rollen-, Beitrags- und Asset-basierte Zugangskontrolle',
                'elections.card1.point2': 'Vorlagenbibliothek und Impact-Bewertungstabellen',
                'elections.card1.point3': 'Automatische Erinnerungen für Deadlines und Voting-Start',
                'elections.card2.title': 'Abstimmung &amp; Audit',
                'elections.card2.desc': 'Unterstützt gewichtete, mehrstufige oder Konsens-basierte Verfahren. Alle Logs werden zertifiziert archiviert.',
                'elections.card2.point1': 'Einheitliche Web- und Mobile-Voting-Erfahrung',
                'elections.card2.point2': 'Live-Zählung mit Risikowarnungen',
                'elections.card2.point3': 'API-Export für Audit-Trails und Archivierung',
                'elections.card3.title': 'Execution Tracking &amp; Disclosure',
                'elections.card3.desc': 'Ergebnisse fließen automatisch in Trading-, Education- und Community-Boards ein und sichern eine lückenlose Umsetzung.',
                'elections.card3.point1': 'Mehrsprachige Gewinnerseiten mit öffentlichen Zusammenfassungen',
                'elections.card3.point2': 'Aufgabenverteilung und Quartals-Reviews',
                'elections.card3.point3': 'Performance-KPIs verknüpft mit Abstimmungsdaten',
                'elections.table.candidate': 'Kandidat:in',
                'elections.table.subject': 'Fachgebiet',
                'elections.table.votes': 'Stimmen',
                'elections.table.action': 'Aktion',
                'elections.table.subject.ai': 'KI &amp; Faktor-Engineering',
                'elections.table.subject.execution': 'Execution Playbooks',
                'elections.table.subject.macro': 'Global Macro Radar',
                'elections.table.subject.data': 'Data Ops &amp; Governance',
                'elections.table.subject.crypto': 'Digital Asset Strategy',
                'elections.table.vote': 'Jetzt abstimmen',
                'page.elections.callout': 'Benötigen Sie Unterstützung bei der Einrichtung von Abstimmungen? Unser Governance-Team hilft bei Satzungen, Kontrollprozessen und Scrutineer-Schulungen.',
                'lottery.eyebrow': 'Community-Verlosung',
                'lottery.heading': 'Erfolge feiern mit fairen, auditierbaren Rewards',
                'lottery.paragraph': 'Jedes Meilenstein-Event enthält eine nachweislich faire Verlosung für Stipendien, Reisestipendien und Community-Labs.',
                'lottery.point1': 'Smart-Contract-Ziehungen, geprüft von unabhängigen Auditoren',
                'lottery.point2': 'Bonus-Lose für Teaching, Mentoring und Publikationen',
                'lottery.point3': 'Gewinner:innen werden in den vierteljährlichen Townhalls vorgestellt',
                'lottery.button': 'An der nächsten Ziehung teilnehmen',
                'page.lottery.intro': 'Jedes Meilenstein-Event verwandelt Beiträge in Anreize. Smart Contracts, Audits und Fulfillment-Workflows sorgen für Fairness und Transparenz.',
                'lottery.card1.title': 'Belohnungsdesign',
                'lottery.card1.desc': 'Gewichtung von Beiträgen wie Teaching, Mentoring oder Reportpublikation.',
                'lottery.card1.point1': 'Mehrdimensionale Punkte mit Cooldown-Regeln',
                'lottery.card1.point2': 'Community-sichtbares Live-Ticket-Board',
                'lottery.card1.point3': 'Steuerung von Preisbudget und Limits',
                'lottery.card2.title': 'Smart-Contract Ziehung',
                'lottery.card2.desc': 'Verifizierbare Smart Contracts mit externen Auditor:innen garantieren Unveränderlichkeit.',
                'lottery.card2.point1': 'Multi-Chain-Bereitstellung und Gas-Optimierung',
                'lottery.card2.point2': 'Unveränderliche Ziehungslogs mit API-Zugriff',
                'lottery.card2.point3': 'Alarmierung bei Unregelmäßigkeiten oder Fehlschlägen',
                'lottery.card3.title': 'Auszahlung &amp; Tracking',
                'lottery.card3.desc': 'Benachrichtigungen, Empfangsbestätigungen und Compliance-Belege landen im Governance-Dashboard.',
                'lottery.card3.point1': 'Verwaltung von Preisen und Inventar',
                'lottery.card3.point2': 'Erfassung der Gewinnerreise und Testimonials',
                'lottery.card3.point3': 'Quartalsberichte und KPI-Analysen',
                'page.lottery.callout': 'Sie wünschen individuelle Preisstrukturen oder Multi-Community-Programme? Nutzen Sie unsere Incentive-, Legal- und Tax-Expert:innen.',
                'lottery.secondary': 'Vorherige Gewinner:innen ansehen',
                'team.eyebrow': 'Führungsteam',
                'team.heading': 'Ein erfahrenes Research-Team liefert Ergebnisse im Co-Pilot-Modell',
                'page.team.intro': 'Unser Leadership bündelt globale Buy-Side-Erfahrung, KI-Forschung und Risikokompetenz. Gemeinsam liefern wir Strategien, die vom ersten Insight bis zur Ausführung belastbar bleiben.',
                'team.member1.role': 'Mitgründer &amp; Teilzeit-Wissenschaftler; verantwortet die Robotik-Forschung und baut unsere quantitativen Trading-Tools.',
                'team.member1.quote': '„Wir integrieren Robotik und Handelssysteme in eine belastbare Produktionslinie.“',
                'team.member1.summary1': 'Geboren 1971 in Santa Rosa; Stanford-Doppelabschluss in Financial Engineering und Informatik mit KI-Fokus.',
                'team.member1.summary2': 'Entwickelte KI-basierte Risiko-, Pricing- und Execution-Engines für die Deutsche Bank USA, reduzierte Latenzen und Modell-Drift drastisch.',
                'team.member1.summary3': '2020 Mitgründer von TIA und Architekt des Genius Robot 5.0, der die Allianz nach dem Drawdown neu aufstellte.',
                'team.member1.summary4': 'Leitet Robotik-F&amp;E, erklärbare KI und Incident-Readiness, liefert Resilienz-Playbooks für jeden Desk weltweit.',
                'team.member2.role': 'Gründer &amp; CEO; steuert das Allianz-Ökosystem vom Produktportfolio bis zu regulatorischen Partnerschaften.',
                'team.member2.quote': '„Wir orchestrieren eine Allianz, die institutionelle Teams mit einem kuratierten KI-Stack verbindet.“',
                'team.member2.summary1': 'Geboren 1969 nahe München; promovierter Finanzingenieur der LMU mit drei Jahrzehnten Buy-Side-Erfahrung.',
                'team.member2.summary2': 'Leitete Multi-Asset-Desks bei Deutsche Bank, Citi Europe und KfW und verantwortete globale Mandate.',
                'team.member2.summary3': 'Verknüpft KI-Trading, Governance-Rhythmen und Partnerkapital, um die Allianz institutionell zu skalieren.',
                'team.member2.summary4': 'Steuert Produkt-Roadmap, regulatorische Kooperationen und Schlüsselmandate in Europa und Asien.',
                'team.member1.alt': 'Porträt von Mitgründer und Teilzeit-Wissenschaftler Robert Miller',
                'team.member2.alt': 'Porträt von Gründer und CEO Thomas Kurz',
                                'team.profile.thomas.title': 'Thomas Kurz · Gründer &amp; CEO',
                'team.profile.thomas.summary': 'Geburtsdatum: 27. Juni 1969; Alma Mater: LMU München (Studienbeginn 1987, Promotion 1995); Rolle: Gründer der Tethys Investment Alliance, Vater des Intelligenter Hightech-Roboter 5; Wohnort: Frankfurt am Main; Vater: verstarb 2020 nach dem Börsencrash; Mutter: im Ruhestand.',
                'team.profile.thomas.birth.title': 'Geburtsgeschichte',
                'team.profile.thomas.birth.body1': 'Thomas Kurz wuchs in einer Kleinstadt 30 Kilometer von München entfernt auf. Sein Vater arbeitete in einer Autofabrik, seine Mutter unterrichtete an der örtlichen Grundschule. Fahrradtouren, Wanderungen und Camping prägten seine Kindheit und stärkten seine Widerstandskraft.',
                'team.profile.thomas.study.title': 'Studienzeit',
                'team.profile.thomas.study.body1': 'Sein mathematisches Talent zeigte sich früh: Schon als Teenager löste er komplexe Rechnungen und trat 1987 in die Goethe-Universität Frankfurt ein. Dort verband er Seminare mit aktivem Aktienhandel und beeindruckte Mentor:innen mit präzisen Marktanalysen.',
                'team.profile.thomas.career.title': 'Karriere &amp; Beratung',
                'team.profile.thomas.career.body1': '1995 stieß er als Quant-Händler zur Deutschen Bank, erzielte innerhalb von drei Jahren 50 Millionen Euro und wurde als „Magier der Finanzmärkte“ bekannt. Er beriet später Citi Europe, die KfW und BlackRock Deutschland.',
                'team.profile.thomas.achievements.title': 'Ausgewählte Erfolge',
                'team.profile.thomas.achievements.item1': '2021: Nutzte den Bitcoin-Bullenmarkt, baute Positionen früh auf und realisierte Gewinne am Hoch.',
                'team.profile.thomas.achievements.item2': '2022: Positionierte sich während der Energiepreisschocks antizyklisch und erzielte außergewöhnliche Renditen.',
                'team.profile.thomas.achievements.item3': '2023: Erzielt über 17 % Rendite auf den DAX und 47 % auf SAP durch sorgfältige Portfolioallokation.',
                'team.profile.thomas.achievements.item4': '2024: Investition in AUTO1 Group brachte nahezu 350 % Gewinn dank datengetriebener Analyse.',
                'team.profile.thomas.turning.title': 'Lebenswende 2020',
                'team.profile.thomas.turning.body1': 'Der pandemiebedingte Crash vernichtete sein Vermögen, sein Vater starb an einem Herzinfarkt und familiäre Beziehungen zerbrachen. Die Krise zwang ihn zur Neuorientierung.',
                'team.profile.thomas.transformation.title': 'Transformation &amp; Neubeginn',
                'team.profile.thomas.transformation.body1': 'In einer einsamen Waldhütte reflektierte er über Sinn und Verantwortung des Investierens. Mit Unterstützung der Deutschen Bank kehrte er zurück, entwickelte neue Finanzwerkzeuge und beschloss, anderen Investor:innen Sicherheit zu geben.',
                'team.profile.thomas.belief.title': 'Lebenslange Überzeugung',
                'team.profile.thomas.belief.body1': 'Thomas ist überzeugt, dass Wohlstand nur dann Kraft entfaltet, wenn er mit Liebe, Hingabe und dem Teilen von Wissen verbunden ist. So entsteht nachhaltige Transformation für ihn und seine Kund:innen.',
                'team.profile.robert.title': 'Robert Miller · Mitgründer &amp; Chief Scientist',
                'team.profile.robert.summary': 'Geburtsdatum: 21. Mai 1971; Geburtsort: Santa Rosa, USA; Wohnort: San Francisco; Abschluss: Doppelbachelor in Financial Engineering &amp; Informatik (Stanford 1994); Eltern: verstorben.',
                'team.profile.robert.early.title': 'Frühe Karriere',
                'team.profile.robert.early.body1': 'Nach dem Studium arbeitete er im Quant-Research der Deutschen Bank USA, entwickelte Risiko-, Pricing- und Portfoliomodelle und trieb Hochfrequenzhandel voran.',
                'team.profile.robert.ai.title': 'KI- &amp; Dateninnovation',
                'team.profile.robert.ai.body1': 'Er integrierte früh künstliche Intelligenz und Big Data in seine Arbeit, um Marktprognosen zu schärfen und Handelsausführung zu optimieren – Grundlage späterer FinTech-Innovationen.',
                'team.profile.robert.alliance.title': 'Gründung der Allianz',
                'team.profile.robert.alliance.body1': 'Der COVID-19-Crash 2020 reduzierte sein Vermögen um fast 70 %. Gemeinsam mit Thomas Kurz gründete er die Tethys Investment Alliance und entwickelte den „Genius Intelligent Robot 5.0“, um Anlegervermögen mit KI und Daten zu schützen.',
                'contact.eyebrow': 'Kontakt aufnehmen',
                'contact.heading': 'Wir begleiten Sie vom ersten Workshop bis zur Live-Schaltung',
                'contact.paragraph': 'Wählen Sie den passenden Kanal – wir melden uns innerhalb eines Werktags mit den richtigen Unterlagen oder einer Live-Demo.',
                'contact.card1.title': 'Strategieberatung · HQ',
                'contact.card1.desc': 'Ideal für Plattform-Demos, Operating-Model-Workshops und Enterprise-Trainings.',
                'contact.card1.link': 'E-Mail senden',
                'contact.card1.href': 'mailto:contact@tethys-invest.com',
                'contact.card2.title': 'Partnerschaften &amp; Kapital',
                'contact.card2.desc': 'Für Fondskooperationen, Campusprogramme und Co-Investment-Möglichkeiten.',
                'contact.card2.link': 'Partnerschaft anfragen',
                'contact.card2.href': 'mailto:partners@tethys-invest.com',
                'contact.card3.title': 'Live Chat · Telegram',
                'contact.card3.desc': 'Bleiben Sie über Kurse, Abstimmungen und Community-Aktivitäten informiert oder eröffnen Sie Support-Tickets.',
                'contact.card3.link': 'Telegram beitreten',
                'contact.card3.href': 'https://t.me/tia_alliance',
                'cta.eyebrow': 'Jetzt starten',
                'cta.heading': 'Bauen Sie heute das nächste intelligente Research-Ökosystem',
                'cta.paragraph': 'Holen Sie sich einen dedizierten Consultant und Testzugang, um KI-gestützte Strategieproduktivität sofort zu erleben.',
                'cta.primary': 'Berater kontaktieren',
                'cta.secondary': 'Testzugang anfragen',
                'footer.about.title': 'Über uns',
                'footer.about.text': 'Die Tethys Investment Alliance unterstützt Investor:innen in Deutschland und weltweit mit hochwertigen Investment- und Bildungsprogrammen, damit jedes Mitglied finanzielle Freiheit erreichen kann.',
                'footer.links.title': 'Schnellzugriff',
                'footer.links.home': 'Startseite',
                'footer.links.platform': 'Intelligente Plattform',
                'footer.links.team': 'Expertenteam',
                'footer.links.education': 'Bildungsprogramme',
                'footer.links.contact': 'Kontakt aufnehmen',
                'footer.contact.title': 'Kontakt',
                'footer.contact.addressLabel': 'Adresse',
                'footer.contact.address': 'Mainzer Landstraße 16, 60325 Frankfurt am Main, Deutschland',
                'footer.contact.emailLabel': 'Erstkontakt-E-Mail',
                'footer.contact.email': 'firstmail@tethysalliance.com',
                'footer.contact.phoneLabel': 'Telefon',
                'footer.contact.phone': '+49 69 2474 8818',
                'footer.contact.siteLabel': 'Website',
                'footer.contact.site': 'tethys-alliance.de',
                'footer.summary.title': 'Rechtliche Angaben',
                'footer.summary.operatorLabel': 'Betreiber',
                'footer.summary.operator': 'Tethys Investment Alliance Inc.',
                'footer.summary.addressLabel': 'US-Adresse',
                'footer.summary.address': '222 Sansome St, San Francisco, CA 94104, USA',
                'footer.summary.taxLabel': 'Steuer-ID',
                'footer.summary.tax': '39-4174820',
                'footer.legal.title': 'Rechtshinweis',
                'footer.legal.labels.operator': 'Betreiber',
                'footer.legal.operatorName': 'TETHYS INVESTMENT ALLIANCE INC',
                'footer.legal.labels.usAddress': 'US-Adresse',
                'footer.legal.usAddress': '222 Sansome St, San Francisco, CA 94104, USA',
                'footer.legal.labels.represented': 'Vertreten durch',
                'footer.legal.representedValue': 'die Geschäftsführung',
                'footer.legal.labels.deAddress': 'Anschrift in Deutschland (nach § 5 Abs. 1 Nr. 1 TMG)',
                'footer.legal.deAddress': 'Mainzer Landstraße 16, 60325 Frankfurt am Main, Deutschland',
                'footer.legal.labels.taxInfo': 'Steuerinformation',
                'footer.legal.einDetail': 'Employer Identification Number (EIN): 39-4174820 (vergeben durch das Internal Revenue Service, USA).',
                'footer.legal.labels.note': 'Hinweis gemäß § 27a UStG',
                'footer.legal.ustgNote': 'Hinweis gemäß § 27a UStG: Da es sich um eine US-amerikanische Gesellschaft handelt, liegt keine deutsche USt-IdNr. vor.',
                'footer.bottom': '&copy; 2025 Tethys Investment Alliance. Alle Rechte vorbehalten.',
                'footer.privacy': 'Datenschutz',
                'footer.terms': 'Nutzungsbedingungen'
            },
            en: {
                'meta.title': 'Tethys Investment Alliance | AI-powered Quantitative Platform',
                'meta.description': 'Tethys Investment Alliance combines AI with quantitative strategies to automate research workflows, deliver real-time signals, and manage risk for institutional investors.',
                'nav.home': 'Home',
                'nav.solutions': 'Solutions',
                'nav.services': 'Service Programs',
                'nav.about': 'About & Contact',
                'nav.platform': 'Intelligent Platform',
                'nav.team': 'Research Team',
                'nav.alumni': 'Alumni',
                'nav.education': 'Education &amp; Reports',
                'nav.elections': 'Voting',
                'nav.lottery': 'Lottery',
                'nav.contact': 'Contact',
                'nav.cta': 'Free Demo',
                'nav.toggle': 'Toggle navigation',
                'language.switcherLabel': 'Change language',
                'hero.eyebrow': 'AI-First Quant Intelligence',
                'hero.headline': 'See global markets in real time and act with precision',
                'hero.paragraph': 'We merge deep learning, natural language understanding, and buy-side expertise to deliver an end-to-end institutional platform that automates discovery, validation, and execution.',
                'hero.primary': 'Book a strategy advisor',
                'hero.secondary': 'Explore platform capabilities',
                'hero.highlight1': '<strong>24/7</strong> multi-market intelligence',
                'hero.highlight2': '<strong>120&nbsp;ms</strong> signal delivery',
                'hero.highlight3': '<strong>99.9%</strong> data accuracy with audit trail',
                'hero.badgeTitle': 'Quant Research as a Service',
                'hero.badgeText': 'Multi-asset strategy library · Automated backtesting · Multilingual collaboration',
                'hero.mediaAlt': 'Intelligent research dashboard with real-time metrics',
                'metrics.eyebrow': 'Institutional-Grade Results',
                'metrics.heading': 'Scenario-led strategies and risk controls delivered end-to-end',
                'metrics.paragraph': 'We partner with family offices, broker-dealers, and hedge funds to design differentiated portfolios and connect them to fully automated execution infrastructure.',
                'metrics.card1.label': 'Strategy backtesting library',
                'metrics.card1.text': 'Spans equities, ETFs, futures, and digital assets with flexible factor combinations.',
                'metrics.card2.label': 'Faster signal response',
                'metrics.card2.text': 'AI engine compresses the path from insight to live deployment.',
                'metrics.card3.label': 'Regulated markets ready',
                'metrics.card3.text': 'Embedded audit trails, anomaly detection, and risk playbooks for global oversight.',
                'services.eyebrow': 'Service Programs',
                'services.heading': 'Structured engagements from classroom to capital',
                'services.paragraph': 'We extend the VenusIN heritage inside the TIA experience with curated service tracks that move teams from learning to live deployment.',
                'services.card1.title': 'Strategic Advisory Lab',
                'services.card1.desc': 'Discovery sprints align governance, data foundations, and market priorities.',
                'services.card1.point1': 'Joint architecture workshops with senior partners',
                'services.card1.point2': 'Regulatory, compliance, and risk readiness playbooks',
                'services.card1.point3': 'KPI roadmaps bridging VenusIN cohorts and institutional mandates',
                'services.card2.title': 'Quant Skills Accelerator',
                'services.card2.desc': 'Hybrid classroom curriculum pairs mentors with production toolchains.',
                'services.card2.point1': 'Weekly masterclasses led by research directors',
                'services.card2.point2': 'AI-driven practice environment mirroring live desks',
                'services.card2.point3': 'Portfolio labs blending classroom challenges with live data',
                'services.card3.title': 'Capital Partnership Desk',
                'services.card3.desc': 'Alumni strategies connect with our co-investment and operations network.',
                'services.card3.point1': 'Matching funds and angel syndicate introductions',
                'services.card3.point2': 'Dedicated execution, risk, and reporting concierge',
                'services.card3.point3': 'Post-deployment analytics with quarterly stewardship reviews',
                'features.eyebrow': 'Platform Deep Dive',
                'features.heading': 'Modular platform tailored to your research lifecycle',
                'features.card1.title': 'AI Signal Factory',
                'features.card1.desc': 'Ingests diverse data, engineers features in real time, and produces explainable trade signals.',
                'features.card1.point1': 'Proactive anomaly and risk detection',
                'features.card1.point2': 'Full lifecycle governance per strategy',
                'features.card1.point3': 'Real-time model performance telemetry',
                'features.card2.title': 'Quant Execution Hub',
                'features.card2.desc': 'Connects directly to brokers and exchanges to support algo, basket, and auto-rebalancing orders.',
                'features.card2.point1': 'Role-based access across accounts',
                'features.card2.point2': 'Smart order routing with slippage control',
                'features.card2.point3': 'Live NAV and allocation visibility',
                'features.card3.title': 'Insight Visualization Center',
                'features.card3.desc': 'Unified dashboards turn AI insights into coordinated decisions for every team.',
                'features.card3.point1': 'Scenario KPIs and custom reporting',
                'features.card3.point2': 'Market briefs in natural language',
                'features.card3.point3': 'Seamless integration via API and webhooks',
                'page.platform.intro': 'Explore the building blocks of TIA—from the AI Signal Factory to the Execution Hub—to orchestrate research, trading, and governance on one platform.',
                'page.platform.cta': 'Book a strategy session',
                'page.platform.secondary': 'Browse reports',
                'about.eyebrow': 'About Us',
                'about.heading': 'A shared campus for quantitative innovation',
                'about.paragraph': 'TIA unites educators, investors, and builders to convert research breakthroughs into durable capital programmes.',
                'page.about.intro': 'TIA brings together educators, investors, and builders to turn research breakthroughs into sustainable capital programmes. Our vision: make every step from strategy production to execution transparent, measurable, and resilient.',
                'about.list1': 'Cross-border founding team bridging European precision and Asian velocity.',
                'about.list2': 'Full-stack infrastructure spanning education, incubation, and execution on one data spine.',
                'about.list3': 'Impact measured by live strategies, jobs created, and community-led governance.',
                'about.button': 'Meet the leadership',
                'about.media.heading': 'Community snapshot',
                'about.media.paragraph': 'The VenusIN legacy fuels a global guild of analysts, founders, and partners.',
                'about.stat1.value': '180+',
                'about.stat1.label': 'Active members',
                'about.stat2.value': '42',
                'about.stat2.label': 'Strategies launched',
                'about.stat3.value': '12',
                'about.stat3.label': 'Countries represented',
                'ros.mediaAlt': 'Strategy automation dashboard',
                'ros.eyebrow': 'Research Operating System',
                'ros.heading': 'Make every minute of your research team measurable, traceable, and scalable',
                'ros.paragraph': 'A configurable operating system decomposes research into reusable modules and builds a strategic knowledge graph for transparent asset allocation.',
                'ros.list1': 'Approval workflows and auditability across teams',
                'ros.list2': 'End-to-end KPI tracking from insight to execution',
                'ros.list3': 'Multilingual interfaces for global collaboration',
                'ros.button': 'Schedule an online demo',
                'alumni.eyebrow': 'Alumni Highlights',
                'alumni.heading': 'Outstanding alumni shaping markets and classrooms',
                'alumni.paragraph': 'TIA alumni now steer flagship trading desks, venture studios, and learning networks.',
                'education.eyebrow': 'Education &amp; Reports',
                'education.heading': 'Classroom teaching meets institutional-grade reporting',
                'education.paragraph': 'We blend teaching theatre, research observatory, and investor governance into one continuous cadence.',
                'education.card1.title': 'Classroom Teaching',
                'education.card1.desc': 'Immersive programmes designed for analysts, founders, and policy leaders.',
                'education.card1.point1': 'Modular courses spanning macro, AI, and risk engineering',
                'education.card1.point2': 'Co-teaching with alumni now leading active funds',
                'education.card1.point3': 'Capstone demos linked to VenusIN community reviews',
                'education.card2.title': 'Investment Reports',
                'education.card2.desc': 'Data-rich publications translating cohort insights into board-ready intelligence.',
                'education.card2.point1': 'Monthly market synopses with scenario simulations',
                'education.card2.point2': 'Thematic deep-dives curated with partner institutions',
                'education.card2.point3': 'Interactive dashboards delivered through the TIA platform',
                'page.education.intro': 'Curated modules for analysts, founders, and governance councils. Every unit ships with a ready-to-use PDF, dataset, or replay—perfect for your knowledge base.',
                'education.module1.category': 'Classroom',
                'education.module1.title': 'Quant Foundations Sprint',
                'education.module1.desc': 'A three-week intensive covering macro mindsets, AI feature engineering, and risk frameworks with hands-on labs.',
                'education.module1.point1': 'Daily bilingual live sessions with replay archive',
                'education.module1.point2': 'Jupyter notebooks and datasets for every lesson',
                'education.module1.point3': 'Capstone KPI checklist and strategy review template',
                'education.module1.meta': 'Updated: 2025 Q3 Cohort',
                'education.module1.link': 'Download PDF',
                'education.module1.href': '#',
                'education.module2.category': 'Classroom',
                'education.module2.title': 'Mentor Studio · Execution Playbooks',
                'education.module2.desc': 'Advanced workshop focused on execution-desk collaboration from order design to multi-region risk alignment.',
                'education.module2.point1': 'Joint sessions with alumni desk leads',
                'education.module2.point2': 'Real trading-floor simulations and case studies',
                'education.module2.point3': 'Cross-jurisdiction compliance checklists',
                'education.module2.meta': 'Updated: 2025 Q2 Practicum',
                'education.module2.link': 'Download PDF',
                'education.module2.href': '#',
                'education.module3.category': 'Reports',
                'education.module3.title': 'Global Macro Radar',
                'education.module3.desc': 'Monthly briefing with macro scenarios, FX/rates tilts, and quantitative early-warning signals.',
                'education.module3.point1': 'Interactive dashboard link',
                'education.module3.point2': 'Strategy sensitivity and stress-test pack',
                'education.module3.point3': 'Policy, liquidity, and cross-asset insights',
                'education.module3.meta': 'Latest: September 2025',
                'education.module3.link': 'Download PDF',
                'education.module3.href': '#',
                'education.module4.category': 'Reports',
                'education.module4.title': 'Digital Asset Liquidity Review',
                'education.module4.desc': 'Liquidity tiers, counterparty analysis, and DeFi metrics to support live execution.',
                'education.module4.point1': 'Exchange vs. OTC depth comparison',
                'education.module4.point2': 'On-chain flow and funding tracking',
                'education.module4.point3': 'Execution risk watchlist & monitoring metrics',
                'education.module4.meta': 'Latest: August 2025',
                'education.module4.link': 'Download PDF',
                'education.module4.href': '#',
                'education.note': '* Note: PDF links are placeholders—replace them with live documents after upload.',
                'education.banner.eyebrow': 'Co-Create',
                'education.banner.heading': 'Need custom curriculum or dedicated reports?',
                'education.banner.paragraph': 'We co-build bilingual programs, data stacks, and governance rhythms with universities, family offices, and public agencies.',
                'education.banner.primary': 'Schedule a co-creation call',
                'education.banner.secondary': 'Meet the advisor team',
                'education.viewer.title': 'PDF preview',
                'education.viewer.download': 'Download',
                'elections.eyebrow': 'Voting &amp; Elections',
                'elections.heading': 'Transparent governance powered by the community',
                'elections.paragraph': 'Members nominate initiatives, mentor councils, and fund allocations through secure ballots synchronised with TIA identity services.',
                'elections.primary': 'View current ballots',
                'elections.secondary': 'Review election charter',
                'elections.table.candidate': 'Candidate',
                'elections.table.subject': 'Discipline',
                'elections.table.votes': 'Votes',
                'elections.table.action': 'Action',
                'elections.table.subject.ai': 'AI &amp; Factor Engineering',
                'elections.table.subject.execution': 'Execution Playbooks',
                'elections.table.subject.macro': 'Global Macro Radar',
                'elections.table.subject.data': 'Data Ops &amp; Governance',
                'elections.table.subject.crypto': 'Digital Asset Strategy',
                'elections.table.vote': 'Vote now',
                'page.elections.intro': 'From proposal to execution, every vote runs through verified identities, auditable logs, and multilingual notifications. The modules below help you deploy and monitor governance cadence.',
                'elections.overview.eyebrow': 'Leadership Selection 2025',
                'elections.overview.heading': 'Key facts for the TIA leadership vote',
                'elections.overview.intro': 'Distilled from the full election dossier: the essentials you need to quickly decide whose vision earns your vote.',
                'elections.overview.scoring.title': 'Scoring & Jury',
                'elections.overview.scoring.point1': 'The TIA board evaluates every candidate using a 100-point rubric.',
                'elections.overview.scoring.point2': 'Community ballots can contribute up to 50 additional points.',
                'elections.overview.reward.title': 'Rewards for the leader',
                'elections.overview.reward.point1': 'Five-year stewardship and a Freedom Award nomination.',
                'elections.overview.reward.point2': '€500M program budget with a €5M cash award.',
                'elections.overview.reward.point3': '20% equity plus a Maybach S680 for five years.',
                'elections.overview.support.title': 'Supporter benefits',
                'elections.overview.support.point1': 'Three-year access to the winning model (projected ≥ 380% return).',
                'elections.overview.support.point2': '20% share of the cash prize and annual dividends.',
                'elections.overview.support.point3': 'Lifetime honorary membership and a seat in the return-boost program.',
                'elections.overview.phase1.title': 'Preliminary · 01 Apr – 30 Jun 2025',
                'elections.overview.phase1.desc': '195 trading desks are scored on performance, strategy essays, and system weighting.',
                'elections.overview.phase1.point1': 'Net trading performance & max drawdown during the window (50 pts)',
                'elections.overview.phase1.point2': 'Essay: “If I led TIA next, here is my plan” (30 pts)',
                'elections.overview.phase1.point3': 'Shareable portion of the candidate’s system (20 pts)',
                'elections.overview.phase1.result': 'Outcome: 195 candidates move on to the mid-round.',
                'elections.overview.phase2.title': 'Intermediate · 01 Jul – 31 Oct 2025',
                'elections.overview.phase2.desc': 'Top 20% craft five-year plans and disclose shareable IP with risk metrics.',
                'elections.overview.phase2.point1': 'Net trading returns & max drawdown during the window (50 pts)',
                'elections.overview.phase2.point2': 'Five-year transformation plan for the alliance (30 pts)',
                'elections.overview.phase2.point3': 'Shareable portion of proprietary IP (20 pts)',
                'elections.overview.phase2.result': 'Outcome: Two finalists reach the leadership showdown.',
                'elections.overview.phase3.title': 'Final · 01 Nov 2025 – 30 Apr 2026',
                'elections.overview.phase3.desc': 'Two finalists deliver six months of live trading plus a global scaling blueprint.',
                'elections.overview.phase3.point1': 'Six months of live trading (net return & max drawdown) (50 pts)',
                'elections.overview.phase3.point2': 'Blueprint for scaling professional strategies worldwide (30 pts)',
                'elections.overview.phase3.point3': 'Global sharing ratio of proprietary systems (20 pts)',
                'elections.overview.phase3.result': 'Outcome: One leader is appointed to steer the alliance.',
                'elections.overview.leader.title': 'What the new leader receives',
                'elections.overview.leader.point1': 'Five-year leadership of TIA.',
                'elections.overview.leader.point2': 'Freedom Award nomination.',
                'elections.overview.leader.point3': '€500M launch capital for the “Five-Year Dream Program”.',
                'elections.overview.leader.point4': '€5M cash bonus plus 20% equity.',
                'elections.overview.leader.point5': 'Maybach S680 4MATIC (five-year usage).',
                'elections.overview.supporters.title': 'What supporters receive',
                'elections.overview.supporters.point1': 'Three-year complimentary access to the winning model (≥ 380% expected return).',
                'elections.overview.supporters.point2': 'Invitation into the “Five-Year Dream Program”.',
                'elections.overview.supporters.point3': '20% share of the cash prize (€1M).',
                'elections.overview.supporters.point4': '20% share of the leader’s annual dividend payouts (projected ≥ €5M).',
                'elections.overview.supporters.point5': 'Lifetime honorary membership (medal + certificate).',
                'elections.overview.supporters.point6': 'Seat in the annual return-boost program.',
                'elections.overview.supporters.point7': 'Quarterly revenue sharing from the proprietary trading fund.',
                'elections.overview.banner': 'The mid-round is closing and the final vote is approaching fast. Cast your ballot for the mentor you trust and help shape the next five years of TIA!',
                'elections.candidates.eyebrow': 'Board Election 2025',
                'elections.candidates.heading': 'Meet the nominees',
                'elections.candidates.description': 'Two seats, one mandate: review their profiles and submit your vote directly below.',
                'elections.candidates.thomas.summary': 'Focuses on identity governance and member onboarding.',
                'elections.candidates.thomas.vote': 'Vote for Thomas',
                'elections.candidates.thomas.voteAria': 'Vote for Thomas – 1,284 votes',
                'elections.candidates.thomas.votes': '1,284',
                'elections.candidates.teo.summary': 'Scales execution playbooks and desk automation.',
                'elections.candidates.teo.vote': 'Vote for Teo',
                'elections.candidates.teo.voteAria': 'Vote for Teo – 1,096 votes',
                'elections.candidates.teo.votes': '1,096',
                'elections.details.eyebrow': 'Leadership Selection 2025',
                'elections.details.heading': 'Inside the TIA leadership election',
                'elections.details.description': 'The program blends hard trading metrics, strategic vision, and community voices. Here is what shapes the outcome.',
                'elections.details.jury': '<h3>Jury &amp; Scoring</h3><p>Jury: Members of the Tethys Investment Alliance board.</p><ul><li>Structured scoring worth up to 100 points.</li><li>Supporter ballots add up to 50 bonus points in the final tally.</li></ul>',
                'elections.details.scoring': '<h3>Format &amp; Participants</h3><p>The selection unfolds across three stages, moving from qualifying to the final leadership decision.</p><p>195 traders advanced to the mid-round; the top 20% (39 finalists) compete for the leadership ticket.</p>',
                'elections.details.phase1': '<h3>Qualifying · Apr 1 – Jun 30, 2025</h3><p>Participants: Professional traders from every desk.</p><ul><li>Net trading performance and max drawdown (50 pts)</li><li>Essay: “If I led TIA next, here is my plan” (30 pts)</li><li>Shareable portion of the candidate’s system (20 pts)</li></ul><p class=\"phase-result\">Outcome: 195 candidates move on to the mid-round.</p>',
                'elections.details.phase2': '<h3>Mid-Round · Jul 1 – Oct 31, 2025</h3><p>Participants: Top 20% from qualifying (39 traders).</p><ul><li>Net trading returns &amp; max drawdown during the period (50 pts)</li><li>Five-year transformation plan for the alliance (30 pts)</li><li>Sharable portion of proprietary IP (20 pts)</li></ul><p class=\"phase-result\">Outcome: Two finalists reach the leadership showdown.</p>',
                'elections.details.phase3': '<h3>Final Round · Nov 1, 2025 – Apr 30, 2026</h3><p>Participants: The two highest-ranked mid-round finalists.</p><ul><li>Six months of live trading performance (net return &amp; max drawdown) (50 pts)</li><li>Blueprint for scaling professional strategies worldwide (30 pts)</li><li>Global sharing ratio of proprietary systems (20 pts)</li></ul><p class=\"phase-result\">Outcome: One leader is appointed to steer the alliance.</p>',
                'elections.details.rewards': '<h3>Honors for the new leader</h3><ul><li>Five-year mandate to lead the Tethys Investment Alliance.</li><li>Nomination for the Freedom Medal.</li><li>€500&nbsp;million launch capital for the “Next Five-Year Dream Program”.</li><li>€5&nbsp;million cash award plus 20% equity.</li><li>Fully equipped Maybach S680 4MATIC for five years.</li></ul>',
                'elections.details.supporters': '<h3>Supporter rewards</h3><ul><li>Three-year complimentary access to the winner’s investment system (projected ≥ 380% return).</li><li>Invitation to the “Next Five-Year Dream Program”.</li><li>20% share of the personal cash prize (€1 million).</li><li>20% share of the annual equity dividend (projected ≥ €5 million).</li><li>Lifetime honorary membership with medal and certificate.</li><li>Seat in the annual return acceleration program.</li><li>Quarterly revenue sharing from the proprietary trading fund.</li></ul>',
                'elections.details.closing': '<p>The race is heating up: the mid-round is closing and the final vote is imminent. Who will guide the alliance into its next chapter?</p><p>This new five-year cycle promises bold milestones. Cast your vote for the mentor you trust and help shape the investment future with us.</p>',
                'elections.card1.title': 'Proposal & Eligibility',
                'elections.card1.desc': 'Multi-dimensional eligibility tied to TIA Identity Services ensures only verified members can propose and vote.',
                'elections.card1.point1': 'Role, contribution, and asset thresholds',
                'elections.card1.point2': 'Proposal templates and impact scoring sheets',
                'elections.card1.point3': 'Automated reminders for deadlines and voting windows',
                'elections.card2.title': 'Balloting & Audit',
                'elections.card2.desc': 'Supports weighted, multi-round, or consensus algorithms with certified audit logs.',
                'elections.card2.point1': 'Unified web and mobile voting experience',
                'elections.card2.point2': 'Real-time counting dashboard with risk alerts',
                'elections.card2.point3': 'API export for audit trails and archival',
                'elections.card3.title': 'Execution & Disclosure',
                'elections.card3.desc': 'Election results sync to trading, education, and community boards to close the execution loop.',
                'elections.card3.point1': 'Public winner pages with multilingual summaries',
                'elections.card3.point2': 'Task assignment and quarterly performance reviews',
                'elections.card3.point3': 'Performance KPIs linked to voting data',
                'page.elections.callout': 'Need help deploying ballots? Our governance team shapes charters, control frameworks, and scrutineer training.',
                'lottery.eyebrow': 'Community Lottery',
                'lottery.heading': 'Celebrate breakthroughs with fair, auditable rewards',
                'lottery.paragraph': 'Each milestone event features a provably-fair lottery that funds scholarships, travel grants, and community labs.',
                'lottery.point1': 'Smart-contract draws verified by independent auditors',
                'lottery.point2': 'Bonus entries for teaching, mentoring, and research publication',
                'lottery.point3': 'Winners showcased during quarterly townhalls',
                'lottery.button': 'Join the next draw',
                'page.lottery.intro': 'Every milestone turns contributions into rewards. Smart contracts, audits, and fulfillment workflows keep the process fair and transparent.',
                'lottery.card1.title': 'Reward Design',
                'lottery.card1.desc': 'Weighting framework for teaching, mentoring, and publishing contributions.',
                'lottery.card1.point1': 'Multi-dimensional points with cooldown rules',
                'lottery.card1.point2': 'Community-facing live ticket dashboard',
                'lottery.card1.point3': 'Prize pool and budget safeguards',
                'lottery.card2.title': 'Smart-Contract Draw',
                'lottery.card2.desc': 'Verifiable smart contracts with external auditors guarantee immutability.',
                'lottery.card2.point1': 'Multi-chain deployment and gas optimization',
                'lottery.card2.point2': 'Immutable draw logs with API access',
                'lottery.card2.point3': 'Alerting for anomalies and draw failures',
                'lottery.card3.title': 'Fulfillment & Tracking',
                'lottery.card3.desc': 'Notifications, acknowledgments, and compliance evidence are stored in the governance dashboard.',
                'lottery.card3.point1': 'Prize inventory and fulfillment management',
                'lottery.card3.point2': 'Winner journey capture and testimonials',
                'lottery.card3.point3': 'Quarterly reporting and KPI analytics',
                'page.lottery.callout': 'Want bespoke prize structures or multi-community programs? Tap into incentive, legal, and tax advisors.',
                'lottery.secondary': 'View past winners',
                'team.eyebrow': 'Leadership',
                'team.heading': 'Seasoned research leads delivering results alongside your team',
                'page.team.intro': 'Our leadership blends global buy-side experience, AI research, and risk craftsmanship. Together we deliver strategies that stay resilient from first insight to execution.',
                'team.member1.role': 'Co-founder &amp; part-time scientist; leads robotics R&amp;D and builds our quantitative trading tools.',
                'team.member1.quote': '"We fuse robotics and trading automation into production-ready systems."',
                'team.member1.summary1': 'Born in 1971 in Santa Rosa; holds dual Stanford degrees in financial engineering and computer science with an AI focus.',
                'team.member1.summary2': 'Built AI-driven risk, pricing, and execution engines for Deutsche Bank USA, sharply reducing latency and model drift.',
                'team.member1.summary3': 'Co-founded TIA with Kurz in 2020 after the drawdown, architecting the Genius Robot 5.0 to relaunch the alliance.',
                'team.member1.summary4': 'Leads robotics R&amp;D, explainable AI, and incident readiness, equipping every desk with resilient operating playbooks.',
                'team.member2.role': 'Founder &amp; CEO; orchestrates the alliance ecosystem from product strategy to regulatory partnerships.',
                'team.member2.quote': '"We align institutional teams around a curated AI stack and partner network."',
                'team.member2.summary1': 'Born near Munich in 1969; LMU Munich PhD with three decades of multi-asset leadership.',
                'team.member2.summary2': 'Led Deutsche Bank, Citi Europe, and KfW desks while orchestrating global institutional mandates.',
                'team.member2.summary3': 'Connects AI trading, governance cadences, and partner capital to scale the alliance’s institutional footprint.',
                'team.member2.summary4': 'Owns the product roadmap, regulatory conversations, and stewardship of flagship mandates across Europe and Asia.',
                'team.member1.alt': 'Portrait of co-founder and part-time scientist Robert Miller',
                'team.member2.alt': 'Portrait of founder and CEO Thomas Kurz',
                                'team.profile.thomas.title': 'Thomas Kurz · Founder &amp; CEO',
                'team.profile.thomas.summary': 'Date of birth: 27 June 1969; Alma mater: LMU Munich (enrolled 1987, PhD 1995); Role: Founder of Tethys Investment Alliance and creator of Intelligenter Hightech-Roboter 5; Residence: Frankfurt am Main; Father: died of a heart attack in 2020; Mother: retired.',
                'team.profile.thomas.birth.title': 'Origin Story',
                'team.profile.thomas.birth.body1': 'Thomas Kurz grew up in a town 30 kilometres from Munich. His father worked in an automobile plant, his mother taught primary school, and endless cycling, hiking and camping forged his resilience.',
                'team.profile.thomas.study.title': 'Education',
                'team.profile.thomas.study.body1': 'Gifted in mathematics, he solved complex calculations as a teenager and entered Goethe University Frankfurt at 18. He traded equities during his studies and impressed mentors with acute market reads.',
                'team.profile.thomas.career.title': 'Career &amp; Advisory Roles',
                'team.profile.thomas.career.body1': 'Joining Deutsche Bank in 1995, he built a 50 million euro track record within three years, earning the moniker “magician of the markets” and later advising Citi Europe, KfW and BlackRock Germany.',
                'team.profile.thomas.achievements.title': 'Selected Performance',
                'team.profile.thomas.achievements.item1': '2021: Timed the bitcoin bull run, scaling in early and exiting near the peak.',
                'team.profile.thomas.achievements.item2': '2022: Took contrarian energy positions through the supply shock and delivered outsized gains.',
                'team.profile.thomas.achievements.item3': '2023: Generated 17% on DAX positions and 47% on SAP with disciplined allocation.',
                'team.profile.thomas.achievements.item4': '2024: Captured nearly 350% by backing AUTO1 Group’s turnaround with data-led conviction.',
                'team.profile.thomas.turning.title': 'Turning Point in 2020',
                'team.profile.thomas.turning.body1': 'The pandemic crash erased his book, his father passed away, and family ties fractured, forcing a fundamental reassessment.',
                'team.profile.thomas.transformation.title': 'Rebuild &amp; Renewal',
                'team.profile.thomas.transformation.body1': 'Retreating to a cabin, he redefined the mission of investing, then returned with Deutsche Bank’s support to craft tools that protect fellow investors from repeating his losses.',
                'team.profile.thomas.belief.title': 'Enduring Belief',
                'team.profile.thomas.belief.body1': 'He holds that wealth gains true power only when paired with love, service and the sharing of financial wisdom.',
                'team.profile.robert.title': 'Robert Miller · Co-founder &amp; Chief Scientist',
                'team.profile.robert.summary': 'Date of birth: 21 May 1971; Birthplace: Santa Rosa, USA; Residence: San Francisco; Education: Stanford University dual BSc in financial engineering &amp; computer science (1994); Parents: deceased.',
                'team.profile.robert.early.title': 'Early Career',
                'team.profile.robert.early.body1': 'He joined Deutsche Bank USA’s quantitative research desk to build risk, pricing and portfolio models while advancing high-frequency trading.',
                'team.profile.robert.ai.title': 'AI &amp; Data Exploration',
                'team.profile.robert.ai.body1': 'He pioneered the use of AI and big data to sharpen forecasts and streamline execution, laying the groundwork for intelligent finance breakthroughs.',
                'team.profile.robert.alliance.title': 'Alliance Formation',
                'team.profile.robert.alliance.body1': 'After a 70% drawdown during the 2020 crisis, he and Thomas Kurz founded Tethys Investment Alliance and created the “Genius Intelligent Robot 5.0” to safeguard investor wealth with automation.',
                'contact.eyebrow': 'Get in touch',
                'contact.heading': 'We support you from the first workshop to a live deployment',
                'contact.paragraph': 'Pick the channel that suits you—expect a tailored response within one business day.',
                'contact.card1.title': 'Strategy Advisory · HQ',
                'contact.card1.desc': 'Book platform walkthroughs, operating-model design, and enterprise enablement.',
                'contact.card1.link': 'Send email',
                'contact.card1.href': 'mailto:contact@tethys-invest.com',
                'contact.card2.title': 'Partnerships &amp; Capital',
                'contact.card2.desc': 'Connect for co-investment, campus programmes, or co-created curricula.',
                'contact.card2.link': 'Request partnership',
                'contact.card2.href': 'mailto:partners@tethys-invest.com',
                'contact.card3.title': 'Live Chat · Telegram',
                'contact.card3.desc': 'Receive updates on courses, ballots, and lotteries—or open a support ticket.',
                'contact.card3.link': 'Join Telegram',
                'contact.card3.href': 'https://t.me/tia_alliance',
                'cta.eyebrow': 'Get Started',
                'cta.heading': 'Build the next-generation intelligent research stack today',
                'cta.paragraph': 'Request dedicated advisor support and trial access to experience AI-driven strategy productivity now.',
                'cta.primary': 'Contact an advisor',
                'cta.secondary': 'Request trial',
                'footer.about.title': 'About Us',
                'footer.about.text': 'Tethys Investment Alliance provides high-quality investment and education support for investors in Germany and worldwide, helping every member pursue financial independence.',
                'footer.links.title': 'Quick Links',
                'footer.links.home': 'Home',
                'footer.links.platform': 'Intelligent Platform',
                'footer.links.team': 'Expert Team',
                'footer.links.education': 'Education Programs',
                'footer.links.contact': 'Contact Us',
                'footer.contact.title': 'Contact',
                'footer.contact.addressLabel': 'Address',
                'footer.contact.address': 'Mainzer Landstraße 16, 60325 Frankfurt am Main, Germany',
                'footer.contact.emailLabel': 'First-contact email',
                'footer.contact.email': 'firstmail@tethysalliance.com',
                'footer.contact.phoneLabel': 'Phone',
                'footer.contact.phone': '+49 69 2474 8818',
                'footer.contact.siteLabel': 'Website',
                'footer.contact.site': 'tethys-alliance.de',
                'footer.summary.title': 'Legal Info',
                'footer.summary.operatorLabel': 'Operator',
                'footer.summary.operator': 'TETHYS INVESTMENT ALLIANCE INC',
                'footer.summary.addressLabel': 'U.S. Address',
                'footer.summary.address': '222 Sansome St, San Francisco, CA 94104, USA',
                'footer.summary.taxLabel': 'Tax ID',
                'footer.summary.tax': '39-4174820',
                'footer.legal.title': 'Legal Notice',
                'footer.legal.labels.operator': 'Website Operator',
                'footer.legal.operatorName': 'TETHYS INVESTMENT ALLIANCE INC',
                'footer.legal.labels.usAddress': 'U.S. Address',
                'footer.legal.usAddress': '222 Sansome St, San Francisco, CA 94104, USA',
                'footer.legal.labels.represented': 'Represented by',
                'footer.legal.representedValue': 'Executive Management',
                'footer.legal.labels.deAddress': 'German Contact Address (§ 5 Abs. 1 Nr. 1 TMG)',
                'footer.legal.deAddress': 'Mainzer Landstraße 16, 60325 Frankfurt am Main, Germany',
                'footer.legal.labels.taxInfo': 'Tax Information',
                'footer.legal.einDetail': 'Employer Identification Number (EIN): 39-4174820 (issued by the Internal Revenue Service, USA).',
                'footer.legal.labels.note': 'Notice per § 27a UStG',
                'footer.legal.ustgNote': 'Notice per § 27a UStG: As a U.S. corporation, no German VAT ID is available.',
                'footer.bottom': '&copy; 2025 Tethys Investment Alliance. All rights reserved.',
                'footer.privacy': 'Privacy policy',
                'footer.terms': 'Terms of service'
            },
            zh: {
                'meta.title': 'Tethys Investment Alliance | 智能投研驱动的量化平台',
                'meta.description': 'Tethys Investment Alliance 以 AI 与量化策略驱动投研流程，提供实时市场扫描、自动信号与风控分析，帮助全球投资团队快速捕捉机会。',
                'nav.home': '首页',
                'nav.solutions': '解决方案',
                'nav.services': '服务项目',
                'nav.about': '关于与联系',
                'nav.platform': '智能平台',
                'nav.team': '投研团队',
                'nav.alumni': '杰出校友',
                'nav.education': '课堂与报告',
                'nav.elections': '投票选举',
                'nav.lottery': '社区抽奖',
                'nav.contact': '联系我们',
                'nav.cta': '免费试用',
                'nav.toggle': '切换导航',
                'language.switcherLabel': '选择语言',
                'hero.eyebrow': 'AI 量化智能引擎',
                'hero.headline': '实时洞察全球市场，驱动高胜率的量化决策',
                'hero.paragraph': '我们将深度学习、自然语言解析与顶尖投研团队的行业经验融合，构建出面向机构的全栈式量化平台，让交易策略从发现、验证到执行均实现自动化与风险可控。',
                'hero.primary': '预约策略顾问',
                'hero.secondary': '查看平台能力',
                'hero.highlight1': '<strong>24/7</strong> 多市场智能扫描',
                'hero.highlight2': '<strong>120&nbsp;ms</strong> 级别信号触达',
                'hero.highlight3': '<strong>99.9%</strong> 数据准确率与审计追踪',
                'hero.badgeTitle': '量化研究即服务',
                'hero.badgeText': '跨资产策略库 · 自动回测 · 多语言投研协作',
                'hero.mediaAlt': '智能投研可视化仪表盘',
                'metrics.eyebrow': '机构级成果',
                'metrics.heading': '从场景化策略到智能风控，一站式交付可量化成果',
                'metrics.paragraph': 'Tethys Investment Alliance 聚焦高净值家族办公室、券商资管与私募基金，通过数据因子平台迅速搭建差异化策略组合，并将执行接入全自动化的交易基础设施。',
                'metrics.card1.label': '策略回测场景库',
                'metrics.card1.text': '覆盖股票、ETF、期货及数字资产，支持多维因子排列组合。',
                'metrics.card2.label': '信号响应效率提升',
                'metrics.card2.text': '通过 AI 智能引擎压缩策略落地周期，将洞察转化为执行。',
                'metrics.card3.label': '监管市场实时合规',
                'metrics.card3.text': '内置交易记录留痕、异常监测与风控场景，满足机构级要求。',
                'services.eyebrow': '服务项目',
                'services.heading': '从课堂到资本的结构化陪伴',
                'services.paragraph': '我们在 TIA 体验中延续 VenusIN 的积淀，打造陪跑服务路径，帮助团队完成学习、孵化与落地。',
                'services.card1.title': '战略顾问实验室',
                'services.card1.desc': '通过密集冲刺梳理治理、数据底座与市场优先级。',
                'services.card1.point1': '资深合伙人联合架构工作坊',
                'services.card1.point2': '监管、合规与风险预案模板',
                'services.card1.point3': '衔接 VenusIN 班级与机构委托的 KPI 路线图',
                'services.card2.title': '量化技能加速器',
                'services.card2.desc': '混合式课堂课程与实盘工具链一体化交付。',
                'services.card2.point1': '研究主管主讲的每周大师课',
                'services.card2.point2': '仿真真实交易席位的 AI 练习环境',
                'services.card2.point3': '结合课堂挑战与实时数据的组合实验室',
                'services.card3.title': '资本伙伴值班台',
                'services.card3.desc': '将校友策略与共投资本和运营网络高效连接。',
                'services.card3.point1': '对接配套基金与天使联合体',
                'services.card3.point2': '专属执行、风控与报告管家',
                'services.card3.point3': '部署后分析与季度治理回顾',
                'features.eyebrow': '平台深度解析',
                'features.heading': '智能平台模块化构建，贴合您的投研流程',
                'features.card1.title': 'AI 信号工厂',
                'features.card1.desc': '多源数据接入、实时特征工程与自动化建模，在毫秒级别生成具备可解释性的交易信号。',
                'features.card1.point1': '智能异常检测与风险预警',
                'features.card1.point2': '策略全生命周期管理',
                'features.card1.point3': '可视化模型表现追踪',
                'features.card2.title': '量化执行中枢',
                'features.card2.desc': '与全球主流券商及加密交易所深度对接，支持算法交易、篮子交易与自动调仓。',
                'features.card2.point1': '多账户协同权限管理',
                'features.card2.point2': '智能订单路由与滑点控制',
                'features.card2.point3': '实时净值与资产配置视图',
                'features.card3.title': '洞察可视化中心',
                'features.card3.desc': '一站式仪表盘将 AI 洞察转化为可执行决策，帮助投研团队协同复盘，统一策略语言。',
                'features.card3.point1': '场景化 KPI 与自定义报告',
                'features.card3.point2': '自然语言生成的市场备忘录',
                'features.card3.point3': 'API &amp; Webhook 无缝集成',
                'page.platform.intro': '深入了解 TIA 平台模块——从 AI 信号工厂到执行中枢，在同一底座协调投研、交易与治理。',
                'page.platform.cta': '预约策略会谈',
                'page.platform.secondary': '浏览报告',
                'about.eyebrow': '关于我们',
                'about.heading': '量化创新的共享校园',
                'about.paragraph': 'TIA 汇聚教育者、投资者与 Builder，将研究突破转化为可持续的资本计划。',
                'page.about.intro': 'TIA 汇聚教育者、投资者与 Builder，将研究突破转化为可持续的资本计划。我们的愿景：让策略生产到执行的每一步都透明、可衡量、可持续。',
                'about.list1': '跨国创始团队融汇欧洲的精细与亚洲的速度。',
                'about.list2': '教育、孵化与执行共享一体化数据底座。',
                'about.list3': '以上线策略、就业机会与社区治理成效衡量影响力。',
                'about.button': '了解领导团队',
                'about.media.heading': '社区速写',
                'about.media.paragraph': 'VenusIN 的传承让全球分析师、创始人与合作伙伴在此汇聚。',
                'about.stat1.value': '180+',
                'about.stat1.label': '活跃成员',
                'about.stat2.value': '42',
                'about.stat2.label': '已上线策略',
                'about.stat3.value': '12',
                'about.stat3.label': '覆盖国家/地区',
                'ros.mediaAlt': '策略智能回测界面',
                'ros.eyebrow': 'Research Operating System',
                'ros.heading': '让投研团队的每一分钟都可衡量、可追踪、可扩展',
                'ros.paragraph': '我们通过一套可配置的研究操作系统，将投研流程拆分为标准化组件，并辅助您快速构建策略知识图谱，从而实现资产配置的透明化与可复用。',
                'ros.list1': '跨团队协作的审批流与审计穿透',
                'ros.list2': '从洞察到执行的全链路 KPI 跟踪',
                'ros.list3': '多语言接口，赋能全球团队共同协作',
                'ros.button': '预约在线演示',
                'alumni.eyebrow': '杰出校友榜',
                'alumni.heading': '校友在市场与课堂持续发光',
                'alumni.paragraph': 'TIA 联盟的优秀毕业生如今领军头部交易席位、创投工作室与学习网络。',
                'education.eyebrow': '课堂教学 + 投资报告',
                'education.heading': '教学节奏与机构级报告同频共振',
                'education.paragraph': '课堂舞台、研究观测站与投资治理在一条节奏线上协同。',
                'education.card1.title': '课堂教学',
                'education.card1.desc': '为分析师、创业者与政策制定者打造的沉浸式课程。',
                'education.card1.point1': '涵盖宏观、AI、风险工程的模块化体系',
                'education.card1.point2': '与在管基金的校友共同授课',
                'education.card1.point3': '毕业路演接入 VenusIN 社群评审',
                'education.card2.title': '投资报告',
                'education.card2.desc': '将班级洞察转化为董事会级情报的数据报告。',
                'education.card2.point1': '每月市场综述与情景模拟',
                'education.card2.point2': '与合作机构共创的主题深潜',
                'education.card2.point3': '通过 TIA 平台交付的互动仪表盘',
                'page.education.intro': '针对分析师、创业者与治理团队的模块化体系，每节课程均配套 PDF、数据集或 Replay，便于沉淀知识资产。',
                'education.module1.category': '课堂教学',
                'education.module1.title': 'Quant Foundations Sprint',
                'education.module1.desc': '三周密集训练，覆盖宏观框架、AI 特征工程与风控实践。',
                'education.module1.point1': '每日双语直播，提供 Replay 存档',
                'education.module1.point2': '配套 Jupyter Notebook 与数据集',
                'education.module1.point3': '结课 KPI 评估与策略复盘模版',
                'education.module1.meta': '更新：2025 年 Q3 班次',
                'education.module1.link': '下载 PDF',
                'education.module1.href': '#',
                'education.module2.category': '课堂教学',
                'education.module2.title': 'Mentor Studio · Execution Playbooks',
                'education.module2.desc': '聚焦 Execution Desk 协作，从下单策略到跨区域风控对齐。',
                'education.module2.point1': '校友交易席位联合授课',
                'education.module2.point2': '真实交易案例与仿真练习',
                'education.module2.point3': '跨司法辖区合规核对清单',
                'education.module2.meta': '更新：2025 年 Q2 实战班',
                'education.module2.link': '下载 PDF',
                'education.module2.href': '#',
                'education.module3.category': '投资报告',
                'education.module3.title': 'Global Macro Radar',
                'education.module3.desc': '每月宏观场景、汇率/利率偏好与量化预警信号。',
                'education.module3.point1': '互动仪表盘链接',
                'education.module3.point2': '策略敏感度与压力测试结果',
                'education.module3.point3': '政策、流动性与跨资产观察',
                'education.module3.meta': '最新：2025 年 9 月刊',
                'education.module3.link': '下载 PDF',
                'education.module3.href': '#',
                'education.module4.category': '投资报告',
                'education.module4.title': 'Digital Asset Liquidity Review',
                'education.module4.desc': '聚焦加密资产流动性分层、交易对手分析与 DeFi 指标洞察。',
                'education.module4.point1': '交易所与 OTC 深度对比',
                'education.module4.point2': '链上资金流入流出追踪',
                'education.module4.point3': '执行风险提示与监控指标',
                'education.module4.meta': '最新：2025 年 8 月报',
                'education.module4.link': '下载 PDF',
                'education.module4.href': '#',
                'education.note': '提示：当前 PDF 为示例路径，上传正式文档后请替换链接。',
                'education.banner.eyebrow': '协同共创',
                'education.banner.heading': '需要定制课程或专属报告？',
                'education.banner.paragraph': '支持高校、家族办公室与机构共建双语课程、数据堆栈与治理节奏。',
                'education.banner.primary': '预约共创会议',
                'education.banner.secondary': '认识顾问团队',
                'education.viewer.title': 'PDF 预览',
                'education.viewer.download': '下载',
                'elections.eyebrow': '投票与选举',
                'elections.heading': '社区驱动的透明治理',
                'elections.paragraph': '成员通过安全的投票流程提名项目、导师委员会与资金分配，并与 TIA 身份系统同步。',
                'elections.primary': '查看当前投票',
                'elections.secondary': '阅读选举章程',
                'elections.table.candidate': '候选人',
                'elections.table.subject': '授课方向',
                'elections.table.votes': '票数',
                'elections.table.action': '操作',
                'elections.table.subject.ai': 'AI 与因子工程',
                'elections.table.subject.execution': '执行策略手册',
                'elections.table.subject.macro': '全球宏观雷达',
                'elections.table.subject.data': '数据运营与治理',
                'elections.table.subject.crypto': '数字资产策略',
                'elections.table.vote': '立即投票',
                'page.elections.intro': '从提案到执行，每一次投票都通过身份验证、可审计日志与多语言通知完成，下列模块帮助你部署与监控治理节奏。',
                'elections.overview.eyebrow': '2025 领导力甄选',
                'elections.overview.heading': 'TIA 选举核心要点',
                'elections.overview.intro': '从完整选举资料提炼出的关键信息，帮助你快速判断把票投给谁。',
                'elections.overview.scoring.title': '评分与评审团',
                'elections.overview.scoring.point1': 'TIA 董事会按 100 分量表逐项评分。',
                'elections.overview.scoring.point2': '社区支持者投票最高可贡献 50 分。',
                'elections.overview.reward.title': '当选领导人奖励',
                'elections.overview.reward.point1': '五年领导任期并提名 Freedom Award。',
                'elections.overview.reward.point2': '5 亿欧元项目预算与 500 万欧元现金奖励。',
                'elections.overview.reward.point3': '20% 股权以及迈巴赫 S680 五年使用权。',
                'elections.overview.support.title': '支持者权益',
                'elections.overview.support.point1': '三年免费接入冠军模型（预期收益 ≥380%）。',
                'elections.overview.support.point2': '共享 20% 现金奖与年度分红。',
                'elections.overview.support.point3': '终身荣誉会员资格与收益倍增计划席位。',
                'elections.overview.phase1.title': '初选 · 2025/04/01–2025/06/30',
                'elections.overview.phase1.desc': '195 个交易团队按收益、策略短文与体系占比打分。',
                'elections.overview.phase1.point1': '阶段内交易总收益及单笔最大亏损（50 分）',
                'elections.overview.phase1.point2': '论文：《如果我是 TIA 的下一任领导人，我会做什么？》（30 分）',
                'elections.overview.phase1.point3': '个人投资体系或模型的量化比例（20 分）',
                'elections.overview.phase1.result': '结果：195 名参赛者晋级中期选拔。',
                'elections.overview.phase2.title': '中选 · 2025/07/01–2025/10/31',
                'elections.overview.phase2.desc': '前 20% 团队提交五年规划并披露可分享 IP 与风险成果。',
                'elections.overview.phase2.point1': '阶段内交易总收益及单笔最大亏损（50 分）',
                'elections.overview.phase2.point2': 'TIA 未来五年总体发展规划（30 分）',
                'elections.overview.phase2.point3': '可分享的投资体系或模型比例（20 分）',
                'elections.overview.phase2.result': '结果：两名选手晋级最终评审。',
                'elections.overview.phase3.title': '决选 · 2025/11/01–2026/04/30',
                'elections.overview.phase3.desc': '两位决赛者进行六个月实盘交易并交付全球扩张方案。',
                'elections.overview.phase3.point1': '六个月交易总收益及单笔最大亏损（50 分）',
                'elections.overview.phase3.point2': '如何最大化全球共享专业策略与工具（30 分）',
                'elections.overview.phase3.point3': '可全球共享的系统 / 模型比例（20 分）',
                'elections.overview.phase3.result': '结果：最终胜者将成为下一任领导者。',
                'elections.overview.leader.title': '新领导人将获得',
                'elections.overview.leader.point1': '未来 5 年 TIA 的领导权。',
                'elections.overview.leader.point2': '自由勋章提名。',
                'elections.overview.leader.point3': '5 亿欧元“下一个五年梦想计划”项目启动资金。',
                'elections.overview.leader.point4': '500 万欧元现金奖励 + 20% 公司股权。',
                'elections.overview.leader.point5': '最新迈巴赫 S680 4MATIC（5 年使用权）。',
                'elections.overview.supporters.title': '支持者可获得',
                'elections.overview.supporters.point1': '获胜者投资体系 3 年免费使用权（预期收益 ≥380%）。',
                'elections.overview.supporters.point2': '参与 “下一个五年梦想计划”。',
                'elections.overview.supporters.point3': '分享获胜者现金奖励的 20%（100 万欧元）。',
                'elections.overview.supporters.point4': '享有获胜者公司股权年度分红的 20%（年度分红 ≥ 500 万欧元）。',
                'elections.overview.supporters.point5': 'TIA 终身荣誉会员资格（奖牌 + 证书）。',
                'elections.overview.supporters.point6': '参与 TIA 年度收益倍增计划。',
                'elections.overview.supporters.point7': '共享自营交易基金的季度营收。',
                'elections.overview.banner': '中期选拔即将收官，终极投票迫在眉睫！为心中的导师投下这一票，让我们共同开启下一个更具影响力的五年。',
                'elections.candidates.eyebrow': '2025 董事会选举',
                'elections.candidates.heading': '候选人介绍',
                'elections.candidates.description': '两个席位，一个使命：了解候选人背景并在下方快速投票。',
                'elections.candidates.thomas.summary': '专注身份治理与成员入驻流程。',
                'elections.candidates.thomas.vote': '为 Thomas 投票',
                'elections.candidates.thomas.voteAria': '为 Thomas 投票 —— 当前 1,284 票',
                'elections.candidates.thomas.votes': '1,284',
                'elections.candidates.teo.summary': '擅长扩展执行手册与交易台自动化。',
                'elections.candidates.teo.vote': '为 Teo 投票',
                'elections.candidates.teo.voteAria': '为 Teo 投票 —— 当前 1,096 票',
                'elections.candidates.teo.votes': '1,096',
                'elections.details.eyebrow': '领导力甄选 2025',
                'elections.details.heading': 'TIA 领导人选举全流程',
                'elections.details.description': '本次选拔结合真实交易成绩、战略方案与社区投票，以下是关键节点。',
                'elections.details.jury': '<h3>评审团与评分</h3><p>评审团：Tethys Investment Alliance 董事会成员。</p><ul><li>依据既定标准评分，总分 100 分。</li><li>最终投票纳入支持者票数，最高可加 50 分。</li></ul>',
                'elections.details.scoring': '<h3>赛程与参赛者</h3><p>选拔分为初选、中期与最终评审三个阶段，逐步筛选下一任领导人。</p><p>共有 195 名交易员晋级中期选拔，前 20%（共 39 名）冲击最终资格。</p>',
                'elections.details.phase1': '<h3>初选阶段 · 2025/4/1 - 2025/6/30</h3><p>参赛者：各交易部门的专业交易员。</p><ul><li>阶段内交易总收益及单笔最大亏损（50 分）</li><li>论文：《如果我是 TIA 的下一任领导人，我会做什么？》（30 分）</li><li>个人投资体系或模型的量化比例（20 分）</li></ul><p class=\"phase-result\">结果：195 名参赛者晋级中期选拔。</p>',
                'elections.details.phase2': '<h3>中期选拔 · 2025/7/1 - 2025/10/31</h3><p>参赛者：初选前 20%（共 39 名选手）。</p><ul><li>阶段内交易总收益及单笔最大亏损（50 分）</li><li>TIA 未来五年总体发展规划（30 分）</li><li>可分享的投资体系或模型比例（20 分）</li></ul><p class=\"phase-result\">结果：两名选手晋级最终评审。</p>',
                'elections.details.phase3': '<h3>最终评审 · 2025/11/1 - 2026/4/30</h3><p>参赛者：中期选拔的前两名选手。</p><ul><li>六个月交易总收益及单笔最大亏损（50 分）</li><li>如何最大化全球共享专业策略与工具（30 分）</li><li>可全球共享的系统 / 模型比例（20 分）</li></ul><p class=\"phase-result\">结果：最终胜者将成为下一任领导者。</p>',
                'elections.details.rewards': '<h3>新领导人将获得</h3><ul><li>未来 5 年 TIA 的领导权。</li><li>自由勋章提名。</li><li>5 亿欧元“下一个五年梦想计划”项目启动资金。</li><li>500 万欧元现金奖励 + 20% 公司股权。</li><li>最新迈巴赫 S680 4MATIC（5 年使用权）。</li></ul>',
                'elections.details.supporters': '<h3>支持者可获得</h3><ul><li>获胜者投资体系 3 年免费使用权（预期收益 ≥ 380%）。</li><li>参与“下一个五年梦想计划”。</li><li>分享获胜者现金奖励的 20%（100 万欧元）。</li><li>分享获胜者公司股权年度分红的 20%（年度分红 ≥ 500 万欧元）。</li><li>TIA 终身荣誉会员资格（奖牌 + 证书）。</li><li>参与 TIA 年度收益倍增计划。</li><li>共享自营交易基金的季度营收。</li></ul>',
                'elections.details.closing': '<p>选拔进入最激烈的阶段：中期选拔即将收官，最终投票迫在眉睫！谁会成为下一任领导者？</p><p>新的五年即将开启，让我们为心中的导师投下这一票，共同打造更具影响力的 TIA！</p>',
                'elections.card1.title': '提案与资格管理',
                'elections.card1.desc': '与 TIA Identity 服务绑定的多维资格体系，确保只有通过验证的成员可发起与投票。',
                'elections.card1.point1': '角色 / 贡献 / 资产阈值组合规则',
                'elections.card1.point2': '提案模版库与 Impact 评估表',
                'elections.card1.point3': '提案截止与投票开启自动提醒',
                'elections.card2.title': '投票执行与审计',
                'elections.card2.desc': '支持加权、多轮或共识机制的投票算法，并提供可验证的审计日志。',
                'elections.card2.point1': 'Web / 移动端一致的投票体验',
                'elections.card2.point2': '实时计票面板与风险预警',
                'elections.card2.point3': 'API 输出审计日志与存证',
                'elections.card3.title': '执行跟踪与公示',
                'elections.card3.desc': '选举结果自动同步到交易、教学与社区看板，形成闭环执行。',
                'elections.card3.point1': '多语言公开页面与获奖摘要',
                'elections.card3.point2': '任务派发与季度评估跟踪',
                'elections.card3.point3': '与投票数据联动的绩效指标',
                'page.elections.callout': '需要协助部署投票？治理团队可协助制定章程、搭建控制流程并培训 Scrutineer。',
                'lottery.eyebrow': '社区抽奖',
                'lottery.heading': '以公平可审计的方式庆祝突破',
                'lottery.paragraph': '每个里程碑活动都包含可验证公平的抽奖，用于奖学金、差旅补助与社区实验室。',
                'lottery.point1': '由独立审计的智能合约开奖',
                'lottery.point2': '教学、辅导与研究成果可获额外抽奖资格',
                'lottery.point3': '获奖者将在季度全员会公开亮相',
                'lottery.button': '参与下一期抽奖',
                'page.lottery.intro': '每个里程碑活动都会把贡献转化为激励，智能合约与审计流程确保公平透明。',
                'lottery.card1.title': '抽奖规则设计',
                'lottery.card1.desc': '针对教学、Mentor、报告发布等行为配置不同权重。',
                'lottery.card1.point1': '多维积分与冷却期设置',
                'lottery.card1.point2': '社区可见的实时票池面板',
                'lottery.card1.point3': '奖池与预算上限控制',
                'lottery.card2.title': '智能合约抽奖',
                'lottery.card2.desc': '支持多链部署并经过第三方审计，结果不可篡改。',
                'lottery.card2.point1': '多链部署与 Gas 优化',
                'lottery.card2.point2': '抽奖日志永久存证与 API 输出',
                'lottery.card2.point3': '异常告警与失败重试机制',
                'lottery.card3.title': '奖项发放与追踪',
                'lottery.card3.desc': '通知、签收与合规材料自动写入治理仪表盘。',
                'lottery.card3.point1': '奖品库存与发放管理',
                'lottery.card3.point2': '获奖者旅程与感言收集',
                'lottery.card3.point3': '季度报告与 KPI 统计',
                'page.lottery.callout': '想定制奖项或联动多社区？可获取激励策略、法律与税务顾问支持。',
                'lottery.secondary': '查看历届获奖者',
                'team.eyebrow': 'Leadership',
                'team.heading': '顶尖投研团队，陪伴式服务交付策略成果',
                'page.team.intro': '我们的领导团队融合全球买方经验、AI 研究与风险管控，让每一次策略落地都稳健可复用。',
                'team.member1.role': '联合创始人兼兼职科学家，负责机器人研发与量化交易工具打造。',
                'team.member1.quote': '“我们把机器人与交易自动化打通，形成可落地的系统。”',
                'team.member1.summary1': '1971 年出生于美国圣罗莎，斯坦福金融工程与计算机科学双学士，长期专注人工智能。',
                'team.member1.summary2': '在德银美国构建 AI 风控、定价与执行引擎，显著降低延迟并稳固模型表现。',
                'team.member1.summary3': '2020 年与 Thomas Kurz 共同创立 TIA，设计 Genius Robot 5.0，重塑同盟会运营。',
                'team.member1.summary4': '负责机器人研发、可解释 AI 与交易安全演练，为各交易席位提供韧性 Playbook。',
                'team.member2.role': '同盟会创始人兼 CEO，统筹联盟生态的产品布局与监管合作。',
                'team.member2.quote': '“我们把机构团队与精选的 AI 技术栈和伙伴网络联结起来。”',
                'team.member2.summary1': '1969 年生于慕尼黑近郊，慕尼黑大学金融工程博士，累积三十年多资产投研经验。',
                'team.member2.summary2': '曾在德银、花旗欧洲与 KfW 主导多资产交易席位，统筹全球机构委托与执行流程。',
                'team.member2.summary3': '现将 AI 交易、治理节奏与资本合作相结合，推动同盟会在机构侧持续扩张。',
                'team.member2.summary4': '负责产品路线、监管协同与核心客户关系，覆盖欧洲及亚洲重点市场。',
                'team.member1.alt': '联合创始人兼兼职科学家 Robert Miller',
                'team.member2.alt': '同盟会创始人兼 CEO Thomas Kurz',
                                'team.profile.thomas.title': '托马斯·库尔茨 · 创始人兼 CEO',
                'team.profile.thomas.summary': '出生日期：1969年6月27日；母校：慕尼黑大学（1987年入学，1995年博士毕业）；职业：Tethys Investment Alliance 创始人，Intelligenter Hightech-Roboter 5 之父；现住址：美因河畔法兰克福市；父亲：2020 年突发心脏病去世；母亲：已退休。',
                'team.profile.thomas.birth.title': '出生经历',
                'team.profile.thomas.birth.body1': '托马斯出生在距离慕尼黑 30 公里的小镇，父亲是汽车工厂工人，母亲是小学老师。童年热爱骑行、徒步和露营的他，在户外历练中养成独立坚韧的性格。',
                'team.profile.thomas.study.title': '学习经历',
                'team.profile.thomas.study.body1': '他自幼数学天赋惊人，18 岁进入法兰克福歌德大学金融学院，课堂与股票交易表现皆令人惊艳，对市场节奏理解深刻。',
                'team.profile.thomas.career.title': '工作经历',
                'team.profile.thomas.career.body1': '1995 年加入德国商业银行成为量化交易员，三年积累 5,000 万欧元收益，被称为“金融市场的魔术师”，并担任花旗欧洲、德国复兴信贷银行、贝莱德德国等顾问。',
                'team.profile.thomas.achievements.title': '代表战绩',
                'team.profile.thomas.achievements.item1': '2021 年：在比特币牛市中低位布局、高位逃顶，树立智能投资典范。',
                'team.profile.thomas.achievements.item2': '2022 年：能源供应链危机期间逆势建仓，取得瞩目回报。',
                'team.profile.thomas.achievements.item3': '2023 年：DAX 策略收益超过 17%，SAP 单笔收益超过 47%。',
                'team.profile.thomas.achievements.item4': '2024 年：敏锐捕捉 AUTO1 Group 机会，实现近 350% 收益。',
                'team.profile.thomas.turning.title': '人生转折',
                'team.profile.thomas.turning.body1': '2020 年疫情股灾令其资产归零，父亲因心脏病离世，家庭关系跌入谷底。',
                'team.profile.thomas.transformation.title': '人生蜕变',
                'team.profile.thomas.transformation.body1': '在林间小屋独自反思后，他重塑投资使命，重返德银打造能帮助投资者的金融工具。',
                'team.profile.thomas.belief.title': '终身信念',
                'team.profile.thomas.belief.body1': '托马斯坚信财富要与爱和奉献同行，通过分享智慧帮助他人，才能实现真正的转变。',
                'team.profile.robert.title': '罗伯特·米勒 · 联合创始人兼首席科学家',
                'team.profile.robert.summary': '出生日期：1971 年 5 月 21 日；出生地：美国圣罗莎；居住地：美国旧金山；1989 年进入斯坦福大学，1994 年获金融工程与计算机科学双学士；父母均已离世。',
                'team.profile.robert.early.title': '早期职业生涯',
                'team.profile.robert.early.body1': '毕业后进入德国商业银行美国分公司量化研究部门，负责风险评估、资产定价与投资组合管理模型，并投入算法交易研究。',
                'team.profile.robert.ai.title': 'AI 与大数据探索',
                'team.profile.robert.ai.body1': '他率先将人工智能与大数据应用于量化研究，提升市场预测准确度，并通过数据分析优化交易执行策略。',
                'team.profile.robert.alliance.title': '成为特提斯同盟会联合创始人',
                'team.profile.robert.alliance.body1': '2020 年疫情导致资产在短短十几天内缩水近 70%，他与托马斯携手创立特提斯投资同盟，研发“天才智能机器人 5.0”保护投资者资产。',
                'contact.eyebrow': '联系我们',
                'contact.heading': '从第一场 Workshop 到正式上线，我们全程陪伴',
                'contact.paragraph': '请选择合适的渠道，我们将在 1 个工作日内提供定制化回复或演示。',
                'contact.card1.title': '战略顾问 · 总部',
                'contact.card1.desc': '预约平台演示、投研体系规划与企业培训。',
                'contact.card1.link': '发送邮件',
                'contact.card1.href': 'mailto:contact@tethys-invest.com',
                'contact.card2.title': '资本与合作伙伴',
                'contact.card2.desc': '欢迎对接共投资金、校园项目或联合课程。',
                'contact.card2.link': '预约对接',
                'contact.card2.href': 'mailto:partners@tethys-invest.com',
                'contact.card3.title': '即时沟通 · Telegram',
                'contact.card3.desc': '加入运营群获取课程、投票与抽奖通知，也可提交支持工单。',
                'contact.card3.link': '加入群组',
                'contact.card3.href': 'https://t.me/tia_alliance',
                'cta.eyebrow': 'Get Started',
                'cta.heading': '构建下一代智能投研体系，从今天开始',
                'cta.paragraph': '填写信息即可获取专属顾问支持与试用账号，立即体验 AI 驱动的策略生产力。',
                'cta.primary': '联系顾问',
                'cta.secondary': '预约试用',
                'footer.about.title': '关于我们',
                'footer.about.text': 'Tethys 投资同盟会致力于为德国和全球的投资者提供高质量的投资与教学支持，帮助每位会员实现财务自由目标。',
                'footer.links.title': '快速链接',
                'footer.links.home': '首页',
                'footer.links.platform': '智能平台',
                'footer.links.team': '专家团队',
                'footer.links.education': '教育课程',
                'footer.links.contact': '联系我们',
                'footer.contact.title': '联系我们',
                'footer.contact.addressLabel': '地址',
                'footer.contact.address': '德国法兰克福 Mainzer Landstraße 16（邮编 60325）',
                'footer.contact.emailLabel': '首发邮箱',
                'footer.contact.email': 'firstmail@tethysalliance.com',
                'footer.contact.phoneLabel': '电话',
                'footer.contact.phone': '+49 69 2474 8818',
                'footer.contact.siteLabel': '官网',
                'footer.contact.site': 'tethys-alliance.de',
                'footer.summary.title': '法律信息',
                'footer.summary.operatorLabel': '网站运营方',
                'footer.summary.operator': '泰提斯投资联盟公司（Tethys Investment Alliance Inc.）',
                'footer.summary.addressLabel': '美国地址',
                'footer.summary.address': '美国加利福尼亚州旧金山 Sansome 街 222 号，邮编 94104',
                'footer.summary.taxLabel': '税号',
                'footer.summary.tax': '39-4174820',
                'footer.legal.title': '法律声明',
                'footer.legal.labels.operator': '网站运营方',
                'footer.legal.operatorName': 'TETHYS INVESTMENT ALLIANCE INC',
                'footer.legal.labels.usAddress': '美国地址',
                'footer.legal.usAddress': '美国加利福尼亚州旧金山 Sansome 街 222 号，邮编 94104',
                'footer.legal.labels.represented': '法定代表',
                'footer.legal.representedValue': '管理层',
                'footer.legal.labels.deAddress': '德国联系地址（依据德国电信媒体法 § 5 Abs. 1 Nr. 1 TMG）',
                'footer.legal.deAddress': '德国法兰克福 Mainzer Landstraße 16，邮编 60325',
                'footer.legal.labels.taxInfo': '税务信息',
                'footer.legal.einDetail': '雇主识别号（EIN）：39-4174820（由美国国税局核发）。',
                'footer.legal.labels.note': '§ 27a UStG 提示',
                'footer.legal.ustgNote': '根据 § 27a UStG：由于公司注册于美国，暂无德国增值税号。',
                'footer.bottom': '&copy; 2025 Tethys Investment Alliance，保留所有权利。',
                'footer.privacy': '隐私政策',
                'footer.terms': '服务条款'
            }
        };

        const languageButtons = document.querySelectorAll('.language-option');
        const supportedLanguages = ['de', 'en', 'zh'];
        const langAttributes = { de: 'de', en: 'en', zh: 'zh-CN' };

        const alumniBase = [
            {
                initials: 'QS',
                names: {
                    de: 'Mentoring-Slot · Quant Onboarding',
                    en: 'Mentoring Slot · Quant Onboarding',
                    zh: '导师席位 · 量化入营'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026 · läuft)',
                    en: 'Cohort V (2025–2026 · in progress)',
                    zh: '第 5 期 · 2025-2026（进行中）'
                },
                roles: {
                    de: 'Service-Track für Frühstarter',
                    en: 'Service track for early entrants',
                    zh: '面向早鸟团队的服务通道'
                },
                quotes: {
                    de: 'Reserviert Kapazitäten für Kohorte-V-Teams – wöchentliche KI-Mentorings und Strategie-Diagnosen.',
                    en: 'Reserves capacity for Cohort V teams with weekly AI mentoring and strategy diagnostics.',
                    zh: '为第 5 期团队预留席位，提供每周 AI 导师辅导与策略诊断。'
                }
            },
            {
                initials: 'DS',
                names: {
                    de: 'Diagnostic-Slot · Operating Blueprint',
                    en: 'Diagnostic Slot · Operating Blueprint',
                    zh: '诊断席位 · 操盘蓝图'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026 · läuft)',
                    en: 'Cohort V (2025–2026 · in progress)',
                    zh: '第 5 期 · 2025-2026（进行中）'
                },
                roles: {
                    de: 'Blueprint-Begleitung für neue Streams',
                    en: 'Blueprint facilitation for new streams',
                    zh: '为新赛道提供蓝图陪跑'
                },
                quotes: {
                    de: 'Stellt Research-OS-Playbooks, KPI-Layer und Audit-Templates bereit, damit Launch-Milestones konsistent bleiben.',
                    en: 'Delivers Research OS playbooks, KPI layers, and audit templates to keep launch milestones consistent.',
                    zh: '输出 Research OS Playbook、KPI 分层与审计模板，让上线节奏保持一致。'
                }
            },
            {
                initials: 'ES',
                names: {
                    de: 'Execution Residency Track',
                    en: 'Execution Residency Track',
                    zh: '执行驻场通道'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026 · läuft)',
                    en: 'Cohort V (2025–2026 · in progress)',
                    zh: '第 5 期 · 2025-2026（进行中）'
                },
                roles: {
                    de: 'Trading-Desk Enablement',
                    en: 'Trading desk enablement',
                    zh: '交易席位赋能'
                },
                quotes: {
                    de: 'Fokussiert Order-Routing-Sandboxen, Compliance-Runbooks und Execution-Retrospektiven für nahtlose Übergaben.',
                    en: 'Focuses on order-routing sandboxes, compliance runbooks, and execution retrospectives for seamless handovers.',
                    zh: '聚焦订单路由沙箱、合规 Runbook 与执行复盘，确保切换无缝。'
                }
            },
            {
                initials: 'JS',
                names: { de: 'Johanna Seidel', en: 'Johanna Seidel', zh: 'Johanna Seidel' },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Leiterin Digital Liquidity, Meridian Global',
                    en: 'Head of Digital Liquidity, Meridian Global',
                    zh: 'Meridian Global 数字流动性负责人'
                },
                quotes: {
                    de: 'Verschmolz TIA-Orderbooks mit OTC-Desks und hob die Cross-Venue-Fillrate um 22 %.',
                    en: 'Blended TIA orderbooks with OTC desks, raising cross-venue fill rates by 22%.',
                    zh: '整合 TIA 订单簿与场外席位，使跨场景成交率提升 22%。'
                }
            },
            {
                initials: 'ML',
                names: { de: 'Markus Lenz', en: 'Markus Lenz', zh: 'Markus Lenz' },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Director Data Automation, AlpInvest Labs',
                    en: 'Director of Data Automation, AlpInvest Labs',
                    zh: 'AlpInvest Labs 数据自动化总监'
                },
                quotes: {
                    de: 'Automatisierte Factor-Snapshots stündlich und senkte den Reporting-Aufwand pro Mandat um 35 %.',
                    en: 'Automated hourly factor snapshots, cutting reporting effort per mandate by 35%.',
                    zh: '实现因子指标逐小时快照，将单个委托报告工作量削减 35%。'
                }
            },
            {
                initials: 'TK',
                names: { de: 'Tobias Krämer', en: 'Tobias Krämer', zh: 'Tobias Krämer' },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Portfolio Lead, Rhein Heritage Partners',
                    en: 'Portfolio Lead, Rhein Heritage Partners',
                    zh: 'Rhein Heritage Partners 投资组合负责人'
                },
                quotes: {
                    de: 'Implementierte Cross-Asset-Stresstests via Research OS und bestand Regulator-Audits ohne Findings.',
                    en: 'Implemented cross-asset stress tests via the Research OS and cleared regulator audits with zero findings.',
                    zh: '借助 Research OS 部署跨资产压力测试，监管审计零缺陷通过。'
                }
            },
            {
                initials: 'FL',
                names: { de: 'Friederike Lang', en: 'Friederike Lang', zh: 'Friederike Lang' },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Risk Analytics Lead, Hanse Quant',
                    en: 'Risk Analytics Lead, Hanse Quant',
                    zh: 'Hanse Quant 风险分析主管'
                },
                quotes: {
                    de: 'Verknüpfte Echtzeit-VaR-Feeds mit Governance-Dashboards und halbierte Eskalationszeiten.',
                    en: 'Linked real-time VaR feeds into governance dashboards, halving escalation response times.',
                    zh: '将实时 VaR 数据接入治理仪表盘，将风险上报响应时间减半。'
                }
            },
            {
                initials: 'LB',
                names: { de: 'Lukas Brandt', en: 'Lukas Brandt', zh: 'Lukas Brandt' },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Head of ESG Engineering, Nordlicht Asset',
                    en: 'Head of ESG Engineering, Nordlicht Asset',
                    zh: 'Nordlicht Asset ESG 工程负责人'
                },
                quotes: {
                    de: 'Baut KPI-Korridore für Impact-Mandate und synchronisierte sie mit dem TIA Scenario Studio.',
                    en: 'Built KPI corridors for impact mandates and synced them with the TIA Scenario Studio.',
                    zh: '为影响力投资委托构建 KPI 区间，并与 TIA 情景工作室联动。'
                }
            },
            {
                initials: 'EN',
                names: { de: 'Eva Neumann', en: 'Eva Neumann', zh: 'Eva Neumann' },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Program Manager, TIA Academy EMEA',
                    en: 'Program Manager, TIA Academy EMEA',
                    zh: 'TIA Academy EMEA 项目经理'
                },
                quotes: {
                    de: 'Skalierte zweisprachige Bootcamps in neun Städten und erzielte eine Completion-Rate von 96 %.',
                    en: 'Scaled dual-language bootcamps across nine cities, achieving a 96% completion rate.',
                    zh: '在九座城市扩展双语训练营，课程完成率达 96%。'
                }
            },
            {
                initials: 'RB',
                names: { de: 'Ralf Berger', en: 'Ralf Berger', zh: 'Ralf Berger' },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Chief Technology Officer, Atlas Signals',
                    en: 'Chief Technology Officer, Atlas Signals',
                    zh: 'Atlas Signals 首席技术官'
                },
                quotes: {
                    de: 'Migrierte Legacy-Signale ins TIA Research OS und senkte Latenz um 47 %.',
                    en: 'Migrated legacy signals into the TIA Research OS, reducing latency by 47%.',
                    zh: '将遗留信号迁移至 TIA Research OS，延迟降低 47%。'
                }
            },
            {
                initials: 'MH',
                names: { de: 'Mara Hofmann', en: 'Mara Hofmann', zh: 'Mara Hofmann' },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Director Client Advisory, Silbersee Capital',
                    en: 'Director of Client Advisory, Silbersee Capital',
                    zh: 'Silbersee Capital 客户顾问总监'
                },
                quotes: {
                    de: 'Startete ein Multi-Family-Office-Playbook und band VenusIN-Alumni als Coach-Pool ein.',
                    en: 'Launched a multi-family-office playbook and engaged VenusIN alumni as a coaching pool.',
                    zh: '搭建家族办公室 Playbook，并引入 VenusIN 校友担任教练资源。'
                }
            },
            {
                initials: 'SV',
                names: { de: 'Stefan Vogt', en: 'Stefan Vogt', zh: 'Stefan Vogt' },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Lead Strategist, Neue Horizonte Stiftung',
                    en: 'Lead Strategist, Neue Horizonte Stiftung',
                    zh: 'Neue Horizonte 基金会首席策略官'
                },
                quotes: {
                    de: 'Erstellte Impact-Dashboards mit Live-Spenden-Streams und verknüpfte sie mit dem TIA KPI-Rahmen.',
                    en: 'Built impact dashboards with live donation streams linked to the TIA KPI framework.',
                    zh: '打造与 TIA KPI 框架联动的影响力仪表盘，实现实时捐赠流可视化。'
                }
            },
            {
                initials: 'EF',
                names: { de: 'Elena Fischer', en: 'Elena Fischer', zh: 'Elena Fischer' },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Managing Partner, Helios Quant GmbH',
                    en: 'Managing Partner, Helios Quant GmbH',
                    zh: 'Helios Quant GmbH 管理合伙人'
                },
                quotes: {
                    de: 'Skalierte ESG-Faktormodelle aus dem Abschlussprojekt zu einem Mandat über 1,2 Mrd. EUR.',
                    en: 'Scaled ESG factor models from her capstone into a €1.2bn mandate.',
                    zh: '将 ESG 因子模型从毕业项目扩展为 12 亿欧元委托。'
                }
            },
            {
                initials: 'JG',
                names: { de: 'Jonas Gruber', en: 'Jonas Gruber', zh: 'Jonas Gruber' },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Managing Director, Bayern Quant Collective',
                    en: 'Managing Director, Bayern Quant Collective',
                    zh: 'Bayern Quant Collective 董事总经理'
                },
                quotes: {
                    de: 'Baut seit 2022 Smart-Beta-Strategien mit dem TIA Co-Pilot und betreut heute 14 Mandate.',
                    en: 'Since 2022 has built smart beta strategies with the TIA co-pilot and now supports 14 mandates.',
                    zh: '自 2022 年起依托 TIA Co-Pilot 构建 Smart Beta 策略，目前服务 14 个委托。'
                }
            },
            {
                initials: 'CW',
                names: { de: 'Clara Weiss', en: 'Clara Weiss', zh: 'Clara Weiss' },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Head of Research Partnerships, Helvetia Labs',
                    en: 'Head of Research Partnerships, Helvetia Labs',
                    zh: 'Helvetia Labs 研究合作负责人'
                },
                quotes: {
                    de: 'Schuf Forschungs-Konsortien mit elf Universitäten und teilt KPI über das TIA Insight Center.',
                    en: 'Created research consortia with eleven universities, sharing KPIs via the TIA Insight Center.',
                    zh: '携手 11 所高校组建联合研究联盟，并通过 TIA Insight Center 共享 KPI。'
                }
            },            {
                initials: 'AR',
                names: {
                    de: 'Anna Richter',
                    en: 'Anna Richter',
                    zh: 'Anna Richter'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Leiter:in Quant Research, Helios Quant',
                    en: 'Head of Quant Research, Helios Quant',
                    zh: 'Helios Quant 量化研究负责人'
                },
                quotes: {
                    de: 'Skalierte Faktorplattformen für fünf Assetklassen und verkürzte Backtests um 42 %.',
                    en: 'Scaled factor platforms for five asset classes, cutting backtesting time by 42%.',
                    zh: '搭建覆盖五类资产的因子平台，将回测时间缩短 42%。'
                }
            },
            {
                initials: 'LR',
                names: {
                    de: 'Lena Richter',
                    en: 'Lena Richter',
                    zh: 'Lena Richter'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Datenstrategie, Nordlicht Asset',
                    en: 'Director of Data Strategy, Nordlicht Asset',
                    zh: 'Nordlicht Asset 数据策略总监'
                },
                quotes: {
                    de: 'Automatisierte Liquiditätswarnungen reduzierten Eskalationszeiten um 35 % über 14 Desks.',
                    en: 'Automated liquidity alerts reduced escalation times by 35% across 14 desks.',
                    zh: '自动化流动性告警覆盖 14 个交易席位，响应时间缩短 35%。'
                }
            },
            {
                initials: 'MR',
                names: {
                    de: 'Mara Richter',
                    en: 'Mara Richter',
                    zh: 'Mara Richter'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Chief Risk Officer, Atlas Signals',
                    en: 'Chief Risk Officer, Atlas Signals',
                    zh: 'Atlas Signals 首席风险官'
                },
                quotes: {
                    de: 'Co-Investments im Volumen von 180 Mio. € strukturiert und Governance-Playbooks bereitgestellt.',
                    en: 'Structured €180m of co-investments and delivered governance playbooks.',
                    zh: '完成 1.8 亿欧元共投资结构设计，并输出治理手册。'
                }
            },
            {
                initials: 'CR',
                names: {
                    de: 'Clara Richter',
                    en: 'Clara Richter',
                    zh: 'Clara Richter'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Handelsinfrastruktur, Meridian Global',
                    en: 'Head of Trading Infrastructure, Meridian Global',
                    zh: 'Meridian Global 交易基础架构负责人'
                },
                quotes: {
                    de: 'Implementierte Stressszenarien für Energie- und Agrarmärkte mit 0 unbeantworteten Alerts.',
                    en: 'Implemented stress scenarios for energy and agri markets with zero missed alerts.',
                    zh: '上线能源与农产品市场压力测试，实现预警零漏报。'
                }
            },
            {
                initials: 'NR',
                names: {
                    de: 'Nina Richter',
                    en: 'Nina Richter',
                    zh: 'Nina Richter'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Programmleiter:in AI Lab, Silbersee Capital',
                    en: 'AI Lab Program Lead, Silbersee Capital',
                    zh: 'Silbersee Capital AI 实验室项目负责人'
                },
                quotes: {
                    de: 'Erweiterte das TIA Research OS auf drei Regionen und synchronisierte Audit-Trails.',
                    en: 'Expanded the TIA Research OS into three regions with synchronized audit trails.',
                    zh: '将 TIA Research OS 拓展至三大地区，并实现审计日志同步。'
                }
            },
            {
                initials: 'SR',
                names: {
                    de: 'Sophie Richter',
                    en: 'Sophie Richter',
                    zh: 'Sophie Richter'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Managing Partner, Vanguard Labs Europe',
                    en: 'Managing Partner, Vanguard Labs Europe',
                    zh: 'Vanguard Labs Europe 管理合伙人'
                },
                quotes: {
                    de: 'Trainierte 120 Analyst:innen im Mentorprogramm und steigerte KPI-Erfüllung um 28 %.',
                    en: 'Trained 120 analysts through the mentor track, boosting KPI attainment by 28%.',
                    zh: '在导师项目中培养 120 名分析师，关键指标完成率提升 28%。'
                }
            },
            {
                initials: 'LI',
                names: {
                    de: 'Larissa Richter',
                    en: 'Larissa Richter',
                    zh: 'Larissa Richter'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Portfolio Analytics, Aurora Capital Partners',
                    en: 'Director of Portfolio Analytics, Aurora Capital Partners',
                    zh: 'Aurora Capital Partners 投资组合分析总监'
                },
                quotes: {
                    de: 'Migrierte Legacy-Signale in AI-Pipelines und senkte Latenz unter 90 Millisekunden.',
                    en: 'Migrated legacy signals into AI pipelines, driving latency below 90 ms.',
                    zh: '将传统信号迁入 AI Pipeline，将延迟压低至 90 毫秒以内。'
                }
            },
            {
                initials: 'KR',
                names: {
                    de: 'Katrin Richter',
                    en: 'Katrin Richter',
                    zh: 'Katrin Richter'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Head of ESG Engineering, Quantum Harbor',
                    en: 'Head of ESG Engineering, Quantum Harbor',
                    zh: 'Quantum Harbor ESG 工程负责人'
                },
                quotes: {
                    de: 'Koordinierte ESG-Datenfeeds für 60 Mandate und vereinheitlichte Reporting-Rhythmen.',
                    en: 'Coordinated ESG data feeds for 60 mandates and unified reporting cadences.',
                    zh: '为 60 个委托整合 ESG 数据流，并统一报告节奏。'
                }
            },
            {
                initials: 'LR8',
                names: {
                    de: 'Lea Richter',
                    en: 'Lea Richter',
                    zh: 'Lea Richter'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Execution Services, Aegis Markets',
                    en: 'Lead of Execution Services, Aegis Markets',
                    zh: 'Aegis Markets 执行服务主管'
                },
                quotes: {
                    de: 'Baute DeFi-Liquiditätsmonitoring auf und sicherte 24/7 Alarmierung mit Red-Team-Tests.',
                    en: 'Built DeFi liquidity monitoring with 24/7 alerting backed by red-team drills.',
                    zh: '搭建 DeFi 流动性监控体系，并通过红队演练实现 24/7 告警。'
                }
            },
            {
                initials: 'PR',
                names: {
                    de: 'Paula Richter',
                    en: 'Paula Richter',
                    zh: 'Paula Richter'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Head of Market Intelligence, Orion Research',
                    en: 'Head of Market Intelligence, Orion Research',
                    zh: 'Orion Research 市场情报负责人'
                },
                quotes: {
                    de: 'Initiierte Universitätsallianzen in acht Städten und erhöhte die Campus-Projektquote auf 94 %.',
                    en: 'Initiated university alliances in eight cities, lifting campus programme completion to 94%.',
                    zh: '联合八座城市的高校联盟，使校园项目完成率提升至 94%。'
                }
            },
            {
                initials: 'JR',
                names: {
                    de: 'Jonas Richter',
                    en: 'Jonas Richter',
                    zh: 'Jonas Richter'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Leiter:in Quant Research, Sternwerk Finance',
                    en: 'Head of Quant Research, Sternwerk Finance',
                    zh: 'Sternwerk Finance 量化研究负责人'
                },
                quotes: {
                    de: 'Skalierte Faktorplattformen für fünf Assetklassen und verkürzte Backtests um 42 %.',
                    en: 'Scaled factor platforms for five asset classes, cutting backtesting time by 42%.',
                    zh: '搭建覆盖五类资产的因子平台，将回测时间缩短 42%。'
                }
            },
            {
                initials: 'TR',
                names: {
                    de: 'Tobias Richter',
                    en: 'Tobias Richter',
                    zh: 'Tobias Richter'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Datenstrategie, Blue Ridge Analytics',
                    en: 'Director of Data Strategy, Blue Ridge Analytics',
                    zh: 'Blue Ridge Analytics 数据策略总监'
                },
                quotes: {
                    de: 'Automatisierte Liquiditätswarnungen reduzierten Eskalationszeiten um 35 % über 14 Desks.',
                    en: 'Automated liquidity alerts reduced escalation times by 35% across 14 desks.',
                    zh: '自动化流动性告警覆盖 14 个交易席位，响应时间缩短 35%。'
                }
            },
            {
                initials: 'FR',
                names: {
                    de: 'Felix Richter',
                    en: 'Felix Richter',
                    zh: 'Felix Richter'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Chief Risk Officer, Cascade Advisory',
                    en: 'Chief Risk Officer, Cascade Advisory',
                    zh: 'Cascade Advisory 首席风险官'
                },
                quotes: {
                    de: 'Co-Investments im Volumen von 180 Mio. € strukturiert und Governance-Playbooks bereitgestellt.',
                    en: 'Structured €180m of co-investments and delivered governance playbooks.',
                    zh: '完成 1.8 亿欧元共投资结构设计，并输出治理手册。'
                }
            },
            {
                initials: 'MI',
                names: {
                    de: 'Matthias Richter',
                    en: 'Matthias Richter',
                    zh: 'Matthias Richter'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Handelsinfrastruktur, VectorBridge',
                    en: 'Head of Trading Infrastructure, VectorBridge',
                    zh: 'VectorBridge 交易基础架构负责人'
                },
                quotes: {
                    de: 'Implementierte Stressszenarien für Energie- und Agrarmärkte mit 0 unbeantworteten Alerts.',
                    en: 'Implemented stress scenarios for energy and agri markets with zero missed alerts.',
                    zh: '上线能源与农产品市场压力测试，实现预警零漏报。'
                }
            },
            {
                initials: 'SI',
                names: {
                    de: 'Sebastian Richter',
                    en: 'Sebastian Richter',
                    zh: 'Sebastian Richter'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Programmleiter:in AI Lab, Polaris Futures',
                    en: 'AI Lab Program Lead, Polaris Futures',
                    zh: 'Polaris Futures AI 实验室项目负责人'
                },
                quotes: {
                    de: 'Erweiterte das TIA Research OS auf drei Regionen und synchronisierte Audit-Trails.',
                    en: 'Expanded the TIA Research OS into three regions with synchronized audit trails.',
                    zh: '将 TIA Research OS 拓展至三大地区，并实现审计日志同步。'
                }
            },
            {
                initials: 'LR5',
                names: {
                    de: 'Lukas Richter',
                    en: 'Lukas Richter',
                    zh: 'Lukas Richter'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Managing Partner, Hanse Quant Labs',
                    en: 'Managing Partner, Hanse Quant Labs',
                    zh: 'Hanse Quant Labs 管理合伙人'
                },
                quotes: {
                    de: 'Trainierte 120 Analyst:innen im Mentorprogramm und steigerte KPI-Erfüllung um 28 %.',
                    en: 'Trained 120 analysts through the mentor track, boosting KPI attainment by 28%.',
                    zh: '在导师项目中培养 120 名分析师，关键指标完成率提升 28%。'
                }
            },
            {
                initials: 'SR6',
                names: {
                    de: 'Simon Richter',
                    en: 'Simon Richter',
                    zh: 'Simon Richter'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Portfolio Analytics, Summit Ridge Partners',
                    en: 'Director of Portfolio Analytics, Summit Ridge Partners',
                    zh: 'Summit Ridge Partners 投资组合分析总监'
                },
                quotes: {
                    de: 'Migrierte Legacy-Signale in AI-Pipelines und senkte Latenz unter 90 Millisekunden.',
                    en: 'Migrated legacy signals into AI pipelines, driving latency below 90 ms.',
                    zh: '将传统信号迁入 AI Pipeline，将延迟压低至 90 毫秒以内。'
                }
            },
            {
                initials: 'BR',
                names: {
                    de: 'Benedikt Richter',
                    en: 'Benedikt Richter',
                    zh: 'Benedikt Richter'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Head of ESG Engineering, Momentum Forge',
                    en: 'Head of ESG Engineering, Momentum Forge',
                    zh: 'Momentum Forge ESG 工程负责人'
                },
                quotes: {
                    de: 'Koordinierte ESG-Datenfeeds für 60 Mandate und vereinheitlichte Reporting-Rhythmen.',
                    en: 'Coordinated ESG data feeds for 60 mandates and unified reporting cadences.',
                    zh: '为 60 个委托整合 ESG 数据流，并统一报告节奏。'
                }
            },
            {
                initials: 'FI',
                names: {
                    de: 'Fabian Richter',
                    en: 'Fabian Richter',
                    zh: 'Fabian Richter'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Execution Services, Aquila Macro',
                    en: 'Lead of Execution Services, Aquila Macro',
                    zh: 'Aquila Macro 执行服务主管'
                },
                quotes: {
                    de: 'Baute DeFi-Liquiditätsmonitoring auf und sicherte 24/7 Alarmierung mit Red-Team-Tests.',
                    en: 'Built DeFi liquidity monitoring with 24/7 alerting backed by red-team drills.',
                    zh: '搭建 DeFi 流动性监控体系，并通过红队演练实现 24/7 告警。'
                }
            },
            {
                initials: 'MR9',
                names: {
                    de: 'Martin Richter',
                    en: 'Martin Richter',
                    zh: 'Martin Richter'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Head of Market Intelligence, Signal Foundry',
                    en: 'Head of Market Intelligence, Signal Foundry',
                    zh: 'Signal Foundry 市场情报负责人'
                },
                quotes: {
                    de: 'Initiierte Universitätsallianzen in acht Städten und erhöhte die Campus-Projektquote auf 94 %.',
                    en: 'Initiated university alliances in eight cities, lifting campus programme completion to 94%.',
                    zh: '联合八座城市的高校联盟，使校园项目完成率提升至 94%。'
                }
            },
            {
                initials: 'HR',
                names: {
                    de: 'Helena Richter',
                    en: 'Helena Richter',
                    zh: 'Helena Richter'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Leiter:in Quant Research, Helios Quant',
                    en: 'Head of Quant Research, Helios Quant',
                    zh: 'Helios Quant 量化研究负责人'
                },
                quotes: {
                    de: 'Skalierte Faktorplattformen für fünf Assetklassen und verkürzte Backtests um 42 %.',
                    en: 'Scaled factor platforms for five asset classes, cutting backtesting time by 42%.',
                    zh: '搭建覆盖五类资产的因子平台，将回测时间缩短 42%。'
                }
            },
            {
                initials: 'IR',
                names: {
                    de: 'Isabell Richter',
                    en: 'Isabell Richter',
                    zh: 'Isabell Richter'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Datenstrategie, Nordlicht Asset',
                    en: 'Director of Data Strategy, Nordlicht Asset',
                    zh: 'Nordlicht Asset 数据策略总监'
                },
                quotes: {
                    de: 'Automatisierte Liquiditätswarnungen reduzierten Eskalationszeiten um 35 % über 14 Desks.',
                    en: 'Automated liquidity alerts reduced escalation times by 35% across 14 desks.',
                    zh: '自动化流动性告警覆盖 14 个交易席位，响应时间缩短 35%。'
                }
            },
            {
                initials: 'CI',
                names: {
                    de: 'Charlotte Richter',
                    en: 'Charlotte Richter',
                    zh: 'Charlotte Richter'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Chief Risk Officer, Atlas Signals',
                    en: 'Chief Risk Officer, Atlas Signals',
                    zh: 'Atlas Signals 首席风险官'
                },
                quotes: {
                    de: 'Co-Investments im Volumen von 180 Mio. € strukturiert und Governance-Playbooks bereitgestellt.',
                    en: 'Structured €180m of co-investments and delivered governance playbooks.',
                    zh: '完成 1.8 亿欧元共投资结构设计，并输出治理手册。'
                }
            },
            {
                initials: 'MR3',
                names: {
                    de: 'Miriam Richter',
                    en: 'Miriam Richter',
                    zh: 'Miriam Richter'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Handelsinfrastruktur, Meridian Global',
                    en: 'Head of Trading Infrastructure, Meridian Global',
                    zh: 'Meridian Global 交易基础架构负责人'
                },
                quotes: {
                    de: 'Implementierte Stressszenarien für Energie- und Agrarmärkte mit 0 unbeantworteten Alerts.',
                    en: 'Implemented stress scenarios for energy and agri markets with zero missed alerts.',
                    zh: '上线能源与农产品市场压力测试，实现预警零漏报。'
                }
            },
            {
                initials: 'FR4',
                names: {
                    de: 'Franziska Richter',
                    en: 'Franziska Richter',
                    zh: 'Franziska Richter'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Programmleiter:in AI Lab, Silbersee Capital',
                    en: 'AI Lab Program Lead, Silbersee Capital',
                    zh: 'Silbersee Capital AI 实验室项目负责人'
                },
                quotes: {
                    de: 'Erweiterte das TIA Research OS auf drei Regionen und synchronisierte Audit-Trails.',
                    en: 'Expanded the TIA Research OS into three regions with synchronized audit trails.',
                    zh: '将 TIA Research OS 拓展至三大地区，并实现审计日志同步。'
                }
            },
            {
                initials: 'ER',
                names: {
                    de: 'Elena Richter',
                    en: 'Elena Richter',
                    zh: 'Elena Richter'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Managing Partner, Vanguard Labs Europe',
                    en: 'Managing Partner, Vanguard Labs Europe',
                    zh: 'Vanguard Labs Europe 管理合伙人'
                },
                quotes: {
                    de: 'Trainierte 120 Analyst:innen im Mentorprogramm und steigerte KPI-Erfüllung um 28 %.',
                    en: 'Trained 120 analysts through the mentor track, boosting KPI attainment by 28%.',
                    zh: '在导师项目中培养 120 名分析师，关键指标完成率提升 28%。'
                }
            },
            {
                initials: 'GR',
                names: {
                    de: 'Greta Richter',
                    en: 'Greta Richter',
                    zh: 'Greta Richter'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Portfolio Analytics, Aurora Capital Partners',
                    en: 'Director of Portfolio Analytics, Aurora Capital Partners',
                    zh: 'Aurora Capital Partners 投资组合分析总监'
                },
                quotes: {
                    de: 'Migrierte Legacy-Signale in AI-Pipelines und senkte Latenz unter 90 Millisekunden.',
                    en: 'Migrated legacy signals into AI pipelines, driving latency below 90 ms.',
                    zh: '将传统信号迁入 AI Pipeline，将延迟压低至 90 毫秒以内。'
                }
            },
            {
                initials: 'LR7',
                names: {
                    de: 'Laura Richter',
                    en: 'Laura Richter',
                    zh: 'Laura Richter'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Head of ESG Engineering, Quantum Harbor',
                    en: 'Head of ESG Engineering, Quantum Harbor',
                    zh: 'Quantum Harbor ESG 工程负责人'
                },
                quotes: {
                    de: 'Koordinierte ESG-Datenfeeds für 60 Mandate und vereinheitlichte Reporting-Rhythmen.',
                    en: 'Coordinated ESG data feeds for 60 mandates and unified reporting cadences.',
                    zh: '为 60 个委托整合 ESG 数据流，并统一报告节奏。'
                }
            },
            {
                initials: 'EI',
                names: {
                    de: 'Eva Richter',
                    en: 'Eva Richter',
                    zh: 'Eva Richter'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Execution Services, Aegis Markets',
                    en: 'Lead of Execution Services, Aegis Markets',
                    zh: 'Aegis Markets 执行服务主管'
                },
                quotes: {
                    de: 'Baute DeFi-Liquiditätsmonitoring auf und sicherte 24/7 Alarmierung mit Red-Team-Tests.',
                    en: 'Built DeFi liquidity monitoring with 24/7 alerting backed by red-team drills.',
                    zh: '搭建 DeFi 流动性监控体系，并通过红队演练实现 24/7 告警。'
                }
            },
            {
                initials: 'VR',
                names: {
                    de: 'Vanessa Richter',
                    en: 'Vanessa Richter',
                    zh: 'Vanessa Richter'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Head of Market Intelligence, Orion Research',
                    en: 'Head of Market Intelligence, Orion Research',
                    zh: 'Orion Research 市场情报负责人'
                },
                quotes: {
                    de: 'Initiierte Universitätsallianzen in acht Städten und erhöhte die Campus-Projektquote auf 94 %.',
                    en: 'Initiated university alliances in eight cities, lifting campus programme completion to 94%.',
                    zh: '联合八座城市的高校联盟，使校园项目完成率提升至 94%。'
                }
            },
            {
                initials: 'OR',
                names: {
                    de: 'Oliver Richter',
                    en: 'Oliver Richter',
                    zh: 'Oliver Richter'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Leiter:in Quant Research, Sternwerk Finance',
                    en: 'Head of Quant Research, Sternwerk Finance',
                    zh: 'Sternwerk Finance 量化研究负责人'
                },
                quotes: {
                    de: 'Skalierte Faktorplattformen für fünf Assetklassen und verkürzte Backtests um 42 %.',
                    en: 'Scaled factor platforms for five asset classes, cutting backtesting time by 42%.',
                    zh: '搭建覆盖五类资产的因子平台，将回测时间缩短 42%。'
                }
            },
            {
                initials: 'DR',
                names: {
                    de: 'David Richter',
                    en: 'David Richter',
                    zh: 'David Richter'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Datenstrategie, Blue Ridge Analytics',
                    en: 'Director of Data Strategy, Blue Ridge Analytics',
                    zh: 'Blue Ridge Analytics 数据策略总监'
                },
                quotes: {
                    de: 'Automatisierte Liquiditätswarnungen reduzierten Eskalationszeiten um 35 % über 14 Desks.',
                    en: 'Automated liquidity alerts reduced escalation times by 35% across 14 desks.',
                    zh: '自动化流动性告警覆盖 14 个交易席位，响应时间缩短 35%。'
                }
            },
            {
                initials: 'PI',
                names: {
                    de: 'Philipp Richter',
                    en: 'Philipp Richter',
                    zh: 'Philipp Richter'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Chief Risk Officer, Cascade Advisory',
                    en: 'Chief Risk Officer, Cascade Advisory',
                    zh: 'Cascade Advisory 首席风险官'
                },
                quotes: {
                    de: 'Co-Investments im Volumen von 180 Mio. € strukturiert und Governance-Playbooks bereitgestellt.',
                    en: 'Structured €180m of co-investments and delivered governance playbooks.',
                    zh: '完成 1.8 亿欧元共投资结构设计，并输出治理手册。'
                }
            },
            {
                initials: 'JI',
                names: {
                    de: 'Julian Richter',
                    en: 'Julian Richter',
                    zh: 'Julian Richter'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Handelsinfrastruktur, VectorBridge',
                    en: 'Head of Trading Infrastructure, VectorBridge',
                    zh: 'VectorBridge 交易基础架构负责人'
                },
                quotes: {
                    de: 'Implementierte Stressszenarien für Energie- und Agrarmärkte mit 0 unbeantworteten Alerts.',
                    en: 'Implemented stress scenarios for energy and agri markets with zero missed alerts.',
                    zh: '上线能源与农产品市场压力测试，实现预警零漏报。'
                }
            },
            {
                initials: 'RR',
                names: {
                    de: 'Rafael Richter',
                    en: 'Rafael Richter',
                    zh: 'Rafael Richter'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Programmleiter:in AI Lab, Polaris Futures',
                    en: 'AI Lab Program Lead, Polaris Futures',
                    zh: 'Polaris Futures AI 实验室项目负责人'
                },
                quotes: {
                    de: 'Erweiterte das TIA Research OS auf drei Regionen und synchronisierte Audit-Trails.',
                    en: 'Expanded the TIA Research OS into three regions with synchronized audit trails.',
                    zh: '将 TIA Research OS 拓展至三大地区，并实现审计日志同步。'
                }
            },
            {
                initials: 'NI',
                names: {
                    de: 'Niklas Richter',
                    en: 'Niklas Richter',
                    zh: 'Niklas Richter'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Managing Partner, Hanse Quant Labs',
                    en: 'Managing Partner, Hanse Quant Labs',
                    zh: 'Hanse Quant Labs 管理合伙人'
                },
                quotes: {
                    de: 'Trainierte 120 Analyst:innen im Mentorprogramm und steigerte KPI-Erfüllung um 28 %.',
                    en: 'Trained 120 analysts through the mentor track, boosting KPI attainment by 28%.',
                    zh: '在导师项目中培养 120 名分析师，关键指标完成率提升 28%。'
                }
            },
            {
                initials: 'DI',
                names: {
                    de: 'Dominik Richter',
                    en: 'Dominik Richter',
                    zh: 'Dominik Richter'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Portfolio Analytics, Summit Ridge Partners',
                    en: 'Director of Portfolio Analytics, Summit Ridge Partners',
                    zh: 'Summit Ridge Partners 投资组合分析总监'
                },
                quotes: {
                    de: 'Migrierte Legacy-Signale in AI-Pipelines und senkte Latenz unter 90 Millisekunden.',
                    en: 'Migrated legacy signals into AI pipelines, driving latency below 90 ms.',
                    zh: '将传统信号迁入 AI Pipeline，将延迟压低至 90 毫秒以内。'
                }
            },
            {
                initials: 'SR7',
                names: {
                    de: 'Stefan Richter',
                    en: 'Stefan Richter',
                    zh: 'Stefan Richter'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Head of ESG Engineering, Momentum Forge',
                    en: 'Head of ESG Engineering, Momentum Forge',
                    zh: 'Momentum Forge ESG 工程负责人'
                },
                quotes: {
                    de: 'Koordinierte ESG-Datenfeeds für 60 Mandate und vereinheitlichte Reporting-Rhythmen.',
                    en: 'Coordinated ESG data feeds for 60 mandates and unified reporting cadences.',
                    zh: '为 60 个委托整合 ESG 数据流，并统一报告节奏。'
                }
            },
            {
                initials: 'MR8',
                names: {
                    de: 'Marco Richter',
                    en: 'Marco Richter',
                    zh: 'Marco Richter'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Execution Services, Aquila Macro',
                    en: 'Lead of Execution Services, Aquila Macro',
                    zh: 'Aquila Macro 执行服务主管'
                },
                quotes: {
                    de: 'Baute DeFi-Liquiditätsmonitoring auf und sicherte 24/7 Alarmierung mit Red-Team-Tests.',
                    en: 'Built DeFi liquidity monitoring with 24/7 alerting backed by red-team drills.',
                    zh: '搭建 DeFi 流动性监控体系，并通过红队演练实现 24/7 告警。'
                }
            },
            {
                initials: 'AI',
                names: {
                    de: 'Alexander Richter',
                    en: 'Alexander Richter',
                    zh: 'Alexander Richter'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Head of Market Intelligence, Signal Foundry',
                    en: 'Head of Market Intelligence, Signal Foundry',
                    zh: 'Signal Foundry 市场情报负责人'
                },
                quotes: {
                    de: 'Initiierte Universitätsallianzen in acht Städten und erhöhte die Campus-Projektquote auf 94 %.',
                    en: 'Initiated university alliances in eight cities, lifting campus programme completion to 94%.',
                    zh: '联合八座城市的高校联盟，使校园项目完成率提升至 94%。'
                }
            },
            {
                initials: 'AW',
                names: {
                    de: 'Anna Weiss',
                    en: 'Anna Weiss',
                    zh: 'Anna Weiss'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Leiter:in Quant Research, Helios Quant',
                    en: 'Head of Quant Research, Helios Quant',
                    zh: 'Helios Quant 量化研究负责人'
                },
                quotes: {
                    de: 'Skalierte Faktorplattformen für fünf Assetklassen und verkürzte Backtests um 42 %.',
                    en: 'Scaled factor platforms for five asset classes, cutting backtesting time by 42%.',
                    zh: '搭建覆盖五类资产的因子平台，将回测时间缩短 42%。'
                }
            },
            {
                initials: 'LW',
                names: {
                    de: 'Lena Weiss',
                    en: 'Lena Weiss',
                    zh: 'Lena Weiss'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Datenstrategie, Nordlicht Asset',
                    en: 'Director of Data Strategy, Nordlicht Asset',
                    zh: 'Nordlicht Asset 数据策略总监'
                },
                quotes: {
                    de: 'Automatisierte Liquiditätswarnungen reduzierten Eskalationszeiten um 35 % über 14 Desks.',
                    en: 'Automated liquidity alerts reduced escalation times by 35% across 14 desks.',
                    zh: '自动化流动性告警覆盖 14 个交易席位，响应时间缩短 35%。'
                }
            },
            {
                initials: 'MW',
                names: {
                    de: 'Mara Weiss',
                    en: 'Mara Weiss',
                    zh: 'Mara Weiss'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Chief Risk Officer, Atlas Signals',
                    en: 'Chief Risk Officer, Atlas Signals',
                    zh: 'Atlas Signals 首席风险官'
                },
                quotes: {
                    de: 'Co-Investments im Volumen von 180 Mio. € strukturiert und Governance-Playbooks bereitgestellt.',
                    en: 'Structured €180m of co-investments and delivered governance playbooks.',
                    zh: '完成 1.8 亿欧元共投资结构设计，并输出治理手册。'
                }
            },
            {
                initials: 'CE',
                names: {
                    de: 'Clara Weiss',
                    en: 'Clara Weiss',
                    zh: 'Clara Weiss'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Handelsinfrastruktur, Meridian Global',
                    en: 'Head of Trading Infrastructure, Meridian Global',
                    zh: 'Meridian Global 交易基础架构负责人'
                },
                quotes: {
                    de: 'Implementierte Stressszenarien für Energie- und Agrarmärkte mit 0 unbeantworteten Alerts.',
                    en: 'Implemented stress scenarios for energy and agri markets with zero missed alerts.',
                    zh: '上线能源与农产品市场压力测试，实现预警零漏报。'
                }
            },
            {
                initials: 'NW',
                names: {
                    de: 'Nina Weiss',
                    en: 'Nina Weiss',
                    zh: 'Nina Weiss'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Programmleiter:in AI Lab, Silbersee Capital',
                    en: 'AI Lab Program Lead, Silbersee Capital',
                    zh: 'Silbersee Capital AI 实验室项目负责人'
                },
                quotes: {
                    de: 'Erweiterte das TIA Research OS auf drei Regionen und synchronisierte Audit-Trails.',
                    en: 'Expanded the TIA Research OS into three regions with synchronized audit trails.',
                    zh: '将 TIA Research OS 拓展至三大地区，并实现审计日志同步。'
                }
            },
            {
                initials: 'SW',
                names: {
                    de: 'Sophie Weiss',
                    en: 'Sophie Weiss',
                    zh: 'Sophie Weiss'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Managing Partner, Vanguard Labs Europe',
                    en: 'Managing Partner, Vanguard Labs Europe',
                    zh: 'Vanguard Labs Europe 管理合伙人'
                },
                quotes: {
                    de: 'Trainierte 120 Analyst:innen im Mentorprogramm und steigerte KPI-Erfüllung um 28 %.',
                    en: 'Trained 120 analysts through the mentor track, boosting KPI attainment by 28%.',
                    zh: '在导师项目中培养 120 名分析师，关键指标完成率提升 28%。'
                }
            },
            {
                initials: 'LE',
                names: {
                    de: 'Larissa Weiss',
                    en: 'Larissa Weiss',
                    zh: 'Larissa Weiss'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Portfolio Analytics, Aurora Capital Partners',
                    en: 'Director of Portfolio Analytics, Aurora Capital Partners',
                    zh: 'Aurora Capital Partners 投资组合分析总监'
                },
                quotes: {
                    de: 'Migrierte Legacy-Signale in AI-Pipelines und senkte Latenz unter 90 Millisekunden.',
                    en: 'Migrated legacy signals into AI pipelines, driving latency below 90 ms.',
                    zh: '将传统信号迁入 AI Pipeline，将延迟压低至 90 毫秒以内。'
                }
            },
            {
                initials: 'KW',
                names: {
                    de: 'Katrin Weiss',
                    en: 'Katrin Weiss',
                    zh: 'Katrin Weiss'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Head of ESG Engineering, Quantum Harbor',
                    en: 'Head of ESG Engineering, Quantum Harbor',
                    zh: 'Quantum Harbor ESG 工程负责人'
                },
                quotes: {
                    de: 'Koordinierte ESG-Datenfeeds für 60 Mandate und vereinheitlichte Reporting-Rhythmen.',
                    en: 'Coordinated ESG data feeds for 60 mandates and unified reporting cadences.',
                    zh: '为 60 个委托整合 ESG 数据流，并统一报告节奏。'
                }
            },
            {
                initials: 'LW8',
                names: {
                    de: 'Lea Weiss',
                    en: 'Lea Weiss',
                    zh: 'Lea Weiss'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Execution Services, Aegis Markets',
                    en: 'Lead of Execution Services, Aegis Markets',
                    zh: 'Aegis Markets 执行服务主管'
                },
                quotes: {
                    de: 'Baute DeFi-Liquiditätsmonitoring auf und sicherte 24/7 Alarmierung mit Red-Team-Tests.',
                    en: 'Built DeFi liquidity monitoring with 24/7 alerting backed by red-team drills.',
                    zh: '搭建 DeFi 流动性监控体系，并通过红队演练实现 24/7 告警。'
                }
            },
            {
                initials: 'PW',
                names: {
                    de: 'Paula Weiss',
                    en: 'Paula Weiss',
                    zh: 'Paula Weiss'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Head of Market Intelligence, Orion Research',
                    en: 'Head of Market Intelligence, Orion Research',
                    zh: 'Orion Research 市场情报负责人'
                },
                quotes: {
                    de: 'Initiierte Universitätsallianzen in acht Städten und erhöhte die Campus-Projektquote auf 94 %.',
                    en: 'Initiated university alliances in eight cities, lifting campus programme completion to 94%.',
                    zh: '联合八座城市的高校联盟，使校园项目完成率提升至 94%。'
                }
            },
            {
                initials: 'JW',
                names: {
                    de: 'Jonas Weiss',
                    en: 'Jonas Weiss',
                    zh: 'Jonas Weiss'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Leiter:in Quant Research, Sternwerk Finance',
                    en: 'Head of Quant Research, Sternwerk Finance',
                    zh: 'Sternwerk Finance 量化研究负责人'
                },
                quotes: {
                    de: 'Skalierte Faktorplattformen für fünf Assetklassen und verkürzte Backtests um 42 %.',
                    en: 'Scaled factor platforms for five asset classes, cutting backtesting time by 42%.',
                    zh: '搭建覆盖五类资产的因子平台，将回测时间缩短 42%。'
                }
            },
            {
                initials: 'TW',
                names: {
                    de: 'Tobias Weiss',
                    en: 'Tobias Weiss',
                    zh: 'Tobias Weiss'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Datenstrategie, Blue Ridge Analytics',
                    en: 'Director of Data Strategy, Blue Ridge Analytics',
                    zh: 'Blue Ridge Analytics 数据策略总监'
                },
                quotes: {
                    de: 'Automatisierte Liquiditätswarnungen reduzierten Eskalationszeiten um 35 % über 14 Desks.',
                    en: 'Automated liquidity alerts reduced escalation times by 35% across 14 desks.',
                    zh: '自动化流动性告警覆盖 14 个交易席位，响应时间缩短 35%。'
                }
            },
            {
                initials: 'FW',
                names: {
                    de: 'Felix Weiss',
                    en: 'Felix Weiss',
                    zh: 'Felix Weiss'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Chief Risk Officer, Cascade Advisory',
                    en: 'Chief Risk Officer, Cascade Advisory',
                    zh: 'Cascade Advisory 首席风险官'
                },
                quotes: {
                    de: 'Co-Investments im Volumen von 180 Mio. € strukturiert und Governance-Playbooks bereitgestellt.',
                    en: 'Structured €180m of co-investments and delivered governance playbooks.',
                    zh: '完成 1.8 亿欧元共投资结构设计，并输出治理手册。'
                }
            },
            {
                initials: 'ME',
                names: {
                    de: 'Matthias Weiss',
                    en: 'Matthias Weiss',
                    zh: 'Matthias Weiss'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Handelsinfrastruktur, VectorBridge',
                    en: 'Head of Trading Infrastructure, VectorBridge',
                    zh: 'VectorBridge 交易基础架构负责人'
                },
                quotes: {
                    de: 'Implementierte Stressszenarien für Energie- und Agrarmärkte mit 0 unbeantworteten Alerts.',
                    en: 'Implemented stress scenarios for energy and agri markets with zero missed alerts.',
                    zh: '上线能源与农产品市场压力测试，实现预警零漏报。'
                }
            },
            {
                initials: 'SE',
                names: {
                    de: 'Sebastian Weiss',
                    en: 'Sebastian Weiss',
                    zh: 'Sebastian Weiss'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Programmleiter:in AI Lab, Polaris Futures',
                    en: 'AI Lab Program Lead, Polaris Futures',
                    zh: 'Polaris Futures AI 实验室项目负责人'
                },
                quotes: {
                    de: 'Erweiterte das TIA Research OS auf drei Regionen und synchronisierte Audit-Trails.',
                    en: 'Expanded the TIA Research OS into three regions with synchronized audit trails.',
                    zh: '将 TIA Research OS 拓展至三大地区，并实现审计日志同步。'
                }
            },
            {
                initials: 'LW5',
                names: {
                    de: 'Lukas Weiss',
                    en: 'Lukas Weiss',
                    zh: 'Lukas Weiss'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Managing Partner, Hanse Quant Labs',
                    en: 'Managing Partner, Hanse Quant Labs',
                    zh: 'Hanse Quant Labs 管理合伙人'
                },
                quotes: {
                    de: 'Trainierte 120 Analyst:innen im Mentorprogramm und steigerte KPI-Erfüllung um 28 %.',
                    en: 'Trained 120 analysts through the mentor track, boosting KPI attainment by 28%.',
                    zh: '在导师项目中培养 120 名分析师，关键指标完成率提升 28%。'
                }
            },
            {
                initials: 'SW6',
                names: {
                    de: 'Simon Weiss',
                    en: 'Simon Weiss',
                    zh: 'Simon Weiss'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Portfolio Analytics, Summit Ridge Partners',
                    en: 'Director of Portfolio Analytics, Summit Ridge Partners',
                    zh: 'Summit Ridge Partners 投资组合分析总监'
                },
                quotes: {
                    de: 'Migrierte Legacy-Signale in AI-Pipelines und senkte Latenz unter 90 Millisekunden.',
                    en: 'Migrated legacy signals into AI pipelines, driving latency below 90 ms.',
                    zh: '将传统信号迁入 AI Pipeline，将延迟压低至 90 毫秒以内。'
                }
            },
            {
                initials: 'BW',
                names: {
                    de: 'Benedikt Weiss',
                    en: 'Benedikt Weiss',
                    zh: 'Benedikt Weiss'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Head of ESG Engineering, Momentum Forge',
                    en: 'Head of ESG Engineering, Momentum Forge',
                    zh: 'Momentum Forge ESG 工程负责人'
                },
                quotes: {
                    de: 'Koordinierte ESG-Datenfeeds für 60 Mandate und vereinheitlichte Reporting-Rhythmen.',
                    en: 'Coordinated ESG data feeds for 60 mandates and unified reporting cadences.',
                    zh: '为 60 个委托整合 ESG 数据流，并统一报告节奏。'
                }
            },
            {
                initials: 'FE',
                names: {
                    de: 'Fabian Weiss',
                    en: 'Fabian Weiss',
                    zh: 'Fabian Weiss'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Execution Services, Aquila Macro',
                    en: 'Lead of Execution Services, Aquila Macro',
                    zh: 'Aquila Macro 执行服务主管'
                },
                quotes: {
                    de: 'Baute DeFi-Liquiditätsmonitoring auf und sicherte 24/7 Alarmierung mit Red-Team-Tests.',
                    en: 'Built DeFi liquidity monitoring with 24/7 alerting backed by red-team drills.',
                    zh: '搭建 DeFi 流动性监控体系，并通过红队演练实现 24/7 告警。'
                }
            },
            {
                initials: 'MW9',
                names: {
                    de: 'Martin Weiss',
                    en: 'Martin Weiss',
                    zh: 'Martin Weiss'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Head of Market Intelligence, Signal Foundry',
                    en: 'Head of Market Intelligence, Signal Foundry',
                    zh: 'Signal Foundry 市场情报负责人'
                },
                quotes: {
                    de: 'Initiierte Universitätsallianzen in acht Städten und erhöhte die Campus-Projektquote auf 94 %.',
                    en: 'Initiated university alliances in eight cities, lifting campus programme completion to 94%.',
                    zh: '联合八座城市的高校联盟，使校园项目完成率提升至 94%。'
                }
            },
            {
                initials: 'HW',
                names: {
                    de: 'Helena Weiss',
                    en: 'Helena Weiss',
                    zh: 'Helena Weiss'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Leiter:in Quant Research, Helios Quant',
                    en: 'Head of Quant Research, Helios Quant',
                    zh: 'Helios Quant 量化研究负责人'
                },
                quotes: {
                    de: 'Skalierte Faktorplattformen für fünf Assetklassen und verkürzte Backtests um 42 %.',
                    en: 'Scaled factor platforms for five asset classes, cutting backtesting time by 42%.',
                    zh: '搭建覆盖五类资产的因子平台，将回测时间缩短 42%。'
                }
            },
            {
                initials: 'IW',
                names: {
                    de: 'Isabell Weiss',
                    en: 'Isabell Weiss',
                    zh: 'Isabell Weiss'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Datenstrategie, Nordlicht Asset',
                    en: 'Director of Data Strategy, Nordlicht Asset',
                    zh: 'Nordlicht Asset 数据策略总监'
                },
                quotes: {
                    de: 'Automatisierte Liquiditätswarnungen reduzierten Eskalationszeiten um 35 % über 14 Desks.',
                    en: 'Automated liquidity alerts reduced escalation times by 35% across 14 desks.',
                    zh: '自动化流动性告警覆盖 14 个交易席位，响应时间缩短 35%。'
                }
            },
            {
                initials: 'CW2',
                names: {
                    de: 'Charlotte Weiss',
                    en: 'Charlotte Weiss',
                    zh: 'Charlotte Weiss'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Chief Risk Officer, Atlas Signals',
                    en: 'Chief Risk Officer, Atlas Signals',
                    zh: 'Atlas Signals 首席风险官'
                },
                quotes: {
                    de: 'Co-Investments im Volumen von 180 Mio. € strukturiert und Governance-Playbooks bereitgestellt.',
                    en: 'Structured €180m of co-investments and delivered governance playbooks.',
                    zh: '完成 1.8 亿欧元共投资结构设计，并输出治理手册。'
                }
            },
            {
                initials: 'MW3',
                names: {
                    de: 'Miriam Weiss',
                    en: 'Miriam Weiss',
                    zh: 'Miriam Weiss'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Handelsinfrastruktur, Meridian Global',
                    en: 'Head of Trading Infrastructure, Meridian Global',
                    zh: 'Meridian Global 交易基础架构负责人'
                },
                quotes: {
                    de: 'Implementierte Stressszenarien für Energie- und Agrarmärkte mit 0 unbeantworteten Alerts.',
                    en: 'Implemented stress scenarios for energy and agri markets with zero missed alerts.',
                    zh: '上线能源与农产品市场压力测试，实现预警零漏报。'
                }
            },
            {
                initials: 'FW4',
                names: {
                    de: 'Franziska Weiss',
                    en: 'Franziska Weiss',
                    zh: 'Franziska Weiss'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Programmleiter:in AI Lab, Silbersee Capital',
                    en: 'AI Lab Program Lead, Silbersee Capital',
                    zh: 'Silbersee Capital AI 实验室项目负责人'
                },
                quotes: {
                    de: 'Erweiterte das TIA Research OS auf drei Regionen und synchronisierte Audit-Trails.',
                    en: 'Expanded the TIA Research OS into three regions with synchronized audit trails.',
                    zh: '将 TIA Research OS 拓展至三大地区，并实现审计日志同步。'
                }
            },
            {
                initials: 'EW',
                names: {
                    de: 'Elena Weiss',
                    en: 'Elena Weiss',
                    zh: 'Elena Weiss'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Managing Partner, Vanguard Labs Europe',
                    en: 'Managing Partner, Vanguard Labs Europe',
                    zh: 'Vanguard Labs Europe 管理合伙人'
                },
                quotes: {
                    de: 'Trainierte 120 Analyst:innen im Mentorprogramm und steigerte KPI-Erfüllung um 28 %.',
                    en: 'Trained 120 analysts through the mentor track, boosting KPI attainment by 28%.',
                    zh: '在导师项目中培养 120 名分析师，关键指标完成率提升 28%。'
                }
            },
            {
                initials: 'GW',
                names: {
                    de: 'Greta Weiss',
                    en: 'Greta Weiss',
                    zh: 'Greta Weiss'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Portfolio Analytics, Aurora Capital Partners',
                    en: 'Director of Portfolio Analytics, Aurora Capital Partners',
                    zh: 'Aurora Capital Partners 投资组合分析总监'
                },
                quotes: {
                    de: 'Migrierte Legacy-Signale in AI-Pipelines und senkte Latenz unter 90 Millisekunden.',
                    en: 'Migrated legacy signals into AI pipelines, driving latency below 90 ms.',
                    zh: '将传统信号迁入 AI Pipeline，将延迟压低至 90 毫秒以内。'
                }
            },
            {
                initials: 'LW7',
                names: {
                    de: 'Laura Weiss',
                    en: 'Laura Weiss',
                    zh: 'Laura Weiss'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Head of ESG Engineering, Quantum Harbor',
                    en: 'Head of ESG Engineering, Quantum Harbor',
                    zh: 'Quantum Harbor ESG 工程负责人'
                },
                quotes: {
                    de: 'Koordinierte ESG-Datenfeeds für 60 Mandate und vereinheitlichte Reporting-Rhythmen.',
                    en: 'Coordinated ESG data feeds for 60 mandates and unified reporting cadences.',
                    zh: '为 60 个委托整合 ESG 数据流，并统一报告节奏。'
                }
            },
            {
                initials: 'EE',
                names: {
                    de: 'Eva Weiss',
                    en: 'Eva Weiss',
                    zh: 'Eva Weiss'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Execution Services, Aegis Markets',
                    en: 'Lead of Execution Services, Aegis Markets',
                    zh: 'Aegis Markets 执行服务主管'
                },
                quotes: {
                    de: 'Baute DeFi-Liquiditätsmonitoring auf und sicherte 24/7 Alarmierung mit Red-Team-Tests.',
                    en: 'Built DeFi liquidity monitoring with 24/7 alerting backed by red-team drills.',
                    zh: '搭建 DeFi 流动性监控体系，并通过红队演练实现 24/7 告警。'
                }
            },
            {
                initials: 'VW',
                names: {
                    de: 'Vanessa Weiss',
                    en: 'Vanessa Weiss',
                    zh: 'Vanessa Weiss'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Head of Market Intelligence, Orion Research',
                    en: 'Head of Market Intelligence, Orion Research',
                    zh: 'Orion Research 市场情报负责人'
                },
                quotes: {
                    de: 'Initiierte Universitätsallianzen in acht Städten und erhöhte die Campus-Projektquote auf 94 %.',
                    en: 'Initiated university alliances in eight cities, lifting campus programme completion to 94%.',
                    zh: '联合八座城市的高校联盟，使校园项目完成率提升至 94%。'
                }
            },
            {
                initials: 'OW',
                names: {
                    de: 'Oliver Weiss',
                    en: 'Oliver Weiss',
                    zh: 'Oliver Weiss'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Leiter:in Quant Research, Sternwerk Finance',
                    en: 'Head of Quant Research, Sternwerk Finance',
                    zh: 'Sternwerk Finance 量化研究负责人'
                },
                quotes: {
                    de: 'Skalierte Faktorplattformen für fünf Assetklassen und verkürzte Backtests um 42 %.',
                    en: 'Scaled factor platforms for five asset classes, cutting backtesting time by 42%.',
                    zh: '搭建覆盖五类资产的因子平台，将回测时间缩短 42%。'
                }
            },
            {
                initials: 'DW',
                names: {
                    de: 'David Weiss',
                    en: 'David Weiss',
                    zh: 'David Weiss'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Datenstrategie, Blue Ridge Analytics',
                    en: 'Director of Data Strategy, Blue Ridge Analytics',
                    zh: 'Blue Ridge Analytics 数据策略总监'
                },
                quotes: {
                    de: 'Automatisierte Liquiditätswarnungen reduzierten Eskalationszeiten um 35 % über 14 Desks.',
                    en: 'Automated liquidity alerts reduced escalation times by 35% across 14 desks.',
                    zh: '自动化流动性告警覆盖 14 个交易席位，响应时间缩短 35%。'
                }
            },
            {
                initials: 'PE',
                names: {
                    de: 'Philipp Weiss',
                    en: 'Philipp Weiss',
                    zh: 'Philipp Weiss'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Chief Risk Officer, Cascade Advisory',
                    en: 'Chief Risk Officer, Cascade Advisory',
                    zh: 'Cascade Advisory 首席风险官'
                },
                quotes: {
                    de: 'Co-Investments im Volumen von 180 Mio. € strukturiert und Governance-Playbooks bereitgestellt.',
                    en: 'Structured €180m of co-investments and delivered governance playbooks.',
                    zh: '完成 1.8 亿欧元共投资结构设计，并输出治理手册。'
                }
            },
            {
                initials: 'JE',
                names: {
                    de: 'Julian Weiss',
                    en: 'Julian Weiss',
                    zh: 'Julian Weiss'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Handelsinfrastruktur, VectorBridge',
                    en: 'Head of Trading Infrastructure, VectorBridge',
                    zh: 'VectorBridge 交易基础架构负责人'
                },
                quotes: {
                    de: 'Implementierte Stressszenarien für Energie- und Agrarmärkte mit 0 unbeantworteten Alerts.',
                    en: 'Implemented stress scenarios for energy and agri markets with zero missed alerts.',
                    zh: '上线能源与农产品市场压力测试，实现预警零漏报。'
                }
            },
            {
                initials: 'RW',
                names: {
                    de: 'Rafael Weiss',
                    en: 'Rafael Weiss',
                    zh: 'Rafael Weiss'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Programmleiter:in AI Lab, Polaris Futures',
                    en: 'AI Lab Program Lead, Polaris Futures',
                    zh: 'Polaris Futures AI 实验室项目负责人'
                },
                quotes: {
                    de: 'Erweiterte das TIA Research OS auf drei Regionen und synchronisierte Audit-Trails.',
                    en: 'Expanded the TIA Research OS into three regions with synchronized audit trails.',
                    zh: '将 TIA Research OS 拓展至三大地区，并实现审计日志同步。'
                }
            },
            {
                initials: 'NE',
                names: {
                    de: 'Niklas Weiss',
                    en: 'Niklas Weiss',
                    zh: 'Niklas Weiss'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Managing Partner, Hanse Quant Labs',
                    en: 'Managing Partner, Hanse Quant Labs',
                    zh: 'Hanse Quant Labs 管理合伙人'
                },
                quotes: {
                    de: 'Trainierte 120 Analyst:innen im Mentorprogramm und steigerte KPI-Erfüllung um 28 %.',
                    en: 'Trained 120 analysts through the mentor track, boosting KPI attainment by 28%.',
                    zh: '在导师项目中培养 120 名分析师，关键指标完成率提升 28%。'
                }
            },
            {
                initials: 'DE',
                names: {
                    de: 'Dominik Weiss',
                    en: 'Dominik Weiss',
                    zh: 'Dominik Weiss'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Portfolio Analytics, Summit Ridge Partners',
                    en: 'Director of Portfolio Analytics, Summit Ridge Partners',
                    zh: 'Summit Ridge Partners 投资组合分析总监'
                },
                quotes: {
                    de: 'Migrierte Legacy-Signale in AI-Pipelines und senkte Latenz unter 90 Millisekunden.',
                    en: 'Migrated legacy signals into AI pipelines, driving latency below 90 ms.',
                    zh: '将传统信号迁入 AI Pipeline，将延迟压低至 90 毫秒以内。'
                }
            },
            {
                initials: 'SW7',
                names: {
                    de: 'Stefan Weiss',
                    en: 'Stefan Weiss',
                    zh: 'Stefan Weiss'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Head of ESG Engineering, Momentum Forge',
                    en: 'Head of ESG Engineering, Momentum Forge',
                    zh: 'Momentum Forge ESG 工程负责人'
                },
                quotes: {
                    de: 'Koordinierte ESG-Datenfeeds für 60 Mandate und vereinheitlichte Reporting-Rhythmen.',
                    en: 'Coordinated ESG data feeds for 60 mandates and unified reporting cadences.',
                    zh: '为 60 个委托整合 ESG 数据流，并统一报告节奏。'
                }
            },
            {
                initials: 'MW8',
                names: {
                    de: 'Marco Weiss',
                    en: 'Marco Weiss',
                    zh: 'Marco Weiss'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Execution Services, Aquila Macro',
                    en: 'Lead of Execution Services, Aquila Macro',
                    zh: 'Aquila Macro 执行服务主管'
                },
                quotes: {
                    de: 'Baute DeFi-Liquiditätsmonitoring auf und sicherte 24/7 Alarmierung mit Red-Team-Tests.',
                    en: 'Built DeFi liquidity monitoring with 24/7 alerting backed by red-team drills.',
                    zh: '搭建 DeFi 流动性监控体系，并通过红队演练实现 24/7 告警。'
                }
            },
            {
                initials: 'AE',
                names: {
                    de: 'Alexander Weiss',
                    en: 'Alexander Weiss',
                    zh: 'Alexander Weiss'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Head of Market Intelligence, Signal Foundry',
                    en: 'Head of Market Intelligence, Signal Foundry',
                    zh: 'Signal Foundry 市场情报负责人'
                },
                quotes: {
                    de: 'Initiierte Universitätsallianzen in acht Städten und erhöhte die Campus-Projektquote auf 94 %.',
                    en: 'Initiated university alliances in eight cities, lifting campus programme completion to 94%.',
                    zh: '联合八座城市的高校联盟，使校园项目完成率提升至 94%。'
                }
            },
            {
                initials: 'AH',
                names: {
                    de: 'Anna Hofmann',
                    en: 'Anna Hofmann',
                    zh: 'Anna Hofmann'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Leiter:in Quant Research, Helios Quant',
                    en: 'Head of Quant Research, Helios Quant',
                    zh: 'Helios Quant 量化研究负责人'
                },
                quotes: {
                    de: 'Skalierte Faktorplattformen für fünf Assetklassen und verkürzte Backtests um 42 %.',
                    en: 'Scaled factor platforms for five asset classes, cutting backtesting time by 42%.',
                    zh: '搭建覆盖五类资产的因子平台，将回测时间缩短 42%。'
                }
            },
            {
                initials: 'LH',
                names: {
                    de: 'Lena Hofmann',
                    en: 'Lena Hofmann',
                    zh: 'Lena Hofmann'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Datenstrategie, Nordlicht Asset',
                    en: 'Director of Data Strategy, Nordlicht Asset',
                    zh: 'Nordlicht Asset 数据策略总监'
                },
                quotes: {
                    de: 'Automatisierte Liquiditätswarnungen reduzierten Eskalationszeiten um 35 % über 14 Desks.',
                    en: 'Automated liquidity alerts reduced escalation times by 35% across 14 desks.',
                    zh: '自动化流动性告警覆盖 14 个交易席位，响应时间缩短 35%。'
                }
            },
            {
                initials: 'MO',
                names: {
                    de: 'Mara Hofmann',
                    en: 'Mara Hofmann',
                    zh: 'Mara Hofmann'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Chief Risk Officer, Atlas Signals',
                    en: 'Chief Risk Officer, Atlas Signals',
                    zh: 'Atlas Signals 首席风险官'
                },
                quotes: {
                    de: 'Co-Investments im Volumen von 180 Mio. € strukturiert und Governance-Playbooks bereitgestellt.',
                    en: 'Structured €180m of co-investments and delivered governance playbooks.',
                    zh: '完成 1.8 亿欧元共投资结构设计，并输出治理手册。'
                }
            },
            {
                initials: 'CH',
                names: {
                    de: 'Clara Hofmann',
                    en: 'Clara Hofmann',
                    zh: 'Clara Hofmann'
                },
                cohorts: {
                    de: 'Kohorte II (2022–2023)',
                    en: 'Cohort II (2022–2023)',
                    zh: '第 2 期 · 2022-2023'
                },
                roles: {
                    de: 'Leiter:in Handelsinfrastruktur, Meridian Global',
                    en: 'Head of Trading Infrastructure, Meridian Global',
                    zh: 'Meridian Global 交易基础架构负责人'
                },
                quotes: {
                    de: 'Implementierte Stressszenarien für Energie- und Agrarmärkte mit 0 unbeantworteten Alerts.',
                    en: 'Implemented stress scenarios for energy and agri markets with zero missed alerts.',
                    zh: '上线能源与农产品市场压力测试，实现预警零漏报。'
                }
            },
            {
                initials: 'NH',
                names: {
                    de: 'Nina Hofmann',
                    en: 'Nina Hofmann',
                    zh: 'Nina Hofmann'
                },
                cohorts: {
                    de: 'Kohorte I (2021–2022)',
                    en: 'Cohort I (2021–2022)',
                    zh: '第 1 期 · 2021-2022'
                },
                roles: {
                    de: 'Programmleiter:in AI Lab, Silbersee Capital',
                    en: 'AI Lab Program Lead, Silbersee Capital',
                    zh: 'Silbersee Capital AI 实验室项目负责人'
                },
                quotes: {
                    de: 'Erweiterte das TIA Research OS auf drei Regionen und synchronisierte Audit-Trails.',
                    en: 'Expanded the TIA Research OS into three regions with synchronized audit trails.',
                    zh: '将 TIA Research OS 拓展至三大地区，并实现审计日志同步。'
                }
            },
            {
                initials: 'SH',
                names: {
                    de: 'Sophie Hofmann',
                    en: 'Sophie Hofmann',
                    zh: 'Sophie Hofmann'
                },
                cohorts: {
                    de: 'Kohorte V (2025–2026)',
                    en: 'Cohort V (2025–2026)',
                    zh: '第 5 期 · 2025-2026'
                },
                roles: {
                    de: 'Managing Partner, Vanguard Labs Europe',
                    en: 'Managing Partner, Vanguard Labs Europe',
                    zh: 'Vanguard Labs Europe 管理合伙人'
                },
                quotes: {
                    de: 'Trainierte 120 Analyst:innen im Mentorprogramm und steigerte KPI-Erfüllung um 28 %.',
                    en: 'Trained 120 analysts through the mentor track, boosting KPI attainment by 28%.',
                    zh: '在导师项目中培养 120 名分析师，关键指标完成率提升 28%。'
                }
            },
            {
                initials: 'LO',
                names: {
                    de: 'Larissa Hofmann',
                    en: 'Larissa Hofmann',
                    zh: 'Larissa Hofmann'
                },
                cohorts: {
                    de: 'Kohorte IV (2024–2025)',
                    en: 'Cohort IV (2024–2025)',
                    zh: '第 4 期 · 2024-2025'
                },
                roles: {
                    de: 'Direktor:in Portfolio Analytics, Aurora Capital Partners',
                    en: 'Director of Portfolio Analytics, Aurora Capital Partners',
                    zh: 'Aurora Capital Partners 投资组合分析总监'
                },
                quotes: {
                    de: 'Migrierte Legacy-Signale in AI-Pipelines und senkte Latenz unter 90 Millisekunden.',
                    en: 'Migrated legacy signals into AI pipelines, driving latency below 90 ms.',
                    zh: '将传统信号迁入 AI Pipeline，将延迟压低至 90 毫秒以内。'
                }
            },
            {
                initials: 'KH',
                names: {
                    de: 'Katrin Hofmann',
                    en: 'Katrin Hofmann',
                    zh: 'Katrin Hofmann'
                },
                cohorts: {
                    de: 'Kohorte III (2023–2024)',
                    en: 'Cohort III (2023–2024)',
                    zh: '第 3 期 · 2023-2024'
                },
                roles: {
                    de: 'Head of ESG Engineering, Quantum Harbor',
                    en: 'Head of ESG Engineering, Quantum Harbor',
                    zh: 'Quantum Harbor ESG 工程负责人'
                },
                quotes: {
                    de: 'Koordinierte ESG-Datenfeeds für 60 Mandate und vereinheitlichte Reporting-Rhythmen.',
                    en: 'Coordinated ESG data feeds for 60 mandates and unified reporting cadences.',
                    zh: '为 60 个委托整合 ESG 数据流，并统一报告节奏。'
                }
            },

        ];

        const ALUMNI_PAGE_SIZE = 9;

        const alumniData = {
            de: alumniBase.map((item) => ({
                initials: item.initials,
                name: item.names.de,
                cohort: item.cohorts.de,
                role: item.roles.de,
                quote: item.quotes.de
            })),
            en: alumniBase.map((item) => ({
                initials: item.initials,
                name: item.names.en,
                cohort: item.cohorts.en,
                role: item.roles.en,
                quote: item.quotes.en
            })),
            zh: alumniBase.map((item) => ({
                initials: item.initials,
                name: item.names.zh,
                cohort: item.cohorts.zh,
                role: item.roles.zh,
                quote: item.quotes.zh
            }))
        };

        const state = {
            language: 'de',
            alumniPage: 1,
            pdfDoc: null,
            pdfPage: 1,
            pdfUrl: null,
            pdfModule: null
        };

        const pdfElements = {
            wrapper: document.getElementById('pdf-viewer'),
            canvas: document.getElementById('pdf-canvas'),
            prev: document.getElementById('pdf-prev'),
            next: document.getElementById('pdf-next'),
            pageInfo: document.getElementById('pdf-page-info'),
            title: document.getElementById('pdf-title'),
            download: document.getElementById('pdf-download')
        };

        const pdfContext = pdfElements.canvas ? pdfElements.canvas.getContext('2d') : null;

        if (pdfElements.wrapper && window.pdfjsLib) {
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        }

        function applyTranslations(lang) {
            const dict = translations[lang] || translations.de;
            document.querySelectorAll('[data-i18n]').forEach((el) => {
                const key = el.dataset.i18n;
                if (dict[key]) {
                    el.innerHTML = dict[key];
                }
            });

            document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
                const key = el.dataset.i18nAlt;
                if (dict[key]) {
                    el.setAttribute('alt', dict[key]);
                }
            });

            document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
                const key = el.dataset.i18nAriaLabel;
                if (dict[key]) {
                    el.setAttribute('aria-label', dict[key]);
                }
            });

            document.querySelectorAll('[data-i18n-href]').forEach((el) => {
                const key = el.dataset.i18nHref;
                if (dict[key]) {
                    el.setAttribute('href', dict[key]);
                }
            });

            if (dict['meta.title']) {
                document.title = dict['meta.title'];
            }
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription && dict['meta.description']) {
                metaDescription.setAttribute('content', dict['meta.description']);
            }
            document.documentElement.lang = langAttributes[lang] || 'de';
            const previousLanguage = state.language;
            state.language = lang;
            renderAlumni(lang, previousLanguage === lang ? state.alumniPage : 1);
            bindReportLinks();
            if (pdfElements.wrapper && pdfElements.wrapper.classList.contains('active') && state.pdfModule) {
                const moduleHeading = document.querySelector(`[data-module="${state.pdfModule}"] h3`);
                if (moduleHeading) {
                    pdfElements.title.textContent = moduleHeading.textContent.trim();
                }
            }
        }

        function setLanguage(lang, persist = true) {
            const target = supportedLanguages.includes(lang) ? lang : 'de';
            languageButtons.forEach((btn) => {
                btn.classList.toggle('active', btn.dataset.lang === target);
            });
            applyTranslations(target);
            if (persist) {
                localStorage.setItem('tia-lang', target);
            }
        }

        languageButtons.forEach((button) => {
            button.addEventListener('click', () => {
                setLanguage(button.dataset.lang);
            });
        });

        const storedLang = localStorage.getItem('tia-lang');
        const browserLang = navigator.language ? navigator.language.slice(0, 2).toLowerCase() : 'de';
        const initialLang = storedLang || (supportedLanguages.includes(browserLang) ? browserLang : 'de');
        setLanguage(initialLang, false);

        function renderAlumni(lang, page = 1) {
            const grid = document.getElementById('alumni-grid');
            const pagination = document.getElementById('alumni-pagination');
            if (!grid || !pagination) {
                return;
            }
            const dataset = alumniData[lang] || alumniData.de;
            const totalPages = Math.max(1, Math.ceil(dataset.length / ALUMNI_PAGE_SIZE));
            const safePage = Math.min(Math.max(page, 1), totalPages);
            state.alumniPage = safePage;
            const start = (safePage - 1) * ALUMNI_PAGE_SIZE;
            const currentItems = dataset.slice(start, start + ALUMNI_PAGE_SIZE);
            grid.innerHTML = currentItems
                .map(
                    (entry) => `
                <article class="alumni-card">
                    <div class="alumni-header">
                        <div class="alumni-avatar">${entry.initials}</div>
                        <div class="alumni-meta">
                            <span class="alumni-tag">${entry.cohort}</span>
                            <h3>${entry.name}</h3>
                            <p class="alumni-role">${entry.role}</p>
                        </div>
                    </div>
                    <p class="quote">${entry.quote}</p>
                </article>
            `
                )
                .join('');

            const buttons = [];
            buttons.push(
                `<button type="button" data-nav="prev" ${safePage === 1 ? 'disabled' : ''}>‹</button>`
            );
            for (let i = 1; i <= totalPages; i += 1) {
                buttons.push(
                    `<button type="button" data-page="${i}" class="${i === safePage ? 'active' : ''}">${i}</button>`
                );
            }
            buttons.push(
                `<button type="button" data-nav="next" ${safePage === totalPages ? 'disabled' : ''}>›</button>`
            );
            pagination.innerHTML = buttons.join('');
            if (!pagination.dataset.bound) {
                pagination.addEventListener('click', (event) => {
                    const target = event.target;
                    if (!(target instanceof HTMLElement)) return;
                    if (target.dataset.page) {
                        renderAlumni(state.language, Number(target.dataset.page));
                    } else if (target.dataset.nav === 'prev') {
                        renderAlumni(state.language, state.alumniPage - 1);
                    } else if (target.dataset.nav === 'next') {
                        renderAlumni(state.language, state.alumniPage + 1);
                    }
                });
                pagination.dataset.bound = 'true';
            }
        }

        function bindReportLinks() {
            const links = document.querySelectorAll('.report-link[data-pdf]');
            if (!links.length) {
                return;
            }
            links.forEach((link) => {
                if (link.dataset.bound) {
                    return;
                }
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const card = link.closest('.report-card');
                    const titleEl = card ? card.querySelector('h3') : null;
                    const title = titleEl ? titleEl.textContent.trim() : link.textContent.trim();
                    const url = link.dataset.pdf;
                    const moduleKey = card ? card.dataset.module : null;
                    if (url) {
                        openPdf(url, title, moduleKey);
                    }
                });
                link.dataset.bound = 'true';
            });
        }

        async function openPdf(url, title, moduleKey) {
            if (!pdfElements.wrapper || !pdfContext || !window.pdfjsLib) {
                window.open(url, '_blank', 'noopener');
                return;
            }
            try {
                pdfElements.wrapper.classList.add('active');
                pdfElements.title.textContent = title;
                pdfElements.download.href = url;
                pdfElements.download.setAttribute(
                    'download',
                    `${title.replace(/[^a-z0-9-_]+/gi, '_')}.pdf`
                );
                state.pdfUrl = url;
                state.pdfModule = moduleKey || null;
                pdfElements.pageInfo.textContent = '...';
                pdfElements.prev.disabled = true;
                pdfElements.next.disabled = true;
                state.pdfDoc = await pdfjsLib.getDocument(url).promise;
                state.pdfPage = 1;
                await renderPdfPage(state.pdfPage);
            } catch (error) {
                console.error('PDF render error', error);
            }
        }

        async function renderPdfPage(pageNumber) {
            if (!state.pdfDoc || !pdfContext) return;
            const page = await state.pdfDoc.getPage(pageNumber);
            const viewport = page.getViewport({ scale: 1.3 });
            const canvas = pdfElements.canvas;
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            await page.render({ canvasContext: pdfContext, viewport }).promise;
            pdfElements.pageInfo.textContent = `${pageNumber} / ${state.pdfDoc.numPages}`;
            pdfElements.prev.disabled = pageNumber <= 1;
            pdfElements.next.disabled = pageNumber >= state.pdfDoc.numPages;
            state.pdfPage = pageNumber;
        }

        function initPdfControls() {
            if (!pdfElements.wrapper || !window.pdfjsLib) return;
            if (pdfElements.prev) {
                pdfElements.prev.addEventListener('click', () => {
                    if (state.pdfDoc && state.pdfPage > 1) {
                        renderPdfPage(state.pdfPage - 1);
                    }
                });
            }
            if (pdfElements.next) {
                pdfElements.next.addEventListener('click', () => {
                    if (state.pdfDoc && state.pdfPage < state.pdfDoc.numPages) {
                        renderPdfPage(state.pdfPage + 1);
                    }
                });
            }
        }

        initPdfControls();
