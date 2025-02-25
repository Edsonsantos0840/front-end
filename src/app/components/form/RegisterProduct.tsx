"use client";
import Container from "../containers/Container";

import { useActionState} from "react";
import { RegisterProductSubmit } from "@/app/functions/handleSubmit/HandleProductSubmit";

import GenericForm from "./GenericForm";
import useMessages from "@/app/hooks/useMessages";
import { fieldsProducts } from "../content/contentForm";

function ProductRegister() {
  const [state, dispach] = useActionState(RegisterProductSubmit, {
    message: [],
    success: "",
  });

  const img = ["image1", "image2", "image3", "image4"];

  useMessages(state); // Faz a validação dos campos do formulário

  return (
    <Container>
      <main className="p-8 bg-white rounded-md shadow-md">
        <GenericForm
          fields={fieldsProducts}
          formTile="Cadastrar Produto"
          action={dispach}
          img={img}
        />
      </main>
    </Container>
  );
}

export default ProductRegister;
