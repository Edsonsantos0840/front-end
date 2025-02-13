"use server";

import { RegisterSchema } from "@/schemas";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UploadCreateImage } from "./uploadImage";

type ActionStateType = {
  errors: string[];
  success: string;
};

export async function RegisterSubmit(
  prevState: ActionStateType,
  formData: FormData
) {
  const url = `${process.env.BASE_URL}/auth/register`;
  const image = formData.get("image")
  let imageUrl = "";

  // Faz upload da imagem e armazena a URL retornada
  if (image) {
    const uploadResponse: string = await UploadCreateImage({image});
    imageUrl = uploadResponse; // Captura a URL retornada
  }

  const registerData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    tipo: "usuário",
    image: imageUrl , // Define a URL da imagem no registro
  };

  const register = RegisterSchema.safeParse(registerData);

  if (!register.success) {
    const errors = register.error?.errors.map((err) => err.message);
    return {
      errors,
      success: "",
    };
  }

  const req = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      name: register.data.name,
      email: register.data.email,
      password: register.data.password,
      tipo: register.data.tipo,
      image: register.data.image, // Inclui a URL da imagem no corpo da requisição
    }),
  });

  const json = await req.json();

  (await cookies()).set({
    name: "MA_MARMORES",
    value: json,
    httpOnly: true,
    path: "/",
  });
  // const success = SuccessSchema.parse(json);

  redirect("/login");
}
