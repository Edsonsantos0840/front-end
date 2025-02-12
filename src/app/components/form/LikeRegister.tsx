
import { Block } from "@/app/middleware/blockedPage";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { SlLike } from "react-icons/sl";

export default async function LikeRegister({id}: {id: string}) {
    const _id = id
    const url = `${process.env.BASE_URL}/product/likes`;

   async function likesSubmit(formData: FormData) {
    'use server'

      const token = (await cookies()).get("MA_MARMORE")?.value;
      const { user } = await Block();

      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            likes: formData.get("likes"),
            user: user.data?._id, // Obtido do token ou do contexto
            product: _id, // ID do produto
          }),
        });
    
        if (!res.ok) {
          const error = await res.json();
          return `Erro ao criar comentário. ${error}` 
        }
    
        const data = await res.json();
        revalidateTag('likes')
        
        return  data 
      } catch (error) {
        console.error("Erro ao enviar comentário:", error);
        return { success: false, error: "Erro de conexão com o servidor." };
      }
    
    }

  return (
    <section>
    <form action={likesSubmit} className='flex'>
      <label className=' cursor-pointer hover:scale-105'>
      
      <button
        type="submit" 
        name='likes'
        defaultValue={''}
      ><SlLike size={26} /></button>
      </label>
      
    </form>
   </section>
  )
}
