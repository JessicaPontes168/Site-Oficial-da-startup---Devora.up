import type { ReactNode } from "react";
import OrganicLines from "./OrganicLines";

type PageHeroProps = {
  /** Título (aceita <span> para destacar em gradiente). */
  title: ReactNode;
  description: string;
};

/** Hero compacto reutilizado nas páginas internas (Sobre, Serviços, Portfólio, Contato). */
export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <OrganicLines className="page-hero-lines" />
      <div className="page-hero-inner">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
