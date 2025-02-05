
"use server";

import { cookies } from "next/headers";

interface UpdateCommentsProps {
  comments: FormDataEntryValue | null;
  user: string;
  product: string;
}

export async function CommentsUpdateSubmit(dataComment: UpdateCommentsProps, commentId: string) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/product/comments/${commentId}`;
  const token = (await cookies()).get("MA_MARMORE")?.value;

  try {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataComment),
    });

    if (!res.ok) {
      const error = await res.json();
      return `Erro ao atualizar comentário. ${error}`;
    }

    return await res.json();
  } catch (error) {
    console.error("Erro ao atualizar comentário:", error);
    return { success: false, error: "Erro de conexão com o servidor." };
  }
}
