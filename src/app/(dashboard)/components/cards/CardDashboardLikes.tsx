//meus componentes
import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { CommentProps } from "@/app/types/commentType";
import { SlLike } from "react-icons/sl";
//componentes
import { Suspense } from "react";
import LoadingSuspense from "@/app/(home)/LoadingSuspense";

export default async function CardDashboardLikes() {
  const url = `${process.env.BASE_URL}/likes`;
  const { data: likes } = await FetchGet<CommentProps[]>(url);

  if (likes)
    return (
      <Suspense fallback={<LoadingSuspense />}>
        <section className="mx-4 p-4 bg-fundo2 rounded-2xl h-full alinha2">
          {/* Cabeçalho da seção */}
          <header className="alinha6 gap-2 mb-4">
            <h2 className="font-ysabeau font-black text-xl text-principal flex items-center gap-2">
              Likes
              <SlLike size={30} className="text-textos" />
            </h2>
          </header>

          {/* Contador de likes */}
          <div className="relative flex items-center">
            <div className="w-48 h-48 rounded-full bg-principal alinha6 relative shadow-md">
              <div className="w-40 h-40 rounded-full bg-gray-200 alinha6 relative">
                <p className="text-center" aria-live="polite">
                  <span className="font-ysabeau font-black text-7xl text-principal">
                    {likes?.length}
                  </span>
                </p>
                <p className="font-ysabeau font-black text-xl text-textos">
                  Likes
                </p>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    );
}
