// 'use client'

// import { CommentProps } from "@/app/types/commentType"
// import Image from "next/image"
// import { useState } from "react"
// import { CiEdit } from "react-icons/ci"

// interface ComentsUpdateprops { 
//     data: CommentProps[]
// }

// export default function CardShowComments({data}: ComentsUpdateprops) {
//     const [commentEdit, setCommentEdit] = useState(false)
//   return (
//     <ul>
//           {data.map((comment) => (
//             <li key={comment._id} className="mb-4 flex gap-4">
//               {
//                 commentEdit === false &&
//                  <>
//                 <Image
//                 src={comment.user?.image}
//                 alt={"imagem de perfil de " + comment.user?.name}
//                 width={40}
//                 height={40}
//                 className="rounded-full"
//               />
//               <strong>{comment.user?.name || "Usuário anônimo"}</strong>{" "}
//               {comment.comments}
//               <span className="text-gray-500 text-sm"></span>
//                  </> 
//               }
//               <div className="flex">
//                 <button onClick={() => setCommentEdit(true)}><CiEdit size={20} /></button>
//               </div>
//             </li>
//           ))}
//         </ul>
//   )
// }
"use client";

import { CommentProps } from "@/app/types/commentType";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { CiEdit } from "react-icons/ci";

interface ComentsUpdateprops {
  data: CommentProps[];
}

export default function CardShowComments({ data }: ComentsUpdateprops) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Tipagem correta
  const editingCommentId: string | null = searchParams.get("edit");

  function handleEdit(commentId: string) {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("edit", commentId);
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  }

  return (
    <ul>
      {data.map((comment) => (
        <li key={comment._id} className="mb-4 flex gap-4">
          {editingCommentId !== comment._id && (
            <>
              <Image
                src={comment.user?.image}
                alt={"imagem de perfil de " + comment.user?.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <strong>{comment.user?.name || "Usuário anônimo"}</strong> {comment.comments}
            </>
          )}
          <div className="flex">
            {editingCommentId === comment._id ? (
               <></>
            ) : (
              <button onClick={() => handleEdit(comment._id)}>
                <CiEdit size={20} />
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
