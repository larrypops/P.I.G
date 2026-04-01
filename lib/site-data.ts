export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pig.example";

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
  email: "ydaniella@yahoo.fr",
};

export const homeStats = [
  { value: "1998", label: "année de fondation" },
  { value: "4", label: "grands domaines d'intervention" },
  { value: "2", label: "bureaux de contact mis en avant" },
  { value: "1", label: "vision : sécurité, droits et responsabilité" },
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
      "Surveillance, documentation et dénonciation des atteintes aux droits fondamentaux, avec une approche axée sur la dignité humaine.",
  },
  {
    title: "Protection des consommateurs",
    description:
      "Contrôle de la qualité de produits, sensibilisation du public et lutte contre les abus commerciaux ou les pratiques trompeuses.",
  },
  {
    title: "Secours et interventions d'urgence",
    description:
      "Appui en situation de crise, opérations de secours, coordination de terrain et maintien d'un cadre d'action responsable.",
  },
  {
    title: "Arbitrage et médiation",
    description:
      "Accompagnement des parties en conflit pour favoriser des résolutions apaisées, crédibles et conformes au droit.",
  },
  {
    title: "Formation et sensibilisation",
    description:
      "Renforcement des capacités des agents et diffusion d'une culture des droits humains, de la gouvernance et de la prévention.",
  },
];

export const values = [
  "Intégrité",
  "Respect des droits humains",
  "Équité",
  "Solidarité internationale",
  "Professionnalisme",
];

export const highlights = [
  {
    kicker: "Cadre institutionnel",
    title: "Une organisation structurée, active et responsable",
    body:
      "La Police Internationale d'Intervention Générale se présente comme une organisation d'intervention générale à vocation internationale, organisée autour d'une direction générale, d'organes spécialisés et de départements opérationnels.",
  },
  {
    kicker: "Présence de terrain",
    title: "Des missions visibles et des actions documentées",
    body:
      "Le dossier met en avant des réunions stratégiques, des missions de suivi, la protection des consommateurs et l'inauguration d'un siège national, ce qui donne au site une base visuelle institutionnelle solide.",
  },
  {
    kicker: "Crédibilité",
    title: "Une communication centrée sur la mission et la confiance",
    body:
      "Le positionnement du site doit insister sur la responsabilité, l'encadrement, la médiation, la formation et la coopération plutôt que sur un discours spectaculaire.",
  },
];

export const timeline = [
  {
    period: "21 décembre 1998",
    title: "Création de l'organisation",
    description:
      "La P.I.G est présentée comme succédant au Haut Commissariat d'Intervention Générale, avec une vocation de protection, de veille et d'intervention.",
  },
  {
    period: "1998 - 2012",
    title: "Premier Haut Commissaire Général",
    description: "NEBOT Etienne dirige la première phase de structuration institutionnelle.",
  },
  {
    period: "2012 - 2021",
    title: "Deuxième gouvernance",
    description: "Dr ABESSO ZAMBO EDGARD poursuit l'évolution de l'organisation.",
  },
  {
    period: "2021 - 2024",
    title: "Troisième gouvernance",
    description: "Dr CHOUGWI Paul assure la continuité de la hiérarchie générale.",
  },
  {
    period: "Depuis 2024",
    title: "Direction actuelle",
    description:
      "Hon. TAPE DZUDIE JEAN MARIE est présenté comme Haut Commissaire Général actuel, avec MEHOUNE NKONO HONORÉ comme Vice Haut Commissaire Général.",
  },
];

export const leadership = [
  {
    name: "Hon. Dr TAPE DZUDIE JEAN MARIE",
    role: "Haut Commissaire Général",
    description:
      "Direction générale, vision institutionnelle, représentation et coordination des grandes orientations.",
    image: "/images/about/headquarters-inauguration-group.jpg",
  },
  {
    name: "MEHOUNE NKONO HONORÉ",
    role: "Vice Haut Commissaire Général",
    description:
      "Appui à la gouvernance, pilotage des responsabilités transversales et expertise pluridisciplinaire.",
    image: "/images/operations/strategy-meeting-room.jpg",
  },
  {
    name: "JOMGANG NGONGO JEAN PAUL",
    role: "Délégué régional de l'Ouest",
    description:
      "Représentation territoriale, coordination régionale et proximité opérationnelle.",
    image: "/images/leadership/jomgang-ngongo-jean-paul.jpg",
  },
  {
    name: "MOGOUE Fabrice Eclador",
    role: "Délégué régional du Littoral",
    description:
      "Animation du dispositif régional et relais des engagements institutionnels sur le terrain.",
    image: "/images/leadership/mogoue-fabrice-eclador.jpg",
  },
  {
    name: "YAKER EKALL Simone Daniella",
    role: "Chargée des relations publiques",
    description:
      "Interface de contact, représentation internationale et suivi des demandes externes.",
    image: "/images/leadership/yaker-ekall-simone-daniella.jpg",
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

export const faqItems = [
  {
    question: "Quelle est la vocation principale de la P.I.G ?",
    answer:
      "La P.I.G se présente comme une organisation d'intervention générale à dimension internationale, engagée dans la protection des droits humains, la recherche, le renseignement, la médiation et l'assistance d'urgence.",
  },
  {
    question: "Quels domaines d'action sont mis en avant ?",
    answer:
      "Le dossier institutionnel mentionne la protection des consommateurs, les opérations de secours, la lutte contre la corruption, l'arbitrage, la formation et les enquêtes de terrain.",
  },
  {
    question: "L'organisation intervient-elle uniquement au Cameroun ?",
    answer:
      "Le positionnement affiché est international, avec un ancrage documentaire fort au Cameroun et un point de contact en France pour les relations extérieures.",
  },
  {
    question: "Comment entrer en relation avec la P.I.G ?",
    answer:
      "Le site met en avant un contact principal par téléphone et courriel, ainsi qu'une adresse de bureau en France pour les demandes institutionnelles et partenariales.",
  },
];

export const galleryImages = [
  {
    src: "/images/gallery/inauguration-ceremony.jpg",
    alt: "Cérémonie d'inauguration du siège national",
    category: "Inauguration du siège",
  },
  {
    src: "/images/gallery/inauguration-officers.jpg",
    alt: "Officiers et responsables lors de l'inauguration",
    category: "Inauguration du siège",
  },
  {
    src: "/images/gallery/inauguration-briefing.jpg",
    alt: "Temps d'échange durant l'inauguration",
    category: "Inauguration du siège",
  },
  {
    src: "/images/gallery/inauguration-visit.jpg",
    alt: "Visite institutionnelle du site",
    category: "Inauguration du siège",
  },
  {
    src: "/images/gallery/inauguration-facility.jpg",
    alt: "Façade du site national de Baham",
    category: "Inauguration du siège",
  },
  {
    src: "/images/gallery/strategy-meeting-1.jpg",
    alt: "Réunion stratégique des responsables",
    category: "Réunions stratégiques",
  },
  {
    src: "/images/gallery/strategy-meeting-2.jpg",
    alt: "Séance de travail institutionnelle",
    category: "Réunions stratégiques",
  },
  {
    src: "/images/gallery/strategy-meeting-3.jpg",
    alt: "Échange opérationnel entre responsables",
    category: "Réunions stratégiques",
  },
  {
    src: "/images/gallery/minat-follow-up-2.jpg",
    alt: "Mission de suivi avec les cadres du MINAT",
    category: "Suivi institutionnel",
  },
];

export const governanceBodies = [
  "Assemblée Générale",
  "Conseil d'Administration",
  "Bureau Exécutif",
  "Cour Arbitrale de Justice",
  "Conseil des Officiers",
];

export const specializedBodies = [
  "Conseil de la Police Technique et Scientifique",
  "Conseil des Droits de l'Homme",
  "Conseil de la Lutte contre la Corruption",
  "Conseil de la Protection des Consommateurs",
];

export const rankGroups = [
  {
    title: "Officiers supérieurs",
    items: [
      "Commissaires",
      "Inspecteurs généraux",
      "Inspecteurs spéciaux",
      "Jurés maîtres",
    ],
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
    name: "NEBOT Étienne",
    description: "Premier Haut Commissaire Général depuis la création de l'organisation.",
  },
  {
    years: "2012 - 2021",
    name: "Dr ABESSO ZAMBO EDGARD",
    description: "Deuxième Haut Commissaire Général.",
  },
  {
    years: "2021 - 2024",
    name: "Dr CHOUGWI Paul",
    description: "Troisième Haut Commissaire Général.",
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
    image: "/images/leadership/jomgang-ngongo-jean-paul.jpg",
  },
  {
    name: "Commissaire MOGOUE Fabrice Eclador",
    role: "Délégué régional du Littoral",
    image: "/images/leadership/mogoue-fabrice-eclador.jpg",
  },
  {
    name: "YAKER EKALL Simone Daniella",
    role: "Chargée des relations publiques",
    image: "/images/leadership/yaker-ekall-simone-daniella.jpg",
  },
];

export const actionStories = [
  {
    title: "Réunions stratégiques des responsables en 2025",
    excerpt:
      "Des sessions de concertation consacrées à la coordination des priorités institutionnelles, au suivi des actions et à l'amélioration de la gouvernance opérationnelle.",
    image: "/images/operations/strategy-meeting-wide.jpg",
    tag: "Coordination",
  },
  {
    title: "Mission de suivi avec les cadres du MINAT en 2024",
    excerpt:
      "Un temps d'échange et d'observation pour apprécier l'organisation, les méthodes de travail et les dynamiques de collaboration institutionnelle.",
    image: "/images/operations/minat-follow-up.jpg",
    tag: "Suivi institutionnel",
  },
  {
    title: "Mission de protection des consommateurs",
    excerpt:
      "Des contrôles de terrain orientés vers la sécurité des produits et la protection effective des consommateurs.",
    image: "/images/missions/consumer-protection.jpg",
    tag: "Protection",
  },
  {
    title: "Inauguration du nouveau siège national à Baham",
    excerpt:
      "Un repère fort dans le développement de la P.I.G, symbole d'ancrage, de visibilité institutionnelle et de structuration durable.",
    image: "/images/hero/headquarters-team.jpg",
    tag: "Institution",
  },
];
