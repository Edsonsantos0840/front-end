'use server'
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import BtnEdit from "../buttons/BtnEdit";

interface ComentsUpdateprops {
    id: string | undefined,
    user: string | undefined, 
    product: string | undefined,
    comm: string,
}

export default async function CardUpdateComments({id, user, product, comm }: ComentsUpdateprops) {
   
   async function CommentsUpdateSubmit( formData: FormData) {
    'use server'
      const url = `${process.env.BASE_URL}/product/comments/${id}`;
      const token = (await cookies()).get("MA_MARMORE")?.value;
    
      try {
        const res = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            comments: formData.get("comments"),
            user,
            product
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
    <form action={CommentsUpdateSubmit} className='flex'>
      <input 
        type="text" 
        placeholder='Digite seu comentário'
        name='comments'
        defaultValue={comm}
        className='w-full h-10'
      />
      {/* <button type="submit">Editar</button> */}
        <BtnEdit/>
    </form>
   </section>
  )
}
