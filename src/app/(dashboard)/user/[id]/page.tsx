import BtnDeleteProducts from "@/app/components/buttons/BtnDeleteProducts";
import { BtnUpdate } from "@/app/components/buttons/BtnUpdate";
import Container from "@/app/components/containers/Container";
import { UserProps } from "@/app/types/user";
import Image from "next/image";

import React from "react";

export default async function UserwithId({ params }: { params: { id: string } }) {
 const {id} = await params
  const url = `${process.env.BASE_URL}/users/${id}`;
  const urlDel = `${process.env.BASE_URL}/user`;

  async function getUserWithId() {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.log(` Houve um erro ${res.status} ao buscar os dados`);
      }
      const json = await res.json();
      return json;
    } catch (error) {
      console.log(`${error} Houve este erro ao buscar os dados`);
    }
  }
  const user: UserProps = await getUserWithId();

  if (user)
    return (
      <Container>
        <h1 className="text-red-700 text-2xl text-center font-bold">Usuários</h1>
        <main className="px-6 space-y-4 flex flex-col mt-5">
          <div className="relative w-64 h-64 bg-cover object-cover ">
            {
            user.image ?
            <Image
              src={user.image}
              alt={user.name}
              fill
              quality={100}
              className="bg-cover object-cover shadow-lg"
            /> :
            <p>não tem foto</p>
            }
          </div>
          <div className=" w-[80%]">
            <p className="text-left w-[30%]">{user.name}</p>
            <p className="text-left w-[50%]">
              <strong>email: </strong>
              {user.email}
            </p>
            <p className="text-left w-[15%]">
              <strong>tipo: </strong>
              {user.tipo}
            </p>
          </div>
          <div className="flex justify-between items-end gap-5 w-[10%]">
            <BtnUpdate url={`/user/${id}/userUpdate`} />
            <BtnDeleteProducts
              url={`${urlDel}/${id}`}
              pathToRevalidate="/dashboard" // caminho da página que você quer revalidar
            />
          </div>
        </main>
      </Container>
    );
}
