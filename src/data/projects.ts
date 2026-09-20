import { mediaUrl } from "@/lib/media";

const image = (filename: string) => ({ url: mediaUrl(filename) });
const adsPreview = image("ads-preview.jpg");
const adsShot1 = image("ads-mobility-123249.png");
const adsShot2 = image("ads-mobility-123216.png");
const adsShot3 = image("ads-mobility-123316.png");
const adsShot4 = image("ads-mobility-123223.png");
const jet7xPreview = image("Lionhhead_J7x.jpg");
const jet7xShot1 = image("3_bottles.jpg");
const jet7xShot2 = image("Juice_Cup.jpg");
const jet7xShot3 = image("Juice_Fridge.jpg");
const jet7xShot4 = image("Juice_only.jpg");
const jet7xShot5 = image("Lionhhead_J7x-2.jpg");
const championsPreview = image("les-champions.jpg");
const noelMadarPreview = image("noel-madar.jpg");
const sinoMaliPreview = image("dougabougou.jpg");
const sino1 = image("sino-1.jpg");
const sino2 = image("sino-2.jpg");
const sino3 = image("sino-3.jpg");
const sino4 = image("sino-4.jpg");
const sino5 = image("sino-5.jpg");
const sino6 = image("sino-6.jpg");
const sino7 = image("sino-7.jpg");
const sino8 = image("sino-8.jpg");
const sino9 = image("sino-9.jpg");
const muna1 = image("muna1.jpg");
const muna2 = image("muna2.jpg");
const muna3 = image("muna3.jpg");
const muna4 = image("muna4.jpg");
const unAllPeople = image("un-all-people.jpg");
const unCallin = image("un-callin.jpg");
const unLybia = image("un-lybia.jpg");
const unRefugies = image("un-refugies.jpg");
const unMain2 = image("un-main-2.jpg");
const madarAirPoster = image("madar-air-freshener.png");
const unMainAsset = image("un-main.jpg");

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  image: string;
  video?: string;
  videoAspect?: string; // native aspect ratio of the hover video, e.g. "9 / 16"
  link?: string;
  client: string;
  year: string;
  role: string;
  description: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "project-a",
    title: "ADS Mobility",
    tags: ["Publicité", "Direction artistique"],
    image: adsPreview.url,
    link: "https://vimeo.com/1205898492",
    client: "ADS",
    year: "2025",
    role: "Direction artistique, Production",
    description:
      "Un film publicitaire pour ADS Mobility présentant l'application de mobilité : calcul d'itinéraire, cartes Xeweul et accès par QR code sur les autoroutes du Sénégal.",
    gallery: [
      adsShot1.url,
      adsShot2.url,
      adsShot3.url,
      adsShot4.url,
    ],
  },
  {
    slug: "jet7x-doundeul",
    title: "Jet7x \"Doundeul sa katan\"",
    tags: ["Publicité", "Motion"],
    image: jet7xPreview.url,
    link: "https://vimeo.com/1130287469?fl=pl&fe=sh",
    videoAspect: "9 / 16",
    client: "Jet7x",
    year: "2025",
    role: "Réalisation, Production",
    description:
      "Une campagne publicitaire pour Jet7x, une mise en scène énergique autour de la boisson iconique.",
    gallery: [jet7xShot1.url, jet7xShot2.url, jet7xShot3.url, jet7xShot4.url, jet7xShot5.url],
  },
  {
    slug: "champions-proprete",
    title: "Les Champions de la propreté",
    tags: ["Animation 3D", "Publicité"],
    image: championsPreview.url,
    link: "https://vimeo.com/779602628?fl=pl&fe=sh",
    client: "Confidentiel",
    year: "2024",
    role: "Réalisation, Animation 3D",
    description:
      "Une animation 3D vibrante célébrant l'esprit d'équipe et la performance sur le terrain.",
    gallery: [championsPreview.url],
  },
  {
    slug: "noel-chez-madar",
    title: "Noël chez Madar",
    tags: ["Publicité", "3D"],
    image: noelMadarPreview.url,
    link: "https://vimeo.com/1066685587?fl=pl&fe=sh",
    client: "Madar",
    year: "2024",
    role: "Réalisation, Production",
    description:
      "Une campagne festive pour Madar mêlant lumière, éclat et magie de Noël.",
    gallery: [noelMadarPreview.url],
  },
  {
    slug: "madar-air-freshener",
    title: "Madar\nDÉSODORISANT",
    tags: ["Publicité", "Motion"],
    image: madarAirPoster.url,
    link: "https://vimeo.com/1227731457",
    client: "Madar",
    year: "2026",
    role: "Réalisation, Production",
    description:
      "Une campagne pour la gamme de désodorisants Madar, apportant fraîcheur et mouvement à la marque.",
    gallery: [madarAirPoster.url],
  },
  {
    slug: "cooperation-sino-africaine-mali",
    title: "Coopération sino-africaine au Mali",
    tags: ["Documentaire", "Motion design"],
    image: sinoMaliPreview.url,
    link: "https://vimeo.com/924594743?fl=pl&fe=sh",
    client: "Confidentiel",
    year: "2024",
    role: "Réalisation, Motion",
    description:
      "Un film documentaire retraçant la coopération économique sino-africaine au Mali.",
    gallery: [sino1.url, sino2.url, sino3.url, sino4.url, sino5.url, sino6.url, sino7.url, sino8.url, sino9.url],
  },
  {
    slug: "le-jardin-muna",
    title: "Le Jardin Muna",
    tags: ["Publicité", "Direction artistique"],
    image: muna4.url,
    client: "Le Jardin Muna",
    year: "2025",
    role: "Direction artistique, Production",
    description:
      "Une campagne visuelle vibrante pour Le Jardin Muna, célébrant des jus 100 % naturels à travers des visuels colorés et immersifs.",
    gallery: [muna1.url, muna2.url, muna3.url, muna4.url],
  },
  {
    slug: "unhcr-refugees-short-film",
    title: "HCR\nCourt-métrage réfugiés",
    tags: ["Documentaire", "Film"],
    image: unMainAsset.url,
    link: "https://vimeo.com/995526353?fl=pl&fe=sh",
    client: "HCR",
    year: "2025",
    role: "Réalisation, Production",
    description:
      "Un court-métrage produit pour le HCR, racontant les histoires de réfugiés avec humanité et dignité.",
    gallery: [unAllPeople.url, unCallin.url, unLybia.url, unRefugies.url, unMain2.url],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
