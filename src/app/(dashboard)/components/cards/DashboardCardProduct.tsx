"use client";
//meus componentes
import Btn from "@/app/(home)/components/buttons/Btn";
import BtnDeleteProducts from "@/app/(dashboard)/components/buttons/BtnDeleteProducts";
import useScroll from "@/app/hooks/useScroll";
import { ProdutoProps } from "@/app/types/produtoTypes";
//componetes bibliotéca
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
//componentes
import Image from "next/image";
import { JSX, Suspense } from "react";
//icons
import { FaRestroom, FaUtensils, FaCheck } from "react-icons/fa";
import { MdOutdoorGrill, MdEdit } from "react-icons/md";
import { PiLadderBold } from "react-icons/pi";

export default function DashboardCardProduct({
  product,
}: {
  product: ProdutoProps[];
}) {
  const urlDel = `https://back-end-marmore.onrender.com/product`;
  //função de scroll
  const { containerRef } = useScroll();
  //lista de icons
  const iconMap: Record<string, JSX.Element> = {
    banheiro: <FaRestroom size={24} />,
    cozinha: <FaUtensils size={24} />,
    escadas: <PiLadderBold size={24} />,
    exteriores: <MdOutdoorGrill size={24} />,
  };

  return (
    <main>
      <Suspense fallback={<p>Carregando...</p>}>
        {product && product.length > 0 ? (
          <section className="overflow-x-auto">
            <div
              ref={containerRef}
              className="overflow-hidden h-screen relative scrollbar-hidden"
            >
              <table className="w-full">
                 {/* Descrição da tabela */}
                <caption className="sr-only">
                  Tabela de produtos cadastrados
                </caption>
                <thead>
                  <tr className="grid grid-cols-[1fr_3fr_1fr_2fr_2fr] gap-4 text-textos p-3 mb-8 bg-fundo3">
                    <th scope="col" className="text-left">
                      Imagem
                    </th>
                    <th scope="col" className="text-left">
                      Título
                    </th>
                    <th scope="col" className="text-left">
                      Categoria
                    </th>
                    <th scope="col" className="text-left">
                      Data
                    </th>
                    <th scope="col" className="text-left">
                      Ações
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((prod) => (
                    <tr
                      key={prod._id}
                      className="grid grid-cols-[1fr_3fr_1fr_2fr_2fr] gap-4 rounded-md mb-4 px-4"
                    >
                      <td className="px-3 w-16 h-16 relative rounded-md overflow-hidden hover:bg-fundo3">
                        <Image
                          src={prod.image1}
                          alt={`Imagem do produto ${prod.title}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          quality={100}
                          className="object-cover"
                        />
                      </td>
                      <td className="px-3 flex items-center uppercase text-textos font-black hover:bg-fundo3 rounded-md border-b-2">
                        {prod.title}
                      </td>
                      <td className="p-3 flex items-center gap-2 text-principal/80 capitalize font-semibold hover:bg-fundo3 hover:scale-110 rounded-lg border-b-2">
                        <span>{iconMap[prod.category]} </span> {prod.category}
                      </td>
                      <td className="px-3 flex items-center hover:bg-fundo3 rounded-lg border-b-2">
                        <span className="italic text-textos/60 ml-3 p-1">
                          {prod.createdAt
                            ? format(
                                new Date(prod.createdAt),
                                "dd 'de' MMMM 'de' yyyy",
                                { locale: ptBR }
                              )
                            : "Data não disponível"}
                        </span>
                      </td>
                      <td className="p-3 flex justify-between border-b-2">
                        {/* Descrição do botão */}
                        <Btn
                          url={`/product/${prod._id}`}
                          icon={
                            <FaCheck size={20} className="text-green-800/80" />
                          }
                          aria-label={`Ver detalhes do produto ${prod.title}`}
                        />
                        {/* Descrição do botão */}
                        <Btn
                          url={`/productUpdate/${prod._id}`}
                          icon={
                            <MdEdit size={26} className="text-textos3/60" />
                          }
                          aria-label={`Editar produto ${prod.title}`}
                        />
                        {/* Descrição do botão */}
                        <BtnDeleteProducts
                          url={`${urlDel}/${prod._id}`}
                          pathToRevalidate="/dashboard"
                          aria-label={`Excluir produto ${prod.title}`}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : (
          <p className="text-center text-gray-500">Nenhum Produto Cadastrado</p>
        )}
      </Suspense>
    </main>
  );
}
