"use client";

import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import BtnEdit from "../buttons/BtnEdit";
import { CommentProps } from "@/app/types/commentType";
import { CommentsUpdateSubmit } from "../../functions/handleSubmit/CommentsUpdateSubmit";
import Image from "next/image";
import { useComments } from "@/app/hooks/useComments";
import { IoIosPerson } from "react-icons/io";
import Btn from "../buttons/Btn";
import { handleDelete } from "@/app/functions/handleSubmit/HandleDelete";
import { UserProps } from "@/app/types/user";
import { IoCloseOutline } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";

interface ComentsUpdateprops {
  data: CommentProps[];
  productId: string;
  user: UserProps;
}

export default function CardShowComments({
  data,
  productId,
  user,
}: ComentsUpdateprops) {
  const [selectedComment, setSelectedComment] = useState<string>("");
  const [Id, setId] = useState<string>("");
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/product/comments/${Id}`;

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { mutate } = useComments(productId);

  function handleEdit(commentId: string) {
    setSelectedComment(commentId);

    // Atualiza a URL sem recarregar a página
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("edit", commentId);
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  }
  // manter essa função para a mutação dos dados
  async function handleUpdate(formData: FormData) {
    const dataComment = {
      comments: formData.get("comments"),
      user: user._id,
      product: productId,
    };

    await CommentsUpdateSubmit(dataComment, selectedComment);
    mutate(dataComment); // Recarrega os comentários após atualização
  }

  return (
    <ul className="w-full ">
      {data.map((comment) => (
        <li
          key={comment._id}
          onMouseOver={() => setId(comment._id)}
          onTouchStart={() => setId(comment._id)}
          className="mb-2 flex gap-4 w-full justify-between items-center bg-fundo2 py-2 rounded-xl"
        >
          {selectedComment !== comment._id ? (
            <>
              <div className="flex justify-start items-center gap-5 p-2 w-full ">
                <figure className="relative w-10 h-10  ">
                  {comment.user !== null ? (
                    <Image
                      src={comment.user.image}
                      alt={`foto do usuário ${comment.user.name}`}
                      fill
                      quality={100}
                      className="rounded-full shadow-lg w-10 h-10"
                    />
                  ) : (
                    <IoIosPerson />
                  )}
                </figure>

                <div>
                  {comment.user !== null ? (
                    <p className="w-full text-textos3 text-base font-PlusJakartaSansMedium ">
                      <strong>{comment.user.name}</strong>
                      <span className="ml-4 pl-3 text-textos">
                        {comment.comments}
                      </span>
                    </p>
                  ) : (
                    <p className="w-full text-textos3 text-base font-PlusJakartaSansMedium ">
                      <strong>{"usuário anônimo"}</strong>
                    </p>
                  )}
                  <p className="w-full"><strong className="pr-4 text-base text-textos">Criado em: </strong>
                    <span>{comment.createdAt
                      ? new Date(comment.createdAt).toLocaleDateString("pt-BR")
                      : "Data desconhecida"}</span>
                  </p>
                </div>
              </div>
              {user._id === comment.user._id && (
                <div className="flex gap-6 pr-2">
                  <button onClick={() => handleEdit(comment._id)}>
                    <MdModeEdit size={24} className="text-textos3"/>
                  </button>
                  <Btn
                    url={url}
                    handle={handleDelete}
                    icon={ <IoCloseOutline size={30} className="text-textos3" />}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="w-full">
              <form
                action={handleUpdate}
                className="flex justify-between items-center gap-5 w-full p-2"
              >
                <input
                  type="text"
                  name="comments"
                  className="w-full px-4 h-10"
                  defaultValue={comment.comments}
                />
                <BtnEdit />
              </form>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
