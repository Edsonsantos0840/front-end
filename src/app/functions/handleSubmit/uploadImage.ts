"use server"
import { UploadImageSchema } from "@/schemas";
import { cookies } from "next/headers";



export async function UploadImage({image }: 
    {
    image: FormDataEntryValue | string | File,
}){

    if (!image || !(image instanceof File)) {
        alert('Por favor, selecione uma imagem válida.');
            return;
          }

    const token = (await cookies()).get("MA_MARMORE")?.value;
    const url = `${process.env.BASE_URL}/user/image`;

    const formData = new FormData();
    formData.append("file", image);

    const upload = UploadImageSchema.safeParse(formData);
    
    if (!upload.success) {
      const errors = upload.error?.errors.map((err) => err.message);
      return {
        errors,
        success: "",
      };
    }

    const req = await fetch(url, {
      method: "POST",
      headers: { 
         Authorization: `Bearer ${token}`
    },
      body: formData,
    });

 const response = await req.json();
 
   return response.image
   
}

