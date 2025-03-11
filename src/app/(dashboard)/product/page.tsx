import Btn from "@/app/components/buttons/Btn";
import BtnDeleteProducts from "@/app/components/buttons/BtnDeleteProducts";
import Container from "@/app/components/containers/Container";
import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { ProdutoProps } from "@/app/types/produtoTypes";
import { format } from "date-fns/format";
import { ptBR } from "date-fns/locale";
import Image from "next/image";
import { JSX, Suspense } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaRestroom, FaUtensils } from "react-icons/fa";
import { MdEdit, MdOutdoorGrill } from "react-icons/md";
import { PiLadderBold } from "react-icons/pi";
import NavDashboard from "@/app/components/headers/NavDashboard";

export default async function Product() {
  const url = `${process.env.BASE_URL}/products`;
  const urlDel = `${process.env.BASE_URL}/product`;

  const { data: product } = await FetchGet<ProdutoProps[]>(url);

  if (!product || product.length === 0) {
    return (
      <Container>
        <h1>Dashboard</h1>
        <h1>Nenhum Produto Cadastrado</h1>
      </Container>
    );
  }

  const iconMap: Record<string, JSX.Element> = {
    banheiro: <FaRestroom size={24} />,
    cozinha: <FaUtensils size={24} />,
    escadas: <PiLadderBold size={24} />,
    exteriores: <MdOutdoorGrill size={24} />,
  };

  return (
    <div className="grid grid-cols-[1fr_12fr]">
      <aside className="bg-principal text-white  ">
        <NavDashboard />
      </aside>
      <main className="">
        <Suspense fallback={<p>Carregando...</p>}>
          {product && product.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full ">
                <thead className="">
                  <tr className="grid grid-cols-[1fr_3fr_1fr_2fr_2fr] gap-4 text-textos p-3 mb-8 bg-fundo3">
                    <th className=" text-left">Imagem</th>
                    <th className=" text-left">Título</th>
                    <th className=" text-left">Categoria</th>
                    <th className=" text-left">Data</th>
                    <th className=" text-left">Ações</th>
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
                          alt={prod.title}
                          fill
                          quality={100}
                          className="object-cover"
                        />
                      </td>
                      <td className="px-3 flex items-center font-Lilita_One uppercase text-textos font-black hover:bg-fundo3 rounded-md border-b-2">
                        {prod.title}
                      </td>
                      <td className="p-3 flex items-center gap-2 text-principal/80 capitalize font-semibold hover:bg-fundo3 hover:scale-110 rounded-lg border-b-2">
                        <span>{iconMap[prod.category]} </span> {prod.category}
                      </td>
                      <td className="px-3 flex items-center hover:bg-fundo3 rounded-lg border-b-2">
                        {
                          <span className=" italic text-textos/60 ml-3 p-1 ">
                            {prod.createdAt
                              ? format(
                                  new Date(prod.createdAt),
                                  "dd 'de' MMMM 'de' yyyy",
                                  { locale: ptBR }
                                )
                              : "Data não disponível"}
                          </span>
                        }
                      </td>
                      <td className="p-3 flex justify-between border-b-2">
                        <Btn
                          url={`/product/${prod._id}`}
                          icon={
                            <FaCheck size={20} className="text-green-800/80" />
                          }
                        />
                        <Btn
                          url={`/productUpdate/${prod._id}`}
                          icon={
                            <MdEdit size={26} className="text-textos3/60" />
                          }
                        />
                        <BtnDeleteProducts
                          url={`${urlDel}/${prod._id}`}
                          pathToRevalidate="/dashboard"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-500">
              Nenhum Produto Cadastrado
            </p>
          )}
        </Suspense>
      </main>
    </div>
  );
}
