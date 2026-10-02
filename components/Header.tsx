"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  // Bloqueia rolagem do body no mobile quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Projetos", path: "/portfolio" },
    { name: "Contato", path: "/contato" },
  ];

  // Evita a pílula flutuante se o menu mobile estiver aberto
  const showFloating = isScrolled && !isMenuOpen;

  return (
    <>
      {/* Backdrop para fechar o menu mobile */}
      <div
        className={`header-backdrop ${isMenuOpen ? "active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          closeMenu();
        }}
        aria-hidden="true"
      />

      <header className="header-wrapper">
        {/* Brilho suave no canto esquerdo */}
        <div className={`header-aurora ${showFloating ? "hidden-aurora" : ""}`} />

        <div className={`header-inner ${showFloating ? "floating" : ""}`}>
          {/* Logo */}
          <Link href="/" className="logo" onClick={closeMenu} aria-label="Devora - página inicial">
            <Logo size={42} priority />
          </Link>

          {/* Navegação Desktop */}
          <nav className="header-nav" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`header-nav-link ${pathname === link.path ? "active" : ""}`}
              >
                <span>{link.name}</span>
                <span className="header-nav-underline" />
              </Link>
            ))}
          </nav>

          {/* Lado direito: CTA + Hamburger */}
          <div className="header-right">
            <Link href="/contato" className="header-cta">
              Fazer orçamento
            </Link>

            <button
              type="button"
              className="hamburger"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`header-mobile-panel ${isMenuOpen ? "active" : ""}`}>
          <div className="header-mobile-glow" />
          <nav className="header-mobile-nav" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={closeMenu}
                className={`header-mobile-link ${pathname === link.path ? "active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
