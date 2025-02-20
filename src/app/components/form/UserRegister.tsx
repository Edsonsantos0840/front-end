"use client";
import Container from "../containers/Container";
import { useActionState, useEffect } from "react";
import { RegisterSubmit } from "@/app/functions/handleSubmit/HandleRegister";
import { toast } from "react-toastify";
import GenericForm, { FieldConfig } from "./GenericForm";
import CardRegisterLogin from "../cards/CardRegisterLogin";

function UserRegister() {
  const [state, dispach] = useActionState(RegisterSubmit, {
    message: [],
    success: "",
  });

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
        label: "Nome",
        type: "text",
        name: "name",
        placeholder: "Digite seu Nome",
        required: true,
      },
      {
        label: "E-mail",
        type: "email",
        name: "email",
        placeholder: "Digite seu e-mail",
        required: true,
      },
      {
        label: "Senha",
        type: "password",
        name: "password",
        placeholder: "Digite sua senha",
        required: true,
      },
      {
        label: "Confirmar:",
        type: "password",
        name: "confirmPass",
        placeholder: "Confirme a Senha",
        required: true,
      },
    ];
    const img = ["image"];

  return (
    <Container>
       <div className="p-8 bg-white rounded-md shadow-md">
         <GenericForm fields={fields} formTile="Cadastrar Usuário" action={dispach} img={img}  />
       </div>
       <CardRegisterLogin/>

    </Container>
  );
}
export default UserRegister;
