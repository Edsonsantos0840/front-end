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
    <header className="w-[100vw] bg-principal fixed shadow-lg z-50 top-0">
      <aside>
        <nav className="flex alinha4 p-2 max-w-[1200px]  md:m-auto">
          <Menu />
          <Suspense fallback={"Carregando..."}>
            {user.tipo === "admin" && (
              <ul className=" flex gap-8 font-Ysabea font-bold text-base">
                <li>
                  <Link
                    href={"/home"}
                    className=" alinha2 hover:scale-125 transition-all ease-in-out duration-300"
                  >
                    <MdDashboardCustomize size={30} color="var(--corFundo2)" />
                    <span className="text-sm font-light text-gray-200">
                      Dashboard
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/user"}
                    className=" alinha2 hover:scale-125 transition-all ease-in-out duration-300"
                  >
                    <IoIosPerson size={30} color="var(--corFundo2)" />
                    <span className="text-sm font-light text-gray-200">
                      Usuários
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/product"}
                    className=" alinha2 hover:scale-125 transition-all ease-in-out duration-300"
                  >
                    <GiPresent size={30} color="var(--corFundo2)" />
                    <span className="text-sm font-light text-gray-200">
                      Produtos
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/productRegister"}
                    className=" alinha2 hover:scale-125 transition-all ease-in-out duration-300"
                  >
                    <IoBagAdd size={30} color="var(--corFundo2)" />{" "}
                    <span className="text-sm font-light text-gray-200">
                      cadastro
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/userRegister"}
                    className=" alinha2 hover:scale-125 transition-all ease-in-out duration-300"
                  >
                    <IoMdPersonAdd size={30} color="var(--corFundo2)" />
                    <span className="text-sm font-light text-gray-200">
                      Cadastro
                    </span>
                  </Link>
                </li>
              </ul>
            )}

            <ul className="alinha4 gap-5 lg:gap-0 lg:w-1/4 text-xl lg:text-lg font-bold lg:font-medium ">
              {user.tipo !== "admin" ? (
                <li>
                  <Link
                    href={"/userRegister"}
                    className=" block font-Ysabea text-gray-50 hover:scale-125 transition-all ease-in-out duration-300"
                  >
                    Cadastro
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={"/userRegister"}
                    className=" hidden font-Ysabea text-gray-50 hover:scale-125 transition-all ease-in-out duration-300"
                  >
                    Cadastro
                  </Link>
                </li>
              )}
              <li>
                <Link
                  className="font-Ysabea text-gray-50 hover:scale-125 transition-all ease-in-out duration-300"
                  href={"/"}
                >
                  Inicio
                </Link>
              </li>
              {user.name !== undefined ? (
                <button
                  className="alinha6 gap-3 text-gray-200  pl-2 font-Ysabea hover:scale-125 transition-all ease-in-out duration-300"
                  onClick={logOut}
                >
                  <strong className="py-1">Sair</strong>
                  <FiLogOut size={26} />
                </button>
              )
               :
              (
                <li>
                  <Link
                    href={"/login"}
                    className="alinha6 gap-3 text-gray-200 pr-2 font-Ysabea hover:scale-125 transition-all ease-in-out duration-300"
                  >
                    <FiLogIn size={26} />
                    <strong className="py-1">Login</strong>
                  </Link>
                </li>
              )}
            </ul>
          </Suspense>
        </nav>
      </aside>
    </header>
  );
}
