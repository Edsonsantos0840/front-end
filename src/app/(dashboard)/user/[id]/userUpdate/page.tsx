"use client";

import React, { Suspense} from "react";
import Container from "@/app/components/containers/Container";
import { handleUpdateUser } from "@/app/functions/handleSubmit/handleUpdateUser";
import FetchUploadUser from "@/app/functions/fetch/FetchUploadUser";
import { useActionState } from "react";
import GenericForm from "@/app/components/form/GenericForm";
import useMessages from "@/app/hooks/useMessages";
import { getFieldsUpdateUser } from "@/app/components/content/contentForm";

function UserUpdate({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/users/${id}`;

  const { user } = FetchUploadUser(url);

  const [state, dispach] = useActionState(handleUpdateUser, {
    message: [],
    success: "",
  });

useMessages(state); // Faz a validação dos campos do formulário


  const img = ["image"];

  if (!user) return <p>Carregando usuário...</p>; // Evita erro se `user` ainda não foi carregado

  return (
    <Container>
      <Suspense fallback="Carregando....">
        <main className="p-8 bg-white rounded-md shadow-md">
          <GenericForm
            fields={getFieldsUpdateUser(id)}
            formTile="Editar Usuário"
            action={dispach}
            img={img}
            image1={user.image}
            update
          />
        </main>
      </Suspense>
    </Container>
  );
}

export default UserUpdate;
