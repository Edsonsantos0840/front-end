import Btn from "@/app/components/buttons/Btn";
import BtnDeleteProducts from "@/app/components/buttons/BtnDeleteProducts";
import Container from "@/app/components/containers/Container";
import { FetchGetAuth } from "@/app/functions/fetch/FetchGet";
import { Block } from "@/app/middleware/blockedPage";
import { UserProps } from "@/app/types/user";
import Image from "next/image";

import React, { Suspense } from "react";
import { AiFillEdit } from "react-icons/ai";

export default async function UserwithId({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const url = `${process.env.BASE_URL}/users/${id}`;
  const urlDel = `${process.env.BASE_URL}/user`;
  const { user } = await Block();
  const { data: userCard } = await FetchGetAuth<UserProps>(url);

  if (!userCard) {
    return (
      <Container>
        <h1>Dashboard</h1>
        <h1>Nenhum Produto Cadastrado</h1>
      </Container>
    );
  }
  return (
    <Container>
      <h1 className="text-red-700 text-2xl text-center font-bold">Usuários</h1>
      <Suspense fallback={"Carregando..."}>
        <main className="px-6 space-y-4 flex flex-col mt-5">
          <div className="relative w-64 h-64 bg-cover object-cover ">
            {userCard.image ? (
              <Image
                src={userCard.image}
                alt={userCard.name}
                fill
                quality={100}
                className="bg-cover object-cover shadow-lg"
              />
            ) : (
              <p>não tem foto</p>
            )}
          </div>
          <div className=" w-[80%]">
            <p className="text-left w-[30%]">{userCard.name}</p>
            <p className="text-left w-[50%]">
              <strong>email: </strong>
              {userCard.email}
            </p>
            <p className="text-left w-[15%]">
              <strong>tipo: </strong>
              {userCard.tipo}
            </p>
          </div>
          <div className="flex justify-between items-end gap-5 w-[10%]">
            <Btn
              url={`/user/${id}/userUpdate`}
              icon={<AiFillEdit size={20} />}
            />
            {user.data?._id !== userCard._id && (
              <BtnDeleteProducts
                url={`${urlDel}/${id}`}
                pathToRevalidate="/dashboard" // caminho da página que você quer revalidar
              />
            )}
          </div>
        </main>
      </Suspense>
    </Container>
  );
}
