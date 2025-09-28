import Image from 'next/image';
import UtmLink from './UtmLink';
import SectionTracker from './SectionTracker';
import { trackProductCTA, trackProductInfo } from '@/utils/analytics';
import { memo } from 'react';

const RankingSection = memo(() => {
  // Tracking handlers for each product - updating positions
  const handlePhynamaxCTA = () => trackProductCTA('Antiflacidez L&L Skin', 1);
  const handlePhynamaxInfo = () => trackProductInfo('Antiflacidez L&L Skin', 1);
  
  const handleDefinamaxCTA = () => trackProductCTA('Nuface Mini', 3);
  const handleDefinamaxInfo = () => trackProductInfo('Nuface Mini', 3);
  
  const handleOzenvittaCTA = () => trackProductCTA('A.G.E. Advanced Cream', 2);
  const handleOzenvittaInfo = () => trackProductInfo('A.G.E. Advanced Cream', 2);
  
  // Handlers removidos - produtos 4 e 5 foram ocultos

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white pt-2" id="ranking">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">

          {/* Primeiro Produto - Antiflacidez L&L Skin */}
          <SectionTracker sectionId="phynamax">
            <div className="mt-4 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
              <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
                1° Lugar
              </div>
              
              <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg sm:text-xl text-gray-900 font-bold">Antiflacidez L&L Skin</h4>
                    <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-sm">Mais recomendado</span>
                  </div>
                  <p className="text-gray-900 font-medium text-sm sm:text-base tracking-wide">Usuários relatam uma melhora de 30 a 40% na firmeza da pele nos primeiros 32 dias de uso. Resultados visíveis principalmente nas bochechas, papada, contorno facial e ao redor dos olhos, reduzindo rugas, pés de galinha e linhas de expressão.</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-lg sm:text-xl font-bold text-gray-900">4.9</div>
                    <div className="text-yellow-400 text-lg">★★★★★</div>
                  </div>
                  <div className="text-xs text-gray-500">Avaliação dos usuários</div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4"></div>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-6" id="phynamax">
                <div className="w-full sm:w-72 shrink-0">
                  <Image
                    src="/phynamax-mockup.png"
                    alt="Eficaz contra flacidez facial, rugas, linhas de expressão"
                    width={282}
                    height={422}
                    className="rounded-lg mx-auto sm:mx-0"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 282px"
                    quality={80}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <p className="text-xs text-gray-600 text-center mt-2">
                    Eficaz contra flacidez facial, rugas, linhas de expressão
                  </p>
                </div>

                <div className="flex-1">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">
                    Por que Antiflacidez L&L Skin é tão poderoso para o rejuvenescimento facial?
                  </h5>

                  <p className="text-gray-700 mb-4">
                    O Antiflacidez Massageador L&L Skin impressiona pela tecnologia eficaz que estimula a produção de colágeno, combatem a flacidez facial e reduzem rugas e linhas de expressão.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Antiflacidez L&L Skin se destaca como a melhor opção para quem busca rejuvenescimento facial eficaz, sem comprometer a saúde, e sem sofrer com efeitos colaterais.
                  </p>

                  <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                    <h6 className="text-gray-800 font-semibold mb-4">Resultados observados:</h6>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">92%</div>
                        <div className="text-xs sm:text-base text-gray-600">Menos flacidez</div>
                      </div>
                      <div className="relative p-2 sm:p-3">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">94%</div>
                        <div className="text-xs sm:text-base text-gray-600">Menos rugas</div>
                      </div>
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">98%</div>
                        <div className="text-xs sm:text-base text-gray-600">Satisfação de<br/>usuários</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-900 mb-6">O diferencial exclusivo do Antiflacidez L&L Skin é sua ação tripla:</p>

                  <div className="space-y-4 mb-6">
                    <div className="text-gray-900">
                      <strong>Estímulo ao Colágeno:</strong> Aumenta a produção de colágeno em até 90%, promovendo firmeza e elasticidade da pele nas primeiras 48 horas de uso.
                    </div>
                    <div className="text-gray-900">
                      <strong>Rejuvenescimento Contínuo:</strong> Acelera a regeneração celular em até 45%, reduzindo rugas, pés de galinha e linhas de expressão, com ação 3x mais potente que produtos similares.
                    </div>
                    <div className="text-gray-900">
                      <strong>Proteção Inteligente:</strong> Tecnologia que protege contra danos oxidativos, bloqueando até 80% dos radicais livres que causam flacidez e envelhecimento precoce, exclusiva do Antiflacidez L&L Skin.
                    </div>
                  </div>

                  <p className="text-gray-900 mb-4">
                    Se você deseja um tratamento eficiente para combater a flacidez facial, rugas e linhas de expressão, Antiflacidez L&L Skin é uma ótima opção.
                  </p>

                  <p className="text-gray-900 mb-6">
                    Para saber mais acesse o site oficial nos links abaixo.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <UtmLink 
                      href="https://www.anti-flacidez.com/" 
                      className="w-full bg-[#00C853] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#00B848] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold"
                      eventId="site-oficial-phynamax"
                      onClick={handlePhynamaxCTA}
                    >
                      Acessar Site Oficial <span>→</span>
                    </UtmLink>
                    <UtmLink 
                      href="https://www.anti-flacidez.com/" 
                      className="w-full bg-[#FF6B00] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#FF5722] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold"
                      eventId="informacoes-phynamax"
                      onClick={handlePhynamaxInfo}
                    >
                      Obter mais informações <span>→</span>
                    </UtmLink>
                  </div>

                  <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-orange-500">⚠</span>
                      <span>
                        Para conhecer melhor o produto, clique nos botões acima e seja redirecionado para o site oficial do produto.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionTracker>

          {/* Segundo Produto - A.G.E. Advanced Cream */}
          <SectionTracker sectionId="ozenvitta">
            <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
              <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
                2° Lugar
              </div>
              
              <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl sm:text-2xl text-gray-900 font-bold">A.G.E. Advanced Cream</h4>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Creme eficaz</span>
                  </div>
                  <p className="text-gray-900 font-medium text-base sm:text-lg tracking-wide">Creme eficaz contra flacidez</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-xl font-bold text-gray-900">4.5</div>
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                  </div>
                  <div className="text-sm text-gray-500">Avaliação dos usuários</div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div className="w-full sm:w-64 shrink-0">
                  <Image
                    src="/ozenvitta-400.png"
                    alt="A.G.E. Advanced Cream: Fórmula eficaz contra flacidez"
                    width={256}
                    height={384}
                    className="rounded-lg mx-auto sm:mx-0"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 256px"
                    quality={85}
                  />
                  <p className="text-sm text-gray-600 text-center mt-2">
                    A.G.E. Advanced Cream: Fórmula eficaz contra flacidez
                  </p>
                </div>

                <div className="flex-1">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">
                    Por que o SkinCeuticals A.G.E. Interrupter Advanced Cream é eficaz?
                  </h5>

                  <p className="text-gray-700 mb-6">
                    Em nossa análise, o SkinCeuticals A.G.E. Interrupter Advanced Cream se destacou no combate à flacidez facial: 4 a cada 10 usuários relataram melhora significativa na firmeza da pele, com redução de até 30% em rugas, pés de galinha e linhas de expressão após 4 semanas. Sua fórmula com Proxylane, extrato de blueberry e peptídeos previne a perda de colágeno e firma o contorno facial, oferecendo resultados visíveis e duradouros.
                  </p>

                  <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                    <h6 className="text-gray-800 font-semibold mb-4">Resultados observados:</h6>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">86%</div>
                        <div className="text-xs sm:text-base text-gray-600">Menos flacidez</div>
                      </div>
                      <div className="relative p-2 sm:p-3">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">89%</div>
                        <div className="text-xs sm:text-base text-gray-600">Menos rugas</div>
                      </div>
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">92%</div>
                        <div className="text-xs sm:text-base text-gray-600">Satisfação de<br/>usuários</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-900 mb-6">
                    O SkinCeuticals A.G.E. Interrupter Advanced Cream utiliza uma combinação exclusiva de ingredientes clinicamente comprovados que atuam de forma sinérgica para promover o rejuvenescimento facial, reduzindo flacidez, rugas e linhas de expressão, sem causar irritações.
                  </p>

                  <p className="text-gray-900 mb-6">O A.G.E. Interrupter Advanced Cream atua através de seu mecanismo de tripla ação:</p>

                  <div className="space-y-4 mb-6">
                    <div className="text-gray-900">
                      <strong>Estímulo à Firmeza:</strong> Proxylane fortalece a matriz dérmica, aumentando a elasticidade da pele em até 30%.
                    </div>
                    <div className="text-gray-900">
                      <strong>Proteção Antioxidante:</strong> Extrato de blueberry combate radicais livres, prevenindo o envelhecimento precoce.
                    </div>
                    <div className="text-gray-900">
                      <strong>Regeneração Celular:</strong> Peptídeos aceleram a renovação da pele, suavizando rugas e pés de galinha com resultados visíveis em 4 semanas.
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <UtmLink 
                      href="https://www.anti-flacidez.com/" 
                      className="w-full bg-[#00C853] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#00B848] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold"
                      eventId="site-oficial-ozenvitta"
                      onClick={handleOzenvittaCTA}
                    >
                      Acessar Site Oficial <span>→</span>
                    </UtmLink>
                    <UtmLink 
                      href="https://www.anti-flacidez.com/" 
                      className="w-full bg-[#FF6B00] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#FF5722] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold"
                      eventId="informacoes-ozenvitta"
                      onClick={handleOzenvittaInfo}
                    >
                      Obter mais informações <span>→</span>
                    </UtmLink>
                  </div>

                  <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-orange-500">⚠</span>
                      <span>
                        Para conhecer melhor o produto, clique nos botões acima e seja redirecionado para o site oficial do produto.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionTracker>

          {/* Terceiro Produto - Nuface Mini */}
          <SectionTracker sectionId="definamax">
            <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
              <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
                3° Lugar
              </div>
              
              <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg sm:text-xl text-gray-900 font-bold">Nuface Mini</h4>
                    <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-sm">Eficiente</span>
                  </div>
                  <p className="text-gray-900 font-medium text-sm sm:text-base tracking-wide">Tecnologia avançada para tratamento contra flacidez facial</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-lg sm:text-xl font-bold text-gray-900">4.3</div>
                    <div className="text-yellow-400 text-lg">★★★★★</div>
                  </div>
                  <div className="text-xs text-gray-500">Avaliação dos usuários</div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4"></div>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-6" id="definamax">
                <div className="w-full sm:w-64 shrink-0">
                  <Image
                    src="/definamax-400.png"
                    alt="Nuface Mini: Tecnologia avançada para rejuvenescimento"
                    width={256}
                    height={384}
                    className="rounded-lg mx-auto sm:mx-0"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 256px"
                    quality={85}
                  />
                  <p className="text-xs text-gray-600 text-center mt-2">
                    Nuface Mini: Tecnologia avançada para rejuvenescimento
                  </p>
                </div>

                <div className="flex-1">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">
                    Por que o Nuface Mini é considerado eficaz para a Flacidez Facial?
                  </h5>

                  <p className="text-gray-700 mb-6">
                    Em nossa análise, destacamos que a tecnologia do Nuface Mini, baseada em microcorrentes avançadas, atua de forma precisa na estimulação muscular e na produção de colágeno. Com pulsos elétricos de baixa intensidade que penetram nas camadas profundas da pele, o dispositivo tonifica os músculos faciais, reduzindo o afrouxamento e melhorando a elasticidade.
                  </p>

                  <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                    <h6 className="text-gray-800 font-semibold mb-4">Resultados observados:</h6>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">84%</div>
                        <div className="text-xs sm:text-base text-gray-600">Menos flacidez</div>
                      </div>
                      <div className="relative p-2 sm:p-3">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">87%</div>
                        <div className="text-xs sm:text-base text-gray-600">Menos rugas</div>
                      </div>
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">94%</div>
                        <div className="text-xs sm:text-base text-gray-600">Satisfação dos<br/>usuários</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-900 mb-6">O diferencial do Nuface Mini é sua ação inteligente:</p>

                  <div className="space-y-4 mb-6">
                    <div className="text-gray-900">
                      <strong>Tonificação Muscular Máxima:</strong> Estimula os músculos faciais em até 95%, reduzindo a flacidez e promovendo firmeza visível já nas primeiras 24 horas de uso.
                    </div>
                    <div className="text-gray-900">
                      <strong>Rejuvenescimento Acelerado:</strong> Aumenta a produção de colágeno e elastina em até 50%, trabalhando continuamente para melhorar a elasticidade da pele, mesmo durante o repouso.
                    </div>
                    <div className="text-gray-900">
                      <strong>Redução Localizada Express:</strong> Atua especificamente em áreas propensas à flacidez, como bochechas, queixo e pescoço, com resultados visíveis em 72 horas.
                    </div>
                    <div className="text-gray-900">
                      <strong>Tecnologia Inteligente:</strong> Microcorrentes patenteadas que estimulam até 85% mais a regeneração celular e a circulação sanguínea, promovendo uma pele mais firme e tonificada.
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <UtmLink 
                      href="https://www.anti-flacidez.com/" 
                      className="w-full bg-[#00C853] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#00B848] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold"
                      eventId="site-oficial-definamax"
                      onClick={handleDefinamaxCTA}
                    >
                      Acessar Site Oficial <span>→</span>
                    </UtmLink>
                    <UtmLink 
                      href="https://www.anti-flacidez.com/" 
                      className="w-full bg-[#FF6B00] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#FF5722] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold"
                      eventId="informacoes-definamax"
                      onClick={handleDefinamaxInfo}
                    >
                      Obter mais informações <span>→</span>
                    </UtmLink>
                  </div>

                  <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-orange-500">⚠</span>
                      <span>
                        Para conhecer melhor o produto, clique nos botões acima e seja redirecionado para o site oficial do produto.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionTracker>

          {/* Quarto Produto - SB2 - OCULTO */}
          {/*
          <SectionTracker sectionId="sb2">
            <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
              <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
                4° Lugar
              </div>
              
              <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl sm:text-2xl text-gray-900 font-bold">SB2 Turbo</h4>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">fórmula eficiente</span>
                  </div>
                  <p className="text-gray-900 font-medium text-base sm:text-lg tracking-wide">Emagrecimento saudável</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-xl font-bold text-gray-900">4.2</div>
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                  </div>
                  <div className="text-sm text-gray-500">Avaliação dos usuários</div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div className="w-full sm:w-64 shrink-0">
                  <Image
                    src="/sb2-400.webp"
                    alt="SB2 Turbo: Emagrecimento rápido e saudável"
                    width={256}
                    height={384}
                    className="rounded-lg mx-auto sm:mx-0"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 256px"
                    quality={85}
                  />
                  <p className="text-sm text-gray-600 text-center mt-2">
                    SB2 Turbo: Emagrecimento rápido e saudável
                  </p>
                </div>

                <div className="flex-1">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">
                    Por que o SB2 Turbo é eficaz para emagrecer?
                  </h5>

                  <p className="text-gray-700 mb-6">
                    Nossa análise revelou resultados significativos: 87% dos usuários relataram redução de medidas e controle do apetite, com resultados visíveis já nas primeiras semanas de uso.
                  </p>

                  <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                    <h6 className="text-gray-800 font-semibold mb-4">Resultados observados:</h6>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">88%</div>
                        <div className="text-xs sm:text-base text-gray-600">Saciedade</div>
                      </div>
                      <div className="relative p-2 sm:p-3">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">91%</div>
                        <div className="text-xs sm:text-base text-gray-600">Controle<br/>compulsão</div>
                      </div>
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">92%</div>
                        <div className="text-xs sm:text-base text-gray-600">Satisfação de<br/>usuários</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-900 mb-6">
                    O produto utiliza uma combinação exclusiva de ingredientes naturais que atuam de forma sinérgica para promover o emagrecimento saudável, sem efeitos colaterais.
                  </p>

                  <p className="text-gray-900 mb-6">O SB2 Turbo trabalha através de três mecanismos principais:</p>

                  <div className="space-y-4 mb-6">
                    <div className="text-gray-900">
                      <strong>Controle do Apetite:</strong> Psyllium e Chia trabalham juntos para promover saciedade prolongada.
                    </div>
                    <div className="text-gray-900">
                      <strong>Aceleração Metabólica:</strong> L-carnitina e L-tirosina otimizam a queima de gordura.
                    </div>
                    <div className="text-gray-900">
                      <strong>Redução de Medidas:</strong> Laranja Moro e Espirulina auxiliam na redução da gordura localizada.
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <UtmLink 
                      href="https://www.anti-flacidez.com/" 
                      className="w-full bg-[#00C853] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#00B848] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold"
                      eventId="site-oficial-sb2"
                      onClick={handleSB2CTA}
                    >
                      Acessar Site Oficial <span>→</span>
                    </UtmLink>
                    <UtmLink 
                      href="https://www.anti-flacidez.com/" 
                      className="w-full bg-[#FF6B00] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#FF5722] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold"
                      eventId="informacoes-sb2"
                      onClick={handleSB2Info}
                    >
                      Obter mais informações <span>→</span>
                    </UtmLink>
                  </div>

                  <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-orange-500">⚠</span>
                      <span>
                        Para conhecer melhor o produto, clique nos botões acima e seja redirecionado para o site oficial do produto.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionTracker>
          */}

          {/* Quinto Produto - NewDetox - OCULTO */}
          {/*
          <SectionTracker sectionId="newdetox">
            <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
              <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
                5° Lugar
              </div>
              
              <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl sm:text-2xl text-gray-900 font-bold">New Detox</h4>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Creme eficaz</span>
                  </div>
                  <p className="text-gray-900 font-medium text-base sm:text-lg tracking-wide">Redução de inchaço e desintoxicação</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-xl font-bold text-gray-900">4.1</div>
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                  </div>
                  <div className="text-sm text-gray-500">Avaliação dos usuários</div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div className="w-full sm:w-64 shrink-0">
                  <Image
                    src="/newdetox-400.webp"
                    alt="New Detox: Redução de inchaço e desintoxicação"
                    width={256}
                    height={384}
                    className="rounded-lg mx-auto sm:mx-0"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 256px"
                    quality={85}
                  />
                  <p className="text-sm text-gray-600 text-center mt-2">
                    New Detox: Redução de inchaço e desintoxicação
                  </p>
                </div>

                <div className="flex-1">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">
                    Por que o New Detox é eficaz no combate ao inchaço?
                  </h5>

                  <p className="text-gray-700 mb-6">
                    Nossa análise revelou que o New Detox é especialmente eficaz contra o inchaço: 80% dos usuários relataram redução significativa do inchaço abdominal em apenas 7 dias, com melhora expressiva na digestão e sensação de leveza.
                  </p>

                  <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                    <h6 className="text-gray-800 font-semibold mb-4">Resultados observados:</h6>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">89%</div>
                        <div className="text-xs sm:text-base text-gray-600">Saciedade</div>
                      </div>
                      <div className="relative p-2 sm:p-3">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">92%</div>
                        <div className="text-xs sm:text-base text-gray-600">Controle<br/>compulsão</div>
                      </div>
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">87%</div>
                        <div className="text-xs sm:text-base text-gray-600">Satisfação dos<br/>usuários</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-900 mb-6">
                    O produto utiliza uma combinação exclusiva de ativos naturais que atuam na desintoxicação do organismo e redução da retenção de líquidos, proporcionando resultados rápidos no combate ao inchaço.
                  </p>

                  <p className="text-gray-900 mb-6">O New Detox atua através de três mecanismos:</p>

                  <div className="space-y-4 mb-6">
                    <div className="text-gray-900">
                      <strong>Desintoxicação:</strong> Spirulina e Psyllium eliminam toxinas e reduzem o inchaço abdominal.
                    </div>
                    <div className="text-gray-900">
                      <strong>Equilíbrio Intestinal:</strong> Melhora a digestão e reduz o desconforto abdominal.
                    </div>
                    <div className="text-gray-900">
                      <strong>Drenagem:</strong> Combate a retenção de líquidos e melhora o aspecto da pele.
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <UtmLink 
                      href="https://www.anti-flacidez.com/" 
                      className="w-full bg-[#00C853] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#00B848] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold"
                      eventId="site-oficial-newdetox"
                      onClick={handleNewDetoxCTA}
                    >
                      Acessar Site Oficial <span>→</span>
                    </UtmLink>
                    <UtmLink 
                      href="https://www.anti-flacidez.com/" 
                      className="w-full bg-[#FF6B00] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#FF5722] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold"
                      eventId="informacoes-newdetox"
                      onClick={handleNewDetoxInfo}
                    >
                      Obter mais informações <span>→</span>
                    </UtmLink>
                  </div>

                  <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-orange-500">⚠</span>
                      <span>
                        Para conhecer melhor o produto, clique nos botões acima e seja redirecionado para o site oficial do produto.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionTracker>
          */}



          {/* Seção de Conclusão */}
          <SectionTracker sectionId="conclusao">
            <div className="bg-gradient-to-b from-gray-100 to-gray-50/80 py-8">
              <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Conclusão
                  </h2>
                  <p className="text-gray-700 text-center leading-relaxed mb-6">
                    Esses 3 tratamentos representam as melhores opções para combater a flacidez facial em 2025. 
                    Todos possuem tecnologias avançadas, resultados comprovados e garantia de satisfação.
                  </p>
                  
                  <div className="text-left max-w-2xl mx-auto">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Ranking Final:</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="bg-green-600 text-white font-bold text-sm px-2 py-1 rounded">1°</span>
                        <span className="font-semibold text-gray-900">Antiflacidez L&L Skin</span>
                        <span className="text-sm text-green-700">- Mais recomendado</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                        <span className="bg-gray-600 text-white font-bold text-sm px-2 py-1 rounded">2°</span>
                        <span className="font-medium text-gray-800">A.G.E. Advanced Cream</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                        <span className="bg-gray-600 text-white font-bold text-sm px-2 py-1 rounded">3°</span>
                        <span className="font-medium text-gray-800">Nuface Mini</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionTracker>

          {/* Seção O Que Fazer Agora */}
          <SectionTracker sectionId="proximos-passos">
            <div className="bg-white py-8">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  E o que devo fazer agora?
                </h2>
                <p className="text-gray-700">
                  Agora a escolha é sua! Com base em nossa análise aprofundada, tome sua decisão e escolha o produto que mais se adequa às suas necessidades.
                </p>
              </div>
            </div>
          </SectionTracker>
        </div>
      </div>
    </section>
  );
});

RankingSection.displayName = 'RankingSection';

export default RankingSection; 