'use client'
import Link from "next/link";
import Container from "../containers/Container";

import { useActionState } from "react";
import { RegisterSubmit } from "@/app/functions/handleSubmit/HandleRegister";
import { MdImageSearch } from "react-icons/md";


function UserRegister() {
  const [state, dispach] = useActionState(RegisterSubmit, {
     errors: [],
     success: ''
   })

  return (
    <Container>
        <h1 className="text-2xl text-center font-bold mb-6">Cadastro</h1>

       <p>{state.success}</p>

       {state.errors.map(err => (
        <div key={err} className="w-80 text-center bg-red-100 border-[1px] p-2 border-red-600 text-red-600 m-auto my-2 rounded-lg" >
          <p>{err}</p>
        </div>
       ))}

      <form action={dispach} className="flex flex-col p-8 bg-white rounded-md shadow-md space-y-2">
       <label className="font-medium">
         Name:
        <input 
          type="name" 
          name="name" 
          placeholder="Digite seu Nome"
          className="border border-gray-300 rounded-md p-1 w-full"
        />
       </label>
       <label className="font-medium">
         E-mail:
        <input 
          type="email" 
          name="email" 
          placeholder="Digite seu e-mail"
          className="border border-gray-300 rounded-md p-1 w-full"
        />
       </label>
       <label className="font-medium">
        Password:
        <input 
          type="password" 
          name="password" 
          placeholder="Digite sua Senha"
          className="border border-gray-300 rounded-md p-1 w-full"
        />
       </label>
       <label className="font-medium">
        Confirmar:
        <input 
          type="password" 
          name="confirmPass" 
          placeholder="Confirme a Senha"
          className="border border-gray-300 rounded-md p-1 w-full"
        />
       </label>
       <label
         className="cursor-pointer border-dashed border-[1px] border-[#b91c1c]/15 alinha6 text-sm my-5 hover:scale-105"
       >
        <input
          type="file"
          name={`image`}
          className="hidden"
        />
        <MdImageSearch size={100} color="#b91c1c54" />
         
       </label>
       <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
      >
        Enviar
      </button>

      </form>
      <div className="flex justify-center gap-5 items-center mt-6">
        <p className=" ">Já Possui Cadastro?</p>
        <Link
          href={"/login"}
          className="text-2xl md:text-3xl lg:text-xl text-[var(--corTextos)] hover:scale-105 hover:underline hover:underline-offset-4 "
        >
          Faça Login.
        </Link>
      </div>
    </Container>
  );
}
export default UserRegister;
