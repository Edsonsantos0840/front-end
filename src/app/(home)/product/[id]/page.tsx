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
import { FetchGet } from "@/app/functions/fetch/FetchGet";

export const metadata: Metadata = {
  title: "Peças de Mármore incríveis em M&A Marmores e Granitos.",
  description: "Faça seu logim para interagir com os produtos.",
  keywords:
    "Marmores e Granitos, Desing ambiente, Acabamento construção, marmore, granito, pedra onix, pedras ornamentais, pia de marmore, mesa de marmore, escada de marmore, balcao de marmore, soleira de marmore, porcelanato, construtora, construção civil, alvenaria, piso, pisos e revestimentos",
};

export default async function ProductOne({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  //busca o usuário logado
  const { user } = await Block();
  const url = `${process.env.BASE_URL}/products/${id}`;

  const { data: product } = await FetchGet<ProdutoProps>(url);

  const userComments = {
    _id: "",
    name: "",
    email: "",
    image: "",
    tipo: "",
  };

  let urlDelLike = "";
  // sertifica que é o id do usuário logado
  const firstLikeId = product?.likes?.length ? product.likes[0]._id : "";
  urlDelLike = `${process.env.BASE_URL}/product/likes/${firstLikeId}`;

  if (product)
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
                      <FaHome className="text-principal/90 w-[44px] h-[44px] lg:w-[30px] lg:h-[30px]" />
                    </Link>
                  </p>
                  <h5 className="text-textos/50 text-sm italic hidden md:block">
                    Tenha a melhor qualidade e um visual mais moderno em seu
                    projeto.
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
                    <article className="w-full lg:text-center">
                      <h2 className="text-2xl lg:text-xl text-principal/90 font-black pb-3 capitalize">
                        {product.title}
                      </h2>
                      <h3 className="text-textos/90 text-lg lg:text-xl font-semibold font-Lilita_One">
                        Nossa Prioridade:
                      </h3>
                      <p className="text-textos/90 text-xl lg:text-sm italic mb-8">
                        Um atendimento personalizado e humanizado.
                      </p>

                      <BtnContact classEdit="px-28 md:px-[300px] lg:px-[76px] md:py-4 lg:py-2 m-auto" />

                      {/* Seção de Interação (Likes e Dislikes) */}
                      <section className="flex lg:justify-around items-center gap-4 mt-8">
                        <Suspense fallback={<LoadingSuspense />}>
                          <div className="flex items-center gap-4">
                            {" "}
                            <LikeRegister id={product._id} user={user} />
                            {user.name && (
                              <Btn
                                url={urlDelLike}
                                handle={handleDeleteLike}
                                icon={
                                  <SlDislike className="text-textos/90 text-4xl lg:text-3xl italic" />
                                }
                              />
                            )}
                          </div>
                          <p className="bg-principal flex justify-center items-center text-textos2 text-3xl   font-bold w-14 h-14 lg:w-11 lg:h-10 lg:leading-[2.8rem] shadow-xl rounded-full">
                            {product.likes.length}
                          </p>
                          <h4 className="text-textos/90 text-4xl lg:text-3xl font-bold">
                            Likes
                          </h4>
                        </Suspense>
                      </section>

                      {/* Descrição do Produto */}
                      <section className="mt-4 lg:text-center">
                        <h3 className="text-textos/90 text-3xl lg:text-xl font-bold">
                          Descrição
                        </h3>
                        <p className="text-textos/90 text-sm italic mb-1">
                          {product.description}
                        </p>
                      </section>

                      {/* Redes Sociais */}
                      <section className="mt-4 lg:text-center">
                        <h3 className="text-textos/90 text-3xl lg:text-xl font-bold mb-2">
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
                      <h3 className="text-principal/90 text-3xl lg:text-2xl font-black">
                        Planeje seus sonhos.
                      </h3>
                      <p className="text-textos/90 text-xl lg:text-sm italic mb-2">
                        Nós te ajudamos a realizá-lo.
                      </p>
                      <div className="m-auto relative w-[390px] h-[315px] md:w-[700px] md:h-[515px] lg:w-[260px] lg:h-[205px]">
                        <Image
                          src={img}
                          alt="Logo da empresa"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          quality={100}
                        />
                      </div>
                      <CardNavProducts />
                      <p className="text-textos/90 italic text-xl lg:text-base text-justify">
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
