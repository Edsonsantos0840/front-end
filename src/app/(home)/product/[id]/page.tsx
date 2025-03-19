//meus componentes
import CardRedesSociais from "@/app/(home)/components/cards/CardRedesSociais";
import CardNavProducts from "@/app/(dashboard)/components/cards/CardNavProducts";
import CardComments from "@/app/(home)/components/cards/CardComments";
import BtnContact from "@/app/(home)/components/buttons/BtnContact";
import img from "../../../../../public/assets/requinte.jpg";
import CardImages from "@/app/(home)/components/cards/CardImages";
import Container from "@/app/(home)/components/containers/Container";
import CommentRegister from "@/app/(home)/components/form/CommentRegister";
import LikeRegister from "@/app/(home)/components/form/LikeRegister";
import { ProdutoProps } from "@/app/types/produtoTypes";
import { Block } from "@/app/middleware/blockedPage";
import { SlDislike } from "react-icons/sl";
import Btn from "@/app/(home)/components/buttons/Btn";
import { handleDeleteLike } from "@/app/functions/handleSubmit/HandleDeleteLike";
//componentes
import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
//icons
import { FaHome } from "react-icons/fa";
import LoadingSuspense from "../../LoadingSuspense";

export const metadata: Metadata = {
  title: "Peças de Mármore incríveis em M&A Marmores e Granitos.",
  description: "Faça seu logim para interagir com os produtos.",
  keywords:
    "Marmores e Granitos, Desing ambiente, Acabamento construção, marmore, granito, pedra onix, pedras ornamentais, pia de marmore, mesa de marmore, escada de marmore, balcao de marmore, soleira de marmore, porcelanato, construtora, construção civil, alvenaria, piso, pisos e revestimentos",
};

export interface likesProps {
  _id: string;
  likes: string;
  user: string;
  product: string;
}

export default async function ProductOne({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  //busca o usuário logado
  const { user } = await Block(); 
  const url = `${process.env.BASE_URL}/products/${id}`;
  const urlLikes = `${process.env.BASE_URL}/likes`;
 //busca dados do produtos e likes
  const [productRes, likesRes] = await Promise.all([
    fetch(url, { cache: "no-store" }),

    fetch(urlLikes, { next: { tags: ["likes"] } }),
  ]);
  //busca dados do produtos e likes
  const product: ProdutoProps = await productRes.json();
  const likes: likesProps[] = likesRes.ok ? await likesRes.json() : [];

  const userComments = {
    _id: "",
    name: "",
    email: "",
    image: "",
    tipo: "",
  };

  let urlDelLike = "";
// sertifica que é o id do usuário logado
  if (likes.length > 0 && likes[0]?._id) {
    urlDelLike = `${process.env.BASE_URL}/product/likes/${likes[0]._id}`;
  }

  return (
    <Container>
    <main className="relative z-0 my-4">
      {/* Seção Principal do Produto */}
      <section className="flex flex-col sm:basis-1/2 md:basis-1/3 lg:basis-1/4 lg:max-w-full">
        <div className="bg-white p-4 rounded-2xl pb-8">
          {/* Cabeçalho da Categoria */}
          <header className="flex md:justify-between items-center p-2 my-1 w-auto">
            <div>
              <p className="flex items-center">
                <span className="text-3xl lg:text-2xl text-principal mr-2 font-black">
                  Categoria:
                </span>
                <span className="text-3xl lg:text-2xl text-textos/60 capitalize font-black">
                  {product.category}
                </span>
                <Link
                  href="/bathrooms"
                  className="ml-16 md:ml-40 cursor-pointer hover:scale-105"
                >
                  <FaHome className="text-principal/80 w-[44px] h-[44px] lg:w-[30px] lg:h-[30px]" />
                </Link>
              </p>
              <h5 className="text-textos/50 text-sm italic hidden md:block">
                Tenha a melhor qualidade e um visual mais moderno em seu projeto.
              </h5>
            </div>
          </header>
  
          {/* Conteúdo do Produto */}
          <Suspense fallback={<LoadingSuspense />}>
            {product && (
              <section className="flex flex-col lg:flex-row gap-8">
                {/* Imagens do Produto */}
                <CardImages product={product} />
  
                {/* Informações do Produto */}
                <article className="w-full">
                  <h2 className="text-3xl lg:text-2xl text-principal/80 font-black pb-3">
                    {product.title}
                  </h2>
                  <h3 className="text-textos/80 text-lg lg:text-xl font-semibold font-Lilita_One">
                    Nossa Prioridade:
                  </h3>
                  <p className="text-textos/80 text-xl lg:text-sm italic mb-8">
                    Um atendimento personalizado e humanizado.
                  </p>
  
                  <BtnContact classEdit="px-28 md:px-[300px] lg:px-[50px] md:py-4 lg:py-2 m-auto" />
  
                  {/* Seção de Interação (Likes e Dislikes) */}
                  <section className="flex items-center gap-4 mt-8">
                    <Suspense fallback={<LoadingSuspense />}>
                      <LikeRegister id={product._id} user={user} />
                      {user.name && (
                        <Btn
                          url={urlDelLike}
                          handle={handleDeleteLike}
                          icon={
                            <SlDislike className="text-textos/80 text-4xl lg:text-3xl italic" />
                          }
                        />
                      )}
                      <p className="bg-principal text-textos2 text-4xl lg:text-3xl text-center font-bold w-16 h-16 lg:w-10 lg:h-10 shadow-xl rounded-full">
                        {likes.length}
                      </p>
                      <h4 className="text-textos/80 text-4xl lg:text-3xl font-bold">
                        Likes
                      </h4>
                    </Suspense>
                  </section>
  
                  {/* Descrição do Produto */}
                  <section className="mt-4">
                    <h3 className="text-textos/80 text-3xl lg:text-xl font-bold">
                      Descrição
                    </h3>
                    <p className="text-textos/80 text-sm italic mb-1">
                      {product.description}
                    </p>
                  </section>
  
                  {/* Redes Sociais */}
                  <section className="mt-4">
                    <h3 className="text-textos/80 text-3xl lg:text-xl font-bold mb-2">
                      Redes Sociais
                    </h3>
                    <CardRedesSociais
                      iconColor="text-[#b91c1c]"
                      iconSize="text-5xl lg:text-4xl justify-center gap-6 md:gap-10 lg:gap-5 md:justify-between md:justify-center"
                    />
                  </section>
                </article>
  
                {/* Seção Planejamento */}
                <aside className="lg:px-4 w-full">
                  <h3 className="text-principal/80 text-3xl lg:text-2xl font-black">
                    Planeje seus sonhos.
                  </h3>
                  <p className="text-textos/80 text-xl lg:text-sm italic mb-2">
                    Nós te ajudamos a realizá-lo.
                  </p>
                  <div className="m-auto relative w-[380px] h-[315px] md:w-[700px] md:h-[515px] lg:w-[260px] lg:h-[205px]">
                    <Image src={img} alt="Logo da empresa" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={100} />
                  </div>
                  <CardNavProducts />
                  <p className="text-textos/80 italic text-xl lg:text-base text-justify">
                    Atendemos com excelência toda a região de São Paulo. 
                    Oferecemos produtos fabricados em mármore, granitos e 
                    diversas outras pedras ornamentais.
                  </p>
                </aside>
              </section>
            )}
          </Suspense>
        </div>
  
        {/* Seção de Comentários */}
        <section className="bg-white my-8 p-4 rounded-2xl">
          <h3 className="text-3xl lg:text-lg text-textos3 mb-2">
            Deixe seu comentário.
          </h3>
          <Suspense fallback={<LoadingSuspense />}>
            <CommentRegister user={user} id={product._id} />
            <CardComments id={id} user={user || userComments} />
          </Suspense>
        </section>
      </section>
    </main>
  </Container>
  
  );
}
