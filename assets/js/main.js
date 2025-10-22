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
                'alumni.paragraph': 'Ausgewählte VenusIN-Absolvent:innen leiten heute führende Trading-Desks, Venture-Studios und Lernnetzwerke.',
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
                'team.member1.role': 'Mitgründer &amp; Chief Strategy Officer; verantwortete die Risikorahmen mehrerer nordamerikanischer Multi-Milliarden-Quantfonds.',
                'team.member1.quote': '„Wir liefern vollständige Transparenz vom Signal bis zur Ausführung.“',
                'team.member2.role': 'Mitgründer &amp; Chief Scientist; spezialisiert auf Machine Learning und Quant Finance mit Fokus auf Echtzeit-Entscheidungsrahmen.',
                'team.member2.quote': '„Unser Auftrag ist es, institutionelle Entscheidungen schneller, smarter und belastbarer zu machen.“',
                'team.member1.alt': 'Porträt von Mitgründer Robert Miller',
                'team.member2.alt': 'Porträt von Mitgründer Thomas Kurz',
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
                'footer.brand': 'Wir liefern KI-gestützte Research-, Execution- und Risk-Plattformen für institutionelle Investoren weltweit.',
                'footer.solutions': 'Lösungen',
                'footer.solutions.strategy': 'Strategieentwicklung',
                'footer.solutions.execution': 'Automatisierte Ausführung',
                'footer.solutions.risk': 'Risikosteuerung &amp; Compliance',
                'footer.resources': 'Ressourcen',
                'footer.resources.team': 'Expertenteam',
                'footer.resources.support': 'Support-Services',
                'footer.resources.case': 'Kundenreferenzen',
                'footer.contact': 'Kontakt',
                'footer.contact.demo': 'Demo vereinbaren',
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
                'alumni.paragraph': 'Selected graduates from VenusIN cohorts now steer flagship desks, venture studios, and learning networks.',
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
                'team.member1.role': 'Co-founder &amp; Chief Strategy Officer; led risk frameworks for multi-billion North American quant funds.',
                'team.member1.quote': '"We provide end-to-end transparency from signal to execution."',
                'team.member2.role': 'Co-founder &amp; Chief Scientist; specializes in machine learning and quantitative finance with real-time decision frameworks.',
                'team.member2.quote': '"Our mission is to make institutional decisions faster, smarter, and more reliable."',
                'team.member1.alt': 'Portrait of co-founder Robert Miller',
                'team.member2.alt': 'Portrait of co-founder Thomas Kurz',
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
                'footer.brand': 'Empowering institutional investors worldwide with AI-driven research, execution, and risk platforms.',
                'footer.solutions': 'Solutions',
                'footer.solutions.strategy': 'Strategy development',
                'footer.solutions.execution': 'Automated execution',
                'footer.solutions.risk': 'Risk &amp; compliance',
                'footer.resources': 'Resources',
                'footer.resources.team': 'Expert team',
                'footer.resources.support': 'Support services',
                'footer.resources.case': 'Client stories',
                'footer.contact': 'Contact',
                'footer.contact.demo': 'Book a demo',
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
                'alumni.paragraph': 'VenusIN 的优秀毕业生如今领军头部交易席位、创投工作室与学习网络。',
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
                'team.member1.role': '联合创始人兼首席策略官，曾主导北美多只十亿美元级量化基金的风控体系。',
                'team.member1.quote': '“从交易信号到执行，我们提供端到端的透明度。”',
                'team.member2.role': '联合创始人兼首席科学家，专注机器学习与量化金融，带领团队打造实时 AI 决策框架。',
                'team.member2.quote': '“我们的使命是让机构决策变得更快、更智能、更可靠。”',
                'team.member1.alt': '联合创始人 Robert Miller',
                'team.member2.alt': '联合创始人 Thomas Kurz',
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
                'footer.brand': '专注为全球机构投资者提供 AI 驱动的投研、执行与风控平台。',
                'footer.solutions': '解决方案',
                'footer.solutions.strategy': '策略开发',
                'footer.solutions.execution': '自动执行',
                'footer.solutions.risk': '风控合规',
                'footer.resources': '资源中心',
                'footer.resources.team': '专家团队',
                'footer.resources.support': '支持服务',
                'footer.resources.case': '客户案例',
                'footer.contact': '联系我们',
                'footer.contact.demo': '预约演示',
                'footer.bottom': '&copy; 2025 Tethys Investment Alliance. 保留所有权利。',
                'footer.privacy': '隐私政策',
                'footer.terms': '服务条款'
            }
        };

        const languageButtons = document.querySelectorAll('.language-option');
        const supportedLanguages = ['de', 'en', 'zh'];
        const langAttributes = { de: 'de', en: 'en', zh: 'zh-CN' };

        const alumniBase = [
            {
                initials: 'EF',
                names: { de: 'Elena Fischer', en: 'Elena Fischer', zh: 'Elena Fischer' },
                cohorts: { de: 'Kohorte 2016', en: 'Cohort 2016', zh: '2016 级' },
                roles: {
                    de: 'Managing Partner, Helios Quant GmbH',
                    en: 'Managing Partner, Helios Quant GmbH',
                    zh: 'Helios Quant GmbH 管理合伙人'
                },
                quotes: {
                    de: 'Skalierte ESG-Faktormodelle aus dem Abschlussprojekt zu einem Mandat über 1,2 Mrd. EUR.',
                    en: 'Scaled ESG factor models from her capstone into a €1.2bn mandate.',
                    zh: '将 ESG 因子模型从毕业项目扩展为 12 亿欧元委托。'
                }
            },
            {
                initials: 'MT',
                names: { de: 'Marcus Tan', en: 'Marcus Tan', zh: 'Marcus Tan' },
                cohorts: { de: 'Kohorte 2018', en: 'Cohort 2018', zh: '2018 级' },
                roles: {
                    de: 'Leiter Digitale Assets, Meridian Global',
                    en: 'Head of Digital Assets, Meridian Global',
                    zh: 'Meridian Global 数字资产负责人'
                },
                quotes: {
                    de: 'Entwickelte eine markenübergreifende Liquiditäts-Engine auf Basis des TIA Research OS.',
                    en: 'Built cross-exchange liquidity engines using the TIA Research OS.',
                    zh: '借助 TIA Research Operating System 构建跨交易所流动性引擎。'
                }
            },
            {
                initials: 'LC',
                names: { de: 'Liang Chen', en: 'Liang Chen', zh: '梁晨' },
                cohorts: { de: 'Kohorte 2020', en: 'Cohort 2020', zh: '2020 级' },
                roles: {
                    de: 'Gründer, NovaEd Labs',
                    en: 'Founder, NovaEd Labs',
                    zh: 'NovaEd Labs 创始人'
                },
                quotes: {
                    de: 'Setzt zweisprachige Quant-Curricula bei über 35 Hochschulpartnern ein.',
                    en: 'Deploys bilingual quant curricula across 35+ university partners.',
                    zh: '打造双语量化课程，覆盖 35+ 高校合作伙伴。'
                }
            },
            {
                initials: 'SM',
                names: { de: 'Sofia Marques', en: 'Sofia Marques', zh: 'Sofia Marques' },
                cohorts: { de: 'Kohorte 2015', en: 'Cohort 2015', zh: '2015 级' },
                roles: {
                    de: 'Director Macro Research, Luso Capital',
                    en: 'Director of Macro Research, Luso Capital',
                    zh: 'Luso Capital 宏观研究总监'
                },
                quotes: {
                    de: 'Verknüpfte Macro-Radar-Reports mit automatisierten FX-Hedges für ihre Mandate.',
                    en: 'Linked macro radar reports with automated FX hedges for client mandates.',
                    zh: '将宏观雷达报告与自动化外汇对冲策略打通，服务核心客户。'
                }
            },
            {
                initials: 'HK',
                names: { de: 'Hannah Keller', en: 'Hannah Keller', zh: 'Hannah Keller' },
                cohorts: { de: 'Kohorte 2014', en: 'Cohort 2014', zh: '2014 级' },
                roles: {
                    de: 'Chief Data Officer, Rhein Analytics',
                    en: 'Chief Data Officer, Rhein Analytics',
                    zh: 'Rhein Analytics 首席数据官'
                },
                quotes: {
                    de: 'Implementierte ein gemeinsames Data Mesh für quantitativen Research und Investment-Controlling.',
                    en: 'Implemented a shared data mesh for quant research and investment controlling.',
                    zh: '在量化研究与投后风控之间搭建统一的数据网格平台。'
                }
            },
            {
                initials: 'DV',
                names: { de: 'Daniel Vogt', en: 'Daniel Vogt', zh: 'Daniel Vogt' },
                cohorts: { de: 'Kohorte 2017', en: 'Cohort 2017', zh: '2017 级' },
                roles: {
                    de: 'Leiter Execution Desk, NordInvest',
                    en: 'Head of Execution Desk, NordInvest',
                    zh: 'NordInvest 执行团队负责人'
                },
                quotes: {
                    de: 'Reduzierte Slippage um 38 % durch Playbooks aus dem TIA Execution Hub.',
                    en: 'Reduced slippage by 38% using playbooks from the TIA Execution Hub.',
                    zh: '利用 TIA 执行中枢的 Playbook，将滑点率降低 38%。'
                }
            },
            {
                initials: 'KW',
                names: { de: 'Kenji Watanabe', en: 'Kenji Watanabe', zh: '渡边健二' },
                cohorts: { de: 'Kohorte 2013', en: 'Cohort 2013', zh: '2013 级' },
                roles: {
                    de: 'Head of Quant Innovation, Sakura AM',
                    en: 'Head of Quant Innovation, Sakura AM',
                    zh: 'Sakura AM 量化创新负责人'
                },
                quotes: {
                    de: 'Verknüpfte Live-Alpha-Signale mit ESG-Screenings in drei asiatischen Märkten.',
                    en: 'Connected live alpha signals with ESG screening across three Asian markets.',
                    zh: '在三大亚洲市场实现 Alpha 信号与 ESG 筛查的实时衔接。'
                }
            },
            {
                initials: 'AF',
                names: { de: 'Amélie Fournier', en: 'Amélie Fournier', zh: 'Amélie Fournier' },
                cohorts: { de: 'Kohorte 2012', en: 'Cohort 2012', zh: '2012 级' },
                roles: {
                    de: 'Partnerin, Atlantique Family Office',
                    en: 'Partner, Atlantique Family Office',
                    zh: 'Atlantique Family Office 合伙人'
                },
                quotes: {
                    de: 'Baute mit VenusIN Alumni ein zweisprachiges Mentoring-Netzwerk für NextGen-Portfolios.',
                    en: 'Created a bilingual mentoring network for next-gen portfolios with VenusIN alumni.',
                    zh: '与 VenusIN 校友共建双语导师网络，为家族新生代组合护航。'
                }
            },
            {
                initials: 'PS',
                names: { de: 'Priya Sharma', en: 'Priya Sharma', zh: 'Priya Sharma' },
                cohorts: { de: 'Kohorte 2019', en: 'Cohort 2019', zh: '2019 级' },
                roles: {
                    de: 'Lead Data Scientist, DeltaEdge',
                    en: 'Lead Data Scientist, DeltaEdge',
                    zh: 'DeltaEdge 首席数据科学家'
                },
                quotes: {
                    de: 'Automatisierte Research-Backlogs mit Knowledge Graphs und senkte Onboarding-Zeiten um 45 %.',
                    en: 'Automated research backlogs with knowledge graphs, cutting onboarding time by 45%.',
                    zh: '通过知识图谱自动化研究积压，将新人成熟时间缩短 45%。'
                }
            },
            {
                initials: 'JB',
                names: { de: 'Jonas Bergmann', en: 'Jonas Bergmann', zh: 'Jonas Bergmann' },
                cohorts: { de: 'Kohorte 2011', en: 'Cohort 2011', zh: '2011 级' },
                roles: {
                    de: 'Portfolio Manager, NordSee Pension',
                    en: 'Portfolio Manager, NordSee Pension',
                    zh: 'NordSee Pension 投资经理'
                },
                quotes: {
                    de: 'Setzte Faktor-Kontrollen in einem 8-Mrd.-Euro-Pensionsfonds mithilfe von TIA Signalfabriken um.',
                    en: 'Implemented factor controls in an €8bn pension fund using TIA signal factories.',
                    zh: '依托 TIA 信号工厂，在 80 亿欧元养老基金中落地因子控制。'
                }
            },
            {
                initials: 'MK',
                names: { de: 'Mateusz Kowalski', en: 'Mateusz Kowalski', zh: 'Mateusz Kowalski' },
                cohorts: { de: 'Kohorte 2016', en: 'Cohort 2016', zh: '2016 级' },
                roles: {
                    de: 'Chief Risk Officer, Baltic Quant',
                    en: 'Chief Risk Officer, Baltic Quant',
                    zh: 'Baltic Quant 首席风控官'
                },
                quotes: {
                    de: 'Integrierte Echtzeit-Stresstests mit dem Research Operating System und reduzierte Abweichungen um 30 %.',
                    en: 'Embedded real-time stress tests via the Research Operating System, trimming variance by 30%.',
                    zh: '借助 Research Operating System 实现实时压力测试，将偏差压降 30%。'
                }
            },
            {
                initials: 'IC',
                names: { de: 'Isabella Conti', en: 'Isabella Conti', zh: 'Isabella Conti' },
                cohorts: { de: 'Kohorte 2017', en: 'Cohort 2017', zh: '2017 级' },
                roles: {
                    de: 'Head of Client Analytics, Milano Capital',
                    en: 'Head of Client Analytics, Milano Capital',
                    zh: 'Milano Capital 客户分析主管'
                },
                quotes: {
                    de: 'Erstellte mit Insight Visual Center ein paneuropäisches Reporting für Family Offices.',
                    en: 'Built a pan-European reporting stack for family offices using the Insight Visual Center.',
                    zh: '利用 Insight Visual Center 构建泛欧家族办公室报告体系。'
                }
            },
            {
                initials: 'LM',
                names: { de: 'Lucas Martínez', en: 'Lucas Martínez', zh: 'Lucas Martínez' },
                cohorts: { de: 'Kohorte 2018', en: 'Cohort 2018', zh: '2018 级' },
                roles: {
                    de: 'Chief Strategist, Andean Alpha',
                    en: 'Chief Strategist, Andean Alpha',
                    zh: 'Andean Alpha 首席策略官'
                },
                quotes: {
                    de: 'Verknüpfte Multi-Asset-Signale mit LatAm-Liquiditätsdaten und verkürzte Rebalancing-Zyklen.',
                    en: 'Linked multi-asset signals with LatAm liquidity data, shortening rebalancing cycles.',
                    zh: '将多资产信号与拉美流动性数据联动，压缩再平衡周期。'
                }
            },
            {
                initials: 'ML',
                names: { de: 'Mei Ling', en: 'Mei Ling', zh: '美玲' },
                cohorts: { de: 'Kohorte 2015', en: 'Cohort 2015', zh: '2015 级' },
                roles: {
                    de: 'Director AI Ops, Pacifica Securities',
                    en: 'Director of AI Ops, Pacifica Securities',
                    zh: 'Pacifica Securities AI 运营总监'
                },
                quotes: {
                    de: 'Stellte ein 24/7-Monitoring auf und reduzierte Modell-Drift um 22 %. ',
                    en: 'Established 24/7 monitoring and cut model drift by 22%.',
                    zh: '建立 24/7 模型监控体系，将模型漂移率降低 22%。'
                }
            },
            {
                initials: 'ON',
                names: { de: 'Oliver Novak', en: 'Oliver Novak', zh: 'Oliver Novak' },
                cohorts: { de: 'Kohorte 2010', en: 'Cohort 2010', zh: '2010 级' },
                roles: {
                    de: 'Investment Partner, Danube Ventures',
                    en: 'Investment Partner, Danube Ventures',
                    zh: 'Danube Ventures 投资合伙人'
                },
                quotes: {
                    de: 'Startete ein Co-Investment-Programm für VenusIN Alumni-Strategien mit europäischem Fokus.',
                    en: 'Launched a co-investment program for VenusIN alumni strategies focused on Europe.',
                    zh: '发起面向 VenusIN 校友策略的欧洲共投计划。'
                }
            },
            {
                initials: 'VH',
                names: { de: 'Viktoria Haas', en: 'Viktoria Haas', zh: 'Viktoria Haas' },
                cohorts: { de: 'Kohorte 2021', en: 'Cohort 2021', zh: '2021 级' },
                roles: {
                    de: 'Analytics Lead, Alpine Hedge',
                    en: 'Analytics Lead, Alpine Hedge',
                    zh: 'Alpine Hedge 数据分析负责人'
                },
                quotes: {
                    de: 'Implementierte Knowledge Graph Dashboards für ESG-Strategien mit 12 Länderteams.',
                    en: 'Implemented knowledge graph dashboards for ESG strategies across 12 country teams.',
                    zh: '为 12 个国家团队的 ESG 策略部署知识图谱仪表盘。'
                }
            },
            {
                initials: 'CW',
                names: { de: 'Chen Wei', en: 'Chen Wei', zh: '陈伟' },
                cohorts: { de: 'Kohorte 2019', en: 'Cohort 2019', zh: '2019 级' },
                roles: {
                    de: 'CTO, Horizon Delta',
                    en: 'CTO, Horizon Delta',
                    zh: 'Horizon Delta 首席技术官'
                },
                quotes: {
                    de: 'Synchronisierte Research- und Execution-APIs für vier Broker-Desks in APAC.',
                    en: 'Synchronized research and execution APIs for four broker desks across APAC.',
                    zh: '在亚太四个券商席位间打通研究与执行 API。'
                }
            },
            {
                initials: 'SJ',
                names: { de: 'Sarah Johansson', en: 'Sarah Johansson', zh: 'Sarah Johansson' },
                cohorts: { de: 'Kohorte 2014', en: 'Cohort 2014', zh: '2014 级' },
                roles: {
                    de: 'Head of Client Solutions, Aurora Quant',
                    en: 'Head of Client Solutions, Aurora Quant',
                    zh: 'Aurora Quant 客户解决方案负责人'
                },
                quotes: {
                    de: 'Rollte Investor-Briefings in drei Sprachen aus und steigerte das NPS um 18 Punkte.',
                    en: 'Rolled out investor briefings in three languages, raising NPS by 18 points.',
                    zh: '推出三语投资者简报，将净推荐值提升 18 分。'
                }
            },
            {
                initials: 'AE',
                names: { de: 'Ahmed El-Sayed', en: 'Ahmed El-Sayed', zh: 'Ahmed El-Sayed' },
                cohorts: { de: 'Kohorte 2013', en: 'Cohort 2013', zh: '2013 级' },
                roles: {
                    de: 'Chief Investment Engineer, Nile Partners',
                    en: 'Chief Investment Engineer, Nile Partners',
                    zh: 'Nile Partners 首席投资工程师'
                },
                quotes: {
                    de: 'Kombinierte Faktormodelle mit Rohstoff-Derivaten und erzielte zweistellige Sharpe-Steigerungen.',
                    en: 'Combined factor models with commodity derivatives, producing double-digit Sharpe uplifts.',
                    zh: '将因子模型与大宗商品衍生品结合，实现两位数 Sharpe 提升。'
                }
            },
            {
                initials: 'LR',
                names: { de: 'Laura Richter', en: 'Laura Richter', zh: 'Laura Richter' },
                cohorts: { de: 'Kohorte 2022', en: 'Cohort 2022', zh: '2022 级' },
                roles: {
                    de: 'Programmleiterin, VenusIN Fellowship',
                    en: 'Program Lead, VenusIN Fellowship',
                    zh: 'VenusIN Fellowship 项目负责人'
                },
                quotes: {
                    de: 'Organisierte ein globales Fellowship mit 120 Mentor:innen und digitalem Report-Stack.',
                    en: 'Organised a global fellowship with 120 mentors and a digital report stack.',
                    zh: '打造覆盖 120 位导师的全球 Fellowship，并上线数字化报告链路。'
                }
            }
        ];

        const ALUMNI_PAGE_SIZE = 10;

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
