"use client";
import { useComments } from "@/app/hooks/useComments";
import CardShowComments from "./CardShowComments";
import { UserProps } from "@/app/types/user";

interface CardCommentsProps {
  id: string;
  user: UserProps
}

export default function CardComments({id, user,}: CardCommentsProps) {
  const { comments, isLoading } = useComments(id);

  if (isLoading) return <p>Carregando comentários...</p>;

  return (
    <section>
      <div className="flex justify-start items-center gap-4 my-4">
        <h2 className="text-3xl lg:text-xl text-textos  font-bold">Comentários</h2>
        <p 
          aria-label={`Comentários: 
          ${comments.length}`}
          className="bg-principal text-textos2 text-3xl lg:text-xl text-center font-semibold w-12 h-12 leading-snug  lg:w-7 lg:h-7 shadow-xl rounded-full  "
        >{comments.length}</p>
      </div>
      {comments.length > 0 ? (
        <CardShowComments data={comments} productId={id} user={user} />
      ) : (
        <p className="text-xl" >Sem comentários ainda.</p>
      )}
    </section>
  );
}
