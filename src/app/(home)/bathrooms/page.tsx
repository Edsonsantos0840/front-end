import Container from "@/app/components/containers/Container";
import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { ProdutoProps } from "@/app/types/produtoTypes";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Bathrooms() {
  const url = `${process.env.BASE_URL}/products/category/banheiro`;
  const { data: product } = await FetchGet<ProdutoProps[]>(url);

  if (!product || product.length === 0) {
    return (
      <Container>
        <h1>Dashboard</h1>
        <h1>Nenhum Produto Cadastrado</h1>
      </Container>
    );
  }

  return (
    <main className="px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <Suspense fallback={"carregando......"}>
        {product ? (
          product.map((prod) => (
            <div
              key={prod._id}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <Link
                href={`/product/${prod._id}`}
                className=""
              >
                <div className="relative w-[230px] h-[190px] bg-cover object-cover transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={prod.image1}
                  alt={prod.title}
                  fill
                  quality={100}
                  className=" rounded-xl"
                />
                </div>
              </Link>
            </div>
          ))
        ) : (
          <h1>Nenhum Produto</h1>
        )}
        </Suspense>
      </div>
    </main>
  );
}
