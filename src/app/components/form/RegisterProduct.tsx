'use client'
import Container from "../containers/Container";

import { useActionState } from "react";
import { MdImageSearch } from "react-icons/md";
import { RegisterProductSubmit } from "@/app/functions/handleSubmit/HandleProductSubmit";


function ProductRegister() {
  const [state, dispach] = useActionState(RegisterProductSubmit, {
     errors: [],
     success: ''
   })

   const category = ['banheiro','cozinha','escadas','exteriores']
   const img = ['image1','image2','image3','image4']

   const sele = category.map(item => (
     <option key={item} value={item}>{item}</option>
   ))

   const images = img.map(image => (
         <label key={image}
         className="cursor-pointer border-dashed border-[1px] border-[#b91c1c]/15 alinha6 text-sm my-5 hover:scale-105"
       >
        <input
          type="file"
          name={image}
          className="hidden"
        />
        <MdImageSearch size={100} color="#b91c1c54" />
       </label>
   ))


  return (
    <Container>
        <h1 className="text-2xl text-center font-bold mb-6">Cadastro de produtos</h1>

       <p>{state.success}</p>

       {state.errors.map(err => (
        <div key={err} className="w-80 text-center bg-red-100 border-[1px] p-2 border-red-600 text-red-600 m-auto my-2 rounded-lg" >
          <p>{err}</p>
        </div>
       ))}

      <form action={dispach} className="flex flex-col p-8 bg-white rounded-md shadow-md space-y-2">
       <label className="font-medium">
         Título:
        <input 
          type="text" 
          name="title" 
          placeholder="Digite o título do produto"
          className="border border-gray-300 rounded-md p-1 w-full"
        />
       </label>
       <label className="font-medium">
         Categoria:
        <select 
          name="category" 
          className="border border-gray-300 rounded-md p-1 w-full"
        >
            <option value="">----Selecione uma categoria----</option>
            {sele}
        </select>
       </label>
        <div className="flex justify-center items-center gap-10">
         {images}
        </div>

       <label className="font-medium">
        Descrição
        <input
          type="text" 
          name="description" 
          placeholder="Descreva o produto"
          className="border border-gray-300 rounded-md py-4 w-full"
        />
       </label>
       <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
      >
        Enviar
      </button>

      </form>

    </Container>
  );
}
export default ProductRegister;
