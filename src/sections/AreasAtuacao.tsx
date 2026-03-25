import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Zap, 
  ShieldCheck, 
  Building2, 
  Scale, 
  FileCheck 
} from 'lucide-react';

const areas = [
  {
    icon: Zap,
    titulo: 'Consultoria Jurídica em Direito de Energia',
    descricao: 'Assessoria especializada para todos os segmentos do setor elétrico: geração, transmissão, distribuição e comercialização.',
    servicos: [
      'Projetos de Geração Distribuída',
      'Elaboração de minutas contratuais',
      'Defesa em processos da ANEEL',
      'Due Diligence jurídico-regulatória',
    ],
  },
  {
    icon: ShieldCheck,
    titulo: 'Compliance Trabalhista',
    descricao: 'Implementação de programas de conformidade para adequação à legislação trabalhista e prevenção de riscos.',
    servicos: [
      'Implementação de programas de conformidade',
      'Auditoria trabalhista preventiva',
      'Prevenção de riscos trabalhistas',
      'Criação de regimentos e manuais',
    ],
  },
  {
    icon: Building2,
    titulo: 'Direito Empresarial e Societário',
    descricao: 'Assessoria completa em assuntos societários, reestruturações e operações corporativas.',
    servicos: [
      'Reestruturação de empresas',
      'Fusões e aquisições (M&A)',
      'Operações no mercado de capitais',
      'Planejamento societário',
    ],
  },
  {
    icon: Scale,
    titulo: 'Contencioso Cível e Trabalhista',
    descricao: 'Defesa estratégica judicial visando a proteção do patrimônio do cliente.',
    servicos: [
      'Defesa estratégica judicial',
      'Gestão de carteiras processuais',
      'Acompanhamento em todas as instâncias',
      'Negociação de acordos',
    ],
  },
  {
    icon: FileCheck,
    titulo: 'Advocacia Preventiva',
    descricao: 'Suporte jurídico para desenvolver atividades empresariais, evitando problemas e criando boas práticas.',
    servicos: [
      'Redução de custos operacionais',
      'Eliminação de passivos',
      'Análise de contratos',
      'Orientação preventiva',
    ],
  },
];

export function AreasAtuacao() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="areas" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
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
          <span className="label-text text-[var(--gold)] mb-4 block">Áreas de Atuação</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
            Serviços Jurídicos Especializados
          </h2>
          <p className="text-[#666] text-lg font-light leading-relaxed">
            Oferecemos serviços jurídicos de excelência especializados no setor 
            elétrico para todos os agentes, independentemente do porte do seu negócio.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <AreaCard key={index} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface AreaCardProps {
  area: typeof areas[0];
  index: number;
}

function AreaCard({ area, index }: AreaCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Icon = area.icon;

  return (
    <div
      ref={ref}
      className={`group bg-[#fafaf8] border border-black/5 p-8 transition-all duration-700 hover:border-[var(--gold)]/30 hover:shadow-2xl hover:bg-white hover:-translate-y-2 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-[var(--gold)]/5 flex items-center justify-center mb-6 group-hover:bg-[var(--gold)]/10 transition-colors rounded-xl">
        <Icon className="text-[var(--gold)]" size={28} />
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">
        {area.titulo}
      </h3>

      {/* Description */}
      <p className="text-[#666] text-sm leading-relaxed mb-6 font-light">
        {area.descricao}
      </p>

      {/* Services List */}
      <ul className="space-y-2">
        {area.servicos.map((servico, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span className="w-1 h-1 bg-[var(--gold)] rounded-full mt-2 flex-shrink-0" />
            <span className="text-[#777] font-light">{servico}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
