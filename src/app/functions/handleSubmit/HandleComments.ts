"use server";
import { Block } from "@/app/middleware/blockedPage";
import { cookies } from "next/headers";

export async function CommentsSubmit(
  formData: FormData
) {
  const url = `${process.env.BASE_URL}/product/comments`;
  const token = (await cookies()).get("MA_MARMORE")?.value;
  const { user } = await Block();

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        comments: formData.get("comments"),
        user: user.data?._id, // Obtido do token ou do contexto
        product: formData.get("id"), // ID do produto
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      return { success: false, error: error.message || "Erro ao criar comentário." };
    }

    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error("Erro ao enviar comentário:", error);
    return { success: false, error: "Erro de conexão com o servidor." };
  }
}
