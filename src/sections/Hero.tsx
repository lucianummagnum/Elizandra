import { MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white flex items-center overflow-hidden"
    >
      {/* Background gradient and effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#faf9f6] to-[#f0efe9]" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[var(--gold)]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[var(--gold)]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen py-32 lg:py-0">
          {/* Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            {/* Label */}
            <span className="label-text text-gold mb-6 block">
              Advocacia Especializada
            </span>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#1a1a1a] leading-[1.1] mb-6">
              Conhecimento jurídico a <span className="text-[var(--gold)] italic">serviço</span> do seu negócio.
            </h1>
 
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#4a4a4a] max-w-xl mb-10 leading-relaxed font-light">
              Mais de 12 anos de experiência em assessoria jurídica empresarial, 
              compliance trabalhista e direito de energia.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5562981900581"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--gold)] text-white font-medium uppercase tracking-[0.1em] text-sm transition-all duration-300 hover:bg-[#25D366] hover:shadow-xl hover:-translate-y-1 group shadow-lg"
              >
                <MessageCircle
                  size={18}
                  className="transition-all duration-300 grayscale group-hover:grayscale-0"
                  fill="currentColor"
                />
                Agendar Consultoria
              </a>
              <a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#sobre');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-4 border border-[var(--gold)] text-[var(--gold)] font-medium uppercase tracking-[0.1em] text-sm transition-all duration-300 hover:bg-[var(--gold)] hover:text-white"
              >
                Conheça Mais
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-black/5">
              <div>
                <span className="font-serif text-3xl md:text-4xl text-[var(--gold)]">12+</span>
                <p className="text-sm text-[#666] mt-1">Anos de Experiência</p>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-[var(--gold)]">900+</span>
                <p className="text-sm text-[#666] mt-1">Processos Gerenciados</p>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-[var(--gold)]">OAB</span>
                <p className="text-sm text-[#666] mt-1">Nº 45.774/GO</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-gold/30 pointer-events-none" />
              <div className="absolute -inset-8 border border-gold/10 pointer-events-none" />
              
              {/* Image container */}
              <div className="relative w-[280px] md:w-[350px] lg:w-[400px] xl:w-[450px] shadow-2xl bg-white p-2">
                <img
                  src="/elizandra-foto.png"
                  alt="Dra. Elizandra Freitas - Advogada"
                  className="w-full h-auto object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-60" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-gold/50" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-gold/50" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
