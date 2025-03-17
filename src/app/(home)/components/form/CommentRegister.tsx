"use client";
//componentes
import { useActionState, useState } from "react";
//meus componentes
import { FetchFunction } from "@/app/functions/fetch/FetchFunction";
import { UserProps } from "@/app/types/user";
import ModalVerifyLogin from "../modal/ModalVerifyLogin";

export default function CommentRegister({
  id,
  user,
}: {
  id: string;
  user: UserProps | null;
}) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/product/comments`;
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useActionState(FetchFunction, {
    message: [],
    success: "",
  });

  console.log(state);
 //função para exibir o modal quando clicado
  const handleCommentClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (user?.name === undefined) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <section className="relative">
    {/* Modal que aparece condicionalmente */}
    {isOpen && (
      <ModalVerifyLogin setIsOpen={setIsOpen} classEdit="lg:left-[510]" />
    )}
  
    {/* Formulário para enviar comentário */}
    <form
      action={dispatch}
      className="flex gap-2 my-2"
      aria-labelledby="comment-form"
    >
      {/* Campos ocultos para enviar dados de identificação */}
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="url" value={url} />
      <input type="hidden" name="method" value="POST" />
      <input type="hidden" name="actionType" value="comment" />
  
      {/* Campo de texto para o comentário */}
      <label htmlFor="comment-input" className="sr-only">
        Digite seu comentário
      </label>
      <input
        id="comment-input"
        type="text"
        placeholder="Digite seu comentário"
        name="inp"
        className="w-full h-10 border border-gray-300 rounded-md px-2"
        aria-label="Digite seu comentário"
      />
  
      {/* Botão para enviar o comentário */}
      <button
        onClick={handleCommentClick}
        className="w-24 bg-principal text-textos2 py-2 rounded-md hover:bg-principal2"
        type="submit"
        aria-label="Comentar"
      >
        Comentar
      </button>
    </form>
  </section>
  
  );
}
