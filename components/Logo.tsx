import Image from "next/image";

type LogoProps = {
  /** Tamanho do símbolo em px (o wordmark acompanha proporcionalmente). */
  size?: number;
  /** "dark" = wordmark grafite (fundos claros) · "light" = wordmark off-white (fundos escuros). */
  tone?: "dark" | "light";
  priority?: boolean;
};

/**
 * Assinatura da marca: símbolo em gradiente azul claro → verde menta
 * + wordmark "DEVORA" em sans-serif geométrica leve.
 * Usado no Header e no Footer para manter a marca consistente.
 */
export default function Logo({ size = 44, tone = "dark", priority = false }: LogoProps) {
  return (
    <span
      className={`logo-lockup logo-${tone}`}
      style={{ "--logo-size": `${size}px` } as React.CSSProperties}
    >
      <Image
        src="/images/logo/devora-mark.png"
        alt=""
        width={size}
        height={Math.round(size * (646 / 630))}
        priority={priority}
        className="logo-mark"
      />
      <span className="logo-word">Devora</span>
    </span>
  );
}
