
"use client";

import { FetchFunction } from "@/app/functions/fetch/FetchFunction";
import { useActionState } from "react";
import { SlLike } from "react-icons/sl";

export default function LikeRegister({ id }: { id: string }) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/product/likes`;

  const [state, dispatch] = useActionState(FetchFunction, {
    message: [],
    success: "",
  });

  console.log(state)

  return (
    <section>
      <form action={dispatch} className="flex">
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="url" value={url} />
        <input type="hidden" name="method" value="POST" />
        <input type="hidden" name="actionType" value="like" />

        <button type="submit" className="hover:scale-110 text-textos/80 italic">
          <SlLike size={30} />
        </button>
      </form>
    </section>
  );
}
