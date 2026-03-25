import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TrendingDown, Briefcase, Shield } from 'lucide-react';

const casos = [
  {
    icon: TrendingDown,
    valor: 'R$ 1.600.000,00',
    descricao: 'Reversão de condenações em processos passivos cíveis e trabalhistas através de medidas de compliance e advocacia preventiva.',
    destaque: 'Economia Significativa',
  },
  {
    icon: Briefcase,
    valor: '900 Processos',
    descricao: 'Gestão de carteira trabalhista com redução de 80% através de acordos estratégicos e negociações bem-sucedidas.',
    destaque: '80% de Redução',
  },
  {
    icon: Shield,
    valor: 'Risco Zero',
    descricao: 'De acidentes de trabalho em 2022 através da implementação de Compliance Trabalhista e medidas de segurança.',
    destaque: 'Segurança Total',
  },
];

export function CasosSucesso() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="resultados" className="section-padding bg-[#fafaf8] relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="container-custom">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="label-text text-[var(--gold)] mb-4 block">Resultados</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Casos de Sucesso
          </h2>
          <p className="text-[#666] text-lg font-light leading-relaxed">
            Resultados concretos que demonstram nossa competência e dedicação 
            em proteger os interesses dos nossos clientes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {casos.map((caso, index) => (
            <CasoCard key={index} caso={caso} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-12 border-t border-black/5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4">
                Por que escolher nossos serviços?
              </h3>
               <p className="text-[#666] leading-relaxed mb-6 font-light">
                Nossa atuação vai além da simples consultoria jurídica. 
                Trabalhamos como parceiros estratégicos dos nossos clientes, 
                entendendo seus negócios e objetivos para oferecer soluções 
                personalizadas e eficientes.
              </p>
              <ul className="space-y-3">
                {[
                  'Atendimento personalizado e dedicado',
                  'Visão estratégica de negócios',
                  'Equipe especializada e experiente',
                  'Foco em resultados mensuráveis',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#555] font-light">
                    <span className="w-2 h-2 bg-[var(--gold)] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 border border-black/5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--gold)]" />
              <blockquote className="font-serif text-xl text-[#1a1a1a] italic leading-relaxed mb-8 relative z-10">
                "A advocacia preventiva é a chave para o sucesso empresarial. 
                Prevenir problemas é sempre mais eficiente do que resolvê-los."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center p-2">
                  <img
                    src="/logo.png"
                    alt="Logo Elizandra Freitas"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-[#1a1a1a] font-medium">Dra. Elizandra Freitas</p>
                  <p className="text-[#777] text-sm">Advogada e Consultora Jurídica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CasoCardProps {
  caso: typeof casos[0];
  index: number;
}

function CasoCard({ caso, index }: CasoCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Icon = caso.icon;

  return (
    <div
      ref={ref}
      className={`relative bg-white border border-black/5 p-8 transition-all duration-700 hover:border-[var(--gold)]/30 hover:shadow-2xl hover:-translate-y-2 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Badge */}
      <div className="absolute -top-3 left-8">
        <span className="bg-[var(--gold)] text-white text-xs font-semibold uppercase tracking-widest px-4 py-1 shadow-lg">
          {caso.destaque}
        </span>
      </div>

      {/* Icon */}
      <div className="w-12 h-12 bg-[var(--gold)]/5 flex items-center justify-center mb-6 rounded-lg">
        <Icon className="text-[var(--gold)]" size={24} />
      </div>

      {/* Value */}
      <div className="font-serif text-3xl md:text-4xl text-[var(--gold)] mb-4">
        {caso.valor}
      </div>

      {/* Description */}
      <p className="text-[#666] text-sm leading-relaxed font-light">
        {caso.descricao}
      </p>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-gold/20" />
    </div>
  );
}
