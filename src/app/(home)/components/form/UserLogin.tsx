"use client";
//meus componentes
import { LoginSubmit } from "@/app/functions/handleSubmit/HandleLogin";
import GenericForm from "./GenericForm";
import { CardLoginRegister } from "../cards/CardRegisterLogin";
import { fieldsLogin } from "../content/contentForm";
//componentes
import Link from "next/link";
import { useActionState } from "react";
//icons
import { IoIosLogIn } from "react-icons/io";

export default function UserLogin() {
  // const route = useRouter()
  const [state, dispach] = useActionState(LoginSubmit, {
    message: [],
    success: "",
  });

  console.log(state);
  return (
    <main className="alinha6 gap-4 bg-cover bg-center px-2 bg-[url('/assets/1086.jpg')] h-screen lg:h-[100vh] w-full">
    <div className="flex bg-white/90 rounded-2xl shadow-2xl w-full lg:w-[60vw]">
      
      <aside className="bg-principal md:w-[35vw] w-[30vw] hidden md:flex flex-col justify-center items-center gap-7 rounded-tl-2xl rounded-bl-2xl px-2 py-16">
        <IoIosLogIn size={100} className="text-textos2/90" />
        <div>
          <h4 className="text-textos2/90 text-xl">Cadastrar Usuários</h4>
        </div>
        <h3 className="text-textos2/90 text-center text-xl font-black">
          M&A MÁRMORES E GRANITOS
        </h3>
        <Link
          href={"/"}
          className="px-8 py-2 bg-textos2 rounded-lg text-principal font-bold hover:scale-105"
        >
          Voltar
        </Link>
      </aside>
  
      <section className="w-full md:w-[65vw] lg:w-[40vw] px-0 md:px-6 py-16">
        {/* formulário genérico */}
        <GenericForm
          fields={fieldsLogin}
          formTile="Login."
          action={dispach}
        />
        {/* redireciona o usuário para o cadastro */}
        <CardLoginRegister />
      </section>
    </div>
  </main>
  
  );
}
