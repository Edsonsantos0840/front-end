
"use client";

import { FetchFunction } from "@/app/functions/fetch/FetchFunction";
import { useActionState } from "react";

export default function CommentRegister({ id }: { id: string }) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/product/comments`;

  const [state, dispatch] = useActionState(FetchFunction, {
    message: [],
    success: "",
  });

  console.log(state)


  return (
    <section>
      <form action={dispatch} className="flex gap-2 my-2">
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="url" value={url} />
        <input type="hidden" name="method" value="POST" />
        <input type="hidden" name="actionType" value="comment" />

        <input
          type="text"
          placeholder="Digite seu comentário"
          name="inp"
          className="w-full h-10 border border-gray-300 rounded-md"
        />
        <button className="w-24 bg-red-600 text-white py-2 rounded-md hover:bg-red-700" type="submit">Comentar</button>
      </form>
    </section>
  );
}
