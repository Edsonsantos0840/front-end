"use client";
//meus componentes
import Container from "./components/containers/Container";
import CardInfo from "./components/cards/CardInfo";
import marmore from "../../../public/assets/marmore1.5d36561f34bb749fe7d8.png";
import granito from "../../../public/assets/granito1.da2922cafeb913d8cbb9.png";
import onix from "../../../public/assets/onix1.3d32bc3520a208c1d36f.png";
import CardPhotos from "./components/cards/CardPhotos";
import requinte from "../../../public/assets/requinte.jpg";
import sofisticação from "../../../public/jacob-wall-J35x4qL0mS0-unsplash.jpg";
import qualidade from "../../../public/Design sem nome (6).png";
// componente que importa animação
import { motion } from "framer-motion";

export default function Home() {
  return (
<div className="font-Ysabea">
  <Container>
    <main>
      <section aria-label="Vídeo de apresentação">
        <video autoPlay loop muted>
          <source src="/video/video.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </section>

      <hr />

      {/* Seção Explicativa sobre Mármore, Granito e Ônix */}
      <section className="p-0">
        <h1 className="text-textos hidden md:block text-4xl text-center mt-5">
          Qual a diferença entre Mármore e Granito?
        </h1>

        <div className="md:flex justify-between items-center lg:gap-4 m-auto">
          <article>
            <CardInfo
              title="O que é o Mármore?"
              paragraph="O mármore é uma rocha metamórfica formada a partir do calcário, exposto a altas temperaturas e pressão."
              textHidden="Utilizado em decorações, esculturas e construções, como pisos e bancadas."
              btn="Ler"
            />
          </article>

          <article>
            <CardInfo
              title="O que é o Granito?"
              paragraph="O granito é uma rocha ígnea formada pelo resfriamento do magma, composta por quartzo, feldspato e mica."
              textHidden="Amplamente utilizado em bancadas, pisos e revestimentos externos devido à sua alta resistência."
              btn="Ler"
            />
          </article>

          <article>
            <CardInfo
              title="O que é o Ônix?"
              paragraph="O ônix é um tipo de mármore translúcido composto por calcita, sendo mais frágil que o granito."
              textHidden="Usado em revestimentos sofisticados e decoração com iluminação."
              btn="Ler"
            />
          </article>
        </div>
      </section>

      {/* Seção de Imagens dos Tipos de Pedra */}
      <section className="lg:p-0 text-center">
        <h2 className="text-textos text-4xl text-center mt-5">
          Alguns tipos de placas
        </h2>

        <div className="alinha lg:flex-row gap-4">
          {[{ title: "MÁRMORE", image: marmore }, 
            { title: "GRANITO", image: granito }, 
            { title: "ÔNIX", image: onix }].map(({ title, image }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.2 }}
            >
              <figure>
                <CardPhotos title={title} image={image} />
                <figcaption className="sr-only">{title}</figcaption>
              </figure>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seção Informativa com Cards */}
      <section className="lg:w-full">
        <h2 className="text-textos text-4xl text-center mt-5">
          Saiba mais
        </h2>

        {/* Cards informativos */}
        <div className="alinha lg:flex-row py-4 md:gap-6 lg:w-full">
          <article>
            <CardInfo
              title="As Melhores Peças"
              paragraph="Os mármores exóticos possuem um visual sofisticado e diferenciado."
              textHidden="Podem ser usados em projetos de alto padrão devido às suas características únicas."
              btn="Ler"
              extend
            />
          </article>

          <motion.div
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2 }}
          >
            <figure>
              <CardPhotos image={requinte} title="REQUINTE" extend />
              <figcaption className="sr-only">Placa de mármore requintada</figcaption>
            </figure>
          </motion.div>
        </div>

        {/* Sofisticação */}
        <div className="alinha lg:flex-row py-4 md:gap-6 lg:w-full">
          <motion.div
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2 }}
          >
            <figure>
              <CardPhotos image={sofisticação} title="SOFISTICAÇÃO" extend />
              <figcaption className="sr-only">Exemplo de sofisticação no uso do mármore</figcaption>
            </figure>
          </motion.div>

          <article>
            <CardInfo
              title="A Maior Dedicação"
              paragraph="O mármore pode ser aplicado em diversos ambientes, desde que bem cuidado."
              textHidden="Uma impermeabilização adequada aumenta sua durabilidade e reduz danos por líquidos."
              btn="Ler"
              extend
            />
          </article>
        </div>

        {/* Qualidade */}
        <div className="alinha lg:flex-row py-4 md:gap-6 lg:w-full">
          <article>
            <CardInfo
              title="O Máximo de Cuidado"
              paragraph="Projetos sob medida que garantem design exclusivo e alta qualidade."
              textHidden="Utilizados em revestimentos para áreas sociais e de lazer."
              btn="Ler"
              extend
            />
          </article>

          <motion.div
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2 }}
          >
            <figure>
              <CardPhotos image={qualidade} title="MAIOR QUALIDADE" extend />
              <figcaption className="sr-only">Peça de mármore com acabamento de alta qualidade</figcaption>
            </figure>
          </motion.div>
        </div>
      </section>
    </main>
  </Container>
</div>

  );
}
