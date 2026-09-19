import { useEffect } from "react";
import { Footer } from "@/components/clever/Footer";
import { Nav } from "@/components/clever/Nav";
import { useLenis } from "@/hooks/useLenis";

const sections = [
  {
    title: "1. Utilisation de notre site",
    paragraphs: [
      "Le site de The FABRIQUE est mis à disposition à titre d'information générale sur notre entreprise, notre travail créatif, nos services, notre portfolio, nos projets et nos activités.",
      "Vous vous engagez à utiliser ce site uniquement à des fins licites et d'une manière qui ne saurait :",
    ],
    items: [
      "Enfreindre une loi ou une réglementation applicable ;",
      "Porter atteinte aux droits de The FABRIQUE ou de tout tiers ;",
      "Tenter d'accéder sans autorisation à notre site, nos systèmes ou nos données ;",
      "Perturber le fonctionnement, la sécurité ou la disponibilité du site ;",
      "Utiliser nos contenus à des fins frauduleuses, trompeuses ou commerciales non autorisées.",
    ],
  },
  {
    title: "2. Propriété intellectuelle",
    paragraphs: [
      "Sauf indication contraire, l'ensemble des contenus présents sur ce site — notamment, sans s'y limiter :",
    ],
    items: [
      "Le nom et le logo The FABRIQUE ;",
      "Les textes et contenus rédactionnels ;",
      "Les photographies et images ;",
      "Les vidéos et films ;",
      "Les graphismes et illustrations ;",
      "Les animations et contenus 3D ;",
      "Les concepts créatifs et supports visuels ;",
      "Le design et la mise en page du site ;",
      "Tout autre contenu original ;",
    ],
    after: [
      "appartient à The FABRIQUE ou lui est concédé sous licence, et est protégé par les lois applicables en matière de propriété intellectuelle.",
      "Vous pouvez consulter et accéder aux contenus de ce site pour un usage personnel ou informatif.",
      "Vous ne pouvez pas reproduire, copier, modifier, distribuer, republier, vendre, concéder sous licence ou exploiter commercialement les contenus de notre site sans l'autorisation écrite préalable de The FABRIQUE.",
    ],
  },
  {
    title: "3. Portfolio et travaux de tiers",
    paragraphs: [
      "Notre site peut présenter des travaux créatifs, campagnes, publicités, films, photographies, marques, logos ou projets réalisés par The FABRIQUE pour des clients ou d'autres organisations.",
      "La présence de marques, logos ou travaux de tiers sur notre site ne signifie pas nécessairement que The FABRIQUE en est le propriétaire.",
      "Ces éléments restent la propriété de leurs détenteurs respectifs et sont présentés à des fins de portfolio, éditoriales, informatives ou promotionnelles.",
    ],
  },
  {
    title: "4. Exactitude des informations",
    paragraphs: [
      "Nous mettons en œuvre des efforts raisonnables pour que les informations présentées sur ce site soient exactes et à jour.",
      "Nous ne garantissons toutefois pas que toutes les informations seront à tout moment complètes, exactes, actuelles ou exemptes d'erreurs.",
      "The FABRIQUE se réserve le droit de modifier, mettre à jour, supprimer ou changer les contenus du site à tout moment et sans préavis.",
    ],
  },
  {
    title: "5. Disponibilité du site",
    paragraphs: [
      "Nous nous efforçons de maintenir notre site accessible et opérationnel. Nous ne garantissons cependant pas qu'il sera toujours disponible, ininterrompu, sécurisé ou exempt d'erreurs techniques.",
      "Le site peut occasionnellement être indisponible en raison d'opérations de maintenance, de problèmes techniques, de mises à jour, d'incidents d'hébergement ou de circonstances échappant à notre contrôle raisonnable.",
    ],
  },
  {
    title: "6. Liens externes",
    paragraphs: [
      "Notre site peut contenir des liens vers des sites tiers, plateformes, comptes de réseaux sociaux ou autres ressources externes.",
      "Ces liens sont fournis à titre pratique et informatif.",
      "The FABRIQUE ne contrôle pas et n'est pas responsable du contenu, de la disponibilité, de la sécurité, des pratiques de confidentialité ou des politiques des sites tiers.",
      "La consultation de sites externes via les liens présents sur notre site relève de votre seule initiative.",
    ],
  },
  {
    title: "7. Communications des utilisateurs",
    paragraphs: [
      "Si vous contactez The FABRIQUE via notre site, par e-mail, formulaire de contact ou tout autre canal de communication, vous vous engagez à fournir des informations exactes et non trompeuses.",
      "Vous ne devez pas utiliser nos canaux de communication pour transmettre des contenus illicites, abusifs, diffamatoires, frauduleux, menaçants ou malveillants.",
    ],
  },
  {
    title: "8. Confidentialité",
    paragraphs: [
      "Nous respectons la vie privée des visiteurs de notre site.",
      "Les informations que vous nous transmettez volontairement, telles que votre nom, votre adresse e-mail, les informations relatives à votre entreprise ou d'autres coordonnées, peuvent être utilisées pour répondre à vos demandes, communiquer avec vous et vous informer sur nos services.",
      "Nous traitons les données personnelles conformément aux lois applicables en matière de confidentialité et de protection des données.",
    ],
  },
  {
    title: "9. Cookies et technologies du site",
    paragraphs: [
      "Notre site peut utiliser des cookies ou technologies similaires afin d'améliorer son fonctionnement, comprendre son utilisation, analyser le trafic et enrichir l'expérience utilisateur.",
      "Lorsque la loi applicable l'exige, des mécanismes de consentement appropriés peuvent être mis en place.",
      "Vous pouvez également gérer ou désactiver les cookies dans les réglages de votre navigateur. La désactivation de certains cookies peut affecter certaines fonctionnalités du site.",
    ],
  },
  {
    title: "10. Avertissement",
    paragraphs: [
      "Les contenus de ce site sont fournis à titre d'information générale.",
      "Rien sur ce site ne doit être considéré comme un conseil professionnel, juridique, financier ou spécialisé.",
      "The FABRIQUE ne garantit pas que les informations, supports ou contenus disponibles via le site répondront à vos besoins ou attentes particuliers.",
    ],
  },
  {
    title: "11. Limitation de responsabilité",
    paragraphs: [
      "Dans les limites autorisées par la loi applicable, The FABRIQUE ne saurait être tenue responsable de tout préjudice direct, indirect, accessoire, consécutif ou autre résultant de l'utilisation ou de l'impossibilité d'utiliser ce site.",
      "Cela inclut, sans limitation, les préjudices résultant de :",
    ],
    items: [
      "Interruptions du site ;",
      "Erreurs techniques ;",
      "Perte de données ;",
      "Sites ou services tiers ;",
      "Confiance accordée aux informations publiées sur le site ;",
      "Accès non autorisé échappant à notre contrôle raisonnable.",
    ],
  },
  {
    title: "12. Modification des présentes conditions",
    paragraphs: [
      "Nous pouvons mettre à jour ces conditions et politiques de temps à autre afin de refléter les évolutions de notre site, de nos services, des exigences légales ou de nos pratiques.",
      "Toute version actualisée sera publiée sur cette page avec une date de « dernière mise à jour » révisée.",
      "La poursuite de votre utilisation du site après publication des modifications vaut acceptation des conditions et politiques mises à jour.",
    ],
  },
  {
    title: "13. Droit applicable",
    paragraphs: [
      "Les présentes conditions et politiques sont régies et interprétées conformément aux lois de la République du Rwanda, sauf disposition contraire de la loi applicable.",
      "Tout litige relatif à l'utilisation de ce site relève de la compétence des tribunaux du Rwanda.",
    ],
  },
];

const TermsAndPoliciesPage = () => {
  useLenis(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <article className="mx-auto max-w-[1100px] px-6 pb-24 pt-36 md:pb-36 md:pt-44 lg:px-10">
        <header className="border-b border-foreground/15 pb-12 md:pb-16">
          <p className="eyebrow mb-5 text-primary">Dernière mise à jour : septembre 2026</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.9]">
            Conditions et politiques
          </h1>
          <div className="mt-8 max-w-4xl space-y-5 text-lg font-medium leading-relaxed text-foreground/75 md:text-xl">
            <p>Bienvenue sur le site de The FABRIQUE (« The FABRIQUE », « nous », « notre » ou « nos »).</p>
            <p>
              Les présentes conditions et politiques régissent votre utilisation de notre site et de ses contenus. En
              accédant à ce site ou en l'utilisant, vous acceptez de les respecter. Si vous n'acceptez pas l'une de ces
              conditions, veuillez cesser d'utiliser le site.
            </p>
          </div>
        </header>

        <div className="divide-y divide-foreground/15">
          {sections.map((section) => (
            <section key={section.title} className="grid gap-5 py-10 md:grid-cols-[minmax(15rem,0.7fr)_1.3fr] md:gap-14 md:py-14">
              <h2 className="font-display text-2xl font-black uppercase leading-tight md:text-3xl">{section.title}</h2>
              <div className="space-y-5 text-base font-medium leading-relaxed text-foreground/75 md:text-lg">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items && (
                  <ul className="list-disc space-y-2 pl-6 marker:text-primary">
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {section.after?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}

          <section className="grid gap-5 py-10 md:grid-cols-[minmax(15rem,0.7fr)_1.3fr] md:gap-14 md:py-14">
            <h2 className="font-display text-2xl font-black uppercase leading-tight md:text-3xl">14. Nous contacter</h2>
            <div className="space-y-5 text-base font-medium leading-relaxed text-foreground/75 md:text-lg">
              <p>Pour toute question relative aux présentes conditions et politiques ou à l'utilisation de notre site, vous pouvez nous contacter :</p>
              <address className="not-italic font-bold text-foreground">
                The FABRIQUE<br />
                Kigali, Rwanda<br />
                E-mail : <a className="text-primary underline underline-offset-4" href="mailto:hello@methodesclever.com">hello@methodesclever.com</a>
              </address>
              <p>En accédant à ce site et en l'utilisant, vous reconnaissez avoir lu, compris et accepté les présentes conditions et politiques.</p>
            </div>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default TermsAndPoliciesPage;
