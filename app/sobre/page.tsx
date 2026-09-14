export default function Sobre() {
  return (
    <>
      {/* HERO SMALL */}
      <section className="hero" style={{ minHeight: "50vh", paddingTop: "180px", paddingBottom: "60px" }}>
        <div className="hero-content" style={{ maxWidth: "800px", textAlign: "center", margin: "0 auto" }}>
          <h1>Conheça a <span>Devora</span></h1>
          <p>Apaixonados por tecnologia, design e inovação digital.</p>
        </div>
      </section>

      <div className="white-content">
        {/* SOBRE NÓS */}
        <section className="about section" id="sobre">
          <div className="section-title">
            <span>Quem Somos</span>
            <h2>Nossa essência e missão</h2>
          </div>
          <div className="about-container">
            <div className="about-card">
              <i className="fa-solid fa-lightbulb"></i>
              <h3>Inovação Constante</h3>
              <p>Trabalhamos com as mais recentes e modernas tecnologias do mercado para garantir estabilidade e inovação para o seu produto.</p>
            </div>
            <div className="about-card">
              <i className="fa-solid fa-handshake-angle"></i>
              <h3>Parceria Real</h3>
              <p>Não somos apenas fornecedores, somos o parceiro tecnológico do seu negócio. Seu crescimento é o nosso crescimento.</p>
            </div>
            <div className="about-card">
              <i className="fa-solid fa-medal"></i>
              <h3>Excelência e Luxo</h3>
              <p>Cada projeto tem um acabamento luxuoso e premium. Cuidamos do design, da usabilidade e da experiência como um todo.</p>
            </div>
          </div>
        </section>

        {/* NOSSO PROCESSO */}
        <section className="process section" style={{ background: "#f8fafc" }}>
          <div className="section-title">
            <span>Como Trabalhamos</span>
            <h2>O Processo Devora</h2>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <span>01</span>
              <h3>Descoberta</h3>
              <p>Entendemos a fundo a sua necessidade e o seu modelo de negócio.</p>
            </div>
            <div className="process-card">
              <span>02</span>
              <h3>Planejamento & UI</h3>
              <p>Desenhamos a arquitetura e criamos a interface para aprovação.</p>
            </div>
            <div className="process-card">
              <span>03</span>
              <h3>Desenvolvimento</h3>
              <p>Nossos engenheiros escrevem código limpo, escalável e seguro.</p>
            </div>
            <div className="process-card">
              <span>04</span>
              <h3>Testes & Qualidade</h3>
              <p>Validamos performance, responsividade e fluxo de usuários.</p>
            </div>
            <div className="process-card">
              <span>05</span>
              <h3>Lançamento</h3>
              <p>Colocamos o seu projeto no ar, pronto para receber o público.</p>
            </div>
            <div className="process-card">
              <span>06</span>
              <h3>Suporte Contínuo</h3>
              <p>Acompanhamos a performance e fornecemos suporte especializado.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
