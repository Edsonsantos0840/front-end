"use client";
//componentes
import Link from "next/link";
import { useActionState } from "react";
// meus componetes
import { RegisterProductSubmit } from "@/app/functions/handleSubmit/HandleProductSubmit";
import GenericForm from "../../../(home)/components/form/GenericForm";
import useMessages from "@/app/hooks/useMessages";
import { fieldsProducts } from "../../../(home)/components/content/contentForm";
//icons
import { FaShopify } from "react-icons/fa";

function ProductRegister() {
  const [state, dispach] = useActionState(RegisterProductSubmit, {
    message: [],
    success: "",
  });

  const img = ["image1", "image2", "image3", "image4"];
 // Faz a validação dos campos do formulário
  useMessages(state); 

  return (
    <main className="alinha6 py-6 gap-4 w-full bg-cover h-screen bg-center bg-[url('/assets/1086.jpg')] ">
    <section className="flex bg-white/90 rounded-2xl shadow-2xl">
      <div className="bg-principal w-[25vw] alinha2 gap-7 rounded-tl-2xl rounded-bl-2xl">
        {/* Ícone da Shopify com alt para acessibilidade */}
        <FaShopify size={100} className="text-textos2/90"  />
  
        <div>
          {/* Título secundário */}
          <h4 className="text-textos2/90 text-xl">Cadastrar Produtos</h4>
        </div>
  
        {/* Título principal  */}
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
      </div>
  
      <section className="w-[40vw] px-6 lg:px-0 py-2">
        {/* Formulário para cadastrar um produto */}
        <GenericForm
          fields={fieldsProducts}
          formTile="Cadastrar Produto"
          action={dispach}
          img={img}
        />
      </section>
    </section>
  </main>
  
  );
}

export default ProductRegister;
