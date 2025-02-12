"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

async function handleDeleteLike(url: string) {
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
      console.log("Houve um erro ao deletar");
      return;
    }

    // Revalida os dados dos likes na página
    revalidateTag("likes");

  } catch (error) {
    console.log(error);
  }
}

export { handleDeleteLike };
