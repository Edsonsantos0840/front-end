"use server";
//componentes
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
//meus componentes
import { Block } from "@/app/middleware/blockedPage";

type ActionStateType = {
  message: string[];
  success: string;
};

async function FetchFunction(prevState: ActionStateType, formData: FormData) {
  //busca o token do usuário logado
  const token = (await cookies()).get("MA_MARMORE")?.value;
  //busca o usuário logado
  const { user } = await Block();

  const url = formData.get("url") as string; //pega a url do formulário
  const method = formData.get("method") as string; //pega o método do formulário
  const actionType = formData.get("actionType") as string; // Define a ação (comentário, like, etc.)
  //dados passados para a requisição
  const data: Record<string, unknown> = {
    user: user._id,
    product: formData.get("id"),
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
      return {
        message: ["Houve um erro. Tente novamente mais tarde."],
        success: "",
      };
    }

    // Revalidação de cache com base na ação
    revalidateTag(actionType === "comment" ? "comments" : "likes");

    return {
      message: [],
      success: `${
        actionType === "comment" ? "Comentário" : "Like"
      } registrado com sucesso!`,
    };
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
    return { message: ["Erro ao processar a requisição."], success: "" };
  }
}

export { FetchFunction };
