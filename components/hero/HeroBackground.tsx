"use client";

import styles from "./hero.module.css";
import DarkVeil from "./DarkVeil";

export default function HeroBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div style={{ width: "1920px", height: "1080px", position: "relative" }}>
        <DarkVeil
          scanlineIntensity={0}
          scanlineFrequency={0}
          speed={0.8}
          warpAmount={0}
          noiseIntensity={0}
          resolutionScale={1.25}
        />
      </div>

      {/* Gradiente escuro no topo e embaixo para suavizar as bordas */}
      <div className={styles.vignette} />

      <div className={styles.ambientGlow} />
    </div>
  );
}
