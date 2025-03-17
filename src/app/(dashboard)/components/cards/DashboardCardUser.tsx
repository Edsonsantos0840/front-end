"use client";
//meus componentes
import Btn from "@/app/(home)/components/buttons/Btn";
import BtnDeleteProducts from "@/app/(dashboard)/components/buttons/BtnDeleteProducts";
import useScroll from "@/app/hooks/useScroll";
import { UserProps } from "@/app/types/user";
// componentes bibliotecas
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
//componentes
import Image from "next/image";
import { Suspense } from "react";
//icons
import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { PiUserCircleFill } from "react-icons/pi";

export default function DashboardCardUser({
  userCard,
  user,
}: {
  userCard: UserProps[];
  user: UserProps;
}) {
  const urlDel = `${process.env.BASE_URL}/user`;
  //função de scroll
  const { containerRef } = useScroll();
  
  return (
    <main>
    <Suspense fallback={<p>Carregando...</p>}>
      {userCard && userCard.length > 0 ? (
        <section className="overflow-x-auto">
          <div
            ref={containerRef}
            className="overflow-hidden h-screen relative scrollbar-hidden"
          >
            <table className="w-full">
              {/* Descrição da tabela */}
              <caption className="sr-only">Tabela de usuários cadastrados</caption> 
              <thead>
                <tr className="grid grid-cols-[auto_3fr_2fr_auto_1fr] gap-4 text-textos mb-8 bg-fundo3">
                  <th scope="col" className="p-3 text-left">Avatar</th>
                  <th scope="col" className="p-3 text-left">Nome</th>
                  <th scope="col" className="p-3 text-left">Email</th>
                  <th scope="col" className="p-3 text-left">Tipo</th>
                  <th scope="col" className="p-3 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {userCard.map((item) => (
                  <tr
                    key={item._id}
                    className="grid grid-cols-[auto_3fr_2fr_auto_1fr] gap-4 rounded-md mb-4 px-4"
                  >
                    <td className="px-3 mr-5 w-12 h-12 relative rounded-full overflow-hidden hover:bg-fundo3">
                      {/* Descrição do alt */}
                      <Image
                        src={item.image || ""}
                        alt={`Avatar de ${item.name}`}  
                        fill
                        quality={100}
                        className="object-cover"
                      />
                    </td>
                    <td className="px-3 flex flex-col font-ysabeau uppercase text-textos hover:bg-fundo3 rounded-md border-b-2">
                      <span className="font-black flex items-center gap-4">
                        {item.name}
                      </span>
                      <span className="text-xs italic text-textos/60 ml-3 p-1">
                        {item.createdAt
                          ? format(
                              new Date(item.createdAt),
                              "dd 'de' MMMM 'de' yyyy",
                              { locale: ptBR }
                            )
                          : "Data não disponível"}
                      </span>
                    </td>
                    <td className="p-3 flex text-textos font-semibold hover:bg-fundo3 rounded-lg border-b-2">
                      {item.email}
                    </td>
                    <td
                      className={`px-3 font-ysabeau h-6 mt-3 flex gap-2 items-center font-semibold hover:bg-fundo3 rounded-lg ${
                        item.tipo === "admin"
                          ? "text-green-800 bg-green-100 hover:scale-105"
                          : "text-principal2 bg-red-100 hover:scale-105"
                      }`}
                    >
                      <span>
                        <PiUserCircleFill size={18} />
                      </span>{" "}
                      {item.tipo}
                    </td>
                    <td className="p-3 flex justify-between rounded-md border-b-2">
                       {/* Descrição do botão */}
                      <Btn
                        url={`/user/${item._id}`}
                        icon={<FaCheck size={20} className="text-green-800/80" />}
                        aria-label={`Ver detalhes do usuário ${item.name}`}  
                      />
                       {/* Descrição do botão */}
                      <Btn
                        url={`/user/${item._id}/userUpdate`}
                        icon={<MdEdit size={26} className="text-textos3/60" />}
                        aria-label={`Editar usuário ${item.name}`}  
                      />
                       {/* Descrição do botão */}
                      {user._id !== item._id && (
                        <BtnDeleteProducts
                          url={`${urlDel}/${item._id}`}
                          pathToRevalidate="/dashboard"
                          aria-label={`Excluir usuário ${item.name}`} 
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : (
        <p className="text-center text-gray-500">Nenhum item cadastrado.</p>
      )}
    </Suspense>
  </main>
  
  );
}
