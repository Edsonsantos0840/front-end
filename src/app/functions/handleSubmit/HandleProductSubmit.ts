
"use server";

import { redirect } from "next/navigation";
import { UploadCreateImage} from "./uploadImage";
import { cookies } from "next/headers";

type ActionStateType = {
  errors: string[];
  success: string;
};

export async function RegisterProductSubmit(
  prevState: ActionStateType,
  formData: FormData
) {
  const token = (await cookies()).get("MA_MARMORE")?.value;
  const url = `${process.env.BASE_URL}/product`;

  const images = [
    formData.get("image1"),
    formData.get("image2"),
    formData.get("image3"),
    formData.get("image4"),
  ];

  const imageUrls: string[] = [];

  for (const image of images) {
    if (image) {
      try {
        const uploadResponse: string = await UploadCreateImage({
          image, 
        });
        imageUrls.push(uploadResponse);
      } catch (error) {
        console.error("Erro ao fazer upload da imagem:", error);
        return {
          errors: ["Erro ao fazer upload de uma ou mais imagens."],
          success: "",
        };
      }
    } else {
      imageUrls.push(""); // Insere uma string vazia caso não tenha imagem
    }
  }

  const productData = {
    title: formData.get("title")?.toString(),
    category: formData.get("category")?.toString(),
    description: formData.get("description")?.toString(),
    image1: imageUrls[0],
    image2: imageUrls[1],
    image3: imageUrls[2],
    image4: imageUrls[3],
  };
  
  const req = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });

  const json = await req.json();
  console.log(json);

  redirect("/");
}
