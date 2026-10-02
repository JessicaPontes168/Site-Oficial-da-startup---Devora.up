import Image from "next/image";
import PageHero from "@/components/PageHero";

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
            <div className="project-card">
              <Image src="/images/TVRUSSASOF.png" alt="Projeto TV Russas" width={500} height={270} />
              <div className="project-content">
                <h3>TV Russas</h3>
                <p>Portal digital moderno para notícias com sistema gerenciador de conteúdo.</p>
              </div>
            </div>
            <div className="project-card">
              <Image src="/images/MEGASTOREOF.png" alt="Projeto Mega Store" width={500} height={270} />
              <div className="project-content">
                <h3>Mega Store</h3>
                <p>Sistema de gestão completo para loja de assistência técnica e celulares.</p>
              </div>
            </div>
            <div className="project-card">
              <Image src="/images/ADMIN.png" alt="TV RUSSAS ADMINISTRATIVO" width={500} height={270} />
              <div className="project-content">
                <h3>TV RUSSAS ADMINISTRATIVO</h3>
                <p>Sistema de gestão para administração de conteúdo e operações da TV Russas.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
