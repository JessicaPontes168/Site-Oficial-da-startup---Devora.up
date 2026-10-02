import { useId } from "react";

type OrganicLinesProps = {
  className?: string;
};

/**
 * Linhas orgânicas e discretas (mesma linguagem gráfica do uniforme da marca).
 * Puramente decorativo. A animação de "desenho" é CSS e respeita prefers-reduced-motion.
 */
export default function OrganicLines({ className = "" }: OrganicLinesProps) {
  const id = useId().replace(/:/g, "");
  const stroke = `url(#organic-${id})`;

  return (
    <svg
      className={`organic-lines ${className}`}
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`organic-${id}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#6EC8E8" />
          <stop offset="1" stopColor="#8EDCC3" />
        </linearGradient>
      </defs>
      <path
        pathLength={1}
        d="M-40 640 C 220 610 330 420 560 360 S 940 300 1240 60"
        stroke={stroke}
        strokeWidth="1.4"
      />
      <path
        pathLength={1}
        d="M-40 705 C 260 680 400 470 640 410 S 1000 360 1240 150"
        stroke={stroke}
        strokeWidth="1.1"
        opacity="0.7"
      />
      <path
        pathLength={1}
        d="M700 730 C 820 570 900 480 1010 430 C 1090 392 1150 335 1240 250"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}
