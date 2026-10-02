"use client";

import { useState } from "react";
import { Zap, Code2, TrendingUp, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import styles from "./hero.module.css";

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState<"performance" | "tech" | "results">("performance");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className={styles.visualContainer}>
      {/* Luz ambiente (azul claro + menta) atrás do card */}
      <div className={styles.visualGlowOrb} />

      {/* Floating Badge Top Right */}
      <div className={styles.floatingBadgeTop}>
        <div className={styles.floatingBadgeIcon}>
          <Zap />
        </div>
        <div className={styles.floatingBadgeText}>
          <span className={styles.floatingBadgeTitle}>PageSpeed Score</span>
          <span className={styles.floatingBadgeValue}>100 / 100 ⚡</span>
        </div>
      </div>

      {/* Floating Badge Bottom Left */}
      <div className={styles.floatingBadgeBottom}>
        <div className={styles.floatingBadgeIconBlue}>
          <ShieldCheck />
        </div>
        <div className={styles.floatingBadgeText}>
          <span className={styles.floatingBadgeTitle}>Arquitetura</span>
          <span className={styles.floatingBadgeValue}>Next.js 16 + AI</span>
        </div>
      </div>

      {/* Main Glassmorphism Tech Card with 3D Tilt */}
      <div
        className={styles.techCard}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        {/* Card Header */}
        <div className={styles.techCardHeader}>
          <div className={styles.techCardDots}>
            <span className={styles.macDotRed} />
            <span className={styles.macDotYellow} />
            <span className={styles.macDotGreen} />
          </div>
          <div className={styles.techCardUrlBadge}>
            <span className={styles.techCardPulseDot} />
            devora.digital · live engine
          </div>
          <div className={styles.techCardStatus}>
            <Sparkles />
            <span>v2.4</span>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className={styles.techCardTabs}>
          <button
            type="button"
            onClick={() => setActiveTab("performance")}
            className={`${styles.techTabBtn} ${activeTab === "performance" ? styles.techTabBtnActive : ""}`}
          >
            <Zap />
            <span>Performance</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("tech")}
            className={`${styles.techTabBtn} ${activeTab === "tech" ? styles.techTabBtnActive : ""}`}
          >
            <Code2 />
            <span>Tecnologias</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("results")}
            className={`${styles.techTabBtn} ${activeTab === "results" ? styles.techTabBtnActive : ""}`}
          >
            <TrendingUp />
            <span>Resultados</span>
          </button>
        </div>

        {/* Tab Content 1: Performance */}
        {activeTab === "performance" && (
          <div className={styles.tabContent}>
            {/* Speed Gauge Banner */}
            <div className={styles.speedGaugeBanner}>
              <div className={styles.gaugeCircle}>
                <span className={styles.gaugeNumber}>100</span>
                <span className={styles.gaugeLabel}>Score</span>
              </div>
              <div className={styles.speedStats}>
                <div className={styles.speedStatItem}>
                  <span className={styles.speedStatName}>Carregamento (LCP)</span>
                  <span className={styles.speedStatVal}>0.3s (Instantâneo)</span>
                </div>
                <div className={styles.speedStatItem}>
                  <span className={styles.speedStatName}>SEO & Acessibilidade</span>
                  <span className={styles.speedStatVal}>100% Otimizado</span>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className={styles.metricsGrid}>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Performance</span>
                <div className={styles.metricProgressBar}>
                  <div className={styles.metricFill} style={{ width: "100%" }} />
                </div>
                <span className={styles.metricPercent}>100%</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>Melhores Práticas</span>
                <div className={styles.metricProgressBar}>
                  <div className={styles.metricFill} style={{ width: "100%" }} />
                </div>
                <span className={styles.metricPercent}>100%</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricLabel}>SEO Google</span>
                <div className={styles.metricProgressBar}>
                  <div className={styles.metricFill} style={{ width: "98%" }} />
                </div>
                <span className={styles.metricPercent}>98%</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Tech Stack */}
        {activeTab === "tech" && (
          <div className={styles.tabContent}>
            <div className={styles.codeTerminal}>
              <div className={styles.codeLine}>
                <span className={styles.codeKeyword}>const</span>{" "}
                <span className={styles.codeVar}>projetoDevora</span> = {"{"}
              </div>
              <div className={styles.codeLineIndent}>
                <span className={styles.codeProp}>framework</span>:{" "}
                <span className={styles.codeString}>&apos;Next.js 16 + React 19&apos;</span>,
              </div>
              <div className={styles.codeLineIndent}>
                <span className={styles.codeProp}>styling</span>:{" "}
                <span className={styles.codeString}>&apos;Tailwind + WebGL 3D&apos;</span>,
              </div>
              <div className={styles.codeLineIndent}>
                <span className={styles.codeProp}>performance</span>:{" "}
                <span className={styles.codeNumber}>99.9</span>,
              </div>
              <div className={styles.codeLineIndent}>
                <span className={styles.codeProp}>responsivo</span>:{" "}
                <span className={styles.codeBool}>true</span>,
              </div>
              <div className={styles.codeLineIndent}>
                <span className={styles.codeProp}>otimizadoSEO</span>:{" "}
                <span className={styles.codeBool}>true</span>
              </div>
              <div className={styles.codeLine}>{"}"};</div>
            </div>

            <div className={styles.techPillsRow}>
              <span className={styles.techPill}>✦ Next.js</span>
              <span className={styles.techPill}>✦ TypeScript</span>
              <span className={styles.techPill}>✦ WebGL</span>
              <span className={styles.techPill}>✦ SEO Rank #1</span>
            </div>
          </div>
        )}

        {/* Tab Content 3: Results */}
        {activeTab === "results" && (
          <div className={styles.tabContent}>
            <div className={styles.resultsCardsRow}>
              <div className={styles.resultCardItem}>
                <span className={styles.resultBigNumber}>+340%</span>
                <span className={styles.resultLabel}>Aumento de conversão</span>
              </div>
              <div className={styles.resultCardItem}>
                <span className={styles.resultBigNumber}>0.3s</span>
                <span className={styles.resultLabel}>Tempo de resposta</span>
              </div>
            </div>

            <div className={styles.resultsFeatureList}>
              <div className={styles.featureListItem}>
                <CheckCircle2 />
                <span>Design exclusivo desenhado para a sua marca</span>
              </div>
              <div className={styles.featureListItem}>
                <CheckCircle2 />
                <span>Otimizado para converter visitantes em clientes</span>
              </div>
              <div className={styles.featureListItem}>
                <CheckCircle2 />
                <span>Suporte dedicado e código 100% autoral</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
