"use server";

import { cookies } from "next/headers";

async function handleDelete(url: string) {
  //busac o token do usuário logado
  const token = (await cookies()).get("MA_MARMORE")?.value;

  try {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) {
      console.log(`${res.status} Houve um erro ao deletar `);
    }
  } catch (error) {
    console.log(error);
  }
}
export { handleDelete };
