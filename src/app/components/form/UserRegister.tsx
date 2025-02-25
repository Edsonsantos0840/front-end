"use client";
import Container from "../containers/Container";
import { useActionState } from "react";
import { RegisterSubmit } from "@/app/functions/handleSubmit/HandleRegister";
// import { toast } from "react-toastify";
import GenericForm from "./GenericForm";
import CardRegisterLogin from "../cards/CardRegisterLogin";
import useMessages from "../../hooks/useMessages";
import { fieldsUser } from "../content/contentForm";

function UserRegister() {
  const [state, dispach] = useActionState(RegisterSubmit, {
    message: [],
    success: "",
  });

  useMessages(state); // Faz a validação dos campos do formulário

  const img = ["image"];

  return (
    <Container>
      <main className="p-8 bg-white rounded-md shadow-md">
        <GenericForm
          fields={fieldsUser}
          formTile="Cadastrar Usuário"
          action={dispach}
          img={img}
        />
      </main>
      <CardRegisterLogin />
    </Container>
  );
}
export default UserRegister;
