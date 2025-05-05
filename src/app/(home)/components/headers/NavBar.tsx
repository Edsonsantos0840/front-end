//meus componentes
import Menu from "./Menu";
import { Block } from "@/app/middleware/blockedPage";
import { logOut } from "@/app/functions/auth/logOut";
//icons
import { FiLogIn, FiLogOut } from "react-icons/fi";
//componentes
import Link from "next/link";
import { NavBarFields } from "../fields/NavFields";
// import { Suspense } from "react";


export default async function NavBar() {
  //busca o usuário logado
  const { user } = await Block();

  return (
    <header className="w-[100vw] bg-principal fixed shadow-lg z-50 top-0">
      <aside>
        <nav className="flex alinha4 p-2 max-w-[1200px]  md:m-auto">
          <Menu />
          {/* <Suspense fallback={"Carregando..."}> */}
            {user.tipo === "admin" && (
              <ul className="hidden md:flex gap-8 font-Ysabea font-bold text-base">
                {
                  NavBarFields.map((item, index) => (
                    <li key={`${index}-${item.href}`}>
                    <Link
                      href={item.href}
                      className=" alinha2 hover:scale-125 transition-all ease-in-out duration-300"
                    >
                      {item.icon}
                      <span className="text-sm font-light text-gray-200">
                       {item.text}
                      </span>
                    </Link>
                  </li>
                  ))
                }
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
              <li className=" hover:scale-125 transition-all ease-in-out duration-300">
                <Link
                  className="font-Ysabea text-gray-50"
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
          {/* </Suspense> */}
        </nav>
      </aside>
    </header>
  );
}
