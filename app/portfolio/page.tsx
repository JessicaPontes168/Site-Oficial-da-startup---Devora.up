import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      {/* HERO SMALL */}
      <section className="hero" style={{ minHeight: "50vh", paddingTop: "180px", paddingBottom: "60px" }}>
        <div className="hero-content" style={{ maxWidth: "800px", textAlign: "center", margin: "0 auto" }}>
          <h1>Nosso <span>Portfólio</span></h1>
          <p>Confira alguns dos projetos de sucesso entregues pela nossa equipe.</p>
        </div>
      </section>

      <div className="white-content">
        {/* PORTFÓLIO */}
        <section className="portfolio section" id="portfolio">
          <div className="section-title">
            <span>Trabalhos Recentes</span>
            <h2>Conheça a qualidade do nosso trabalho</h2>
          </div>
          <div className="portfolio-grid">
            <div className="project-card">
              <Image src="/images/sitetvrussas.png" alt="Projeto TV Russas" width={500} height={270} />
              <div className="project-content">
                <h3>TV Russas</h3>
                <p>Portal digital moderno para notícias com sistema gerenciador de conteúdo.</p>
              </div>
            </div>
            <div className="project-card">
              <Image src="/images/mega.png" alt="Projeto Mega Store" width={500} height={270} />
              <div className="project-content">
                <h3>Mega Store</h3>
                <p>Sistema de gestão completo para loja de assistência técnica e celulares.</p>
              </div>
            </div>
            <div className="project-card">
              <Image src="/images/siteDev.png" alt="Projeto Startup Tech" width={500} height={270} />
              <div className="project-content">
                <h3>Startup Tech</h3>
                <p>Identidade digital premium e landing page otimizada para conversão.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
