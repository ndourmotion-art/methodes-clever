import { useEffect } from "react";
import { Footer } from "@/components/clever/Footer";
import { Nav } from "@/components/clever/Nav";
import { useLenis } from "@/hooks/useLenis";

const sections = [
  {
    title: "1. Informations que nous collectons",
    paragraphs: [
      "Nous collectons des informations de différentes manières lorsque vous visitez et utilisez notre site.",
    ],
  },
  {
    title: "2. Données personnelles",
    paragraphs: [
      "Lors de l'utilisation de nos services, nous pouvons collecter les données personnelles suivantes :",
    ],
    items: [
      "Nom",
      "Adresse e-mail",
      "Toute autre information que vous nous transmettez directement",
    ],
  },
  {
    title: "3. Données d'utilisation",
    paragraphs: [
      "Nous pouvons également collecter des informations sur la manière dont notre service est consulté et utilisé, notamment :",
    ],
    items: [
      "Adresse IP",
      "Type de navigateur",
      "Informations sur l'appareil",
      "Pages visitées et temps passé sur chaque page",
      "Autres données de diagnostic",
    ],
  },
  {
    title: "4. Cookies et technologies de suivi",
    paragraphs: [
      "Nous utilisons des cookies et technologies de suivi similaires pour suivre l'activité sur notre service et conserver certaines informations. Les cookies sont de petits fichiers de données pouvant contenir un identifiant unique anonyme.",
      "Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être averti lors de leur envoi. Si vous n'acceptez pas les cookies, certaines parties de notre service peuvent ne pas fonctionner.",
    ],
  },
  {
    title: "5. Utilisation de vos informations",
    paragraphs: [
      "Nous utilisons les données collectées à différentes fins :",
    ],
    items: [
      "Fournir et maintenir notre service",
      "Vous informer des évolutions de notre service",
      "Vous permettre de participer aux fonctionnalités interactives",
    ],
  },
  {
    title: "6. Partage de vos informations",
    paragraphs: [
      "Nous ne vendons, n'échangeons et ne transférons pas vos données personnelles à des tiers, sauf dans les cas décrits dans la présente politique de confidentialité.",
      "Nous pouvons partager des informations avec des prestataires de confiance qui nous aident à exploiter notre site, à mener nos activités ou à vous servir, dès lors qu'ils s'engagent à en préserver la confidentialité.",
      "Nous pouvons également divulguer des informations lorsque nous estimons de bonne foi que cela est nécessaire pour protéger nos droits, respecter une procédure légale ou répondre à une demande légitime des autorités.",
    ],
  },
  {
    title: "7. Sécurité des données",
    paragraphs: [
      "Nous prenons des mesures raisonnables pour protéger les informations collectées contre la perte, l'usage abusif et l'accès non autorisé.",
      "Aucune méthode de transmission sur Internet ou de stockage électronique n'étant totalement sûre, nous ne pouvons cependant garantir une sécurité absolue.",
    ],
  },
  {
    title: "8. Vos droits",
    paragraphs: [
      "Selon votre lieu de résidence, vous pouvez disposer du droit de :",
    ],
    items: [
      "Accéder aux données personnelles que nous détenons à votre sujet ;",
      "Demander la rectification d'informations inexactes ou incomplètes ;",
      "Demander la suppression de vos données personnelles ;",
      "Retirer votre consentement au traitement de vos données.",
    ],
    after: [
      "Pour exercer l'un de ces droits, veuillez nous contacter à l'aide des coordonnées ci-dessous.",
    ],
  },
  {
    title: "9. Protection des mineurs",
    paragraphs: [
      "Notre site ne s'adresse pas aux enfants de moins de 13 ans et nous ne collectons pas sciemment de données personnelles les concernant.",
      "Si vous pensez qu'un enfant nous a communiqué des données personnelles, contactez-nous et nous prendrons les mesures nécessaires pour les supprimer.",
    ],
  },
  {
    title: "10. Modifications de cette politique",
    paragraphs: [
      "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre afin de refléter l'évolution de nos pratiques ou des exigences légales.",
      "Toute version actualisée sera publiée sur cette page avec une « date d'entrée en vigueur » révisée.",
      "La poursuite de votre utilisation du site après publication des modifications vaut acceptation de la politique mise à jour.",
    ],
  },
  {
    title: "11. Droit applicable",
    paragraphs: [
      "La présente politique de confidentialité est régie et interprétée conformément aux lois de la République du Rwanda, sauf disposition contraire de la loi applicable.",
      "Tout litige relatif à l'utilisation de ce site relève de la compétence des tribunaux du Rwanda.",
    ],
  },
];

const PrivacyPolicyPage = () => {
  useLenis(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <article className="mx-auto max-w-[1100px] px-6 pb-24 pt-36 md:pb-36 md:pt-44 lg:px-10">
        <header className="border-b border-foreground/15 pb-12 md:pb-16">
          <p className="eyebrow mb-5 text-primary">Date d'entrée en vigueur : 23 juin 2024</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.9]">
            Politique de confidentialité
          </h1>
          <div className="mt-8 max-w-4xl space-y-5 text-lg font-medium leading-relaxed text-foreground/75 md:text-xl">
            <p>
              La présente politique de confidentialité décrit comment The FABRIQUE (« The FABRIQUE », « nous », « notre »
              ou « nos ») collecte, utilise et protège les informations lorsque vous visitez notre site et utilisez nos
              services.
            </p>
            <p>
              En accédant à notre site ou en l'utilisant, vous consentez à la collecte et à l'utilisation des informations
              telles que décrites dans cette politique de confidentialité.
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
            <h2 className="font-display text-2xl font-black uppercase leading-tight md:text-3xl">12. Nous contacter</h2>
            <div className="space-y-5 text-base font-medium leading-relaxed text-foreground/75 md:text-lg">
              <p>Pour toute question relative à cette politique de confidentialité ou à l'utilisation de notre site, vous pouvez nous contacter :</p>
              <address className="not-italic font-bold text-foreground">
                The FABRIQUE<br />
                Kigali, Rwanda<br />
                E-mail : <a className="text-primary underline underline-offset-4" href="mailto:hello@methodesclever.com">hello@methodesclever.com</a>
              </address>
              <p>En accédant à ce site et en l'utilisant, vous reconnaissez avoir lu, compris et accepté la présente politique de confidentialité.</p>
            </div>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;
