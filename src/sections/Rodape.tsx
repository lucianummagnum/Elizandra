import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Phone, Mail, Instagram, MapPin, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre Mim', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
];

const contatos = [
  {
    icon: Phone,
    label: 'Telefone/WhatsApp',
    valor: '62 9 8190 0581',
    href: 'https://wa.me/5562981900581',
  },
  {
    icon: Mail,
    label: 'E-mail',
    valor: 'elizandrafreitas.adv@gmail.com',
    href: 'mailto:elizandrafreitas.adv@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    valor: '@elizandrafreitas.jur',
    href: 'https://instagram.com/elizandrafreitas.jur',
  },
];

export function Rodape() {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="bg-[#fafaf8]">
      {/* CTA Section */}
      <div
        ref={ctaRef}
        className={`py-20 border-b border-black/5 transition-all duration-1000 ${
          ctaVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container-custom text-center">
          <span className="label-text text-[var(--gold)] mb-4 block text-center">Entre em Contato</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6 max-w-3xl mx-auto">
            Pronto para proteger seu negócio com excelência jurídica?
          </h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto mb-10 font-light">
            Estou à disposição para prestar serviços jurídicos de excelência, 
            primando pela eficiência e solucionando as suas necessidades.
          </p>
          <a
            href="https://wa.me/5562981900581"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--gold)] text-white font-medium uppercase tracking-[0.1em] text-sm transition-all duration-300 hover:bg-[#25D366] hover:shadow-xl hover:-translate-y-1 group shadow-lg"
          >
            <MessageCircle
              size={20}
              className="transition-all duration-300 grayscale group-hover:grayscale-0"
              fill="currentColor"
            />
            Agendar Consultoria
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div
        ref={contentRef}
        className={`py-16 transition-all duration-1000 delay-200 ${
          contentVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Brand */}
            <div>
              <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }} className="inline-flex items-center gap-3 mb-6">
                <img
                  src="/logo.png"
                  alt="Logo Elizandra Freitas"
                  className="h-10 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-2xl text-[#1a1a1a]">
                    ELIZANDRA FREITAS
                  </span>
                  <span className="text-xs text-[#777] uppercase tracking-[0.15em]">
                    Advocacia e Consultoria Jurídica
                  </span>
                </div>
              </a>
              <p className="text-[#666] text-sm leading-relaxed mb-6 font-light">
                Mais de 12 anos de experiência em assessoria jurídica 
                empresarial, compliance trabalhista e direito de energia.
              </p>
              <div className="flex items-center gap-2 text-[var(--gold)] text-sm">
                <MapPin size={16} />
                <span className="font-medium">Goiânia, GO - Brasil</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-serif text-lg text-[#1a1a1a] mb-6">Navegação</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-[#666] hover:text-[var(--gold)] link-underline transition-colors text-sm font-light"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-serif text-lg text-[#1a1a1a] mb-6">Contato</h3>
              <ul className="space-y-4">
                {contatos.map((contato, index) => {
                  const Icon = contato.icon;
                  return (
                    <li key={index}>
                      <a
                        href={contato.href}
                        target={contato.href.startsWith('http') ? '_blank' : undefined}
                        rel={contato.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-10 h-10 bg-[var(--gold)]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)]/10 transition-colors rounded-lg">
                          <Icon className="text-[var(--gold)]" size={18} />
                        </div>
                        <div>
                          <span className="text-[#777] text-[10px] uppercase tracking-widest block mb-0.5">
                            {contato.label}
                          </span>
                          <span className="text-[#1a1a1a] text-sm group-hover:text-[var(--gold)] transition-colors font-medium">
                            {contato.valor}
                          </span>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-8 border-t border-black/5">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#777] text-sm text-center md:text-left font-light">
              © {new Date().getFullYear()} Elizandra Freitas Advocacia. 
              Todos os direitos reservados.
            </p>
            <p className="text-[var(--gold)] text-sm font-medium tracking-wide">
              OAB/GO nº 45.774
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
