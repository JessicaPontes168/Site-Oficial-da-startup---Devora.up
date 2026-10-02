import styles from "./hero.module.css";
import OrganicLines from "../OrganicLines";

/**
 * Fundo claro da marca: off-white com aurora azul claro + verde menta,
 * malha de pontos (toque tecnológico) e linhas orgânicas discretas.
 * Substitui o shader escuro (DarkVeil), que permanece no projeto sem uso.
 */
export default function HeroBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={`${styles.blob} ${styles.blobBlue}`} />
      <div className={`${styles.blob} ${styles.blobMint}`} />
      <div className={`${styles.blob} ${styles.blobSoft}`} />

      <div className={styles.dotGrid} />
      <OrganicLines className={styles.lines} />

      {/* Suaviza as bordas para o off-white da página */}
      <div className={styles.vignette} />
      <div className={styles.ambientGlow} />
    </div>
  );
}
