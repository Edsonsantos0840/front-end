"use client";

import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { CiEdit } from "react-icons/ci";
import BtnEdit from "../buttons/BtnEdit";
import { CommentProps } from "@/app/types/commentType";
import { CommentsUpdateSubmit } from "../../functions/handleSubmit/CommentsUpdateSubmit";
import Image from "next/image";
import { useComments } from "@/app/hooks/useComments";
import { IoIosPerson } from "react-icons/io";
import Btn from "../buttons/Btn";
import { handleDelete } from "@/app/functions/handleSubmit/HandleDelete";
import { TbHttpDelete } from "react-icons/tb";

interface ComentsUpdateprops {
  data: CommentProps[];
  productId: string;
  user: {
    _id: string;
    name: string;
    email: string;
    image?: string;
    tipo?: string;
  };
}

export default function CardShowComments({
  data,
  productId,
  user,
}: ComentsUpdateprops) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { mutate } = useComments(productId);

  const [selectedComment, setSelectedComment] = useState<string>("");
  const [Id, setId] = useState<string>("");
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/product/comments/${Id}`;

  function handleEdit(commentId: string) {
    setSelectedComment(commentId);

    // Atualiza a URL sem recarregar a página
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("edit", commentId);
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  }

  async function handleUpdate(formData: FormData) {
    const dataComment = {
      comments: formData.get("comments"),
      user: user._id,
      product: productId,
    };

    await CommentsUpdateSubmit(dataComment, selectedComment);
    mutate(dataComment); // 🔄 Recarrega os comentários após atualização
  }

  return (
    <ul className="w-full">
      {data.map((comment) => (
        <li
          key={comment._id}
          onMouseOver={() => setId(comment._id)}
          onTouchStart={() => setId(comment._id)}
          className="mb-4 flex gap-4 w-full justify-between items-center"
        >
          {selectedComment !== comment._id ? (
            <>
              <div>
                <div className="flex gap-5 p-2">
                  {comment.user !== null ? (
                    <Image
                      src={comment.user.image}
                      alt={`foto do usuário ${comment.user.name}`}
                      width={40}
                      height={40}
                      className="rounded-full shadow-lg"
                    />
                  ) : (
                    <IoIosPerson />
                  )}
                  {comment.user !== null ? (
                    <strong>{comment.user.name}</strong>
                  ) : (
                    <strong>{"usuário anônimo"}</strong>
                  )}
                </div>
                <p>{comment.comments}</p>
              </div>
              {user._id === comment.user._id && (
                <div className="space-x-5">
                  <button onClick={() => handleEdit(comment._id)}>
                    <CiEdit size={20} />
                  </button>
                  <Btn
                    url={url}
                    handle={handleDelete}
                    icon={<TbHttpDelete size={30} color="red" />}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="w-full">
              <form
                action={handleUpdate}
                className="flex justify-between items-center gap-5 w-full"
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
