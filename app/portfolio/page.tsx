import Image from "next/image";
import PageHero from "@/components/PageHero";

// Para editar um projeto, mude os textos desta lista.
// Para adicionar um projeto novo, copie um bloco { ... }, e cole no fim da lista.
const projects = [
  {
    name: "TV Russas",
    image: "/images/TVRUSSASOF.png",
    alt: "Projeto TV Russas",
    text: "A TV Russas é um portal de notícias dedicado à cobertura dos principais acontecimentos de Russas, no Ceará, e região, trazendo informações sobre política, cotidiano, cultura, esporte e assuntos de interesse público. A plataforma conta com um design moderno, navegação intuitiva e adaptação para dispositivos móveis, além de um sistema próprio de gerenciamento de conteúdo que permite à equipe publicar, editar e organizar notícias de forma prática, garantindo uma presença digital acessível, dinâmica e conectada à comunidade local.",
  },
  {
    name: "Mega Store",
    image: "/images/MEGASTOREOF.png",
    alt: "Projeto Mega Store",
    text: "A Mega Store é uma loja especializada na venda de celulares, acessórios e serviços de assistência técnica, oferecendo soluções para quem busca tecnologia, praticidade e suporte especializado. Seu catálogo inclui smartphones, capinhas, películas de proteção, carregadores e outros acessórios, além de serviços como aplicação de películas e suporte para dispositivos móveis, reunindo variedade de produtos e atendimento em um só lugar.",
  },
  {
    name: "TV Russas Administrativo",
    image: "/images/ADMIN.png",
    alt: "Painel administrativo da TV Russas",
    text: "Dashboard administrativo desenvolvido para a TV Russas, permitindo gerenciar as publicações do portal de notícias de forma prática e centralizada. O sistema possibilita criar, editar, publicar e organizar notícias, adicionar imagens, atualizar conteúdos e administrar as informações exibidas no site, oferecendo mais autonomia à equipe e agilidade na gestão diária do portal.",
  },
];

export default function Portfolio() {
  return (
    <>
      <PageHero
        title={
          <>
            Nosso <span>Portfólio</span>
          </>
        }
        description="Confira alguns dos projetos de sucesso entregues pela nossa equipe."
      />

      <div className="white-content">
        {/* PORTFÓLIO */}
        <section className="portfolio section" id="portfolio">
          <div className="section-title">
            <span>Trabalhos Recentes</span>
            <h2>Conheça a qualidade do nosso trabalho</h2>
          </div>
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.name}>
                <Image src={project.image} alt={project.alt} width={500} height={270} />
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <p>{project.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}