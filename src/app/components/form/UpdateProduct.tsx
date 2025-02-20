"use client";
import Container from "../containers/Container";
import { UploadProductSubmit } from "@/app/functions/handleSubmit/HandleUpdateProduct";
import { Suspense, useActionState, useEffect } from "react";
import FetchUploadProducts from "@/app/functions/fetch/FetchUploadProducts";
import { toast } from "react-toastify";
import GenericForm, { FieldConfig } from "./GenericForm";

function ProductUpdate({ updateId }: { updateId: string }) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/products/${updateId}`;
  const { updateProduct } = FetchUploadProducts(url);

  const [state, dispach] = useActionState(UploadProductSubmit, {
    message: [],
    success: "",
  });

  const category = ["banheiro", "cozinha", "escadas", "exteriores"];

  const img = ["image1", "image2", "image3", "image4"];

  useEffect(() => {
    if (state.message) {
      state.message.forEach((error) => {
        toast.error(error);
      });
    }
    if (state.success) {
      toast.success(state.success);
    }
  }, [state]);

    const fields: FieldConfig[] = [
      {
        type: "hidden",
        name: "_id",
        value: updateId,
        required: true,
      },
      {
        label: "Título",
        type: "text",
        name: "title",
        placeholder: "Digite o título do produto",
        required: true,
      },
      {
        label: "Categoria",
        type: "select",
        name: "category",
        options: category,
        required: true,
      },
      {
        label: "Descrição",
        type: "text",
        name: "description",
        placeholder: "Descreva o produto",
        required: true,
      },
    ];
  

  if (updateProduct)
    return (
      <Container>
        <Suspense fallback={"Carregando..."}>
          <div className="p-8 bg-white rounded-md shadow-md">
            <GenericForm
              fields={fields}
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
        </Suspense>
      </Container>
    );
}
export default ProductUpdate;
