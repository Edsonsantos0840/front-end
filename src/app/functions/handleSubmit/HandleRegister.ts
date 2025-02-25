"use server";

import { cookies } from "next/headers";
import { UploadCreateImage } from "./uploadImage";
import { validateUser } from "../validate/validateUser";

export type ActionStateType = {
  message: string[];
  success: string;
};

export async function RegisterSubmit(
  prevState: ActionStateType,
  formData: FormData
): Promise<ActionStateType> { // ⬅️ Agora retornamos um novo estado
  
  const url = `${process.env.BASE_URL}/auth/register`;
  const image = formData.get("image");
  let imageUrl: string | undefined = undefined;

// Faz upload da imagem e armazena a URL retornada
if (image instanceof File) {
  imageUrl = await UploadCreateImage({ image });
}

// Continua o cadastro sem travar, mesmo que `imageUrl` seja undefined
const userValidate = {
  name: String(formData.get("name") || ""),
  email: String(formData.get("email") || ""),
  password: String(formData.get("password") || ""),
  confirmPass: String(formData.get("confirmPass") || ""),
  image: imageUrl,
};

const {message} = validateUser(userValidate);

if (message.length > 0) {
  return {
    message: message,
    success: "",
  };
} 
  
      const req = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: userValidate.name,
          email: userValidate.email,
          password: userValidate.password,
          image: imageUrl,
        }),
      });
    
      if (!req.ok) {
        return {
          message: ["Erro ao cadastrar usuário. Tente novamente!"],
          success: "",
        };
      }
    
      const json = await req.json();
    
      (await cookies()).set({
        name: "MA_MARMORES",
        value: json,
        httpOnly: true,
        path: "/",
      });
 

  return {
    message: [],
    success: "Usuário cadastrado com sucesso!",
  };
}
