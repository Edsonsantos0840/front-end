import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { CommentProps } from "@/app/types/commentType";
import { Suspense } from "react";
import { FaRegComments } from "react-icons/fa";
import CommentCard from "../../../(home)/components/cards/CommentCard";

export default async function CardDashboardComments() {
  const url = `${process.env.BASE_URL}/comments`;
  const { data: comments } = await FetchGet<CommentProps[]>(url);
  if (comments)
    return (
      <Suspense fallback="Carregando.....">
        <section className="mx-4 p-4 bg-fundo2 rounded-2xl  h-full text-principal">
          <div className="alinha6  gap-10">
            <h2 className="alinha6 gap-2 ">
              <span className="font-ysabeau font-black text-xl ">
                Comentários
              </span>
              <FaRegComments size={30} className="text-textos" />
            </h2>
          </div>
          <div className="flex justify-around">
            {comments && <CommentCard comments={comments} />}
            <h3 className="flex items-center gap-2 ">
              <span className="font-ysabeau font-black text-6xl ">
                {comments?.length}
              </span>
              <span className="text-textos/80">comentários</span>
            </h3>
          </div>
        </section>
      </Suspense>
    );
}
