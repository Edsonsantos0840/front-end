// import { CommentProps } from "../../types/commentType";
// import { Block } from "@/app/middleware/blockedPage";
// import CardShowComments from "./CardShowComments";
// import CardUpdateComments from "./CardUpdateComment";

// export default async function CardComments({ id }: { id: string }) {
//   const urlComments = `${process.env.BASE_URL}/comments/product/${id}`;
//   const { user } = await Block();
//   const res = await fetch(urlComments, { next: { tags: ["comments"] } });
//   const data: CommentProps[] = await res.json();

//   return (
//     <section>
//       <h2 className="text-xl font-semibold">Comentários</h2>
//       {data.length > 0 ? (
//         <>
//           <CardShowComments data={data} />
//           {data &&
//             data.map((comment) => (
//               <CardUpdateComments
//                 key={comment._id}
//                 product={id}
//                 id={comment._id}
//                 user={user.data?._id}
//                 comm={comment.comments}
//               />
//             ))}
//         </>
//       ) : (
//         <p>Nenhum comentário disponível para este produto.</p>
//       )}
//     </section>
//   );
// }
import { CommentProps } from "../../types/commentType";
import { Block } from "@/app/middleware/blockedPage";
import CardShowComments from "./CardShowComments";
import CardUpdateComments from "./CardUpdateComment";
import { Suspense } from "react";
import { headers } from "next/headers";

export default async function CardComments({
  id
}: {
  id: string;
}) {
  const urlComments = `${process.env.BASE_URL}/comments/product/${id}`;
  const { user } = await Block();
  const res = await fetch(urlComments, { next: { tags: ["comments"] } });
  const data: CommentProps[] = await res.json();

  const reqHeaders = await headers();
  const requestUrl = reqHeaders.get('referer');  // Pode acessar a URL da requisição

  // Criando um objeto URL para manipular os parâmetros
  const url = new URL(requestUrl || '');  // No servidor, você pode usar 'request.url' ou headers
  const editingCommentId = url.searchParams.get('edit'); // Obtendo o parâmetro 'edit' da URL
  console.log(editingCommentId)

  return (
    <section>
      <h2 className="text-xl font-semibold">Comentários</h2>
      {data.length > 0 ? (
        <>
         <CardShowComments data={data} />
          {editingCommentId ? (<></>
          ):
          (
            <Suspense fallback={<p>Carregando...</p>}>
          {data &&
            data.map((comment) => (
              <CardUpdateComments
                key={comment._id}
                product={id}
                id={comment._id}
                user={user.data?._id}
                comm={comment.comments}
              />
            ))}
            </Suspense>
          )}
        </>
      ) : (
        <p>Nenhum comentário disponível para este produto.</p>
      )}
    </section>
  );
}
