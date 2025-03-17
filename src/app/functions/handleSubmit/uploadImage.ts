"use server"
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
    console.error("Imagem inválida ou não fornecida.");
    return undefined; // Retorna undefined em vez de nada
  }

  const token = (await cookies()).get("MA_MARMORE")?.value;
  const url = `${process.env.BASE_URL}/user/image`;

  const formData = new FormData();
  formData.append("file", image);

  try {
    const req = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!req.ok) {
      console.error("Erro no upload da imagem:", req.statusText);
      return undefined;
    }

    const response = await req.json();
    return response.image || undefined; // Retorna undefined caso não tenha `image`
  } catch (error) {
    console.error("Erro na requisição de upload:", error);
    return undefined;
  }
}
