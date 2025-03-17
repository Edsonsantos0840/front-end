//meus componentes
import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { ProdutoProps } from "@/app/types/produtoTypes";
import CardProduct from "./CardProduct";
//componentes
import { Suspense } from "react";
//icons
import { FaShopify } from "react-icons/fa";
import LoadingSuspense from "@/app/(home)/LoadingSuspense";

export default async function CardDashboardProduct() {
  const url = `${process.env.BASE_URL}/products`;
  const { data: product } = await FetchGet<ProdutoProps[]>(url);

  return (
<Suspense fallback={<LoadingSuspense/>}>
  <section className="mx-4 my-2 p-4 bg-fundo2 rounded-2xl text-principal">
    {/* Cabeçalho da seção */}
    <header className="alinha6 gap-10">
      <h2 className="alinha6 gap-2">
        <span className="font-ysabeau font-black text-xl">Produtos</span>
        <FaShopify size={30} className="text-textos" />
      </h2>
    </header>

    {/* Contador de produtos */}
    <p className="flex items-center gap-2 pl-7" aria-live="polite">
      <span className="font-ysabeau font-black text-4xl">
        {product?.length}
      </span>
      <span className="text-textos/80">produtos</span>
    </p>

    {/* Lista de produtos */}
    {product && (
      <ul className="mt-4">
        <CardProduct product={product} />
      </ul>
    )}
  </section>
</Suspense>

  );
}
