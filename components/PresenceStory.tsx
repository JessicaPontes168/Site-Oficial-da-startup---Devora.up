"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

const channels = [
    { icon: "fa-brands fa-instagram", label: "Instagram" },
    { icon: "fa-brands fa-facebook-f", label: "Facebook" },
    { icon: "fa-brands fa-whatsapp", label: "WhatsApp" },
    { icon: "fa-brands fa-google", label: "Google" },
];

const siteBlocks = [
    { icon: "fa-solid fa-building", label: "Empresa" },
    { icon: "fa-solid fa-box-open", label: "Produtos" },
    { icon: "fa-solid fa-briefcase", label: "Serviços" },
    { icon: "fa-solid fa-lightbulb", label: "Projeto" },
];

const delay = (n: number) => ({ "--i": n }) as CSSProperties;

export default function PresenceStory() {
    const rootRef = useRef<HTMLElement>(null);

    // Revela cada etapa uma única vez, quando entra na tela.
    // Sem JS (ou sem IntersectionObserver) o conteúdo simplesmente fica visível.
    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;

        const steps = root.querySelectorAll<HTMLElement>("[data-reveal]");
        if (!("IntersectionObserver" in window)) {
            steps.forEach((el) => el.classList.add("is-visible"));
            return;
        }

        root.classList.add("story--armed");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "0px 0px -8% 0px" },
        );

        steps.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="story section section--alt"
            id="presenca-digital"
            ref={rootRef}
        >
            <div className="section-title">
                <span>Presença digital</span>
                <h2>Ser visto é só o começo</h2>
            </div>

            <ol className="story-list">
                {/* 01 — DIVULGAÇÃO */}
                <li className="story-step" data-reveal>
                    <div className="story-marker" aria-hidden="true">
                        01
                    </div>
                    <div className="story-body">
                        <div className="story-text">
                            <span className="story-kicker">Divulgação</span>
                            <h3 className="story-title story-title--quote">
                                Quem não é visto,{" "}
                                <span className="story-grad">não é lembrado.</span>
                            </h3>
                            <p>
                                Divulgar o seu negócio, produto ou projeto é o primeiro passo
                                para ser encontrado. Sem visibilidade, até a melhor ideia passa
                                despercebida.
                            </p>
                        </div>
                        <div className="story-visual" aria-hidden="true">
                            <div className="radar">
                                <span className="radar-ring" style={delay(0)} />
                                <span className="radar-ring" style={delay(1)} />
                                <span className="radar-ring" style={delay(2)} />
                                <span className="radar-core">
                                    <i className="fa-solid fa-bullhorn"></i>
                                </span>
                                <span className="radar-chip radar-chip--a" style={delay(1)}>
                                    <i className="fa-solid fa-heart"></i>
                                </span>
                                <span className="radar-chip radar-chip--b" style={delay(2)}>
                                    <i className="fa-solid fa-eye"></i>
                                </span>
                                <span className="radar-chip radar-chip--c" style={delay(3)}>
                                    <i className="fa-solid fa-share-nodes"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </li>

                {/* 02 — QUEM CHEGA PELO ANÚNCIO, CHEGA ONDE? */}
                <li className="story-step" data-reveal>
                    <div className="story-marker" aria-hidden="true">
                        02
                    </div>
                    <div className="story-body">
                        <div className="story-text">
                            <span className="story-kicker">Depois do clique</span>
                            <h3 className="story-title">
                                Mas quem chega pelo anúncio, chega onde?
                            </h3>
                            <p>
                                O cliente pode vir do Instagram, do Facebook, do WhatsApp ou de
                                uma busca. Sem um espaço próprio, ele cai em um perfil ou em uma
                                conversa solta, e a primeira impressão fica por conta da rede
                                social.
                            </p>
                        </div>
                        <div className="story-visual" aria-hidden="true">
                            <div className="funnel">
                                <div className="funnel-sources">
                                    {channels.map((channel, index) => (
                                        <span
                                            className="funnel-src"
                                            key={channel.label}
                                            style={delay(index)}
                                        >
                                            <i className={channel.icon}></i>
                                        </span>
                                    ))}
                                </div>
                                <span className="funnel-arrow" />
                                <span className="funnel-dest">?</span>
                            </div>
                        </div>
                    </div>
                </li>

                {/* 03 — SEU ESPAÇO DIGITAL */}
                <li className="story-step" data-reveal>
                    <div className="story-marker" aria-hidden="true">
                        03
                    </div>
                    <div className="story-body">
                        <div className="story-text">
                            <span className="story-kicker">Seu espaço digital</span>
                            <h3 className="story-title">
                                Um endereço só seu, onde o visitante conhece tudo.
                            </h3>
                            <p>
                                Um site ou ferramenta própria reúne em um só lugar quem você é, o
                                que oferece e o seu projeto. O visitante conhece a empresa, os
                                produtos e os serviços no próprio ritmo, com a sua identidade e
                                sem depender do algoritmo de ninguém.
                            </p>
                        </div>
                        <div className="story-visual" aria-hidden="true">
                            <div className="site-mock">
                                <div className="site-mock-bar">
                                    <span className="site-mock-dot" />
                                    <span className="site-mock-dot" />
                                    <span className="site-mock-dot" />
                                    <span className="site-mock-url">seunegocio.com.br</span>
                                </div>
                                <div className="site-mock-body">
                                    <div className="site-mock-hero">
                                        <b />
                                        <b />
                                    </div>
                                    <div className="site-mock-grid">
                                        {siteBlocks.map((block, index) => (
                                            <span
                                                className="site-mock-tile"
                                                key={block.label}
                                                style={delay(index)}
                                            >
                                                <i className={block.icon}></i>
                                                {block.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                {/* 04 — NÃO DEIXE SEU SONHO NO PAPEL */}
                <li className="story-step" data-reveal>
                    <div className="story-marker" aria-hidden="true">
                        04
                    </div>
                    <div className="story-body story-body--final">
                        <div className="story-text">
                            <h3 className="story-title story-title--final">
                                Não deixe seu sonho no papel
                            </h3>
                            <p>
                                Leve sua ideia para o digital e faça seu projeto ser ainda mais
                                visto.
                            </p>
                        </div>
                        <Link href="/contato" className="story-btn">
                            Entre em contato
                        </Link>
                    </div>
                </li>
            </ol>
        </section>
    );
}