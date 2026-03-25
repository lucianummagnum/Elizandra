import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas', href: '#areas' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="Logo Elizandra Freitas"
                className="h-10 md:h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className={`font-serif text-lg md:text-xl tracking-wide transition-colors ${isScrolled || isMobileMenuOpen ? 'text-[#1a1a1a]' : 'text-white md:text-[#1a1a1a]'}`}>
                  ELIZANDRA FREITAS
                </span>
                <span className="text-[10px] md:text-xs text-grey uppercase tracking-[0.15em]">
                  Advocacia e Consultoria Jurídica
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm text-[#1a1a1a]/80 hover:text-[#1a1a1a] link-underline transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <a
              href="https://wa.me/5562981900581"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--gold)] text-white font-medium uppercase tracking-[0.08em] text-xs transition-all duration-300 hover:bg-[#25D366] hover:shadow-lg group shadow-sm"
            >
              <MessageCircle
                size={16}
                className="transition-all duration-300 grayscale group-hover:grayscale-0"
                fill="currentColor"
              />
              Agendar
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${isScrolled || isMobileMenuOpen ? 'text-[#1a1a1a]' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white border-l border-black/5 transition-transform duration-300 shadow-2xl ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-8">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-xl font-serif text-[#1a1a1a]/80 hover:text-[var(--gold)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-auto">
              <a
                href="https://wa.me/5562981900581"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-[var(--gold)] text-white font-medium uppercase tracking-[0.08em] text-sm transition-all duration-300 hover:bg-[#25D366] shadow-md group"
              >
                <MessageCircle
                  size={18}
                  className="transition-all duration-300 grayscale group-hover:grayscale-0"
                  fill="currentColor"
                />
                Agendar Consultoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
