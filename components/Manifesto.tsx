"use client";

import { useEffect, useRef, useState } from "react";

const words = "Ideias que viram tecnologia, construídas junto com você.".split(" ");

export default function Manifesto() {
    const ref = useRef<HTMLParagraphElement>(null);
    const [lit, setLit] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setLit(words.length);
            return;
        }

        const update = () => {
            const top = el.getBoundingClientRect().top;
            const vh = window.innerHeight;
            const start = vh * 0.9;
            const end = vh * 0.5;
            const progress = Math.min(1, Math.max(0, (start - top) / (start - end)));
            setLit(Math.round(progress * words.length));
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <section className="manifesto section section--alt" aria-label="Manifesto">
            <p className="manifesto-text" ref={ref}>
                {words.map((word, i) => (
                    <span key={i} className={i < lit ? "on" : undefined}>
                        {word}{" "}
                    </span>
                ))}
                <i
                    className={`manifesto-caret${lit === words.length ? " on" : ""}`}
                    aria-hidden="true"
                ></i>
            </p>
        </section>
    );
}