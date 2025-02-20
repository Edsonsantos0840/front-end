"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { UploadCreateImage } from "./uploadImage";
import { validateUploadUser } from "../validate/validateUploadUser";

type ActionStateType = {
  message: string[];
  success: string;
};

export async function handleUpdateUser(
  prevState: ActionStateType,
  formData: FormData
): Promise<ActionStateType>{
  const _id = formData.get("_id") as string; // Pega o ID do formulário
  const url = `${process.env.BASE_URL}/user/${_id}`;
  const token = (await cookies()).get("MA_MARMORE")?.value;
 const image = formData.get("image");
   let imageUrl: string | undefined = undefined;
 
 // Faz upload da imagem e armazena a URL retornada
 if (image instanceof File) {
   imageUrl = await UploadCreateImage({ image });
 }

const userValidate = {
  name: String(formData.get("name") || ""),
  email: String(formData.get("email") || ""),
  image: imageUrl,
};

const {message} = validateUploadUser(userValidate);

if (message.length > 0) {
  return {
    message: message,
    success: "",
  };
} 

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: userValidate.name,
        email: userValidate.email,
        image: imageUrl,
      }),
    });

    if (!res.ok) {
      return {
        message: ["Erro ao cadastrar usuário. Tente novamente!"],
        success: "",
      };
    }

    const data = await res.json();
    console.log("Sucesso ao atualizar o produto", data);
  } catch (error) {
    console.error("Erro ao atualizar o produto", error);
  }
  revalidatePath(`process.env.BASE_URL}/user/${_id}`)
 
  return {
    message: [],
    success: "Usuário cadastrado com sucesso!",
  };
}
