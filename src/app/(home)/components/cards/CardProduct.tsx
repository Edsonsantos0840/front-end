"use client";
//meus componentes
import useScroll from "@/app/hooks/useScroll";
import { ProdutoProps } from "@/app/types/produtoTypes";
//componentes
import Image from "next/image";

export default function CardProduct({ product }: { product: ProdutoProps[] }) {
  //função de scroll
  const { containerRef } = useScroll();
  return (
    <>
      {product && product.length > 0 ? (
        <article className="overflow-x-auto mt-4 py-2 rounded-md">
          <div
            ref={containerRef}
            className="overflow-hidden h-40 relative  scrollbar-hidden"
          >
            <ul>
              {product.map((prod) => (
                <div
                  key={prod._id}
                  className="grid grid-cols-[auto_3fr_auto_auto_1fr] gap-4 rounded-md mb-1 px-4 hover:bg-fundo3"
                >
                  <li className="px-3 w-10 h-10 relative rounded-md overflow-hidden">
                    <Image
                      src={prod.image1}
                      alt={prod.title}
                      fill
                      quality={100}
                      className="object-cover"
                    />
                  </li>
                  <li className="px-3 flex items-center font-ysabeau text-textos rounded-md capitalize ">
                    {prod.title}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </article>
      ) : (
        <p className="text-center text-gray-500">Nenhum Produto Cadastrado</p>
      )}
    </>
  );
}
