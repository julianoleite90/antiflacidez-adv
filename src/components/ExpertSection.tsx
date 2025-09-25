import Image from 'next/image';

const ExpertSection = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-12">
          <div className="grid grid-cols-3 gap-4 md:flex md:flex-row md:items-center md:gap-12">
            {/* COLUNA DA ESQUERDA - APENAS IMAGEM */}
            <div className="col-span-1 md:w-32 md:h-32 relative shrink-0">
              <div className="w-full aspect-square rounded-full border-4 border-[#B8860B] shadow-lg overflow-hidden">
                <Image
                  src="/medica-150.webp"
                  alt="Ana Albuquerque - Especialista em emagrecimento"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>

            {/* COLUNA DA DIREITA - APENAS CONTEÚDO */}
            <div className="col-span-2 md:flex-1 text-left">
              {/* Título */}
              <div className="mb-3 md:mb-4">
                <h3 className="text-sm md:text-xl font-semibold text-[#B8860B] mb-2">
                  É possível combater a flacidez facial, rugas e linhas de expressão em 2025 sem tratamentos invasivos ou promessas falsas.
                </h3>
              </div>

              {/* Descrição */}
              <div className="text-gray-700">
                <p className="text-xs md:text-base leading-relaxed mb-3">
                  &ldquo;Em nossa lista, todos os tratamentos foram avaliados com rigor, testes clínicos e depoimentos de clientes reais.&rdquo;
                </p>
                <p className="text-xs md:text-sm font-medium text-gray-800">
                  Ana Albuquerque - Especialista
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection; 