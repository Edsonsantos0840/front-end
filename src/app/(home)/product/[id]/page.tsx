import CardComments from "@/app/components/cards/CardComments";
import CardImages from "@/app/components/cards/CardImages";
import Container from "@/app/components/containers/Container";
import CommentRegister from "@/app/components/form/CommentRegister";
import LikeRegister from "@/app/components/form/LikeRegister";
import { ProdutoProps } from "@/app/types/produtoTypes";
import { Block } from "@/app/middleware/blockedPage";
// import BtnDesLike from "@/app/components/buttons/BtnDesLike";
import { SlDislike } from "react-icons/sl";
import Btn from "@/app/components/buttons/Btn";
import { handleDeleteLike } from "@/app/functions/handleSubmit/HandleDeleteLike";
import { Suspense } from "react";
import { Metadata } from "next";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import BtnContact from "@/app/components/buttons/BtnContact";
import img from '../../../../../public/assets/requinte.jpg'
import Image from "next/image";
import CardRedesSociais from "@/app/components/cards/CardRedesSociais";
import CardNavProducts from "@/app/components/cards/CardNavProducts";
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
  const { id } = await params;
  const { user } = await Block(); // Chama no Server Component
  const url = `${process.env.BASE_URL}/products/${id}`;
  const urlLikes = `${process.env.BASE_URL}/likes`;

  const [productRes, likesRes] = await Promise.all([
    fetch(url, { cache: "no-store" }),

    fetch(urlLikes, { next: { tags: ["likes"] } }),
  ]);

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

  if (likes.length > 0 && likes[0]?._id) {
    urlDelLike = `${process.env.BASE_URL}/product/likes/${likes[0]._id}`;
  }

  return (
    <Container>
      <main className="relative z-0 my-4 ">
        {/* Seção principal do produto */}
        <section className="flex-col sm:basis-1/2 md:basis-1/3 lg:basis-1/4 max-w-full">
          <div className="bg-white p-4 rounded-2xl pb-8">
            <div className="flex justify-between items-center p-2 my-1 ">
              <div>
                <p className="flex">
                  <span className={` text-2xl text-principal mr-2 font-black`}>
                    {" "}
                    Categoria:
                  </span>
                  <span className=" text-2xl text-textos/60 capitalize font-black">
                    {product.category}
                  </span>
                  <Link
                    href={"/bathrooms"}
                    className="ml-40 cursor-pointer hover:scale-105"
                  >
                    <FaHome size={30} className="text-principal/80" />
                  </Link>
                </p>
                <h5 className="text-textos/50 text-sm italic">
                  Tenha a melhor qualidade e um visual mais moderno em seu
                  projeto.
                </h5>
              </div>
            </div>

            <Suspense fallback={"Carregando....."}>
              {product && (
                <section className="flex justify-between gap-8">
                  <CardImages product={product} />
                  <section className="w-full">
                    <h2
                      className={`text-2xl text-principal/80 font-black pb-3`}
                    >
                      {product.title}
                    </h2>
                    <h3 className="text-textos/80 text-xl font-semibold  font-Lilita_One ">
                      Nossa Prioridade:
                    </h3>
                    <p className="text-textos/80 italic mb-8">
                      Um atendimento personalizado e humanizado.
                    </p>
                    <BtnContact classEdit={"px-20 "} />
                    {/* Seção de Interação (Likes e Dislikes) */}
                    <section className="flex gap-4 mt-8">
                      <Suspense fallback={"Carregando....."}>
                        <LikeRegister id={product._id} user={user} />
                        {
                          user.name !== undefined &&
                        <Btn
                          url={urlDelLike}
                          handle={handleDeleteLike}
                          icon={
                            <SlDislike
                              size={30}
                              className="text-textos/80 italic"
                            />
                          }
                        />
                        }
                        <p className="bg-principal text-textos2 text-2xl text-center font-semibold w-10 h-10 shadow-xl rounded-full  ">
                          {likes.length}
                        </p>
                        <h4 className="text-textos/80 text-3xl font-semibold  font-Lilita_One ">
                          Likes
                        </h4>
                      </Suspense>
                    </section>
                    <h3 className="text-textos/80 text-base font-semibold  font-Lilita_One mt-4">
                      Descrição.
                    </h3>
                    <p className="text-textos/80 italic mb-1">
                      {product.description}
                    </p>
                    <h3 className="text-textos/80 text-base font-semibold  font-Lilita_One mb-2">
                      Redes Sociais.
                    </h3>
                    <CardRedesSociais/>
                  </section>

                  <section className=" px-4 w-full">
                  <h3 className="text-principal/80 text-xl font-Lilita_One font-black">
                    Paneje seus sonhos.
                    </h3>
                    <p className="text-textos/80 text-sm italic mb-2">
                      Nós te ajudamos a realiza-lo.
                    </p> 
                     <div className="relative w-[260px] h-[205px]">
                     <Image 
                      src={img} 
                      alt="Logo marca da empresa" 
                      fill
                      quality={100}
                    />
                     </div>
                     <CardNavProducts/>
                     <p className="text-textos/80 italic text-justify">
                     Atendemos com excelência toda a região de São Paulo. Oferecemos produtos fabricados em mármore, granitos e diversas outras pedras ornamentais. 
                    </p>      
                  </section>
                </section>
              )}
            </Suspense>
          </div>
          {/* Seção de Comentários */}
          <section className=" bg-white my-8 p-4  rounded-2xl ">
            <h3 className="text-lg text-textos3 font-sansModifi mb-2">
              Deixe seu comentário.
            </h3>
            <Suspense fallback={"Carregando....."}>
              <CommentRegister user={user} id={product._id} />
              <CardComments id={id} user={user || userComments} />
            </Suspense>
          </section>
        </section>
      </main>
    </Container>
  );
}
