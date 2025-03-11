"use client";
import { useActionState } from "react";
import { RegisterSubmit } from "@/app/functions/handleSubmit/HandleRegister";
// import { toast } from "react-toastify";
import GenericForm from "./GenericForm";
import CardRegisterLogin from "../cards/CardRegisterLogin";
import useMessages from "../../hooks/useMessages";
import { fieldsUser } from "../content/contentForm";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

function UserRegister() {
  const [state, dispach] = useActionState(RegisterSubmit, {
    message: [],
    success: "",
  });

  useMessages(state); // Faz a validação dos campos do formulário

  const img = ["image"];

  return (
    <main className="flex justify-center items-center gap-4 bg-cover bg-center py-6 px-2 bg-[url('/assets/form4.jpg')] h-screen lg:h-auto w-full ">
    <div className=" flex  bg-white/90  rounded-2xl shadow-2xl w-full lg:w-[60vw] ">
      <div className="bg-principal md:w-[35vw] w-[30vw] hidden md:flex flex-col justify-center items-center gap-7 rounded-tl-2xl rounded-bl-2xl px-2">
        <BsFillPersonLinesFill size={100} className="text-textos2/90" />
        <div>
          <h4 className="text-textos2/90 text-xl ">Cadastrar Usuários</h4>
        </div>
        <h3 className="text-textos2/90 text-xl font-black text-center">
          M&A MÁRMORES E GRANITOS
        </h3>
        <Link href={'/'} className="px-8 py-2 bg-textos2 rounded-lg text-principal font-bold hover:scale-105" >Voltar</Link>
      </div>
      <div className="w-full md:w-[65vw] lg:w-[30vw] px-0 md:px-6 py-2" >
      <GenericForm
          fields={fieldsUser}
          formTile="Cadastrar Usuário"
          action={dispach}
          img={img}
        />
        <CardRegisterLogin />
      </div>
    </div>
  </main>



  );
}
export default UserRegister;
