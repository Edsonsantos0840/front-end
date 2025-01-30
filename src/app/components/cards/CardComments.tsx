import Image from "next/image";
import { CommentProps } from "../../types/commentType";

export default async function CardComments({ id }: { id: string }) {
  const urlComments = `${process.env.BASE_URL}/comments/product/${id}`;

  const res = await fetch(urlComments, { next: { tags: ["comments"] } });
  const data: CommentProps[] = await res.json();
  return (
    <section>
      <h2 className="text-xl font-semibold">Comentários</h2>
      {data.length > 0 ? (
        <ul>
          {data.map((comment) => (
            <li key={comment._id} className="mb-4 flex gap-4">
              <Image
                src={comment.user?.image}
                alt={"imagem de perfil de " + comment.user?.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <strong>{comment.user?.name || "Usuário anônimo"}</strong>{" "}
              {comment.comments}
              <span className="text-gray-500 text-sm"></span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum comentário disponível para este produto.</p>
      )}
    </section>
  );
}
