import Btn from "@/app/components/buttons/Btn";
import BtnDeleteProducts from "@/app/components/buttons/BtnDeleteProducts";
import Container from "@/app/components/containers/Container";
import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { ProdutoProps } from "@/app/types/produtoTypes";
import Image from "next/image";
import { Suspense } from "react";
import { AiFillEdit } from "react-icons/ai";
import { GrView } from "react-icons/gr";

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
  const dataFormatada = new Date(product[0].createdAt).toLocaleDateString(
    "pt-BR"
  );

  return (
    <Container>
      <h1>Dashboard</h1>
      <main className="px-6 space-y-4">
        <Suspense fallback={"carregando..."}>
          {product ? (
            product.map((prod) => (
              <article
                key={prod._id}
                className="flex justify-between flex-wrap items-end gap-5 relative overflow-hidden border-b-[.7px] border-black/10 p-1"
              >
                <figure className="relative w-16 h-16 bg-cover object-cover">
                  <Image
                    src={prod.image1}
                    alt={prod.title}
                    fill
                    quality={100}
                    className="bg-cover object-cover"
                  />
                </figure>
                <section className="flex items-end gap-5 w-[60%]">
                  <h3 className="text-left w-[55%]">{prod.title}</h3>
                  <p className="text-left w-[15%]">{dataFormatada}</p>
                  <p className="text-left w-[30%]">
                    <strong>Categoria: </strong>
                    {prod.category}
                  </p>
                </section>
                <div className="flex justify-between items-end gap-5">
                  <Btn
                    url={`/product/${prod._id}`}
                    icon={<GrView size={20} />}
                  />
                  <Btn
                    url={`/productUpdate/${prod._id}`}
                    icon={<AiFillEdit size={20} />}
                  />
                  <BtnDeleteProducts
                    url={`${urlDel}/${prod._id}`}
                    pathToRevalidate="/dashboard"
                  />
                </div>
              </article>
            ))
          ) : (
            <h1>Nenhum Produto Cadastrado</h1>
          )}
        </Suspense>
      </main>
    </Container>
  );
}
