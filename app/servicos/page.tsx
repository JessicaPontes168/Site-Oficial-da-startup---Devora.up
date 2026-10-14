import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import WhatsAppButton from "@/components/WhatsAppButton";

type Service = {
  id: string;
  icon: string;
  title: string;
  text: string;
  /** Caminho da imagem em /public (ex.: "/images/servicos/sites.webp"). Opcional. */
  image?: string;
  imageAlt?: string;
};

const services: Service[] = [
  {
    id: "sites",
    icon: "fa-laptop-code",
    title: "Sites",
    image: "/images/servicos/tvrussas.png",
    imageAlt: "Portal de notícias TV Russas",
    text: "Seu site é a vitrine do seu negócio na internet. É onde seus clientes podem conhecer sua empresa, seus produtos e serviços, entender o que você oferece e entrar em contato com você. Mais do que uma página bonita, criamos sites profissionais que ajudam sua empresa a ser encontrada no Google, transmitir credibilidade e transformar visitantes em novos clientes.",
  },
  {
    id: "sistemas",
    icon: "fa-layer-group",
    title: "Sistemas",
    image: "/images/servicos/mega.png",
    imageAlt: "Sistema Mega Store, com produtos mais vendidos",
    text: "Sistemas são feitos para facilitar a rotina do seu negócio. Criamos ferramentas sob medida para guardar suas informações e acompanhar tarefas, clientes e processos, deixando o dia a dia mais simples e tudo do jeito que sua empresa realmente funciona.",
  },
  {
    id: "plataformas",
    icon: "fa-cubes",
    title: "Plataformas",
    image: "/images/servicos/devora.png",
    imageAlt: "Sistema Devora, com dashboard de métricas e gráficos",
    text: "Plataformas são ambientes na internet feitos para reunir tudo o que seu projeto precisa em um só lugar. Podem ter áreas exclusivas para usuários, painéis de controle, conteúdos e funcionalidades personalizadas, oferecendo uma experiência mais completa e preparada para acompanhar o crescimento do seu negócio.",
  },
  {
    id: "saas",
    icon: "fa-cloud",
    title: "SaaS",
    image: "/images/MgStore1.png",
    imageAlt: "Seção de assistência técnica do site da Mega Store, com troca de bateria, troca de tela e troca de vidro de câmera",
    text: "SaaS é quando a sua ideia vira um produto digital de verdade, que as pessoas acessam pela internet, normalmente por assinatura, como um app ou um sistema online. A gente transforma sua ideia em uma solução pronta para ser usada, pensada para funcionar bem hoje e crescer junto com o seu negócio.",
  },
  {
    id: "automacoes",
    icon: "fa-gears",
    title: "Automações",
    image: "/images/servicos/automacao.png",
    imageAlt: "Sistema de automação, com fluxos de mensagens e tarefas",
    text: "Automações fazem sozinhas as tarefas repetitivas que hoje tomam o tempo da sua equipe. Conectamos as ferramentas que você já usa para enviar mensagens, avisos e cobranças e organizar informações automaticamente, reduzindo erros e deixando mais tempo para o que realmente importa.",
  },
];

const solutions = [
  { icon: "fa-laptop-code", title: "Sites e páginas profissionais", text: "Criamos sites institucionais e páginas para apresentar sua empresa, divulgar serviços e conquistar clientes." },
  { icon: "fa-layer-group", title: "Sistemas personalizados", text: "Desenvolvemos sistemas para organizar informações, gerenciar atividades e facilitar a rotina da sua empresa." },
  { icon: "fa-cloud", title: "Plataformas e SaaS", text: "Criamos plataformas digitais e softwares por assinatura, adaptados às necessidades do seu negócio." },
  { icon: "fa-robot", title: "Automações e inteligência artificial", text: "Automatizamos tarefas e fluxos de trabalho para reduzir atividades manuais e aumentar a produtividade." },
  { icon: "fa-cart-shopping", title: "Lojas virtuais", text: "Desenvolvemos lojas online para apresentar produtos, receber pedidos e facilitar as vendas pela internet." },
  { icon: "fa-pen-nib", title: "Design de interfaces", text: "Planejamos interfaces bonitas, intuitivas e fáceis de usar para sites, sistemas e aplicativos." },
];

export default function Servicos() {
  return (
    <>
      <WhatsAppButton />
      <PageHero
        title={
          <>
            Nossos <span>Serviços</span>
          </>
        }
        description="Soluções sob medida para decolar o seu negócio no mundo digital."
      />

      <div className="white-content">
        {/* DETALHE DE CADA SERVIÇO (a home aponta para cada id) */}
        {services.map((service, index) => (
          <section
            className={`service-detail section${index % 2 === 0 ? " section--alt" : ""}`}
            id={service.id}
            key={service.id}
          >
            <div
              className={`service-detail-layout${index % 2 === 1 ? " service-detail-layout--reverse" : ""}`}
            >
              <div className="service-detail-text">
                <div className="section-title section-title--left">
                  <span>Serviço {String(index + 1).padStart(2, "0")}</span>
                  <h2>{service.title}</h2>
                </div>
                <p>{service.text}</p>
                <Link href="/contato" className="btn-secondary">
                  Solicitar orçamento
                </Link>
              </div>
              <div className="service-detail-media">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.imageAlt ?? service.title}
                    fill
                    sizes="(max-width: 800px) 100vw, 500px"
                  />
                ) : (
                  <i
                    className={`fa-solid ${service.icon} service-detail-icon`}
                    aria-hidden="true"
                  ></i>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* SERVIÇOS */}
        <section className="services section" id="servicos">
          <div className="section-title">
            <span>O que fazemos</span>
            <h2>Tecnologia para transformar ideias em soluções</h2>
            <p className="section-subtitle">
              Desenvolvemos soluções digitais para empresas que querem crescer, inovar e otimizar seus processos.
            </p>
          </div>
          <div className="services-grid">
            {solutions.map((item) => (
              <div className="service-card" key={item.title}>
                <i className={`fa-solid ${item.icon}`} aria-hidden="true"></i>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}