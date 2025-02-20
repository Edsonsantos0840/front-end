import Menu from "./Menu";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { IoBagAdd } from "react-icons/io5";
import Link from "next/link";
import { IoIosPerson, IoMdPersonAdd } from "react-icons/io";
import { MdDashboardCustomize } from "react-icons/md";

import { Block } from "@/app/middleware/blockedPage";
import { logOut } from "@/app/functions/auth/logOut";
import { GiPresent } from "react-icons/gi";
import { Suspense } from "react";

export default async function NavBar() {
  const { user } = await Block();
  return (
    <section className="w-full bg-[var(--corPrincipal)] fixed shadow-lg z-50">
      <div className="alinha4 p-2 m-4 max-w-[1200px]  md:m-auto">
        <Menu />
        <Suspense fallback={"Carregando..."}>
          {user.data?.tipo === "admin" && (
            <div className="space-x-8 flex font-Ysabea font-bold">
              <Link
                href={"/home"}
                className=" alinha2 hover:scale-125 transition-all ease-in-out duration-300"
              >
                <MdDashboardCustomize size={30} color="var(--corFundo2)" />
                <span className="text-sm font-light text-gray-200">
                  dashboard
                </span>
              </Link>
              <Link
                href={"/user"}
                className=" alinha2 hover:scale-125 transition-all ease-in-out duration-300"
              >
                <IoIosPerson size={30} color="var(--corFundo2)" />
                <span className="text-sm font-light text-gray-200">
                  Usuários
                </span>
              </Link>
              <Link
                href={"/product"}
                className=" alinha2 hover:scale-125 transition-all ease-in-out duration-300"
              >
                <GiPresent size={30} color="var(--corFundo2)" />
                <span className="text-sm font-light text-gray-200">
                  Produtos
                </span>
              </Link>
              <Link
                href={"/productRegister"}
                className=" alinha2 hover:scale-125 transition-all ease-in-out duration-300"
              >
                <IoBagAdd size={30} color="var(--corFundo2)" />{" "}
                <span className="text-sm font-light text-gray-200">
                  cadastro
                </span>
              </Link>
              <Link
                href={"/userRegister"}
                className=" alinha2 hover:scale-125 transition-all ease-in-out duration-300"
              >
                <IoMdPersonAdd size={30} color="var(--corFundo2)" />
                <span className="text-sm font-light text-gray-200">
                  cadastro
                </span>
              </Link>
            </div>
          )}

          <div className="alinha4 w-1/4 ">
            {user.data?.email !== "edsonbrasilcard@gmail.com" ? (
              <Link
                href={"/userRegister"}
                className=" block font-Ysabea text-gray-50 hover:scale-125 transition-all ease-in-out duration-300"
              >
                cadastro
              </Link>
            ) : (
              <Link
                href={"/userRegister"}
                className=" hidden font-Ysabea text-gray-50 hover:scale-125 transition-all ease-in-out duration-300"
              >
                cadastro
              </Link>
            )}

            <Link
              className="font-Ysabea text-gray-50 hover:scale-125 transition-all ease-in-out duration-300"
              href={"/"}
            >
              Inicio
            </Link>

            <Link
              className="font-Ysabea text-gray-50 hover:scale-125 transition-all ease-in-out duration-300"
              href={"/"}
            >
              Contato
            </Link>

            {user.data && (
              <button
                className="alinha6 gap-3 text-gray-200  pl-2 font-Ysabea hover:scale-125 transition-all ease-in-out duration-300"
                onClick={logOut}
              >
                <strong className="py-1">Sair</strong>
                <FiLogOut size={26} />
              </button>
            )}

            {!user.data && (
              <Link
                href={"/login"}
                className="alinha6 gap-3 text-gray-200 pr-2 font-Ysabea hover:scale-125 transition-all ease-in-out duration-300"
              >
                <FiLogIn size={26} />
                <strong className="py-1">Login</strong>
              </Link>
            )}
          </div>
        </Suspense>
      </div>
    </section>
  );
}
