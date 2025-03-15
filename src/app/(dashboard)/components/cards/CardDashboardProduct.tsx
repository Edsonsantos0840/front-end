import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { ProdutoProps } from "@/app/types/produtoTypes";
import { Suspense } from "react";
import { FaShopify } from "react-icons/fa";
import CardProduct from "../../../(home)/components/cards/CardProduct";

export default async function CardDashboardProduct() {
  const url = `${process.env.BASE_URL}/products`;
  const { data: product } = await FetchGet<ProdutoProps[]>(url);

  return (
    <Suspense fallback="Carregando.....">
      <section className="mx-4 my-2 p-4 bg-fundo2 rounded-2xl text-principal  ">
        <div className="alinha6  gap-10">
          <h2 className="alinha6 gap-2 ">
            <span className="font-ysabeau font-black text-xl ">
              produtos
            </span>
            <FaShopify size={30} className="text-textos" />
          </h2>
          <h3 className="flex items-center gap-2 pl-7">
            <span className="font-ysabeau font-black text-4xl ">
              {product?.length}
            </span>
            <span className="text-textos/80">produtos</span>
          </h3>
        </div>
        {product && <CardProduct product={product} />}
      </section>
    </Suspense>
  );
}
