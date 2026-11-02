import type { CSSProperties, ReactNode, RefObject } from "react";
import { useReveal } from "../hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Atraso em milissegundos para efeito em cascata. */
  delay?: number;
  /** Elemento renderizado. Use "li" dentro de listas para manter a semântica. */
  as?: "div" | "li";
};

export function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  const classes = `reveal ${visible ? "is-visible" : ""} ${className}`;
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  if (as === "li") {
    return (
      <li ref={ref as RefObject<HTMLLIElement | null>} className={classes} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={ref as RefObject<HTMLDivElement | null>} className={classes} style={style}>
      {children}
    </div>
  );
}
