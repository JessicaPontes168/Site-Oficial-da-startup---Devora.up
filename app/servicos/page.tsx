export default function Servicos() {
  return (
    <>
      {/* HERO SMALL */}
      <section className="hero" style={{ minHeight: "50vh", paddingTop: "180px", paddingBottom: "60px" }}>
        <div className="hero-content" style={{ maxWidth: "800px", textAlign: "center", margin: "0 auto" }}>
          <h1>Nossos <span>Serviços</span></h1>
          <p>Soluções sob medida para decolar o seu negócio no mundo digital.</p>
        </div>
      </section>

      <div className="white-content">
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
