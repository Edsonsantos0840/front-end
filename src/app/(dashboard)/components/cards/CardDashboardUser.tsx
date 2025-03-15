import { IoIosPerson } from "react-icons/io";
import CardScrollImage from "./CardScrollImage";
import CardScrollName from "./CardScrollName";
import { FetchGetAuth } from "@/app/functions/fetch/FetchGet";
import { UserProps } from "@/app/types/user";
import { Suspense } from "react";

export default async function CardDashboardUser() {
  const url = `${process.env.BASE_URL}/users`;
//busca os dados do usuário
  const { data: userCard } = await FetchGetAuth<UserProps[]>(url);

  if (userCard)
    return (
      <Suspense fallback="Carregando.......">
        <section className="mx-4 my-2 p-4 bg-fundo2 rounded-2xl text-principal ">
          <div className="alinha6  gap-10">
            <h2 className="alinha6 gap-2 ">
              <span className="font-ysabeau font-black text-xl ">Usuários</span>
              <IoIosPerson size={30} className="text-textos" />
            </h2>
            <h3 className="flex items-center gap-2 pl-7">
              <span className="font-ysabeau font-black text-4xl ">
                {userCard.length}
              </span>
              <span className="text-textos/80">Usuários</span>
            </h3>
          </div>
          <article>
          
            <div className="alinha4 gap-4 ">
              {/* mostra  as imagens */}
              <CardScrollImage user={userCard} />
              {/* mostra os nomes dos usuários */}
              <CardScrollName user={userCard} />
            </div>
          </article>
        </section>
      </Suspense>
    );
}
