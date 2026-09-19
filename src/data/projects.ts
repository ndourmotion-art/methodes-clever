const adsPreview = { url: "/media/ads-preview.jpg" };
const adsShot1 = { url: "/media/ads-mobility-123249.png" };
const adsShot2 = { url: "/media/ads-mobility-123216.png" };
const adsShot3 = { url: "/media/ads-mobility-123316.png" };
const adsShot4 = { url: "/media/ads-mobility-123223.png" };
import lionhheadJ7xAsset from "@/assets/Lionhhead_J7x.jpg.asset.json";
import threeBottlesAsset from "@/assets/3_bottles.jpg.asset.json";
import juiceCupAsset from "@/assets/Juice_Cup.jpg.asset.json";
import juiceFridgeAsset from "@/assets/Juice_Fridge.jpg.asset.json";
import juiceOnlyAsset from "@/assets/Juice_only.jpg.asset.json";
import lionhheadJ7x2Asset from "@/assets/Lionhhead_J7x-2.jpg.asset.json";
const jet7xPreview = { url: lionhheadJ7xAsset.url };
const jet7xShot1 = { url: threeBottlesAsset.url };
const jet7xShot2 = { url: juiceCupAsset.url };
const jet7xShot3 = { url: juiceFridgeAsset.url };
const jet7xShot4 = { url: juiceOnlyAsset.url };
const jet7xShot5 = { url: lionhheadJ7x2Asset.url };
const championsPreview = { url: "/media/les-champions.jpg" };
const noelMadarPreview = { url: "/media/noel-madar.jpg" };
import sinoMaliAsset from "@/assets/sino-africaine-mali.jpg.asset.json";
import dougabougouAsset from "@/assets/dougabougou.jpg.asset.json";
const sinoMaliPreview = { url: dougabougouAsset.url };
import sino1Asset from "@/assets/sino-1.jpg.asset.json";
import sino2Asset from "@/assets/sino-2.jpg.asset.json";
import sino3Asset from "@/assets/sino-3.jpg.asset.json";
import sino4Asset from "@/assets/sino-4.jpg.asset.json";
import sino5Asset from "@/assets/sino-5.jpg.asset.json";
import sino6Asset from "@/assets/sino-6.jpg.asset.json";
import sino7Asset from "@/assets/sino-7.jpg.asset.json";
import sino8Asset from "@/assets/sino-8.jpg.asset.json";
import sino9Asset from "@/assets/sino-9.jpg.asset.json";
const sino1 = { url: sino1Asset.url };
const sino2 = { url: sino2Asset.url };
const sino3 = { url: sino3Asset.url };
const sino4 = { url: sino4Asset.url };
const sino5 = { url: sino5Asset.url };
const sino6 = { url: sino6Asset.url };
const sino7 = { url: sino7Asset.url };
const sino8 = { url: sino8Asset.url };
const sino9 = { url: sino9Asset.url };
const muna1 = { url: "/media/muna1.jpg" };
const muna2 = { url: "/media/muna2.jpg" };
const muna3 = { url: "/media/muna3.jpg" };
const muna4 = { url: "/media/muna4.jpg" };
import unAllPeopleAsset from "@/assets/un-all-people.jpg.asset.json";
import unCallinAsset from "@/assets/un-callin.jpg.asset.json";
import unLybiaAsset from "@/assets/un-lybia.jpg.asset.json";
import unRefugiesAsset from "@/assets/un-refugies.jpg.asset.json";
import unMain2Asset from "@/assets/un-main-2.jpg.asset.json";
const unAllPeople = { url: unAllPeopleAsset.url };
const unCallin = { url: unCallinAsset.url };
const unLybia = { url: unLybiaAsset.url };
const unRefugies = { url: unRefugiesAsset.url };
const unMain2 = { url: unMain2Asset.url };
import madarAirPoster from "@/assets/madar-air-freshener.jpg.asset.json";
import unMainAsset from "@/assets/un-main.jpg.asset.json";

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
