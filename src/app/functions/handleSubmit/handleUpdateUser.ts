import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { UploadImage } from "./uploadImage";


export async function handleUpdateUser(formData: FormData,) {
    "use server"
  const _id = formData.get("_id") as string; // Pega o ID do formulário
  const url = `${process.env.BASE_URL}/user/${_id}`;
  const token = (await cookies()).get("MA_MARMORE")?.value;
  const image = formData.get("image")
  let imageUrl = "";

   // Faz upload da imagem e armazena a URL retornada
    if (image) {
      const uploadResponse: string = await UploadImage({image, _id});
      imageUrl = uploadResponse; // Captura a URL retornada
    }

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        image: imageUrl,

      }),
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
  revalidatePath(`process.env.BASE_URL}/user/${_id}`)
  redirect(`/user/${_id}`)
}
