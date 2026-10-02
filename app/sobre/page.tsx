import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import OrganicLines from "@/components/OrganicLines";
import Manifesto from "@/components/Manifesto";
import Reveal from "@/components/Reveal";

const team = [
  { name: "Tiago Pontes Olegario", src: "/images/tiago.jpg" },
  { name: "Jessica Pontes Olegario", src: "/images/jessica.jpg" },
];

const points = [
  {
    icon: "fa-code",
    title: "Tecnologia atual",
    text: "Ferramentas modernas para o seu produto ser estável e crescer.",
  },
  {
    icon: "fa-handshake-angle",
    title: "Parceria de verdade",
    text: "O seu crescimento é o nosso crescimento.",
  },
  {
    icon: "fa-pen-ruler",
    title: "Cuidado com o acabamento",
    text: "Design e usabilidade no mesmo nível do código.",
  },
];
const purpose = [
  {
    icon: "fa-bullseye",
    title: "Missão",
    text: "Transformar ideias em tecnologia que funciona de verdade para o negócio de quem confia na gente.",
  },
  {
    icon: "fa-eye",
    title: "Visão",
    text: "Ser a parceira de tecnologia que o cliente chama de primeira e chama de novo.",
  },
];

const values = [
  {
    title: "Proximidade",
    text: "Você fala com quem constrói, do primeiro contato ao lançamento.",
  },
  {
    title: "Clareza",
    text: "Você aprova a interface antes de qualquer código e acompanha cada entrega.",
  },
  {
    title: "Código próprio",
    text: "Nada de template genérico: cada projeto é feito para o seu caso.",
  },
  {
    title: "Compromisso",
    text: "Seguimos ao seu lado depois do lançamento.",
  },
];

export default function Sobre() {
  return (
    <>
      <PageHero
        title={
          <>
            Conheça a <span>Devora</span>
          </>
        }
        description="A gente cuida da tecnologia para você cuidar do seu negócio."
      />

      <div className="white-content">
        {/* QUEM SOMOS */}
        <section className="about-home section" id="sobre">
          <div className="about-home-layout">
            <div className="sobre-team">
              {team.map((person) => (
                <figure key={person.name}>
                  <Image
                    src={person.src}
                    alt={person.name}
                    width={720}
                    height={900}
                    sizes="(max-width: 900px) 45vw, 220px"
                  />
                  <figcaption>{person.name}</figcaption>
                </figure>
              ))}
            </div>
            <div className="about-home-text">
              <div className="section-title section-title--left">
                <span>Quem somos</span>
                <h2>Você fala direto com quem constrói.</h2>
              </div>
              <p>
                A Devora cria sites, sistemas, plataformas, SaaS e automações.
                Cada projeto é acompanhado de perto, do primeiro contato ao
                lançamento.
              </p>
              <ul className="sobre-points">
                {points.map((point) => (
                  <li key={point.title}>
                    <i className={`fa-solid ${point.icon}`} aria-hidden="true"></i>
                    <div>
                      <h3>{point.title}</h3>
                      <p>{point.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* MANIFESTO */}
        <Manifesto />

        {/* MISSÃO E VISÃO */}
        <section className="section" id="missao-visao">
          <div className="section-title">
            <span>Missão e visão</span>
            <h2>O que nos guia</h2>
          </div>
          <div className="about-container">
            {purpose.map((item, index) => (
              <Reveal key={item.title} delay={index * 120}>
                <div className="about-card">
                  <i className={`fa-solid ${item.icon}`} aria-hidden="true"></i>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* VALORES */}
        <section className="section section--alt" id="valores">
          <div className="section-title">
            <span>Valores</span>
            <h2>O que não abrimos mão</h2>
          </div>
          <div className="valores-grid">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 120}>
                <div className="valor">
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta" id="contato">
          <OrganicLines className="cta-lines" />
          <h2>Tem uma ideia? Vamos transformar isso em produto.</h2>
          <p>Conte o que você quer construir e a Devora leva do briefing ao deploy.</p>
          <Link href="/contato">Solicitar orçamento</Link>
        </section>
      </div>
    </>
  );
}