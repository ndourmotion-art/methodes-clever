import { useRef, useState } from "react";
import { Paperclip } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export const ContactCTA = () => {
  const ref = useReveal<HTMLDivElement>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const inputClass =
    "w-full rounded-2xl bg-foreground/10 border border-foreground/10 px-6 py-5 text-xl text-foreground font-semibold placeholder:text-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent transition";
  const labelClass = "block text-sm eyebrow text-foreground/70 mb-3 font-semibold";

  return (
    <section id="contact" className="py-24 md:py-32">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6 lg:px-12">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className={labelClass}>Nom complet</label>
              <input id="name" type="text" placeholder="Votre nom" maxLength={100} className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>E-mail</label>
              <input id="email" type="email" placeholder="votre@email.com" maxLength={255} className={inputClass} />
            </div>
          </div>

          <div>
            <label htmlFor="company" className={labelClass}>Entreprise</label>
            <input id="company" type="text" placeholder="Nom de votre entreprise" maxLength={150} className={inputClass} />
          </div>

          <div>
            <label htmlFor="service" className={labelClass}>Service souhaité</label>
            <div className="relative">
              <select
                id="service"
                defaultValue=""
                className={`${inputClass} appearance-none pr-12 font-medium`}
              >
                <option value="" disabled>Choisissez un service</option>
                <option value="activation">Activation de marque</option>
                <option value="branding">Identité de marque</option>
                <option value="production">Production & Réalisation</option>
                <option value="design-dynamique">Design dynamique</option>
                <option value="design-statique">Design statique</option>
                <option value="conception">Conception & Rédaction</option>
              </select>
              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-foreground/80">▾</span>
            </div>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>Message</label>
            <div className="grid md:grid-cols-[1fr_auto] gap-6 items-stretch">
              <textarea
                id="message"
                rows={6}
                maxLength={1000}
                placeholder="Décrivez votre projet en quelques lignes…"
                className={`${inputClass} resize-none`}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full md:w-56 rounded-2xl border-2 border-dashed border-foreground/20 bg-muted/30 hover:bg-muted/60 transition flex flex-col items-center justify-center gap-3 p-6 text-center"
              >
                <Paperclip className="h-7 w-7 text-foreground/70" />
                <span className="eyebrow leading-tight">
                  Joindre<br />un fichier<br />ou un brief
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground/70">
                  {fileName ?? "(Optionnel)"}
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                />
              </button>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-3 rounded-full bg-foreground text-background px-10 py-5 text-xl font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Envoyer le message <span aria-hidden>↗</span>
            </button>
          </div>

          <div className="pt-4 text-base md:text-lg font-semibold text-foreground flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-lg md:text-xl">Écrivez-nous</span>
            <a href="mailto:hello@methodesclever.com" className="text-lg md:text-xl font-bold text-foreground hover:text-primary transition-colors">
              hello@methodesclever.com
            </a>
            <span className="text-foreground/30">·</span>
            <a href="tel:+221781425680" className="text-lg md:text-xl font-bold text-foreground hover:text-primary transition-colors">+221 78 142 56 80</a>
          </div>
        </form>
      </div>
    </section>
  );
};
