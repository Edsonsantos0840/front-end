'use client'
import Link from "next/link";
import Container from "../containers/Container";
// import GenericForm, { FieldConfig } from "./GenericForm";
// import { useRouter } from "next/navigation";
import { LoginSubmit } from "@/app/functions/handleSubmit/HandleLogin";
import { useActionState, useEffect } from "react";

import { toast } from "react-toastify";

export default function UserLogin() {
  // const route = useRouter()
  const [state, dispach] = useActionState(LoginSubmit, {
    errors: [],
    success: ''
  })

  useEffect(() => {
     if(state.errors){
      state.errors.forEach(error => {
        toast.error(error)
      })
     } 
     if(state.success){
      toast.success(state.success)
     }
  },[state])

  return (
    <Container>
       <h1 className="text-2xl text-center font-bold mb-6">Login</h1>
    
      <form action={dispach} className="flex flex-col p-8 bg-white rounded-md shadow-md space-y-2">
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
          placeholder="Digite seu e-mail"
          className="border border-gray-300 rounded-md p-1 w-full"
        />
       </label>
       
       <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
      >
        Enviar
      </button>

      </form>
      {/* <GenericForm
        fields={fields}
        action={dispach}
        qtdImages={0}
        formTile="Login"
      /> */}
      <div className="flex justify-center gap-5 items-center mt-6">
        <p className=" ">Não Possui Cadastro?</p>
        <Link
          href={"/userRegister"}
          className="text-2xl md:text-3xl lg:text-xl text-[var(--corTextos)] hover:scale-105 hover:underline hover:underline-offset-4 "
        >
          Cadastre-se Já.
        </Link>
      </div>
    </Container>
  );
}
