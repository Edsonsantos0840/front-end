"use client";
//componentes
import Link from "next/link";
import { Suspense, useActionState } from "react";
//meus componentes
import { RegisterSubmit } from "@/app/functions/handleSubmit/HandleRegister";
import GenericForm from "../../../(home)/components/form/GenericForm";
import CardRegisterLogin from "../../../(home)/components/cards/CardRegisterLogin";
import useMessages from "../../../hooks/useMessages";
import { fieldsUser } from "../../../(home)/components/content/contentForm";
import { BsFillPersonLinesFill } from "react-icons/bs";

function UserRegister() {
  const [state, dispach] = useActionState(RegisterSubmit, {
    message: [],
    success: "",
  });
// Faz a validação dos campos do formulário
  useMessages(state); 

  const img = ["image"];

  return (
    <main className="alinha6 gap-4 bg-cover bg-center py-6 px-2 bg-[url('/assets/1086.jpg')] h-screen lg:h-auto w-full ">
      <Suspense fallback={<div>Carregando...</div>}>
      
    <div className="flex bg-white/90 rounded-2xl shadow-2xl w-full lg:w-[60vw]">
      
      {/* Área de informações do formulário (lateral esquerda) */}
      <section className="bg-principal md:w-[35vw] w-[30vw] hidden md:flex flex-col justify-center items-center gap-7 rounded-tl-2xl rounded-bl-2xl px-2">
        <BsFillPersonLinesFill size={100} className="text-textos2/90" />
  
        <div>
          <h4 className="text-textos2/90 text-xl">Cadastrar Usuários</h4>
        </div>
        
        {/* Título Principal - Useh1 ou h2 dependendo da hierarquia */}
        <h2 className="text-textos2/90 text-xl font-black text-center">
          M&A MÁRMORES E GRANITOS
        </h2>
  
        {/* Link de navegação com aria-label para melhorar a acessibilidade */}
        <Link
          href={"/"}
          className="px-8 py-2 bg-textos2 rounded-lg text-principal font-bold hover:scale-105"
          aria-label="Voltar para a página inicial"
        >
          Voltar
        </Link>
      </section>
  
      {/* Formulário para cadastrar um usuário */}
      <section className="w-full md:w-[65vw] lg:w-[30vw] px-0 md:px-6 py-2">
        <GenericForm
          fields={fieldsUser}
          formTile="Cadastrar Usuário"
          action={dispach}
          img={img}
        />
  
        {/* Redirecionamento para o login, contextualizando o uso de um card de login */}
        <CardRegisterLogin />
      </section>
    </div>
      </Suspense>
  </main>
  
  );
}
export default UserRegister;
