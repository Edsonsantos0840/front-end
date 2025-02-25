"use client";
import Container from "../containers/Container";
import { UploadProductSubmit } from "@/app/functions/handleSubmit/HandleUpdateProduct";
import { Suspense, useActionState } from "react";
import FetchUploadProducts from "@/app/functions/fetch/FetchUploadProducts";
import GenericForm from "./GenericForm";
import useMessages from "@/app/hooks/useMessages";
import { getFieldsUpdateProduct } from "../content/contentForm";

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
      <Container>
        <Suspense fallback={"Carregando..."}>
          <main className="p-8 bg-white rounded-md shadow-md">
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
          </main>
        </Suspense>
      </Container>
    );
}
export default ProductUpdate;
