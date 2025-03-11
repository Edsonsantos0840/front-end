"use server";

import { UploadCreateImage} from "./uploadImage";
import { cookies } from "next/headers";
import { validateProduct } from "../validate/validateProduct";
import { redirect } from "next/navigation";

type ActionStateType = {
  message: string[];
  success: string;
};

export async function RegisterProductSubmit(
  prevState: ActionStateType,
  formData: FormData
): Promise<ActionStateType> {
  const token = (await cookies()).get("MA_MARMORE")?.value;
  const url = `${process.env.BASE_URL}/product`;

  const imageFields = ["image1", "image2", "image3", "image4"];
  const imageUrls: string[] = [];

// Faz upload das imagens e armazena as URLs retornadas
for (const field of imageFields) {
  const image = formData.get(field);

  if (image instanceof File) {
    try {
      const imageUrl = await UploadCreateImage({ image });
      imageUrls.push(imageUrl || ""); // Adiciona a URL ou uma string vazia
    } catch (error) {
      console.error(`Erro ao fazer upload da imagem ${field}:`, error);
      return {
        message: [`Erro ao fazer upload de uma ou mais imagens.`],
        success: "",
      };
    }
  } else {
    imageUrls.push(""); // Se não houver imagem, adiciona string vazia
  }
}

  const productData = {
    title: formData.get("title")?.toString() || '',
    category: formData.get("category")?.toString(),
    description: formData.get("description")?.toString(),
    image1: imageUrls[0],
    image2: imageUrls[1],
    image3: imageUrls[2],
    image4: imageUrls[3],
  };

  const {message} = validateProduct(productData)

  if (message.length > 0) {
    return {
      message: message,
      success: "",
    };
  } 
  
  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });

  if (!req.ok) {
    return {
      message: ["Erro ao cadastrar o produto. Tente novamente!"],
      success: "",
    };
  }

redirect('/product')
}
