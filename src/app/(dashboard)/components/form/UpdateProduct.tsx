"use client";
import { UploadProductSubmit } from "@/app/functions/handleSubmit/HandleUpdateProduct";
import { useActionState } from "react";
import FetchUploadProducts from "@/app/functions/fetch/FetchUploadProducts";
import GenericForm from "../../../(home)/components/form/GenericForm";
import useMessages from "@/app/hooks/useMessages";
import { getFieldsUpdateProduct } from "../../../(home)/components/content/contentForm";
import Link from "next/link";
import { FaShopify } from "react-icons/fa";

function ProductUpdate({ updateId }: { updateId: string }) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/products/${updateId}`;
  const { updateProduct } = FetchUploadProducts(url);

  const [state, dispach] = useActionState(UploadProductSubmit, {
    message: [],
    success: "",
  });

  const img = ["image1", "image2", "image3", "image4"];

  useMessages(state); // Faz a validação dos campos do formulário

  if (updateProduct)
    return (
      <main className="flex justify-center items-center py-6 gap-4 w-full h-screen bg-cover bg-center bg-[url('/assets/form4.jpg')] ">
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
              fields={getFieldsUpdateProduct(updateId)}
              formTile="Editar Produto"
              action={dispach}
              update
              img={img}
              image1={updateProduct.image1}
              image2={updateProduct.image2}
              image3={updateProduct.image3}
              image4={updateProduct.image4}
            />
          </div>
        </div>
      </main>
    );
}
export default ProductUpdate;
