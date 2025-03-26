"use client";
//componentes
import { useActionState } from "react";
import React, { Suspense } from "react";
import Link from "next/link";
//meus componentes
import { handleUpdateUser } from "@/app/functions/handleSubmit/handleUpdateUser";
import FetchUploadUser from "@/app/functions/fetch/FetchUploadUser";
import GenericForm from "@/app/(home)/components/form/GenericForm";
import useMessages from "@/app/hooks/useMessages";
import { getFieldsUpdateUser } from "@/app/(home)/components/content/contentForm";
import { BsFillPersonLinesFill } from "react-icons/bs";
import LoadingSuspense from "@/app/(home)/LoadingSuspense";

function UserUpdate({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/users/${id}`;
//busca os dados do usuário
  const { user } = FetchUploadUser(url);

  const [state, dispach] = useActionState(handleUpdateUser, {
    message: [],
    success: "",
  });
  // Faz a validação dos campos do formulário
  useMessages(state); 

  const img = ["image"];
// Evita erro se `user` ainda não foi carregado
  if (!user) return <p>Carregando usuário...</p>; 

  return (
<Suspense fallback={<LoadingSuspense />}>
  <main className="flex justify-center items-center h-screen bg-cover bg-center bg-[url('/assets/form4.jpg')]">
    <section className="flex bg-white/90 rounded-2xl shadow-2xl">
      
      {/* Lado esquerdo: informações e navegação */}
      <aside className="bg-principal w-[30vw] flex flex-col items-center gap-7 rounded-tl-2xl rounded-bl-2xl p-6">
        <BsFillPersonLinesFill size={60} className="text-textos2/90" />
        
        <header className="text-center">
          <h4 className="text-textos2/90 text-xl">Editar Usuários</h4>
          <h3 className="text-textos2/90 text-xl font-black">
            M&A MÁRMORES E GRANITOS
          </h3>
        </header>
        
        <Link
          href="/user"
          className="px-8 py-2 bg-textos2 rounded-lg text-principal font-bold hover:scale-105"
          aria-label="Voltar para a lista de usuários"
        >
          Voltar
        </Link>
      </aside>

      {/* Lado direito: formulário de edição */}
      <article className="w-[30vw] px-6 py-4">
        <GenericForm
          fields={getFieldsUpdateUser(user)}
          formTile="Editar Usuário"
          action={dispach}
          img={img}
          image1={user.image}
          update
        />
      </article>

    </section>
  </main>
</Suspense>

  );
}

export default UserUpdate;
