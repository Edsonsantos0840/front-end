"use server"
import { UploadImageSchema } from "@/schemas";
import { cookies } from "next/headers";



export async function UploadImage({
  image,
  _id, // Agora passamos o ID do usuário explicitamente
}: {
  image: FormDataEntryValue | string | File;
  _id: string;
}) {
  if (!image || !(image instanceof File)) {
    alert("Por favor, selecione uma imagem válida.");
    return;
  }

  const token = (await cookies()).get("MA_MARMORE")?.value;
  const url = `${process.env.BASE_URL}/user/${_id}/image`; // Agora a URL inclui o ID do usuário

  const formData = new FormData();
  formData.append("file", image);
  formData.append("_id", _id); // Enviar o ID no corpo da requisição também

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
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const response = await req.json();
  return response.image;
}

export async function UploadCreateImage({
  image,
}: {
  image: FormDataEntryValue | string | File;
}) {
  if (!image || !(image instanceof File)) {
    alert("Por favor, selecione uma imagem válida.");
    return;
  }

  const token = (await cookies()).get("MA_MARMORE")?.value;
  const url = `${process.env.BASE_URL}/user/image`; // Agora a URL inclui o ID do usuário

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
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const response = await req.json();
  return response.image;
}