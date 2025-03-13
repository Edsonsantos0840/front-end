"use client";

import { useActionState } from "react";
import { RegisterProductSubmit } from "@/app/functions/handleSubmit/HandleProductSubmit";

import GenericForm from "../../../(home)/components/form/GenericForm";
import useMessages from "@/app/hooks/useMessages";
import { fieldsProducts } from "../../../(home)/components/content/contentForm";
import Link from "next/link";
import { FaShopify } from "react-icons/fa";

function ProductRegister() {
  const [state, dispach] = useActionState(RegisterProductSubmit, {
    message: [],
    success: "",
  });

  const img = ["image1", "image2", "image3", "image4"];

  useMessages(state); // Faz a validação dos campos do formulário

  return (
    <main className="flex justify-center items-center py-6 gap-4 w-full bg-cover h-screen bg-center bg-[url('/assets/form4.jpg')] ">
      <div className=" flex  bg-white/90  rounded-2xl shadow-2xl ">
        <div className="bg-principal w-[25vw] flex flex-col justify-center items-center gap-7 rounded-tl-2xl rounded-bl-2xl">
          <FaShopify size={100} className="text-textos2/90" />
          <div>
            <h4 className="text-textos2/90 text-xl ">Editar Produtos</h4>
          </div>
          <h3 className="text-textos2/90 text-xl font-black">
            M&A MÁRMORES E GRANITOS
          </h3>
          <Link
            href={"/product"}
            className="px-8 py-2 bg-textos2 rounded-lg text-principal font-bold hover:scale-105"
          >
            Voltar
          </Link>
        </div>
        <div className="w-[40vw] px-6 py-2">
          <GenericForm
            fields={fieldsProducts}
            formTile="Cadastrar Produto"
            action={dispach}
            img={img}
          />
        </div>
      </div>
    </main>
  );
}

export default ProductRegister;
