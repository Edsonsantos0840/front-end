//meus componentes
import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { CommentProps } from "@/app/types/commentType";
import { FaRegComments } from "react-icons/fa";
import CommentCard from "../../../(home)/components/cards/CommentCard";
import LoadingSuspense from "@/app/(home)/LoadingSuspense";
//componentes
import { Suspense } from "react";

export default async function CardDashboardComments() {
  const url = `${process.env.BASE_URL}/comments`;
  const { data: comments } = await FetchGet<CommentProps[]>(url);
  if (comments)
    return (
      <Suspense fallback={<LoadingSuspense />}>
        <section className="mx-4 p-4 bg-fundo2 rounded-2xl h-full text-principal">
          {/* Cabeçalho da seção */}
          <header className="alinha6 gap-10">
            <h2 className="alinha6 gap-2">
              <span className="font-ysabeau font-black text-xl">
                Comentários
              </span>
              <FaRegComments size={30} className="text-textos" />
            </h2>
          </header>

          {/* Corpo da seção */}
          <div className="alinha4">
            {/* Lista de comentários */}
            {comments && (
              <div className="w-full">
                <CommentCard comments={comments} />
              </div>
            )}

            {/* Contador de comentários */}
            <p className="flex items-center gap-2">
              <span className="font-ysabeau font-black text-6xl">
                {comments?.length}
              </span>
              <span className="text-textos/80">comentários</span>
            </p>
          </div>
        </section>
      </Suspense>
    );
}
