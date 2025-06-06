"use client";
//meus componentes
import { SlLike } from "react-icons/sl";
import ModalVerifyLogin from "../modal/ModalVerifyLogin";
import { UserProps } from "@/app/types/user";
import { FetchFunction } from "@/app/functions/fetch/FetchFunction";
//componentes
import { useActionState, useState } from "react";

export default function LikeRegister({
  id,
  user,
}: {
  id: string;
  user: UserProps | null;
}) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/product/likes`;
  const [isOpen, setIsOpen] = useState(false);

  const [state, dispatch] = useActionState(FetchFunction, {
    message: [],
    success: "",
  });
  console.log(state);
  // função para exibir o modal quando clicado
  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (user?.name === undefined) {
      e.preventDefault(); // Impede o envio do formulário se o usuário não estiver logado
      setIsOpen(true);
    }
  };

  return (
    <section>
      {isOpen && (
        //modal
        <ModalVerifyLogin
          setIsOpen={setIsOpen}
          classEdit="left-4 lg:left-[510] lg:top-64"
        />
      )}

      <form action={dispatch} className="flex">
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="url" value={url} />
        <input type="hidden" name="method" value="POST" />
        <input type="hidden" name="actionType" value="like" />

        <button
          onClick={handleLikeClick}
          type="submit"
          className="hover:scale-110 text-textos/80 italic"
        >
          <SlLike className="text-4xl lg:text-3xl" />
        </button>
      </form>
    </section>
  );
}
