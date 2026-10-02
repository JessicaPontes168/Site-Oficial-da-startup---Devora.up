import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

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

export default function Servicos() {
  return (
    <>
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
            <h2>Soluções digitais para impulsionar empresas</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <i className="fa-solid fa-laptop-code"></i>
              <h3>Sites Profissionais</h3>
              <p>Landing pages, sites institucionais e sistemas web modernos, rápidos e otimizados.</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-layer-group"></i>
              <h3>Sistemas Sob Medida</h3>
              <p>Projetos e plataformas personalizados exatamente conforme a necessidade e regra do seu negócio.</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-rocket"></i>
              <h3>Alta Performance</h3>
              <p>Foco total em desempenho, SEO e acessibilidade para que seu site ranqueie bem no Google.</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-mobile-screen"></i>
              <h3>Design Responsivo</h3>
              <p>Experiência fluida e adaptável perfeitamente para celulares, tablets e computadores.</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-cart-shopping"></i>
              <h3>E-commerce</h3>
              <p>Lojas virtuais seguras, integradas com métodos de pagamento e fáceis de gerenciar.</p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-pen-nib"></i>
              <h3>UI/UX Design</h3>
              <p>Interfaces bonitas, modernas e intuitivas pensadas 100% na experiência do usuário.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}