import Link from "next/link";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="white-content">
        <section className="services section" id="servicos">
          <div className="section-title">
            <span>Serviços em Destaque</span>
            <h2>Soluções digitais para impulsionar empresas</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <i className="fa-solid fa-laptop-code"></i>
              <h3>Sites Profissionais</h3>
              <p>
                Landing pages, sites institucionais e sistemas web modernos,
                rápidos e otimizados.
              </p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-layer-group"></i>
              <h3>Sistemas Sob Medida</h3>
              <p>
                Projetos personalizados exatamente conforme a necessidade e
                regra do seu negócio.
              </p>
            </div>
            <div className="service-card">
              <i className="fa-solid fa-rocket"></i>
              <h3>Alta Performance</h3>
              <p>
                Foco total em desempenho, SEO e acessibilidade para ranquear no
                Google.
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link
              href="/servicos"
              className="btn-secondary"
              style={{
                color: "#2563eb",
                borderColor: "#2563eb",
                background: "transparent",
              }}
            >
              Ver todos os serviços
            </Link>
          </div>
        </section>

        <section className="cta" id="contato">
          <h2>Vamos impulsionar o seu negócio? 🚀</h2>
          <p>Faça parte da nova geração digital com a Devora.</p>
          <Link href="/contato">Solicitar orçamento</Link>
        </section>
      </div>
    </>
  );
}
