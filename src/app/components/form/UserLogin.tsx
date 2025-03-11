"use client";
import { LoginSubmit } from "@/app/functions/handleSubmit/HandleLogin";
import { useActionState } from "react";
import GenericForm from "./GenericForm";
import {CardLoginRegister} from "../cards/CardRegisterLogin";
import { fieldsLogin } from "../content/contentForm";
import Link from "next/link";
import { IoIosLogIn } from "react-icons/io";

export default function UserLogin() {
  // const route = useRouter()
  const [state, dispach] = useActionState(LoginSubmit, {
    message: [],
    success: "",
  });

  console.log(state)
  return (
    <main className="flex justify-center items-center gap-4 bg-cover bg-center h-screen py-6 bg-[url('/assets/form4.jpg')] ">
    <div className=" flex  bg-white/90  rounded-2xl shadow-2xl h-full">
      <div className="bg-principal w-[30vw] flex flex-col justify-center items-center gap-7 rounded-tl-2xl rounded-bl-2xl">
        <IoIosLogIn size={100} className="text-textos2/90" />
        <div>
          <h4 className="text-textos2/90 text-xl ">Cadastrar Usuários</h4>
        </div>
        <h3 className="text-textos2/90 text-xl font-black">
          M&A MÁRMORES E GRANITOS
        </h3>
        <Link href={'/'} className="px-8 py-2 bg-textos2 rounded-lg text-principal font-bold hover:scale-105" >Voltar</Link>
      </div>
      <div className="w-[30vw] px-6 py-2" >
      <GenericForm fields={fieldsLogin} formTile="Login." action={dispach} />
        <CardLoginRegister />
      </div>
    </div>
  </main>

  );
}
