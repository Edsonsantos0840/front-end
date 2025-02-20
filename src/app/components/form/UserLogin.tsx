"use client";
import Container from "../containers/Container";
import { LoginSubmit } from "@/app/functions/handleSubmit/HandleLogin";
import { useActionState, useEffect } from "react";

import { toast } from "react-toastify";
import GenericForm, { FieldConfig } from "./GenericForm";
import CardRegisterLogin from "../cards/CardRegisterLogin";

export default function UserLogin() {
  // const route = useRouter()
  const [state, dispach] = useActionState(LoginSubmit, {
    errors: [],
    success: "",
  });

  useEffect(() => {
    if (state.errors) {
      state.errors.forEach((error) => {
        toast.error(error);
      });
    }
    if (state.success) {
      toast.success(state.success);
    }
  }, [state]);

  const fields: FieldConfig[] = [
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
  ];

  return (
    <Container>
      <div className="p-8 bg-white rounded-md shadow-md">
        <GenericForm fields={fields} formTile="Login." action={dispach} />
      </div>
      <CardRegisterLogin/>
    </Container>
  );
}
