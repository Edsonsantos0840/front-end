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
    <main className="flex justify-center items-center gap-4 bg-cover bg-center  px-2 bg-[url('/assets/form4.jpg')] h-screen lg:h-[100vh] w-full ">
    <div className=" flex  bg-white/90  rounded-2xl shadow-2xl w-full lg:w-[60vw] ">
      <div className="bg-principal md:w-[35vw] w-[30vw] hidden md:flex flex-col justify-center items-center gap-7 rounded-tl-2xl rounded-bl-2xl px-2 py-16">
        <IoIosLogIn size={100} className="text-textos2/90" />
        <div>
          <h4 className="text-textos2/90 text-xl ">Cadastrar Usuários</h4>
        </div>
        <h3 className="text-textos2/90 text-center text-xl font-black">
          M&A MÁRMORES E GRANITOS
        </h3>
        <Link href={'/'} className="px-8 py-2 bg-textos2 rounded-lg text-principal font-bold hover:scale-105" >Voltar</Link>
      </div>
      <div className="w-full md:w-[65vw] lg:w-[40vw] px-0 md:px-6 py-16" >
      <GenericForm fields={fieldsLogin} formTile="Login." action={dispach} />
        <CardLoginRegister />
      </div>
    </div>
  </main>

  );
}
