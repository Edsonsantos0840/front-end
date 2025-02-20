
"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { Block } from "@/app/middleware/blockedPage";

type ActionStateType = {
  message: string[];
  success: string;
};

async function FetchFunction(prevState: ActionStateType, formData: FormData) {
  const token = (await cookies()).get("MA_MARMORE")?.value;
  const { user } = await Block();

  const url = formData.get("url") as string;
  const method = formData.get("method") as string;
  const actionType = formData.get("actionType") as string; // Define a ação (comentário, like, etc.)

  const data: Record<string, unknown> = { 
    user: user.data?._id, 
    product: formData.get("id") 
  };

  // Adaptando os dados dependendo da ação
  if (actionType === "comment") {
    data.comments = formData.get("inp");
  }

  try {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      return { message: ["Houve um erro. Tente novamente mais tarde."], success: "" };
    }

    // Revalidação de cache com base na ação
    revalidateTag(actionType === "comment" ? "comments" : "likes");

    return { message: [], success: `${actionType === "comment" ? "Comentário" : "Like"} registrado com sucesso!` };
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    return { message: ["Erro ao processar a requisição."], success: "" };
  }
}

export { FetchFunction };
