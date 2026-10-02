import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-col footer-brand">
          <Link href="/" className="footer-logo" aria-label="Devora - página inicial">
            <Logo size={40} tone="light" />
          </Link>
          <p className="footer-about">
            Transformamos visões ambiciosas em produtos digitais de sucesso, com
            design luxuoso e tecnologia de ponta.
          </p>
        </div>

        <div className="footer-col">
          <h3>Links Rápidos</h3>
          <ul>
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
          <ul>
            <li>Sites Profissionais</li>
            <li>Sistemas Sob Medida</li>
            <li>Lojas Virtuais</li>
            <li>Identidade Visual</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contato</h3>
          <ul className="social-links">
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
          <p className="footer-email">contato@devora.com.br</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Devora. Todos os direitos
          reservados.
        </p>
        <p className="footer-signature">Ideias que viram tecnologia.</p>
      </div>
    </footer>
  );
}
