import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { CommentProps } from "@/app/types/commentType";
import { Suspense } from "react";
import { SlLike } from "react-icons/sl";

export default async function CardDashboardLikes() {
  const url = `${process.env.BASE_URL}/likes`;
  const { data: likes } = await FetchGet<CommentProps[]>(url);

  if (likes)
    return (
      <Suspense fallback="Carregando.....">
        <section className="mx-4 p-4 bg-fundo2 rounded-2xl h-full alinha2 ">
          <h2 className="alinha6 gap-2  mb-4">
            <span className="font-ysabeau font-black text-xl text-principal">
              Likes
            </span>
            <SlLike size={30} className="text-textos" />
          </h2>
          <div className="relative flex items-center ">
            <div className="w-48 h-48 rounded-full bg-principal alinha6  relative shadow-md">
              <div className="w-40 h-40 rounded-full bg-gray-200 alinha6  relative">
                <span className="font-ysabeau font-black text-7xl text-principal">
                  {likes?.length}
                </span>
                <span className="font-ysabeau font-black text-xl text-textos">
                  Likes
                </span>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    );
}
