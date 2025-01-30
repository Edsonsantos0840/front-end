
import { cookies } from "next/headers";
import { UploadImage } from "./uploadImage";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


export async function UploadProductSubmit(
  _id: string,
  formData: FormData,
) {
    "use server"
  const url = `${process.env.BASE_URL}/product/${_id}`;
  const token = (await cookies()).get("MA_MARMORE")?.value;

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
          const uploadResponse: string = await UploadImage({
            image,
          });
          imageUrls.push(uploadResponse);
        } catch (error) {
          console.error("Erro ao fazer upload da imagem:", error);
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

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productData),
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
  revalidatePath(`process.env.BASE_URL}/product/${_id}`)
  redirect(`/product/${_id}`)
}
