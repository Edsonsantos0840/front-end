
"use client";

import { useComments } from "@/app/hooks/useComments";
import CardShowComments from "./CardShowComments";

export default function CardComments({
  id,
  user,
}: {
  id: string;
  user: {
    _id: string;
    name: string;
    email: string;
    image?: string;
    tipo?: string;
  };
}) {
  const { comments, isLoading } = useComments(id);

  if (isLoading) return <p>Carregando comentários...</p>;

  return (
    <section>
      <h2 className="text-xl font-semibold">Comentários</h2>
      {comments.length > 0 ? (
        <CardShowComments data={comments} productId={id} user={user} />
      ) : (
        <p>Sem comentários ainda.</p>
      )}
    </section>
  );
}
