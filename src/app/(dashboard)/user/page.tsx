import Btn from "@/app/components/buttons/Btn";
import BtnDeleteProducts from "@/app/components/buttons/BtnDeleteProducts";
import Container from "@/app/components/containers/Container";
import { FetchGetAuth } from "@/app/functions/fetch/FetchGet";
import { Block } from "@/app/middleware/blockedPage";
import { UserProps } from "@/app/types/user";
import Image from "next/image";

import React, { Suspense } from "react";
import { AiFillEdit } from "react-icons/ai";
import { GrView } from "react-icons/gr";

export default async function User() {
  const url = `${process.env.BASE_URL}/users`;
  const urlDel = `${process.env.BASE_URL}/user`;
  const { user } = await Block();
  const { data: userCard } = await FetchGetAuth<UserProps[]>(url);

  if (!userCard || userCard.length === 0) {
    return (
      <Container>
        <h1>Dashboard</h1>
        <h1>Nenhum Produto Cadastrado</h1>
      </Container>
    );
  }
  return (
    <Container>
      <h1>usuários</h1>
      <main className="px-6 space-y-4">
        <Suspense fallback={"Carregando...."}>
          {userCard ? (
            userCard.map((item) => (
              <div
                key={item._id}
                className="flex justify-between flex-wrap items-end gap-5 relative overflow-hidden border-b-[.7px] border-black/10 p-1"
              >
                <div className="relative w-12 h-12 bg-cover object-cover ">
                  <Image
                    src={item.image || ""}
                    alt={item.name}
                    fill
                    quality={100}
                    className="bg-cover object-cover rounded-full shadow-lg"
                  />
                </div>
                <div className="flex items-end gap-5 w-[80%]">
                  <p className="text-left w-[30%]">{item.name}</p>
                  <p className="text-left w-[50%]">
                    <strong>email: </strong>
                    {item.email}
                  </p>
                  <p className="text-left w-[15%]">
                    <strong>tipo: </strong>
                    {item.tipo}
                  </p>
                </div>
                <div className="flex justify-between items-end gap-5">
                  <Btn url={`/user/${item._id}`} icon={<GrView size={20} />} />
                  <Btn
                    url={`/user/${item._id}/userUpdate`}
                    icon={<AiFillEdit size={20} />}
                  />
                  {user.data?._id !== item._id && (
                    <BtnDeleteProducts
                      url={`${urlDel}/${item._id}`}
                      pathToRevalidate="/dashboard" // caminho da página que você quer revalidar
                    />
                  )}
                </div>
              </div>
            ))
          ) : (
            <h1>Nenhum itemuto Cadastrado</h1>
          )}
        </Suspense>
      </main>
    </Container>
  );
}
