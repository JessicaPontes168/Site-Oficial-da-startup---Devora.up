import Link from "next/link";

import styles from "./hero.module.css";

const offerings = ["Sites", "Sistemas", "Plataformas", "SaaS", "Automações"];

export default function HeroContent() {
  return (
    <div className={styles.content}>
      <div className={styles.badgeWrapper}>
        <span className={styles.eyebrow}>
          <span className={styles.eyebrowDot} aria-hidden="true" />
          Ideias que viram tecnologia.
        </span>
      </div>
      <h1 className={styles.title} id="hero-title">
        <span className={styles.line}>
          <span className={styles.lineInner}>Grandes ideias merecem</span>
        </span>
        <span className={`${styles.line} ${styles.lineAccent}`}>
          <span
            className={styles.lineInner}
            style={{ animationDelay: "0.18s" }}
          >
            tecnologia à altura.
          </span>
        </span>
      </h1>
      <p className={styles.lead}>
        A Devora cria o software do seu negócio, da primeira conversa até o ar.
        Código próprio, design com personalidade e gente de verdade cuidando de
        cada etapa.
      </p>
      <ul className={styles.chips} aria-label="O que a Devora constrói">
        {offerings.map((item, index) => (
          <li key={item} style={{ "--i": index } as React.CSSProperties}>
            <Link href="/#servicos" className={styles.chip}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.actions}>
        <Link href="/contato" className={styles.primaryAction}>
          Fazer orçamento
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/sobre" className={styles.secondaryAction}>
          Conhecer a Devora
        </Link>
      </div>
    </div>
  );
}
