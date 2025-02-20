"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

async function handleDeleteProducts(url: string, pathToRevalidate: string) {
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
      console.log(`${res.status} Houve um erro ao deletar`);
    } else {
      // Revalidando o caminho após a deleção do produto
      if (pathToRevalidate) {
        // Revalida a página somente se um caminho for fornecido
      revalidatePath(pathToRevalidate);
      
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export { handleDeleteProducts };
