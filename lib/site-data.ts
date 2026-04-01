export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pig.example";

export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/missions", label: "Missions" },
  { href: "/organisation", label: "Organisation" },
  { href: "/gouvernance", label: "Gouvernance" },
  { href: "/actions", label: "Actions" },
  { href: "/galerie", label: "Galerie" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const contactDetails = {
  cameroonPhones: ["+237 621 690 407", "+237 696 826 089", "+237 674 486 315"],
  francePhone: "+33 6 66 22 07 64",
  franceAddress: "27 Rue de Unna, 91120 Palaiseau, France",
  cameroonAddress: "Baham, Cameroun",
  email: "ydaniella@yahoo.fr",
  officeHours: "Lundi au vendredi, 09h00 a 17h00",
  responseTime: "Retour d'information sous 48 a 72 heures selon la nature de la demande.",
  contactScopes: [
    "Demandes institutionnelles et protocolaires",
    "Partenariats, representations et cooperation",
    "Prises d'information sur les missions et la gouvernance",
  ],
};

export const homeStats = [
  { value: "1998", label: "creation et ancrage institutionnel" },
  { value: "6", label: "missions prioritaires presentes sur le site" },
  { value: "2", label: "points de contact mis en avant" },
  { value: "4", label: "axes majeurs : protection, coordination, mediation, veille" },
];

export const highlights = [
  {
    kicker: "Mission",
    title: "Une institution orientee vers la protection et la coordination",
    body:
      "Le site presente la P.I.G comme une organisation de veille, d'encadrement et d'intervention attentive a la protection des droits, a la prevention des risques et au suivi de terrain.",
  },
  {
    kicker: "Organisation",
    title: "Une structure articulee entre direction, relais regionaux et departements",
    body:
      "La lecture du site met en avant une direction generale, des organes de pilotage, des services de soutien et des relais territoriaux charges d'assurer la continuite institutionnelle.",
  },
  {
    kicker: "Preuves visuelles",
    title: "Des images de reunions, de missions et d'inauguration qui documentent l'activite",
    body:
      "Les contenus visuels disponibles permettent d'appuyer le discours institutionnel par des scenes d'inauguration, de coordination, de suivi avec le MINAT et d'actions de protection des consommateurs.",
  },
];

export const values = [
  "Integrite dans l'action",
  "Respect des droits humains",
  "Coordination responsable",
  "Protection des personnes et des biens",
  "Professionnalisme dans la representation",
];

export const timeline = [
  {
    period: "21 decembre 1998",
    title: "Creation de l'organisation",
    description:
      "La P.I.G est presentee comme succedant au Haut Commissariat d'Intervention Generale, avec une vocation de protection, de veille et d'assistance.",
  },
  {
    period: "1998 - 2012",
    title: "Phase de structuration initiale",
    description:
      "NEBOT Etienne conduit la premiere sequence de gouvernance et pose les bases de l'organisation institutionnelle.",
  },
  {
    period: "2012 - 2021",
    title: "Consolidation de la gouvernance",
    description:
      "Dr ABESSO ZAMBO EDGARD poursuit l'evolution de la structure et de la presence institutionnelle.",
  },
  {
    period: "2021 - 2024",
    title: "Continuite du commandement",
    description:
      "Dr CHOUGWI Paul assure la continuite de la hierarchie generale et des grands equilibres de gouvernance.",
  },
  {
    period: "Depuis 2024",
    title: "Direction generale actuelle",
    description:
      "Hon. TAPE DZUDIE JEAN MARIE est presente comme Haut Commissaire General, avec MEHOUNE NKONO HONORE comme Vice Haut Commissaire General.",
  },
];

export const aboutPillars = [
  {
    title: "Positionnement institutionnel",
    description:
      "La P.I.G se presente comme une organisation d'intervention generale a vocation internationale, avec une expression documentaire forte au Cameroun.",
  },
  {
    title: "Culture de responsabilite",
    description:
      "Le discours met l'accent sur la prevention, la cooperation, la mediation, la veille et la protection des personnes plutot que sur une communication spectaculaire.",
  },
  {
    title: "Preuve par les actions",
    description:
      "Les missions de terrain, les rencontres strategiques et l'inauguration du siege servent de base concrete au recit institutionnel.",
  },
];

export const missions = [
  {
    title: "Recherche et renseignement",
    description:
      "Collecte, centralisation et analyse d'informations utiles a la prevention des risques securitaires, sociaux et institutionnels.",
  },
  {
    title: "Protection des droits humains",
    description:
      "Surveillance, documentation et denonciation des atteintes aux droits fondamentaux avec une approche centree sur la dignite humaine.",
  },
  {
    title: "Protection des consommateurs",
    description:
      "Controle de la qualite des produits, sensibilisation du public et lutte contre les pratiques trompeuses ou abusives.",
  },
  {
    title: "Secours et interventions d'urgence",
    description:
      "Appui en situation de crise, coordination de terrain et organisation d'interventions responsables au service des populations.",
  },
  {
    title: "Arbitrage et mediation",
    description:
      "Accompagnement des parties en conflit pour favoriser des resolutions apaisees, credibles et conformes au droit.",
  },
  {
    title: "Formation et sensibilisation",
    description:
      "Renforcement des capacites, diffusion d'une culture de prevention et accompagnement des acteurs engages dans les missions prioritaires.",
  },
];

export const missionDetails = [
  {
    title: "Recherche et renseignement",
    image: "/images/operations/strategy-meeting-wide.jpg",
    description:
      "Cette mission vise a produire une lecture claire des situations sensibles afin d'eclairer la decision, la prevention et la coordination interne.",
    points: [
      "Collecter des informations utiles a l'evaluation des risques",
      "Structurer la remontee d'information depuis le terrain",
      "Orienter la decision institutionnelle sur des bases documentees",
    ],
  },
  {
    title: "Protection des droits humains",
    image: "/images/about/minat-session.jpg",
    description:
      "La protection des droits humains est presentee comme un engagement transversal touchant la prevention, l'alerte, la documentation et la sensibilisation.",
    points: [
      "Observer les situations susceptibles d'affecter les droits fondamentaux",
      "Documenter les atteintes et contribuer a leur signalement",
      "Soutenir une culture institutionnelle de dignite et de responsabilite",
    ],
  },
  {
    title: "Protection des consommateurs",
    image: "/images/actions/consumer-protection.jpg",
    description:
      "Les visuels du dossier montrent des controles de terrain et des actions orientees vers la securite des produits et la protection du public.",
    points: [
      "Surveiller la qualite et la conformite de certains produits",
      "Informer les populations sur les risques de consommation",
      "Renforcer la vigilance contre les abus commerciaux",
    ],
  },
  {
    title: "Secours et interventions d'urgence",
    image: "/images/gallery/meeting-6.jpg",
    description:
      "Cette mission donne une dimension operationnelle a l'organisation en combinant preparedness, coordination et capacite d'appui en contexte sensible.",
    points: [
      "Structurer la coordination des interventions urgentes",
      "Contribuer a la protection des personnes et des biens",
      "Assurer un cadre d'action responsable et trace",
    ],
  },
  {
    title: "Arbitrage et mediation",
    image: "/images/gallery/meeting-4.jpg",
    description:
      "Le site met en avant une logique d'apaisement, de regulation et de recherche de solutions dans les situations de tension ou de conflit.",
    points: [
      "Faciliter des resolutions amiables et credibles",
      "Encadrer les echanges dans un cadre de confiance",
      "Favoriser l'equite et la lisibilite des decisions",
    ],
  },
  {
    title: "Formation et sensibilisation",
    image: "/images/gallery/strategy-meeting-2.jpg",
    description:
      "La formation soutient la professionnalisation des equipes et la diffusion d'une culture de prevention, de gouvernance et de service.",
    points: [
      "Renforcer les competences internes et partenariales",
      "Diffuser des references sur les droits et la prevention",
      "Appuyer la coherence methodologique entre les missions",
    ],
  },
];

export const leadership = [
  {
    name: "JOMGANG NGONGO JEAN PAUL",
    role: "Delegue regional de l'Ouest",
    description:
      "Representation territoriale, coordination regionale et proximite operationnelle dans les actions institutionnelles.",
    image: "/images/governance/regional-west.jpg",
  },
  {
    name: "MOGOUE Fabrice Eclador",
    role: "Delegue regional du Littoral",
    description:
      "Animation du dispositif regional et relais des engagements institutionnels sur le terrain.",
    image: "/images/governance/regional-littoral.jpg",
  },
  {
    name: "YAKER EKALL Simone Daniella",
    role: "Chargee des relations publiques",
    description:
      "Interface de representation, suivi des sollicitations externes et accompagnement des prises de contact institutionnelles.",
    image: "/images/governance/public-relations.jpg",
  },
];

export const executiveLeaders = [
  {
    name: "Hon. Dr TAPE DZUDIE JEAN MARIE",
    role: "Haut Commissaire General",
    description:
      "Assure la direction generale, la representation institutionnelle et la coordination des grandes orientations strategiques.",
  },
  {
    name: "MEHOUNE NKONO HONORE",
    role: "Vice Haut Commissaire General",
    description:
      "Soutient la gouvernance centrale, le suivi transversal des responsabilites et la coherence du dispositif organisationnel.",
  },
];

export const departments = [
  "Departement des droits de l'homme",
  "Departement de la lutte contre la corruption",
  "Departement de la protection des consommateurs",
  "Departement des operations de secours",
  "Departement de l'arbitrage et de la mediation",
  "Service de conseil et de redaction",
  "Service de formation et de developpement",
];

export const departmentDetails = [
  {
    title: "Droits de l'homme",
    description:
      "Veille, sensibilisation, documentation et appui aux initiatives de protection des droits fondamentaux.",
  },
  {
    title: "Lutte contre la corruption",
    description:
      "Observation, alerte, appui a la transparence et promotion d'une gouvernance responsable.",
  },
  {
    title: "Protection des consommateurs",
    description:
      "Controles, information du public et prevention des pratiques prejudiciables aux consommateurs.",
  },
  {
    title: "Operations de secours",
    description:
      "Preparation et coordination de dispositifs d'appui en contexte sensible ou urgent.",
  },
  {
    title: "Arbitrage et mediation",
    description:
      "Cadre de regulation et d'apaisement des conflits dans une logique d'equite et de dialogue.",
  },
  {
    title: "Conseil, redaction et formation",
    description:
      "Production de supports, accompagnement methodologique et renforcement des capacites institutionnelles.",
  },
];

export const faqItems = [
  {
    question: "Quelle est la vocation principale de la P.I.G ?",
    answer:
      "La P.I.G se presente comme une organisation d'intervention generale a dimension internationale, engagee dans la protection des droits humains, la recherche, le renseignement, la mediation et l'assistance d'urgence.",
  },
  {
    question: "Quels domaines d'action sont mis en avant ?",
    answer:
      "Le site met en avant la recherche et le renseignement, la protection des droits humains, la protection des consommateurs, les secours, l'arbitrage et la formation.",
  },
  {
    question: "A qui s'adresse le site institutionnel ?",
    answer:
      "Le site s'adresse aux partenaires institutionnels, aux visiteurs souhaitant comprendre l'organisation, ainsi qu'aux personnes cherchant un point de contact ou des informations de representation.",
  },
  {
    question: "L'organisation intervient-elle uniquement au Cameroun ?",
    answer:
      "Le positionnement affiche une vocation internationale, avec un ancrage documentaire fort au Cameroun et un point de contact en France pour les relations exterieures.",
  },
  {
    question: "Quels types de demandes peuvent etre adresses via la page contact ?",
    answer:
      "La page contact est adaptee aux demandes d'information institutionnelle, aux sollicitations de representation, aux partenariats et aux prises de contact preparatoires.",
  },
  {
    question: "Comment la gouvernance est-elle presentee ?",
    answer:
      "Le site distingue la direction generale, les organes de pilotage, les conseils specialises, les departements thematiques et plusieurs relais regionaux ou de representation.",
  },
  {
    question: "Que montre la galerie ?",
    answer:
      "La galerie reunit des images d'inauguration du siege, de reunions strategiques, de missions de suivi et de scenes de representation utiles pour documenter la presence institutionnelle.",
  },
  {
    question: "Comment entrer en relation avec la P.I.G ?",
    answer:
      "Le site met en avant un courriel principal, un bureau de contact en France, des numeros de telephone au Cameroun et un parcours de prise de contact adapte au type de demande.",
  },
];

export const faqCategories = [
  {
    title: "Comprendre l'organisation",
    items: [
      "Vocation generale et positionnement",
      "Ancrage geographique et institutionnel",
      "Gouvernance, missions et relais regionaux",
    ],
  },
  {
    title: "Preparer une prise de contact",
    items: [
      "Choix du bon canal selon la demande",
      "Coordonnees utiles et horaires de reference",
      "Partenariats, representation et demandes institutionnelles",
    ],
  },
];

export const galleryImages = [
  {
    title: "Ceremonie d'inauguration du siege",
    category: "Inauguration du siege",
    image: "/images/gallery/inauguration-ceremony.jpg",
    summary:
      "Vue d'ensemble de l'inauguration mettant en scene la dimension protocolaire et la visibilite institutionnelle du site national.",
  },
  {
    title: "Responsables et invites lors de l'inauguration",
    category: "Inauguration du siege",
    image: "/images/gallery/inauguration-officers.jpg",
    summary:
      "Presence des responsables et acteurs institutionnels dans un contexte de representation officielle.",
  },
  {
    title: "Briefing pendant la visite du site",
    category: "Inauguration du siege",
    image: "/images/gallery/inauguration-briefing.jpg",
    summary:
      "Temps d'explication et de circulation autour du site au moment de son inauguration.",
  },
  {
    title: "Visite institutionnelle du nouveau site",
    category: "Inauguration du siege",
    image: "/images/gallery/inauguration-visit.jpg",
    summary:
      "Sequence de visite utile pour documenter l'implantation et l'organisation spatiale du siege.",
  },
  {
    title: "Facade du site national de Baham",
    category: "Inauguration du siege",
    image: "/images/gallery/inauguration-facility.jpg",
    summary:
      "Image de reference du site utilisee pour attester l'ancrage physique et la visibilite de l'organisation.",
  },
  {
    title: "Concertation des responsables",
    category: "Reunions strategiques",
    image: "/images/gallery/strategy-meeting-1.jpg",
    summary:
      "Reunion de travail utile pour illustrer la coordination institutionnelle et le pilotage des priorites.",
  },
  {
    title: "Seance de travail institutionnelle",
    category: "Reunions strategiques",
    image: "/images/gallery/strategy-meeting-2.jpg",
    summary:
      "Image representative de la methode interne de concertation et d'organisation.",
  },
  {
    title: "Echange operationnel entre responsables",
    category: "Reunions strategiques",
    image: "/images/gallery/strategy-meeting-3.jpg",
    summary:
      "Illustration d'un cadre de suivi et de coordination entre acteurs de la gouvernance.",
  },
  {
    title: "Mission de suivi avec les cadres du MINAT",
    category: "Suivi institutionnel",
    image: "/images/gallery/minat-follow-up-2.jpg",
    summary:
      "Documente les relations institutionnelles et le travail de suivi realise avec des cadres du MINAT.",
  },
  {
    title: "Mission de terrain et observation",
    category: "Actions de terrain",
    image: "/images/gallery/meeting-6.jpg",
    summary:
      "Scene de deploiement montrant l'articulation entre terrain, presence institutionnelle et coordination.",
  },
  {
    title: "Sequence de coordination elargie",
    category: "Actions de terrain",
    image: "/images/gallery/meeting-5.jpg",
    summary:
      "Illustration d'une dynamique d'echange et de supervision autour d'une action ou d'une visite.",
  },
  {
    title: "Moments de representation et de suivi",
    category: "Representation",
    image: "/images/gallery/baham-4.jpg",
    summary:
      "Image utile pour completer l'archive visuelle des visites, prises de parole et activites de representation.",
  },
];

export const galleryHighlights = [
  "Inauguration du siege national",
  "Reunions strategiques et coordination",
  "Missions de suivi institutionnel",
  "Representation et scenes de terrain",
];

export const governanceBodies = [
  "Assemblee Generale",
  "Conseil d'Administration",
  "Bureau Executif",
  "Cour Arbitrale de Justice",
  "Conseil des Officiers",
];

export const governanceBodyDetails = [
  {
    title: "Assemblee Generale",
    description:
      "Cadre de reference pour les grandes orientations, la legitimite institutionnelle et la lecture d'ensemble des priorites.",
  },
  {
    title: "Conseil d'Administration",
    description:
      "Instance de pilotage de l'organisation, du suivi strategique et de la coherence des decisions.",
  },
  {
    title: "Bureau Executif",
    description:
      "Niveau operationnel de coordination des actions, du suivi des departements et des relations internes.",
  },
  {
    title: "Cour Arbitrale de Justice",
    description:
      "Cadre de regulation et d'arbitrage soutenant la mediation, l'equite et le traitement des situations sensibles.",
  },
  {
    title: "Conseil des Officiers",
    description:
      "Espace d'appui a la chaine de commandement et a la structuration des responsabilites internes.",
  },
];

export const specializedBodies = [
  "Conseil de la Police Technique et Scientifique",
  "Conseil des Droits de l'Homme",
  "Conseil de la Lutte contre la Corruption",
  "Conseil de la Protection des Consommateurs",
];

export const specializedBodyDetails = [
  {
    title: "Police technique et scientifique",
    description:
      "Appuie les dimensions d'investigation, de rigueur methodologique et de documentation specialisee.",
  },
  {
    title: "Droits de l'Homme",
    description:
      "Porte les enjeux de dignite, de veille et de protection des libertes fondamentales.",
  },
  {
    title: "Lutte contre la corruption",
    description:
      "Soutient la transparence, l'alerte et la promotion de pratiques institutionnelles responsables.",
  },
  {
    title: "Protection des consommateurs",
    description:
      "Structure les actions de prevention, de controle et de sensibilisation dirigees vers le public.",
  },
];

export const rankGroups = [
  {
    title: "Officiers superieurs",
    items: ["Commissaires", "Inspecteurs generaux", "Inspecteurs speciaux", "Jures maitres"],
  },
  {
    title: "Officiers",
    items: ["Aspirants d'intervention", "Chefs de brigade d'intervention"],
  },
  {
    title: "Sous-officiers",
    items: ["Brigadiers principaux", "Brigadiers 2eme grade", "Brigadiers 1er grade"],
  },
  {
    title: "Hommes de rang",
    items: [
      "Preposes d'intervention 2eme grade",
      "Preposes d'intervention 1er grade",
      "Stagiaires officiers",
      "Stagiaires sous-officiers",
      "Stagiaires hommes de rang",
    ],
  },
];

export const commissionersTimeline = [
  {
    years: "1998 - 2012",
    name: "NEBOT Etienne",
    description: "Premier Haut Commissaire General depuis la creation de l'organisation.",
  },
  {
    years: "2012 - 2021",
    name: "Dr ABESSO ZAMBO EDGARD",
    description: "Deuxieme Haut Commissaire General, associe a la consolidation institutionnelle.",
  },
  {
    years: "2021 - 2024",
    name: "Dr CHOUGWI Paul",
    description: "Troisieme Haut Commissaire General, dans une logique de continuite du commandement.",
  },
  {
    years: "Depuis 2024",
    name: "Hon. TAPE DZUDIE Jean Marie",
    description: "Quatrieme Haut Commissaire General en fonction.",
  },
];

export const teamProfiles = [
  {
    name: "Commissaire JOMGANG NGONGO Jean Paul",
    role: "Delegue regional de l'Ouest",
    image: "/images/governance/regional-west.jpg",
  },
  {
    name: "Commissaire MOGOUE Fabrice Eclador",
    role: "Delegue regional du Littoral",
    image: "/images/governance/regional-littoral.jpg",
  },
  {
    name: "YAKER EKALL Simone Daniella",
    role: "Chargee des relations publiques",
    image: "/images/governance/public-relations.jpg",
  },
];

export const actionStories = [
  {
    title: "Reunions strategiques des responsables en 2025",
    excerpt:
      "Des sessions de concertation consacrees a la coordination des priorites institutionnelles, au suivi des actions et a l'amelioration de la gouvernance operationnelle.",
    image: "/images/operations/strategy-meeting-wide.jpg",
    tag: "Coordination",
    context: "Pilotage interne",
    date: "2025",
  },
  {
    title: "Mission de suivi avec les cadres du MINAT en 2024",
    excerpt:
      "Un temps d'echange et d'observation pour apprecier l'organisation, les methodes de travail et les dynamiques de collaboration institutionnelle.",
    image: "/images/actions/minat-visit-2.jpg",
    tag: "Suivi institutionnel",
    context: "Relations institutionnelles",
    date: "2024",
  },
  {
    title: "Mission de protection des consommateurs",
    excerpt:
      "Des controles de terrain orientes vers la securite des produits et la protection effective des consommateurs.",
    image: "/images/actions/consumer-protection.jpg",
    tag: "Protection",
    context: "Action de terrain",
    date: "Documentation du dossier",
  },
  {
    title: "Inauguration du nouveau siege national a Baham",
    excerpt:
      "Un repere fort dans le developpement de la P.I.G, symbole d'ancrage, de visibilite institutionnelle et de structuration durable.",
    image: "/images/hero/headquarters.jpg",
    tag: "Implantation",
    context: "Developpement institutionnel",
    date: "Documentation du dossier",
  },
];
