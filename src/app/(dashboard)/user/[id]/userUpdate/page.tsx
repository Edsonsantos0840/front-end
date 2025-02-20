"use client";

import React, { Suspense, useEffect } from "react";
import Container from "@/app/components/containers/Container";
import { handleUpdateUser } from "@/app/functions/handleSubmit/handleUpdateUser";
import FetchUploadUser from "@/app/functions/fetch/FetchUploadUser";
import { useActionState } from "react";
import { toast } from "react-toastify";
import GenericForm, { FieldConfig } from "@/app/components/form/GenericForm";

function UserUpdate({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/users/${id}`;

  const { user } = FetchUploadUser(url);

  const [state, dispach] = useActionState(handleUpdateUser, {
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

  const img = ["image"];

  if (!user) return <p>Carregando usuário...</p>; // Evita erro se `user` ainda não foi carregado

  const fields: FieldConfig[] = [
    {
      type: "hidden",
      name: "_id",
      value: id,
      required: true,
    },
    {
      label: "Nome",
      type: "text",
      name: "name",
      placeholder: "Digite seu Nome",
      required: true,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Digite seu e-mail",
      required: true,
    },
  ];

  return (
    <Container>
      <Suspense fallback="Carregando....">
        <div className="p-8 bg-white rounded-md shadow-md">
          <GenericForm
            fields={fields}
            formTile="Editar Usuário"
            action={dispach}
            img={img}
            image1={user.image}
            update
          />
        </div>
      </Suspense>
    </Container>
  );
}

export default UserUpdate;
