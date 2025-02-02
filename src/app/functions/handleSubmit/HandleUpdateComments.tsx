
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Block } from "@/app/middleware/blockedPage";


export async function UploadCommentsSubmit(
    _id: string,
   product: string,
   formData: FormData,
) {
    "use server"
  const { user } = await Block();
  const url = `${process.env.BASE_URL}/product/comments/${_id}`;
  const token = (await cookies()).get("MA_MARMORE")?.value;
  
  const userId = user.data?._id
 
  const commentsData = {
    title: formData.get("title")?.toString(),
    product,
    userId
  };

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(commentsData),
    });

    if (!res.ok) {
      const error = await res.json();
      console.log(error)
    }

    const data = await res.json();
    console.log("Sucesso ao atualizar o produto", data);
  } catch (error) {
    console.error("Erro ao atualizar o produto", error);
  }
  revalidatePath(`process.env.BASE_URL}/Comments/${_id}`)
  redirect(`/Comments/${_id}`)
}
