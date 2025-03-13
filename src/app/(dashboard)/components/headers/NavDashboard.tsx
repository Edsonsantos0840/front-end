import { IoBagAdd } from "react-icons/io5";
import Link from "next/link";
import { IoIosPerson, IoMdPersonAdd } from "react-icons/io";
import { MdDashboardCustomize } from "react-icons/md";
import { logOut } from "@/app/functions/auth/logOut";
import { GiPresent } from "react-icons/gi";
import { Suspense } from "react";
import { FiLogOut } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { RiContactsBook3Fill } from "react-icons/ri";

export default async function NavDashboard() {
  return (
    <aside className="">
      <nav className="p-2 m-4 ">
        <Suspense fallback={"Carregando..."}>
          <ul className=" font-Ysabea font-bold flex flex-col gap-4">
            <li className=" mb-3 hover:scale-125 transition-all ease-in-out duration-300">
              <Link href={"/"}>
                <FaHome
                  size={40}
                  color="var(--corFundo2)"
                  className=" text-center "
                />
                <span className=" text-gray-200 border-b-2 w-full">Início</span>
              </Link>
            </li>
            <li className=" text-center hover:scale-125 transition-all ease-in-out duration-300">
              <Link href={"/home"}>
                <MdDashboardCustomize
                  size={30}
                  color="var(--corFundo2) "
                  className=" "
                />
                <span className="text-sm font-light text-gray-200">
                  dashboard
                </span>
              </Link>
            </li>
            <li className=" text-center hover:scale-125 transition-all ease-in-out duration-300">
              <Link href={"/user"}>
                <IoIosPerson
                  size={30}
                  color="var(--corFundo2)"
                  className=" text-center "
                />
                <span className="text-sm font-light text-gray-200">
                  Usuários
                </span>
              </Link>
            </li>
            <li className=" text-center hover:scale-125 transition-all ease-in-out duration-300">
              <Link href={"/product"}>
                <GiPresent
                  size={30}
                  color="var(--corFundo2)"
                  className=" text-center "
                />
                <span className="text-sm font-light text-gray-200">
                  Produtos
                </span>
              </Link>
            </li>
            <li className=" text-center hover:scale-125 transition-all ease-in-out duration-300">
              <Link href={"/productRegister"} className=" text-center ">
                <IoBagAdd size={30} color="var(--corFundo2)" />{" "}
                <span className="text-sm font-light text-gray-200">
                  cadastro
                </span>
              </Link>
            </li>
            <li className=" text-center hover:scale-125 transition-all ease-in-out duration-300">
              <Link href={"/userRegister"}>
                <IoMdPersonAdd
                  size={30}
                  color="var(--corFundo2)"
                  className=" text-center "
                />
                <span className="text-sm font-light text-gray-200">
                  cadastro
                </span>
              </Link>
            </li>
            <li className=" text-center hover:scale-125 transition-all ease-in-out duration-300">
              <Link href={"/"}>
                <RiContactsBook3Fill
                  size={30}
                  color="var(--corFundo2)"
                  className=" text-center "
                />
                <span className="text-sm font-light text-gray-200">
                  contato
                </span>
              </Link>
            </li>

            <button
              className=" text-gray-200 font-Ysabea hover:scale-125 transition-all ease-in-out duration-300  "
              onClick={logOut}
            >
              <FiLogOut
                size={30}
                color="var(--corFundo2)"
                className=" text-center "
              />
              <strong className="">Sair</strong>
            </button>
          </ul>
        </Suspense>
      </nav>
    </aside>
  );
}
