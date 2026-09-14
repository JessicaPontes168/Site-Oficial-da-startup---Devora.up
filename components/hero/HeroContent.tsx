import Link from "next/link";

import styles from "./hero.module.css";

export default function HeroContent() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title} id="hero-title">
        Grandes ideias
        <br />
        merecem
        <br />
        <span>tecnologia à altura.</span>
      </h1>
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
