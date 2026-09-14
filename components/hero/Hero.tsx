"use client";

import { useState } from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import styles from "./hero.module.css";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-title"
      onMouseMove={handleMouseMove}
      style={
        {
          "--mouse-x": `${mousePos.x}px`,
          "--mouse-y": `${mousePos.y}px`,
        } as React.CSSProperties
      }
    >
      <HeroBackground />
      
      {/* Luz ambiente interativa */}
      <div className={styles.mouseLight} />
      
      <div className={styles.inner}>
        <div className={styles.heroGrid}>
          <HeroContent />
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
