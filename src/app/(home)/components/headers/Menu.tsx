//componentes
import Link from "next/link";
import { Fragment } from "react";
//componentes bibliotecas
import {Popover, PopoverButton, PopoverPanel, Transition} from "@headlessui/react";
//icons
import { Bars3Icon } from "@heroicons/react/20/solid";
//meus componentes
import { Block } from "@/app/middleware/blockedPage";

export default async function Menu() {
  //busca o usuário logado
  const { user } = await Block();

  return (
    <Popover className="relative focus:border-none ">
        {/* menu bibliotyeca externa */}
      <PopoverButton className="inline-flex items-center  text-sm font-semibold focus:border-none ">
        <Bars3Icon className="w-8 h-8 text-white focus:border-none " />
      </PopoverButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute left-[-10px] lg:left-[-90px]  z-10 mt-3 flex lg:max-w-[400px] ">
          <nav className="w-full px-4 pb-2  text-sm font-semibold  text-gray-800 shadow-lg  inset-0 bg-black/5 backdrop-blur-md">
            <p className="text-xl md:text-base">
              Olá: <strong className="text-2xl md:text-base">@{user.name}</strong>
            </p>
            <p className="mb-1 text-xl md:text-base">Nossos serviços por categoria.</p>
            <ul className="flex text-principal2 gap-2 text-xl lg:text-lg font-bold lg:font-medium">
              <li>
              <Link
                href="/bathrooms"
                className="hover:text-textos "
              >
                Banheiros
              </Link>
              </li>
              <li>
              <Link
                href="/kitchen"
                className="hover:text-textos"
              >
                Cozinhas
              </Link>
              </li>
              <li>
              <Link
                href="/steps"
                className=" hover:text-textos"
              >
                Escadas
              </Link>
              </li>
              <li>
              <Link
                href="/outdoor"
                className="hover:text-textos "
              >
                Exteriores
              </Link>
              </li>
            </ul>
          </nav>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
