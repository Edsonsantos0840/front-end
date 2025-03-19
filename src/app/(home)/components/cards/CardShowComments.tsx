"use client";
//componentes
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
//meus componentes
import BtnEdit from "../../../(dashboard)/components/buttons/BtnEdit";
import { CommentProps } from "@/app/types/commentType";
import { CommentsUpdateSubmit } from "../../../functions/handleSubmit/CommentsUpdateSubmit";
import { useComments } from "@/app/hooks/useComments";
import Btn from "../buttons/Btn";
import { handleDelete } from "@/app/functions/handleSubmit/HandleDelete";
import { UserProps } from "@/app/types/user";
//icons
import { IoIosPerson } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

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
  //OBS. MANTER ESSE GRUPO DE FUNÇÔES AQUI PARA A MULTAÇÂO DOS DADOS POIS ESTÀ DANDO ERRO SE COLOCAR EM ARQUIVO EXTERNO.
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  //busca os dados do produto pelo id
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

  return (<ul className="w-full">
    {data.map((comment) => (
      <li
        key={comment._id}
        onMouseOver={() => setId(comment._id)}
        onTouchStart={() => setId(comment._id)}
        className="mb-2 flex gap-4 w-full justify-between items-center bg-fundo2 py-2 rounded-xl"
      >
        {selectedComment !== comment._id ? (
          <>
            {/* Cada comentário é um artigo independente */}
            <article className="flex justify-start items-center gap-5 p-2 w-full">
              <header className="flex items-center gap-4 w-full">
                {/* Imagem do usuário */}
                <figure className="relative w-10 h-10">
                  {comment.user ? (
                    <Image
                      src={comment.user.image}
                      alt={`Foto do usuário ${comment.user.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={100}
                      className="rounded-full shadow-lg w-10 h-10"
                    />
                  ) : (
                    <IoIosPerson aria-label="Ícone de usuário anônimo" />
                  )}
                </figure>
  
                <div>
                  {/* Nome do usuário */}
                  <p className="text-textos3 text-base font-PlusJakartaSansMedium">
                    <strong>{comment.user ? comment.user.name : "Usuário anônimo"}</strong>
                  </p>
                  
                  {/* Data de criação */}
                  <p className="text-textos text-sm">
                    <strong className="pr-2">Criado em:</strong>
                    {comment.createdAt
                      ? format(new Date(comment.createdAt), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                      : "Data não disponível"}
                  </p>
                </div>
              </header>
  
              {/* Comentário do usuário */}
              {comment.comments && (
                <section className="w-full">
                  <p className="text-textos px-4 py-3 font-sansModifi">{comment.comments}</p>
                </section>
              )}
            </article>
  
            {/* Botões de ação (somente se o usuário for o dono do comentário) */}
            {user._id === comment.user?._id && (
              <div className="flex gap-6 pr-2">
                <button onClick={() => handleEdit(comment._id)} aria-label="Editar comentário">
                  <MdModeEdit size={24} className="text-textos3" />
                </button>
                <Btn
                  url={url}
                  handle={handleDelete}
                  icon={<IoCloseOutline size={30} className="text-textos3" />}
                  aria-label="Excluir comentário"
                />
              </div>
            )}
          </>
        ) : (
          <div className="w-full">
            {/* Formulário de edição do comentário */}
            <form action={handleUpdate} className="alinha4 gap-5 w-full p-2">
              <input
                type="text"
                name="comments"
                className="w-full px-4 h-10"
                defaultValue={comment.comments}
                aria-label="Editar comentário"
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
