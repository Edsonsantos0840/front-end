"use client";
//meus componentes
import { UploadProductSubmit } from "@/app/functions/handleSubmit/HandleUpdateProduct";
import { useActionState } from "react";
import FetchUploadProducts from "@/app/functions/fetch/FetchUploadProducts";
import GenericForm from "../../../(home)/components/form/GenericForm";
import useMessages from "@/app/hooks/useMessages";
import { getFieldsUpdateProduct } from "../../../(home)/components/content/contentForm";
// componentes
import Link from "next/link";
//icons
import { FaShopify } from "react-icons/fa";

function ProductUpdate({ updateId }: { updateId: string }) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/products/${updateId}`;
  //busca os dados do produto
  const { updateProduct } = FetchUploadProducts(url);

  const [state, dispach] = useActionState(UploadProductSubmit, {
    message: [],
    success: "",
  });

  const img = ["image1", "image2", "image3", "image4"];
// Faz a validação dos campos do formulário
  useMessages(state); 

  if (updateProduct)
    return (
      <main className="alinha6 py-6 gap-4 w-full h-screen bg-cover bg-center bg-[url('/assets/wallpaperRed.jpg')]">
      <div className="flex bg-white/90 rounded-2xl shadow-2xl">
        <header className="bg-principal w-[25vw] alinha2 gap-3 rounded-tl-2xl rounded-bl-2xl">
          {/* Ícone da Shopify com alt para acessibilidade */}
          <FaShopify size={100} className="text-textos2/90" aria-hidden="true" />
    
          <div>
            {/* Título secundário */}
            <h2 className="text-textos2/90 text-xl">Editar Produtos</h2>
          </div>
    
          {/* Título principal */}
          <h1 className="text-textos2/90 text-xl font-black">
            M&A MÁRMORES E GRANITOS
          </h1>
    
          {/* Link com aria-label para acessibilidade */}
          <Link
            href="/product"
            className="px-8 py-2 bg-textos2 rounded-lg text-principal font-bold hover:scale-105"
            aria-label="Voltar para a lista de produtos"
          >
            Voltar
          </Link>
        </header>
    
        <section className="w-[40vw] px-6 py-2">
          {/* Formulário para editar o produto */}
          <GenericForm
            fields={getFieldsUpdateProduct(updateId, updateProduct )}
            formTile="Editar Produto"
            action={dispach}
            update
            img={img}
            image1={updateProduct.image1}
            image2={updateProduct.image2}
            image3={updateProduct.image3}
            image4={updateProduct.image4}
          />
        </section>
      </div>
    </main>
    
    );
}
export default ProductUpdate;
