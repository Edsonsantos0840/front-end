"use client";
import Container from "../containers/Container";
import { LoginSubmit } from "@/app/functions/handleSubmit/HandleLogin";
import { useActionState } from "react";
import GenericForm from "./GenericForm";
import CardRegisterLogin from "../cards/CardRegisterLogin";
import useMessages from "../../hooks/useMessages";
import { fieldsLogin } from "../content/contentForm";

export default function UserLogin() {
  // const route = useRouter()
  const [state, dispach] = useActionState(LoginSubmit, {
    message: [],
    success: "",
  });

  useMessages(state); // Faz a validação dos campos do formulário

  return (
    <Container>
      <main className="p-8 bg-white rounded-md shadow-md">
        <GenericForm fields={fieldsLogin} formTile="Login." action={dispach} />
      </main>
      <CardRegisterLogin />
    </Container>
  );
}
