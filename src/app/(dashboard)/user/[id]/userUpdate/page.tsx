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
    <Suspense fallback="Carregando....">
      <main className="alinha6 gap-4 h-screen bg-cover bg-center bg-[url('/assets/form4.jpg')] ">
        <div className=" flex  bg-white/90  rounded-2xl shadow-2xl">
          <div className="bg-principal w-[30vw] alinha2 gap-7 rounded-tl-2xl rounded-bl-2xl">
            <BsFillPersonLinesFill size={60} className="text-textos2/90" />
            <div>
              <h4 className="text-textos2/90 text-xl ">Editar Usuários</h4>
            </div>
            <h3 className="text-textos2/90 text-xl font-black">
              M&A MÁRMORES E GRANITOS
            </h3>
            <Link
              href={"/user"}
              className="px-8 py-2 bg-textos2 rounded-lg text-principal font-bold hover:scale-105"
            >
              Voltar
            </Link>
          </div>
          <div className="w-[30vw] px-6 py-2">
            {/* formulário genérico */}
            <GenericForm
              fields={getFieldsUpdateUser(id)}
              formTile="Editar Usuário"
              action={dispach}
              img={img}
              image1={user.image}
              update
            />
          </div>
        </div>
      </main>
    </Suspense>
  );
}

export default UserUpdate;
