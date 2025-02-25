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
      <main className="px-6 space-y-4 flex flex-col mt-5">
        <Suspense fallback={"Carregando..."}>
          <article>
            <figure className="relative w-64 h-64 bg-cover object-cover">
              {userCard.image ? (
                <Image
                  src={userCard.image}
                  alt={userCard.name}
                  fill
                  quality={100}
                  className="bg-cover object-cover shadow-lg"
                />
              ) : (
                <figcaption>Não tem foto</figcaption>
              )}
            </figure>
            <section className="w-[80%]">
              <h2 className="text-left w-[30%]">{userCard.name}</h2>
              <p className="text-left w-[50%]">
                <strong>Email: </strong>
                {userCard.email}
              </p>
              <p className="text-left w-[15%]">
                <strong>Tipo: </strong>
                {userCard.tipo}
              </p>
            </section>
            <div className="flex justify-between items-end gap-5 w-[10%]">
              <Btn
                url={`/user/${id}/userUpdate`}
                icon={<AiFillEdit size={20} />}
              />
              {user._id !== userCard._id && (
                <BtnDeleteProducts
                  url={`${urlDel}/${id}`}
                  pathToRevalidate="/dashboard"
                />
              )}
            </div>
          </article>
        </Suspense>
      </main>
    </Container>
  );
}
