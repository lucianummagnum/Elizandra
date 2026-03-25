import { useScrollReveal } from '@/hooks/useScrollReveal';

// Clientes com logos
const clientesComLogo = [
  { nome: 'SICOOB', logo: '/logo-sicoob.png', hasLogo: true },
  { nome: 'AÉGIS ENGENHARIA', logo: '/logo-aegis.jpg', hasLogo: true },
  { nome: 'POWER Engenharia & Soluções', logo: '/logo-power.jpg', hasLogo: true },
  { nome: 'AUDAZ', logo: '/logo-audaz.jpg', hasLogo: true },
];

// Clientes sem logo (apenas texto)
const clientesSemLogo = [
  'ENECOL',
  'Moreira',
  'AraguaTur',
  'Cargas LTDA',
  'SIMER',
  'ABCEU',
];

// Combina todos os clientes
const todosClientes = [
  ...clientesComLogo,
  ...clientesSemLogo.map(nome => ({ nome, hasLogo: false })),
];

export function Clientes() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();

  // Duplicate clients array for seamless loop
  const allClients = [...todosClientes, ...todosClientes];

  return (
    <section id="clientes" className="py-24 bg-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf8] via-transparent to-white pointer-events-none" />
      <div className="container-custom mb-12">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="label-text text-[var(--gold)] mb-4 block">Clientes</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Empresas que Confiam em Nosso Trabalho
          </h2>
          <p className="text-[#666] text-lg font-light leading-relaxed">
            Atendemos clientes de diversos segmentos, oferecendo soluções 
            jurídicas personalizadas para cada necessidade.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays - subtle */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Marquee */}
        <div className="flex animate-marquee hover:pause">
          {allClients.map((cliente, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 md:mx-10"
            >
              {cliente.hasLogo ? (
                <div className="bg-white border border-black/5 px-6 py-4 md:px-10 md:py-6 min-w-[180px] md:min-w-[240px] h-[80px] md:h-[100px] flex items-center justify-center hover:border-[var(--gold)]/30 transition-all shadow-sm hover:shadow-md">
                  <img
                    src={(cliente as { nome: string; logo: string; hasLogo: true }).logo}
                    alt={cliente.nome}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ) : (
                <div className="bg-white border border-black/5 px-6 py-4 md:px-10 md:py-6 min-w-[180px] md:min-w-[240px] h-[80px] md:h-[100px] flex items-center justify-center hover:border-[var(--gold)]/30 transition-all shadow-sm hover:shadow-md">
                  <span className="font-serif text-base md:text-lg text-[#1a1a1a] whitespace-nowrap">
                    {cliente.nome}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Second row - opposite direction */}
      <div className="relative mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div 
          className="flex"
          style={{
            animation: 'marquee 60s linear infinite reverse',
          }}
        >
          {[...allClients].reverse().map((cliente, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 md:mx-10"
            >
              {cliente.hasLogo ? (
                <div className="bg-white/50 border border-black/5 px-6 py-4 md:px-10 md:py-6 min-w-[180px] md:min-w-[240px] h-[80px] md:h-[100px] flex items-center justify-center">
                  <img
                    src={(cliente as { nome: string; logo: string; hasLogo: true }).logo}
                    alt={cliente.nome}
                    className="max-w-full max-h-full object-contain grayscale opacity-70"
                  />
                </div>
              ) : (
                <div className="bg-white/50 border border-black/5 px-6 py-4 md:px-10 md:py-6 min-w-[180px] md:min-w-[240px] h-[80px] md:h-[100px] flex items-center justify-center">
                  <span className="font-serif text-base md:text-lg text-[#1a1a1a]/70 whitespace-nowrap">
                    {cliente.nome}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
