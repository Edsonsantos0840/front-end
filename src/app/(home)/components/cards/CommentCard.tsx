"use client";
//meus componentes
import useScroll from "@/app/hooks/useScroll";
import { CommentProps } from "@/app/types/commentType";

export default function CommentCard({
  comments,
}: {
  comments: CommentProps[];
}) {
  //função de scroll
  const { containerRef } = useScroll();

 return (
    <>
      {comments && comments.length > 0 ? (
        <article className="overflow-x-auto mt-4 py-2 rounded-md">
          <div
            ref={containerRef}
            className="overflow-hidden h-40 relative  scrollbar-hidden"
          >
            <ul>
              {comments.map((item) => (
                <div
                  key={item._id}
                  className=" gap-4 rounded-md mb-1 px-4 hover:bg-fundo3"
                >
                  <li className="px-3 flex items-center font-ysabeau text-textos capitalize font-semibold ">
                    {item.comments}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </article>
      ) : (
        <p className="text-center text-gray-500">Nenhum Produto Cadastrado</p>
      )}
    </>
  );
}
