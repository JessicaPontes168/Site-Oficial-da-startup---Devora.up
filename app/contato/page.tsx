"use client";

import PageHero from "@/components/PageHero";

export default function Contato() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <>
      <PageHero
        title={
          <>
            Fale <span>Conosco</span>
          </>
        }
        description="Estamos prontos para impulsionar o seu negócio. Entre em contato!"
      />

      <div className="white-content">
        {/* CONTATO FORM */}
        <section className="section" id="contato-form">
          <div className="section-title">
            <span>Orçamento</span>
            <h2>Mande uma mensagem</h2>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nome">Seu Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Ex: João Silva" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail Profissional</label>
                <input type="email" id="email" name="email" placeholder="Ex: joao@empresa.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="servico">Serviço de Interesse</label>
                <input type="text" id="servico" name="servico" placeholder="Ex: Criação de Site, Loja Virtual..." required />
              </div>
              <div className="form-group">
                <label htmlFor="mensagem">Como podemos te ajudar?</label>
                <textarea id="mensagem" name="mensagem" placeholder="Descreva um pouco sobre o seu projeto..." required></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Enviar Mensagem <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
