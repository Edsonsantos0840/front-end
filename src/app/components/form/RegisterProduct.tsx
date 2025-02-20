"use client";
import Container from "../containers/Container";

import { useActionState, useEffect } from "react";
import { RegisterProductSubmit } from "@/app/functions/handleSubmit/HandleProductSubmit";
import { toast } from "react-toastify";
import GenericForm, { FieldConfig } from "./GenericForm";

function ProductRegister() {
  const [state, dispach] = useActionState(RegisterProductSubmit, {
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

  return (
    <Container>
      <div className="p-8 bg-white rounded-md shadow-md">
        <GenericForm
          fields={fields}
          formTile="Cadastrar Produto"
          action={dispach}
          img={img}
        />
      </div>
    </Container>
  );
}

export default ProductRegister;
