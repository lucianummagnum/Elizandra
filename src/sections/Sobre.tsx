import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GraduationCap, Users } from 'lucide-react';

const formacoes = [
  {
    titulo: 'Graduação em Direito',
    instituicao: 'Universidade Salgado de Oliveira',
  },
  {
    titulo: 'Especialista em Contratos',
    instituicao: 'Fundação Getúlio Vargas (FGV)',
  },
  {
    titulo: 'Especialista em Compliance Trabalhista',
    instituicao: 'IPOG - Goiás',
  },
  {
    titulo: 'Pós-Graduada em Direito Imobiliário',
    instituicao: 'Instituto UniBF',
  },
  {
    titulo: 'Pós-Graduada em Direito de Energia',
    instituicao: 'Uni-Educar São Paulo',
  },
];

export function Sobre() {
  const { ref: sectionRef } = useScrollReveal<HTMLElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="section-padding bg-[#fafaf8]"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              imageVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 border border-gold/20 pointer-events-none" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-gold/40" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-gold/40" />
              
              {/* Image */}
              <div className="relative overflow-hidden shadow-2xl bg-white p-2">
                <img
                  src="/elizandra-foto.png"
                  alt="Dra. Elizandra Freitas"
                  className="w-full h-auto object-cover hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-[var(--gold)] text-white p-6 shadow-xl">
              <span className="font-serif text-4xl font-medium">12+</span>
              <p className="text-sm uppercase tracking-wider mt-1">Anos de<br/>Experiência</p>
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className={`transition-all duration-1000 delay-200 ${
              contentVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="label-text text-gold mb-4 block">Sobre Mim</span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
              Elizandra Freitas Neves
            </h2>

            <div className="w-16 h-px bg-gold mb-6" />

            <p className="text-[#666] text-lg leading-relaxed mb-6 font-light">
              Advogada com mais de 12 anos de experiência na área jurídica, 
              inscrita na <span className="text-[#1a1a1a] font-medium">OAB/GO nº 45.774</span>. 
              Durante minha trajetória profissional, assumi liderança em equipes 
              com visão estratégica de processos jurídicos, coordenando 
              departamentos jurídicos em empresas.
            </p>

            <p className="text-[#666] leading-relaxed mb-8 font-light">
              Atuando na prestação de serviços jurídicos especializados no 
              direito de energia, mas sem deixar de lado a multidisciplinariedade 
              com os demais ramos do direito. Aliando estudo constante, 
              conhecimento e experiência para garantir aos clientes que suas 
              demandas serão tratadas com visão ampla e abrangente.
            </p>

            {/* Formação */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-[var(--gold)]" size={24} />
                <h3 className="font-serif text-xl text-[#1a1a1a]">Formação Acadêmica</h3>
              </div>
              
              <ul className="space-y-3">
                {formacoes.map((formacao, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      contentVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-[#1a1a1a] font-medium">{formacao.titulo}</span>
                      <span className="text-[#777] text-sm block">{formacao.instituicao}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Associação */}
            <div className="flex items-center gap-4 p-5 border border-black/5 bg-white shadow-sm hover:shadow-md transition-shadow">
              <Users className="text-[var(--gold)] flex-shrink-0" size={24} />
              <div>
                <span className="text-[#777] text-xs uppercase tracking-wider">Membro da</span>
                <p className="text-[#1a1a1a] font-serif text-lg leading-tight mt-1">
                  Associação Brasileira dos Consumidores de Energia (ABCEU)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
