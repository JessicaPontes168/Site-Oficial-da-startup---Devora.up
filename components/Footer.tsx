import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-col">
          <Link href="/" className="footer-logo" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div style={{ position: "relative", width: "40px", height: "40px", flexShrink: 0 }}>
                <Image 
                  src="/images/logo/logo_white_transparent.png" 
                  alt="Devora Icon" 
                  fill
                  style={{ objectFit: "contain" }} 
                />
              </div>
              <span style={{ 
                fontSize: "20px", 
                fontWeight: "500", 
                letterSpacing: "1px", 
                color: "#e2e8f0" 
              }}>
                Devora
              </span>
            </div>
          </Link>
          <p style={{ color: "#9ca3af", maxWidth: "300px", lineHeight: "1.8" }}>
            Transformamos visões ambiciosas em produtos digitais de sucesso, com
            design luxuoso e tecnologia de ponta.
          </p>
        </div>

        <div className="footer-col">
          <h3>Links Rápidos</h3>
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre Nós</Link>
            </li>
            <li>
              <Link href="/servicos">Serviços</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfólio</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Serviços</h3>
          <ul style={{ listStyle: "none" }}>
            <li>Sites Profissionais</li>
            <li>Sistemas Sob Medida</li>
            <li>Lojas Virtuais</li>
            <li>Identidade Visual</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contato</h3>
          <ul
            className="social-links"
            style={{
              listStyle: "none",
              display: "flex",
              gap: "15px",
              marginTop: "15px",
            }}
          >
            <li>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </li>
          </ul>
          <p style={{ color: "#9ca3af", marginTop: "20px" }}>
            contato@devora.com.br
          </p>
        </div>
      </div>
      <div
        className="footer-bottom"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "20px",
          marginTop: "40px",
        }}
      >
        <p style={{ color: "#6b7280", fontSize: "14px" }}>
          &copy; {new Date().getFullYear()} Devora. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
