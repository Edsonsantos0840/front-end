"use client";
import Container from "./components/containers/Container";
import CardInfo from "./components/cards/CardInfo";
import marmore from "../../../public/assets/marmore1.5d36561f34bb749fe7d8.png";
import granito from "../../../public/assets/granito1.da2922cafeb913d8cbb9.png";
import onix from "../../../public/assets/onix1.3d32bc3520a208c1d36f.png";
import CardPhotos from "./components/cards/CardPhotos";
import requinte from "../../../public/assets/requinte.jpg";
import sofisticação from "../../../public/jacob-wall-J35x4qL0mS0-unsplash.jpg";
import qualidade from "../../../public/Design sem nome (6).png";
import { motion } from "framer-motion"; // Importa animação

export default function Home() {
  return (
    <div className="font-Ysabea">
      <Container>
        <main>
          <video autoPlay loop muted>
            <source src="/video/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <hr />

          <section className="p-0">
            <h1 className=" text-textos hidden md:block text-4xl text-center mt-5 ">
              Qual a diferença entre Mármore e Granito?
            </h1>

            <div className="md:flex justify-between items-center lg:gap-4 m-auto ">
              <CardInfo
                title="O que é o Marmore?"
                paragraph="O mármore é uma rocha metamórfica. A rocha original passou por uma transformação. É o resultado da exposição de calcário a altas temperaturas, com pressão de baixa a moderada."
                textHidden="O mármore, por si só, já é considerado um material extremamente elegante e exclusivo. Mas quando falamos em mármores exóticos, toda a qualidade, luxo e sofisticação dessa pedra é potencializada. Durante o processo de formação da rocha, algo ocorre fora do normal. ONDE É USADO? Aplicações do mármore: usado em decorações, na confecção de objetos ornamentais e esculturas. Em construções civis é aplicado em objetos para uso domiciliar, como pisos, mesas e bancadas para cozinha"
                btn="Ler"
              />
              <CardInfo
                title="O que é o Granito?"
                paragraph="O Granito é uma rocha formada por um conjunto de minerais, sua formaçao é no interior da crosta terrestre por resfriamento lento e solidificação do magma . Sua composição é seguinte:"
                textHidden="basicamente a Quartzo, um mineral incolor; o Feldspato (ortóclase, sanidina e microclina),responsável pela variedade de cores, dentre elas: avermelhada, rosada e creme-acinzentada; e a Mica, que confere o brilho à rocha ONDE É USADO? Por ser um material muito resistente, pode ser usado em diferentes áreas, externas ou internas. Os seus usos mais comuns são em lavatórios de cozinha, bancadas de áreas comerciais, soleiras, pisos e para revestir paredes de áreas que fiquem em contato direto com sol e chuva."
                btn="Ler"
              />
              <CardInfo
                title="O que é o Ônix?"
                paragraph="O ônix é uma forma de mármore, composta principalmente de calcita. mas, como outras pedras, o ônix é muito mais suave que o granito, Sua composição é seguinte:"
                textHidden="Além disso, o ônix é translúcido e pode ser iluminado por trás para mostrar sua beleza. ONDE É USADO?  O ônix pode ser utilizado de maneiras. Embora seja mais frequentemente visto em cozinhas, também aparececom frequência cada vez maior em banheiros , como a base para chuveiros, pias, pisos e até mesmo paredes. Também pode ser formado em intrincados mosaicos de lareiras, tampos de mesa e medalhões de piso. Por ser um material nobre e mais frágil, é mais utilizado para revestir paredes, conferindo ao ambiente sofisticação e requinte."
                btn="Ler"
              />
            </div>
          </section>
          <section className="lg:p-0 text-center">
            <h2 className=" text-textos text-4xl text-center mt-5 ">
              Alguns tipos de placas
            </h2>
            {/* ANIMAÇÃO NAS IMAGENS */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 ">
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.2 }}
              >
                <div>
                  <CardPhotos title="MÁRMORE" image={marmore} />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.2 }}
              >
                <div>
                  <CardPhotos title="GRANITO" image={granito} />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.2 }}
              >
                <div>
                  <CardPhotos title="ÔNIX" image={onix} />
                </div>
              </motion.div>
            </div>
          </section>

          <section className="lg:w-full ">
            <h2 className=" text-textos text-4xl text-center mt-5 ">
              Saiba mais
            </h2>
            <div className="flex flex-col lg:flex-row justify-between items-center py-4 md:gap-6 lg:w-full">
              <CardInfo
                title="As Melhores Peças"
                paragraph="Pedras Exóticas O QUE É ? O mármore, por si só, já é considerado um material extremamente elegante e exclusivo. Mas quando falamos em mármores exóticos, toda a qualidade, luxo e sofisticação dessa pedra é potencializada. Durante o processo de formação da rocha, algo ocorre fora do normal"
                textHidden="diferenças nos níveis de minerais, alterações climáticas, movimentações do solo ou atividade vulcânica são alguns exemplos – e altera a composição, influenciando nas cores e formato dos veios. ONDE É USADO? Mármores exóticos agregam um grande valor aos projetos, por se tratar de um material nobre, raro e natural."
                btn="ler"
                extend
              />
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.2 }}
              ></motion.div>
              <CardPhotos image={requinte} title="REQUINTE" extend />
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center py-4 md:gap-6 lg:w-full">
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.2 }}
              >
                <CardPhotos image={sofisticação} title="SOFISTICAÇÃO" extend />
              </motion.div>
              <CardInfo
                title="A Maior Dedicação"
                paragraph="O luxo e a sofisticação são impressos em qualquer que seja o detalhe produzido com mármore. Mas, por se tratar de um material poroso, possui uma baixa resistência aos líquidos. Deve ser evitado em locais muito úmidos e onde possa ter contato com ácidos, gorduras e corrosivos, como as cozinhas."
                textHidden="No entanto, tomados os devidos cuidados no manuseio e limpeza, e com uma impermeabilização bem feita, o mármore exótico, assim como o tradicional, pode ser aplicado em paredes, pisos, bancadas e escadas, ou onde mais a imaginação permitir!"
                btn="ler"
                extend
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center py-4 md:gap-6 lg:w-full">
              <CardInfo
                title="O Maximo de Cuidado"
                paragraph="Cortes sob medida que extraem dos porcelanatos e mármores as mais belas formas aplicáveis em ambientes onde a qualidade e o design devam permanecer em evidência. Projetos numerados que facilitam a instalação. Processo homologado para inserção dos cristais em revestimentos."
                textHidden="Marmoraria capacitada para a execução de projetos com alto padrão de qualidade e acabamento. Transformando materiais naturais (mármores e granitos), artificiais (porcelanatos, silestones e caesarstones), e compostos em bancadas e acabamentos para áreas sociais de lazer (churrasqueiras, lareiras, cozinhas) ou íntimas (banheiros e lavabos)."
                btn="ler"
                extend
              />
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.2 }}
              >
                <CardPhotos image={qualidade} title="MAIOR QUALIDADE" extend />
              </motion.div>
            </div>
          </section>
        </main>
      </Container>
    </div>
  );
}
