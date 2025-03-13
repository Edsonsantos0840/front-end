import Btn from "@/app/(home)/components/buttons/Btn";
import BtnDeleteProducts from "@/app/(dashboard)/components/buttons/BtnDeleteProducts";
import Container from "@/app/(home)/components/containers/Container";
import NavDashboard from "@/app/(dashboard)/components/headers/NavDashboard";
import { FetchGetAuth } from "@/app/functions/fetch/FetchGet";
import { Block } from "@/app/middleware/blockedPage";
import { UserProps } from "@/app/types/user";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import { GrUserWorker } from "react-icons/gr";
import React, { Suspense } from "react";
import { AiFillTikTok } from "react-icons/ai";
import { IoPerson } from "react-icons/io5";
import { BsCalendarDate, BsFillCalendarDateFill } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import Logo from "../../../../../public/logo.png";
import { MdEdit, MdPhoneInTalk } from "react-icons/md";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Link from "next/link";

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
    <div className=" ">
      <article className="flex flex-col justify-center items-center gap-4 text-textos p-2 font-semibold lg:hidden w-full h-screen ">
        <h2 className="text-2xl text-center">
          Não é possível acessar de dispositivos móveis.{" "}
        </h2>
        <div className=" w-[300px] h-[100px] md:w-[400px] md:h-[133px] lg:w-[600px] lg:h-[200px] ">
          <Image
            src={Logo}
            alt="Logo"
            width={600}
            height={200}
            className="w-auto h-auto"
          />
        </div>
        <p className="text-3xl ">Tente em um desktop!</p>
        <Link
          href={"/"}
          className="px-8 py-2 bg-principal rounded-lg text-textos2 font-bold hover:scale-105"
        >
          Voltar
        </Link>
      </article>
      <section className="hidden lg:grid grid-cols-[1fr_12fr]">
        <aside className="bg-principal text-white  ">
          <NavDashboard />
        </aside>
        <main className="px-6 space-y-4 flex flex-col mt-5">
          <h1 className="text-red-700 text-2xl text-center font-bold">
            Usuário Id: {userCard._id}
          </h1>
          <Suspense fallback={"Carregando..."}>
            <article className="flex gap-20 items-center">
              <figure className="relative w-72 h-72 rounded-full bg-cover object-cover mb-4">
                {userCard.image ? (
                  <Image
                    src={userCard.image}
                    alt={userCard.name}
                    fill
                    quality={100}
                    className="bg-cover object-cover shadow-lg rounded-full"
                  />
                ) : (
                  <figcaption>Não tem foto</figcaption>
                )}
              </figure>
              <section className="flex flex-col gap-3 font-ysabeau bg-fundo2 rounded-2xl  p-5 w-[40vw]">
                <h2 className="flex gap-2 items-center text-2xl text-textos font-black">
                  <IoPerson size={30} className="text-principal/80" />{" "}
                  {userCard.name}
                </h2>
                <p className="flex gap-3 items-center text-textos text-lg">
                  <TfiEmail size={24} className="text-principal/80" />
                  <strong>Email: </strong>
                  {userCard.email}
                </p>
                <p className="flex gap-2 items-center text-textos text-lg">
                  <GrUserWorker size={30} className="text-principal/80" />
                  <strong>Tipo: </strong>
                  {userCard.tipo}
                </p>
                <p className="flex gap-2 items-center text-textos text-lg">
                  <BsCalendarDate size={30} className="text-principal/80" />
                  <strong>Criado em:</strong>
                  {userCard.createdAt
                    ? format(
                        new Date(userCard.createdAt),
                        "dd 'de' MMMM 'de' yyyy",
                        { locale: ptBR }
                      )
                    : "Data não disponível"}
                </p>
                <p className="flex gap-2 items-center text-textos text-lg">
                  <BsFillCalendarDateFill
                    size={30}
                    className="text-principal/80"
                  />
                  <strong>Atualizado em: </strong>
                  {userCard.updatedAt
                    ? format(
                        new Date(userCard.updatedAt),
                        "dd 'de' MMMM 'de' yyyy",
                        { locale: ptBR }
                      )
                    : "Data não disponível"}
                </p>

                <div className="flex justify-center items-center gap-5 bg-principal/5 py-1 rounded-xl w-[20%] self-center">
                  <Btn
                    url={`/user/${id}/userUpdate`}
                    icon={<MdEdit size={26} color="#747474" />}
                  />
                  {user._id !== userCard._id && (
                    <BtnDeleteProducts
                      url={`${urlDel}/${id}`}
                      pathToRevalidate="/dashboard"
                    />
                  )}
                </div>
              </section>
            </article>
            <section className=" font-ysabeau bg-fundo2 rounded-2xl  p-5 ">
              <div className="flex  justify-center items-center gap-3">
                <h2 className="flex gap-2  items-center text-lg text-textos font-black">
                  <FaFacebookSquare size={30} color="#1877F2" />{" "}
                  <span>@{userCard.name}</span>
                </h2>
                <p className="flex gap-3 items-center text-textos2 text-lg">
                  <FaInstagram size={30} className="bg-[#FF9933] rounded-md" />
                  <strong className="text-textos">@{userCard.name}</strong>
                </p>
                <p className="flex gap-2 items-center text-textos text-lg">
                  <AiFillTikTok size={36} color="#FF0050" />
                  <strong>Não tem.</strong>
                </p>
                <p className="flex gap-2 items-center text-textos text-lg">
                  <MdPhoneInTalk size={30} color="#075E54" />
                  <strong>19-994758374</strong>
                </p>
                <p className="flex gap-2 items-center text-textos text-lg">
                  <FaWhatsappSquare size={36} color="#075E54" />
                  <strong>19-994758374 </strong>
                </p>
              </div>
              <article className="my-4">
                <h3>Descrição.</h3>
                <p>
                  Gosto de aprender, compartilhar conhecimento e interagir com
                  pessoas que têm interesses semelhantes. Aqui você encontra um
                  pouco sobre mim, minhas atividades e tudo o que gosto de
                  fazer! Sobre mim: Sempre em busca de novas experiências e
                  aprendizados Curioso por tecnologia, inovação e criatividade
                  Apreciador de boas conversas e novas conexões. Membro desde:{" "}
                  {userCard.createdAt
                    ? new Date(userCard.createdAt).toLocaleDateString("pt-BR")
                    : "Data não disponível"}
                  . Sinta-se à vontade para interagir e fazer parte da minha
                  jornada!
                </p>
              </article>
            </section>
          </Suspense>
        </main>
      </section>
    </div>
  );
}
