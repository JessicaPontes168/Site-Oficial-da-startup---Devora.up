import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero/Hero";
import OrganicLines from "@/components/OrganicLines";
import PresenceStory from "@/components/PresenceStory";
import "./story-section.css";
import Faq from "@/components/Faq";
const offerings = [
  {
    slug: "sites",
    icon: "fa-laptop-code",
    title: "Sites",
    text: (
      <>
        Seu negócio presente na internet <strong>o tempo todo</strong>. Sites
        profissionais que aparecem no Google e transformam visitantes em
        clientes.
      </>
    ),
  },
  {
    slug: "sistemas",
    icon: "fa-layer-group",
    title: "Sistemas",
    text: (
      <>
        Mais <strong>organização</strong> para a sua rotina. Sistemas sob
        medida para acompanhar clientes, tarefas e processos do jeito que sua
        empresa funciona.
      </>
    ),
  },
  {
    slug: "plataformas",
    icon: "fa-cubes",
    title: "Plataformas",
    text: (
      <>
        Tudo o que o seu projeto precisa <strong>em um só lugar</strong>: áreas
        de acesso, painéis e conteúdos, prontos para crescer com você.
      </>
    ),
  },
  {
    slug: "saas",
    icon: "fa-cloud",
    title: "SaaS",
    text: (
      <>
        Sua ideia transformada em <strong>produto digital</strong>. Apps e
        sistemas online que as pessoas acessam pela internet, por assinatura.
      </>
    ),
  },
  {
    slug: "automacoes",
    icon: "fa-gears",
    title: "Automações",
    text: (
      <>
        <strong>Menos trabalho repetitivo</strong>, mais tempo para o que
        importa.Mensagens, avisos e cobranças feitos automaticamente.
      </>
    ),
  },
];

const steps = [
  {
    title: "Entender",
    text: "Conversamos sobre o seu negócio, o problema e o que precisa existir na primeira versão.",
  },
  {
    title: "Planejar",
    text: "Definimos escopo, telas e tecnologia, e você aprova a interface antes de qualquer código.",
  },
  {
    title: "Construir",
    text: "Você acompanha cada entrega e participa das decisões, sem precisar esperar o projeto ficar pronto para opinar.",
  },
  {
    title: "Colocar no ar",
    text: "Publicamos, testamos em produção e seguimos ao seu lado depois do lançamento.",
  },
];

const reasons = [
  {
    title: "Código próprio",
    text: "Nada de template genérico: cada projeto é construído para o seu caso.",
  },
  {
    title: "Site rápido e fácil de achar",
    text: "Feito com Next.js e React para carregar rápido no celular e aparecer melhor no Google.",
  },
  {
    title: "Fala direto com quem constrói",
    text: "Sem intermediários: você conversa com as pessoas que escrevem o seu software.",
  },
  {
    title: "Suporte depois do lançamento",
    text: "Quando o projeto vai ao ar, seguimos ao seu lado para ajustes e dúvidas.",
  },
];
const projects = [
  {
    name: "TV Russas",
    text: "Portal digital moderno de notícias, com sistema gerenciador de conteúdo para a redação publicar e organizar as matérias.",
    tags: ["Portal de notícias", "Gerenciador de conteúdo"],
    image: "/images/sitetvrussas.png",
    width: 1254,
    height: 1254,
    photo: true,
    alt: "Site do portal TV Russas aberto em um notebook",
  },
  {
    name: "Mega Store",
    text: "Sistema de gestão completo para loja de assistência técnica e celulares, com site de vendas e pedido de orçamento.",
    tags: ["Sistema de gestão", "Site da loja"],
    image: "/images/mega.png",
    width: 1887,
    height: 907,
    photo: false,
    alt: "Site da Mega Store, loja de celulares e assistência técnica",
  },
];
export default function Home() {
  return (
    <>
      <Hero />

      <div className="white-content">
        {/* O QUE A DEVORA CONSTRÓI */}
        <PresenceStory />
        <section className="services section" id="servicos">
          <div className="section-title">
            <span>O que a Devora constrói</span>
            <h2>Cinco formas de colocar a sua ideia em produção</h2>
          </div>
          <div className="services-feature">
            {offerings.map((item) => (
              <div className="service-card" key={item.title}>
                <i className={`fa-solid ${item.icon}`} aria-hidden="true"></i>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link href={`/servicos#${item.slug}`} className="service-link">
                  Saiba mais <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link href="/servicos" className="btn-secondary">
              Ver todos os serviços
            </Link>
          </div>
        </section>

        {/* COMO TRABALHAMOS */}
        <section className="process section section--dark" id="como-trabalhamos">
          <div className="section-title">
            <span>Como trabalhamos</span>
            <h2>Da ideia ao software no ar.</h2>
          </div>
          <div className="process-grid process-grid--steps">
            {steps.map((step, index) => (
              <div className="process-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SOBRE A DEVORA */}
        <section className="about-home section section--tint" id="sobre-devora">
          <div className="about-home-layout">
            <figure className="about-home-photo">
              <Image
                src="/images/IA.jpeg"
                alt="Fundadores da Devora diante do letreiro da marca"
                width={1086}
                height={1448}
                sizes="(max-width: 900px) 100vw, 460px"
              />
            </figure>
            <div className="about-home-text">
              <div className="section-title section-title--left">
                <span>Sobre a Devora</span>
                <h2>Um time pequeno, envolvido em cada projeto.</h2>
              </div>
              <p>
                A Devora é uma empresa de tecnologia que transforma ideias em sites, sistemas, plataformas, SaaS e automações. Nosso time é enxuto e próximo: quem conversa com você sobre o projeto é a mesma pessoa que escreve o código.
              </p>
              <p>
                Cuidamos com a mesma atenção de um portal de notícias, como o TV Russas, e de um sistema de gestão, como o Mega Store. Em todo projeto, o caminho é o mesmo: entender o problema, desenhar com cuidado e entregar funcionando.
              </p>
              <Link href="/sobre" className="btn-secondary">
                Conhecer a Devora
              </Link>
            </div>
          </div>
        </section>
        <Faq />

        {/* CTA FINAL */}
        <section className="cta" id="contato">
          <OrganicLines className="cta-lines" />
          <h2>Tem uma ideia? Vamos transformar isso em produto.</h2>
          <p> Você sonha, a Devora constrói. Peça seu orçamento e veja sua ideia ganhar vida.</p>
          <Link href="/contato">Solicitar orçamento</Link>
        </section>
      </div>
    </>
  );
}