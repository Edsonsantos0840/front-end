//meus comppnentes
import Btn from "@/app/(home)/components/buttons/Btn";
import BtnDeleteProducts from "@/app/(dashboard)/components/buttons/BtnDeleteProducts";
import Container from "@/app/(home)/components/containers/Container";
import NavDashboard from "@/app/(dashboard)/components/headers/NavDashboard";
import { FetchGetAuth } from "@/app/functions/fetch/FetchGet";
import { Block } from "@/app/middleware/blockedPage";
import CardNotMobile from "../../components/cards/CardNotMobile";
import CardDashboardUserId from "../../components/cards/CardDashboardUserId";
import CardDashboardRedes from "../../components/cards/CardDashboardRedes";
import { UserProps } from "@/app/types/user";
//componentes
import Image from "next/image";
import React, { Suspense } from "react";
//icons
import { IoPerson } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import LoadingSuspense from "@/app/(home)/LoadingSuspense";

export default async function UserwithId({
  params,
}: {
  params: { id: string };
}) {
  const { id } =  params;
  const url = `${process.env.BASE_URL}/users/${id}`;
  const urlDel = `${process.env.BASE_URL}/user`;
  //busca o usuário logado
  const { user } = await Block();
  // busca os dados do usuário
  const { data: userCard } = await FetchGetAuth<UserProps>(url);
 //exibe se não houver usuários
  if (!userCard) {
    return (
      <Container>
        <h1>Dashboard</h1>
        <h1>Nenhum Produto Cadastrado</h1>
      </Container>
    );
  }
  return (
    <div>
    {/* Exibe este componente apenas em dispositivos móveis */}
    <CardNotMobile />
  
    <section className="hidden lg:grid grid-cols-[1fr_12fr]">
      {/* Barra lateral de navegação */}
      <aside className="bg-principal text-white">
        <NavDashboard />
      </aside>
  
      {/* Conteúdo principal */}
      <main className="px-6 space-y-4 flex flex-col mt-5">
        <header>
          <h1 className="text-red-700 text-2xl text-center font-bold">
            Usuário ID: {userCard._id}
          </h1>
        </header>
  
        <Suspense fallback={<LoadingSuspense />}>
          <section className="flex gap-20 items-center">
            {/* Foto do usuário */}
            <figure className="relative w-72 h-72 rounded-full bg-cover object-cover mb-4">
              {userCard.image ? (
                <Image
                  src={userCard.image}
                  alt={`Foto de perfil de ${userCard.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={100}
                  className="bg-cover object-cover shadow-lg rounded-full"
                />
              ) : (
                <figcaption>Não tem foto</figcaption>
              )}
            </figure>
  
            {/* Informações do usuário */}
            <section className="flex flex-col gap-3 font-ysabeau bg-fundo2 rounded-2xl p-5 w-[40vw]">
              <h2 className="flex gap-2 items-center text-2xl text-textos font-black">
                <IoPerson size={30} className="text-principal/80" /> {userCard.name}
              </h2>
  
              {/* Exibe detalhes do usuário */}
              <CardDashboardUserId userCard={userCard} />
  
              {/* Botões de ação */}
              <div className="alinha6 gap-5 bg-principal/5 py-1 rounded-xl w-[20%] self-center">
                <Btn
                  url={`/user/${id}/userUpdate`}
                  icon={<MdEdit size={26} color="#747474" />}
                  aria-label="Editar usuário"
                />
                {user._id !== userCard._id && (
                  <BtnDeleteProducts
                    url={`${urlDel}/${id}`}
                    pathToRevalidate="/dashboard"
                    aria-label="Excluir usuário"
                  />
                )}
              </div>
            </section>
          </section>
  
          {/* Redes sociais do usuário */}
          <section className="font-ysabeau bg-fundo2 rounded-2xl p-5">
            <h2 className="sr-only">Redes sociais do usuário</h2>
            <div className="alinha6 gap-3">
              <CardDashboardRedes userCard={userCard} />
            </div>
  
            {/* Descrição do usuário */}
            <article className="my-4">
              <h3 className="text-xl font-semibold">Sobre o usuário</h3>
              <p>
                Gosto de aprender, compartilhar conhecimento e interagir com
                pessoas que têm interesses semelhantes. Aqui você encontra um
                pouco sobre mim, minhas atividades e tudo o que gosto de
                fazer!
              </p>
              <p>
                <strong>Membro desde:</strong>{" "}
                {userCard.createdAt
                  ? new Date(userCard.createdAt).toLocaleDateString("pt-BR")
                  : "Data não disponível"}
                .
              </p>
              <p>
                Sinta-se à vontade para interagir e fazer parte da minha jornada!
              </p>
            </article>
          </section>
        </Suspense>
      </main>
    </section>
  </div>
  
  );
}
