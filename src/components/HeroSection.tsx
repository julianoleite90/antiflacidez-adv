import ScrollLink from './ScrollLink';
import { trackHeroCTA } from '@/utils/analytics';
import Image from 'next/image';

const HeroSection = () => {
  const formatDate = () => {
    return "Revisado por: Alessandra Duran";
  };

  const handleCTAClick = () => {
    trackHeroCTA();
  };

  return (
    <section className="hero-section bg-gradient-to-b from-gray-50 to-gray-100 pt-0 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo do lado esquerdo */}
          <div className="space-y-4">
            {/* Data de atualização */}
            <div className="pt-2 md:pt-6">
              <p className="text-gray-600 text-sm italic">
                {formatDate()}
              </p>
            </div>

            {/* Título principal */}
            <div className="text-left">
              <h1 className="hero-title text-gray-900 leading-tight mb-2">
                <div className="text-gray-900">3 Melhores tratamentos para flacidez facial</div>
              </h1>
              <p className="text-lg text-gray-600 font-medium mb-4">Avaliados por especialistas</p>
            </div>

            {/* Imagem em mobile */}
            <div className="block lg:hidden w-full mt-[2px] mb-6">
              <div className="hero-image relative h-[450px] w-full">
                <Image
                  src="/hero.png"
                  alt="Remédios para emagrecer"
                  fill
                  className="object-cover object-top"
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 0px"
                  quality={60}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              <p className="text-xs text-gray-500 italic mt-2 text-center">
                Editorial: Análise imparcial dos melhores tratamentos para flacidez de 2025
              </p>
            </div>

            {/* Subtítulo com destaque */}
            <p className="hero-text text-gray-700 leading-relaxed">
            Já se sentiu frustrada com a flacidez facial e rugas que te envelhecem?
            </p>

            <p className="hero-text text-gray-700 leading-relaxed">
            Você já tentou cremes caros, tratamentos estéticos dolorosos ou produtos milagrosos que prometem reduzir rugas, pés de galinha e linhas de expressão, mas não entregam resultados? Você não está sozinha: estudos mostram que 90% dos produtos para flacidez facial e rejuvenescimento oferecem melhorias mínimas, com ingredientes que não penetram a pele ou causam irritações.
            </p>

            <p className="hero-text text-gray-700 leading-relaxed">
            <strong>E se você pudesse recuperar até 35% da firmeza da pele com opções seguras e aprovadas?</strong>
            </p>

            <p className="hero-text text-gray-700 leading-relaxed">
            Por isso, investigamos os melhores tratamentos de 2025 para flacidez facial, rugas e linhas de expressão. Liderada pela Ana Albuquerque, nossa equipe avaliou tratamentos com base em: Eficácia na redução de rugas, flacidez, Custo-benefício, Satisfação de clientes.
            </p>

            {/* Botão CTA */}
            <div className="mt-8 mb-12">
              <ScrollLink 
                targetId="quiz"
                className="hero-cta inline-flex hover:bg-[#9A7209] text-white font-medium py-4 px-4 sm:px-8 rounded-lg transition-colors duration-300 items-center justify-between w-full text-sm sm:text-base"
                onClick={handleCTAClick}
              >
                                <span className="flex-1 text-center leading-tight">CONHEÇA 3 MELHORES TRATAMENTOS</span>
                <span className="ml-2">↓</span>
              </ScrollLink>
            </div>


          </div>

      {/* Imagem do lado direito (apenas desktop) */}
      <div className="hidden lg:block">
        <div className="hero-image relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/hero.png"
            alt="Remédios para emagrecer"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 50vw, 0px"
            quality={60}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>
            <p className="text-xs text-gray-500 italic mt-3 text-center">
              Editorial: Análise imparcial dos melhores tratamentos para flacidez de 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;