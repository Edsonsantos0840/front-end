
import { Block } from "@/app/middleware/blockedPage";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export default async function CommentRegister({id}: {id: string}) {
    const _id = id

   async function CommentsSubmit(formData: FormData) {
    'use server'
      const url = `${process.env.BASE_URL}/product/comments`;
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
            comments: formData.get("comments"),
            user: user.data?._id, // Obtido do token ou do contexto
            product: _id, // ID do produto
          }),
        });
    
        if (!res.ok) {
          const error = await res.json();
          return `Erro ao criar comentário. ${error}` 
        }
    
        const data = await res.json();
        revalidateTag('comments')
        return  data 
      } catch (error) {
        console.error("Erro ao enviar comentário:", error);
        return { success: false, error: "Erro de conexão com o servidor." };
      }
    }

  return (
    <section>
    <form action={CommentsSubmit} className='flex'>
      <input 
        type="text" 
        placeholder='Digite seu comentário'
        name='comments'
        defaultValue=''
        className='w-full h-10'
      />
      <button type="submit">Comentar</button>
    </form>
   </section>
  )
}
