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
  officeHours: "Lundi au vendredi, 09h00 à 17h00",
  responseTime: "Retour d'information sous 48 à 72 heures selon la nature de la demande.",
  contactScopes: [
    "Demandes institutionnelles et protocolaires",
    "Partenariats, représentations et coopération",
    "Prises d'information sur les missions et la gouvernance",
  ],
};

export const homeStats = [
  { value: "1998", label: "création et ancrage institutionnel" },
  { value: "6", label: "missions prioritaires présentées sur le site" },
  { value: "2", label: "points de contact mis en avant" },
  { value: "4", label: "axes majeurs : protection, coordination, médiation, veille" },
];

export const highlights = [
  {
    kicker: "Mission",
    title: "Une institution orientée vers la protection et la coordination",
    body:
      "Le site présente la P.I.G comme une organisation de veille, d'encadrement et d'intervention attentive à la protection des droits, à la prévention des risques et au suivi de terrain.",
  },
  {
    kicker: "Organisation",
    title: "Une structure articulée entre direction, relais régionaux et départements",
    body:
      "La lecture du site met en avant une direction générale, des organes de pilotage, des services de soutien et des relais territoriaux chargés d'assurer la continuité institutionnelle.",
  },
  {
    kicker: "Preuves visuelles",
    title: "Des images de réunions, de missions et d'inauguration qui documentent l'activité",
    body:
      "Les contenus visuels disponibles permettent d'appuyer le discours institutionnel par des scènes d'inauguration, de coordination, de suivi avec le MINAT et d'actions de protection des consommateurs.",
  },
];

export const values = [
  "Intégrité dans l'action",
  "Respect des droits humains",
  "Coordination responsable",
  "Protection des personnes et des biens",
  "Professionnalisme dans la représentation",
];

export const timeline = [
  {
    period: "21 décembre 1998",
    title: "Création de l'organisation",
    description:
      "La P.I.G est présentée comme succédant au Haut Commissariat d'Intervention Générale, avec une vocation de protection, de veille et d'assistance.",
  },
  {
    period: "1998 - 2012",
    title: "Phase de structuration initiale",
    description:
      "NEBOT Etienne conduit la première séquence de gouvernance et pose les bases de l'organisation institutionnelle.",
  },
  {
    period: "2012 - 2021",
    title: "Consolidation de la gouvernance",
    description:
      "Dr ABESSO ZAMBO EDGARD poursuit l'évolution de la structure et de la présence institutionnelle.",
  },
  {
    period: "2021 - 2024",
    title: "Continuité du commandement",
    description:
      "Dr CHOUGWI Paul assure la continuité de la hiérarchie générale et des grands équilibres de gouvernance.",
  },
  {
    period: "Depuis 2024",
    title: "Direction générale actuelle",
    description:
      "Hon. TAPE DZUDIE JEAN MARIE est présenté comme Haut Commissaire Général, avec MEHOUNE NKONO HONORE comme Vice Haut Commissaire Général.",
  },
];

export const aboutPillars = [
  {
    title: "Positionnement institutionnel",
    description:
      "La P.I.G se présente comme une organisation d'intervention générale à vocation internationale, avec une expression documentaire forte au Cameroun.",
  },
  {
    title: "Culture de responsabilité",
    description:
      "Le discours met l'accent sur la prévention, la coopération, la médiation, la veille et la protection des personnes plutôt que sur une communication spectaculaire.",
  },
  {
    title: "Preuve par les actions",
    description:
      "Les missions de terrain, les rencontres stratégiques et l'inauguration du siège servent de base concrète au récit institutionnel.",
  },
];

export const missions = [
  {
    title: "Recherche et renseignement",
    description:
      "Collecte, centralisation et analyse d'informations utiles à la prévention des risques sécuritaires, sociaux et institutionnels.",
  },
  {
    title: "Protection des droits humains",
    description:
      "Surveillance, documentation et dénonciation des atteintes aux droits fondamentaux avec une approche centrée sur la dignité humaine.",
  },
  {
    title: "Protection des consommateurs",
    description:
      "Contrôle de la qualité des produits, sensibilisation du public et lutte contre les pratiques trompeuses ou abusives.",
  },
  {
    title: "Secours et interventions d'urgence",
    description:
      "Appui en situation de crise, coordination de terrain et organisation d'interventions responsables au service des populations.",
  },
  {
    title: "Arbitrage et médiation",
    description:
      "Accompagnement des parties en conflit pour favoriser des résolutions apaisées, crédibles et conformes au droit.",
  },
  {
    title: "Formation et sensibilisation",
    description:
      "Renforcement des capacités, diffusion d'une culture de prévention et accompagnement des acteurs engagés dans les missions prioritaires.",
  },
];

export const missionDetails = [
  {
    title: "Recherche et renseignement",
    image: "/images/operations/strategy-meeting-wide.jpg",
    description:
      "Cette mission vise à produire une lecture claire des situations sensibles afin d'éclairer la décision, la prévention et la coordination interne.",
    points: [
      "Collecter des informations utiles à l'évaluation des risques",
      "Structurer la remontée d'information depuis le terrain",
      "Orienter la décision institutionnelle sur des bases documentées",
    ],
  },
  {
    title: "Protection des droits humains",
    image: "/images/about/minat-session.jpg",
    description:
      "La protection des droits humains est présentée comme un engagement transversal touchant la prévention, l'alerte, la documentation et la sensibilisation.",
    points: [
      "Observer les situations susceptibles d'affecter les droits fondamentaux",
      "Documenter les atteintes et contribuer à leur signalement",
      "Soutenir une culture institutionnelle de dignité et de responsabilité",
    ],
  },
  {
    title: "Protection des consommateurs",
    image: "/images/actions/consumer-protection.jpg",
    description:
      "Les visuels du dossier montrent des contrôles de terrain et des actions orientées vers la sécurité des produits et la protection du public.",
    points: [
      "Surveiller la qualité et la conformité de certains produits",
      "Informer les populations sur les risques de consommation",
      "Renforcer la vigilance contre les abus commerciaux",
    ],
  },
  {
    title: "Secours et interventions d'urgence",
    image: "/images/gallery/meeting-6.jpg",
    description:
      "Cette mission donne une dimension opérationnelle à l'organisation en combinant préparation, coordination et capacité d'appui en contexte sensible.",
    points: [
      "Structurer la coordination des interventions urgentes",
      "Contribuer à la protection des personnes et des biens",
      "Assurer un cadre d'action responsable et tracé",
    ],
  },
  {
    title: "Arbitrage et médiation",
    image: "/images/gallery/meeting-4.jpg",
    description:
      "Le site met en avant une logique d'apaisement, de régulation et de recherche de solutions dans les situations de tension ou de conflit.",
    points: [
      "Faciliter des résolutions amiables et crédibles",
      "Encadrer les échanges dans un cadre de confiance",
      "Favoriser l'équité et la lisibilité des décisions",
    ],
  },
  {
    title: "Formation et sensibilisation",
    image: "/images/gallery/strategy-meeting-2.jpg",
    description:
      "La formation soutient la professionnalisation des équipes et la diffusion d'une culture de prévention, de gouvernance et de service.",
    points: [
      "Renforcer les compétences internes et partenariales",
      "Diffuser des références sur les droits et la prévention",
      "Appuyer la cohérence méthodologique entre les missions",
    ],
  },
];

export const leadership = [
  {
    name: "JOMGANG NGONGO JEAN PAUL",
    role: "Délégué régional de l'Ouest",
    description:
      "Représentation territoriale, coordination régionale et proximité opérationnelle dans les actions institutionnelles.",
    image: "/images/governance/regional-west.jpg",
  },
  {
    name: "MOGOUE Fabrice Eclador",
    role: "Délégué régional du Littoral",
    description:
      "Animation du dispositif régional et relais des engagements institutionnels sur le terrain.",
    image: "/images/governance/regional-littoral.jpg",
  },
  {
    name: "YAKER EKALL Simone Daniella",
    role: "Chargée des relations publiques",
    description:
      "Interface de représentation, suivi des sollicitations externes et accompagnement des prises de contact institutionnelles.",
    image: "/images/governance/public-relations.jpg",
  },
];

export const executiveLeaders = [
  {
    name: "Hon. Dr TAPE DZUDIE JEAN MARIE",
    role: "Haut Commissaire Général",
    description:
      "Assure la direction générale, la représentation institutionnelle et la coordination des grandes orientations stratégiques.",
  },
  {
    name: "MEHOUNE NKONO HONORE",
    role: "Vice Haut Commissaire Général",
    description:
      "Soutient la gouvernance centrale, le suivi transversal des responsabilités et la cohérence du dispositif organisationnel.",
  },
];

export const departments = [
  "Département des droits de l'homme",
  "Département de la lutte contre la corruption",
  "Département de la protection des consommateurs",
  "Département des opérations de secours",
  "Département de l'arbitrage et de la médiation",
  "Service de conseil et de rédaction",
  "Service de formation et de développement",
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
      "Observation, alerte, appui à la transparence et promotion d'une gouvernance responsable.",
  },
  {
    title: "Protection des consommateurs",
    description:
      "Contrôles, information du public et prévention des pratiques préjudiciables aux consommateurs.",
  },
  {
    title: "Opérations de secours",
    description:
      "Préparation et coordination de dispositifs d'appui en contexte sensible ou urgent.",
  },
  {
    title: "Arbitrage et médiation",
    description:
      "Cadre de régulation et d'apaisement des conflits dans une logique d'équité et de dialogue.",
  },
  {
    title: "Conseil, rédaction et formation",
    description:
      "Production de supports, accompagnement méthodologique et renforcement des capacités institutionnelles.",
  },
];

export const faqItems = [
  {
    question: "Quelle est la vocation principale de la P.I.G ?",
    answer:
      "La P.I.G se présente comme une organisation d'intervention générale à dimension internationale, engagée dans la protection des droits humains, la recherche, le renseignement, la médiation et l'assistance d'urgence.",
  },
  {
    question: "Quels domaines d'action sont mis en avant ?",
    answer:
      "Le site met en avant la recherche et le renseignement, la protection des droits humains, la protection des consommateurs, les secours, l'arbitrage et la formation.",
  },
  {
    question: "À qui s'adresse le site institutionnel ?",
    answer:
      "Le site s'adresse aux partenaires institutionnels, aux visiteurs souhaitant comprendre l'organisation, ainsi qu'aux personnes cherchant un point de contact ou des informations de représentation.",
  },
  {
    question: "L'organisation intervient-elle uniquement au Cameroun ?",
    answer:
      "Le positionnement affiche une vocation internationale, avec un ancrage documentaire fort au Cameroun et un point de contact en France pour les relations extérieures.",
  },
  {
    question: "Quels types de demandes peuvent être adressés via la page contact ?",
    answer:
      "La page contact est adaptée aux demandes d'information institutionnelle, aux sollicitations de représentation, aux partenariats et aux prises de contact préparatoires.",
  },
  {
    question: "Comment la gouvernance est-elle présentée ?",
    answer:
      "Le site distingue la direction générale, les organes de pilotage, les conseils spécialisés, les départements thématiques et plusieurs relais régionaux ou de représentation.",
  },
  {
    question: "Que montre la galerie ?",
    answer:
      "La galerie réunit des images d'inauguration du siège, de réunions stratégiques, de missions de suivi et de scènes de représentation utiles pour documenter la présence institutionnelle.",
  },
  {
    question: "Comment entrer en relation avec la P.I.G ?",
    answer:
      "Le site met en avant un courriel principal, un bureau de contact en France, des numéros de téléphone au Cameroun et un parcours de prise de contact adapté au type de demande.",
  },
];

export const faqCategories = [
  {
    title: "Comprendre l'organisation",
    items: [
      "Vocation générale et positionnement",
      "Ancrage géographique et institutionnel",
      "Gouvernance, missions et relais régionaux",
    ],
  },
  {
    title: "Préparer une prise de contact",
    items: [
      "Choix du bon canal selon la demande",
      "Coordonnées utiles et horaires de référence",
      "Partenariats, représentation et demandes institutionnelles",
    ],
  },
];

export const galleryImages = [
  {
    title: "Cérémonie d'inauguration du siège",
    category: "Inauguration du siège",
    image: "/images/gallery/inauguration-ceremony.jpg",
    summary:
      "Vue d'ensemble de l'inauguration mettant en scène la dimension protocolaire et la visibilité institutionnelle du site national.",
  },
  {
    title: "Responsables et invités lors de l'inauguration",
    category: "Inauguration du siège",
    image: "/images/gallery/inauguration-officers.jpg",
    summary:
      "Présence des responsables et acteurs institutionnels dans un contexte de représentation officielle.",
  },
  {
    title: "Briefing pendant la visite du site",
    category: "Inauguration du siège",
    image: "/images/gallery/inauguration-briefing.jpg",
    summary:
      "Temps d'explication et de circulation autour du site au moment de son inauguration.",
  },
  {
    title: "Visite institutionnelle du nouveau site",
    category: "Inauguration du siège",
    image: "/images/gallery/inauguration-visit.jpg",
    summary:
      "Séquence de visite utile pour documenter l'implantation et l'organisation spatiale du siège.",
  },
  {
    title: "Façade du site national de Baham",
    category: "Inauguration du siège",
    image: "/images/gallery/inauguration-facility.jpg",
    summary:
      "Image de référence du site utilisée pour attester l'ancrage physique et la visibilité de l'organisation.",
  },
  {
    title: "Concertation des responsables",
    category: "Réunions stratégiques",
    image: "/images/gallery/strategy-meeting-1.jpg",
    summary:
      "Réunion de travail utile pour illustrer la coordination institutionnelle et le pilotage des priorités.",
  },
  {
    title: "Séance de travail institutionnelle",
    category: "Réunions stratégiques",
    image: "/images/gallery/strategy-meeting-2.jpg",
    summary:
      "Image représentative de la méthode interne de concertation et d'organisation.",
  },
  {
    title: "Échange opérationnel entre responsables",
    category: "Réunions stratégiques",
    image: "/images/gallery/strategy-meeting-3.jpg",
    summary:
      "Illustration d'un cadre de suivi et de coordination entre acteurs de la gouvernance.",
  },
  {
    title: "Mission de suivi avec les cadres du MINAT",
    category: "Suivi institutionnel",
    image: "/images/gallery/minat-follow-up-2.jpg",
    summary:
      "Documente les relations institutionnelles et le travail de suivi réalisé avec des cadres du MINAT.",
  },
  {
    title: "Mission de terrain et observation",
    category: "Actions de terrain",
    image: "/images/gallery/meeting-6.jpg",
    summary:
      "Scène de déploiement montrant l'articulation entre terrain, présence institutionnelle et coordination.",
  },
  {
    title: "Séquence de coordination élargie",
    category: "Actions de terrain",
    image: "/images/gallery/meeting-5.jpg",
    summary:
      "Illustration d'une dynamique d'échange et de supervision autour d'une action ou d'une visite.",
  },
  {
    title: "Moments de représentation et de suivi",
    category: "Représentation",
    image: "/images/gallery/baham-4.jpg",
    summary:
      "Image utile pour compléter l'archive visuelle des visites, prises de parole et activités de représentation.",
  },
];

export const galleryHighlights = [
  "Inauguration du siège national",
  "Réunions stratégiques et coordination",
  "Missions de suivi institutionnel",
  "Représentation et scènes de terrain",
];

export const governanceBodies = [
  "Assemblée Générale",
  "Conseil d'Administration",
  "Bureau Exécutif",
  "Cour Arbitrale de Justice",
  "Conseil des Officiers",
];

export const governanceBodyDetails = [
  {
    title: "Assemblée Générale",
    description:
      "Cadre de référence pour les grandes orientations, la légitimité institutionnelle et la lecture d'ensemble des priorités.",
  },
  {
    title: "Conseil d'Administration",
    description:
      "Instance de pilotage de l'organisation, du suivi stratégique et de la cohérence des décisions.",
  },
  {
    title: "Bureau Exécutif",
    description:
      "Niveau opérationnel de coordination des actions, du suivi des départements et des relations internes.",
  },
  {
    title: "Cour Arbitrale de Justice",
    description:
      "Cadre de régulation et d'arbitrage soutenant la médiation, l'équité et le traitement des situations sensibles.",
  },
  {
    title: "Conseil des Officiers",
    description:
      "Espace d'appui à la chaîne de commandement et à la structuration des responsabilités internes.",
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
      "Appuie les dimensions d'investigation, de rigueur méthodologique et de documentation spécialisée.",
  },
  {
    title: "Droits de l'Homme",
    description:
      "Porte les enjeux de dignité, de veille et de protection des libertés fondamentales.",
  },
  {
    title: "Lutte contre la corruption",
    description:
      "Soutient la transparence, l'alerte et la promotion de pratiques institutionnelles responsables.",
  },
  {
    title: "Protection des consommateurs",
    description:
      "Structure les actions de prévention, de contrôle et de sensibilisation dirigées vers le public.",
  },
];

export const rankGroups = [
  {
    title: "Officiers supérieurs",
    items: ["Commissaires", "Inspecteurs généraux", "Inspecteurs spéciaux", "Jurés maîtres"],
  },
  {
    title: "Officiers",
    items: ["Aspirants d'intervention", "Chefs de brigade d'intervention"],
  },
  {
    title: "Sous-officiers",
    items: ["Brigadiers principaux", "Brigadiers 2ème grade", "Brigadiers 1er grade"],
  },
  {
    title: "Hommes de rang",
    items: [
      "Préposés d'intervention 2ème grade",
      "Préposés d'intervention 1er grade",
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
    description: "Premier Haut Commissaire Général depuis la création de l'organisation.",
  },
  {
    years: "2012 - 2021",
    name: "Dr ABESSO ZAMBO EDGARD",
    description: "Deuxième Haut Commissaire Général, associé à la consolidation institutionnelle.",
  },
  {
    years: "2021 - 2024",
    name: "Dr CHOUGWI Paul",
    description: "Troisième Haut Commissaire Général, dans une logique de continuité du commandement.",
  },
  {
    years: "Depuis 2024",
    name: "Hon. TAPE DZUDIE Jean Marie",
    description: "Quatrième Haut Commissaire Général en fonction.",
  },
];

export const teamProfiles = [
  {
    name: "Commissaire JOMGANG NGONGO Jean Paul",
    role: "Délégué régional de l'Ouest",
    image: "/images/governance/regional-west.jpg",
  },
  {
    name: "Commissaire MOGOUE Fabrice Eclador",
    role: "Délégué régional du Littoral",
    image: "/images/governance/regional-littoral.jpg",
  },
  {
    name: "YAKER EKALL Simone Daniella",
    role: "Chargée des relations publiques",
    image: "/images/governance/public-relations.jpg",
  },
];

export const actionStories = [
  {
    title: "Réunions stratégiques des responsables en 2025",
    excerpt:
      "Des sessions de concertation consacrées à la coordination des priorités institutionnelles, au suivi des actions et à l'amélioration de la gouvernance opérationnelle.",
    image: "/images/operations/strategy-meeting-wide.jpg",
    tag: "Coordination",
    context: "Pilotage interne",
    date: "2025",
  },
  {
    title: "Mission de suivi avec les cadres du MINAT en 2024",
    excerpt:
      "Un temps d'échange et d'observation pour apprécier l'organisation, les méthodes de travail et les dynamiques de collaboration institutionnelle.",
    image: "/images/actions/minat-visit-2.jpg",
    tag: "Suivi institutionnel",
    context: "Relations institutionnelles",
    date: "2024",
  },
  {
    title: "Mission de protection des consommateurs",
    excerpt:
      "Des contrôles de terrain orientés vers la sécurité des produits et la protection effective des consommateurs.",
    image: "/images/actions/consumer-protection.jpg",
    tag: "Protection",
    context: "Action de terrain",
    date: "Documentation du dossier",
  },
  {
    title: "Inauguration du nouveau siège national à Baham",
    excerpt:
      "Un repère fort dans le développement de la P.I.G, symbole d'ancrage, de visibilité institutionnelle et de structuration durable.",
    image: "/images/hero/headquarters.jpg",
    tag: "Implantation",
    context: "Développement institutionnel",
    date: "Documentation du dossier",
  },
];
