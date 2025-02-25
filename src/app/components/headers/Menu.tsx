import { Fragment } from "react";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Block } from "@/app/middleware/blockedPage";

export default async function Menu() {
  const { user } = await Block();

  return (
    <Popover className="relative focus:border-none">
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
        <PopoverPanel className="absolute left-[-90px]  z-10 mt-3 flex w-screen lg:max-w-[400px] ">
          <nav className="w-full px-4 pb-2  text-sm font-semibold  text-gray-700 shadow-lg  inset-0 bg-black/10 backdrop-blur-md">
            <p>
              Olá: <strong className=" text-base">@{user.name}</strong>
            </p>
            <p className="mb-1">Visite nossos serviços por categoria.</p>
            <ul className="flex">
              <li>
              <Link
                href="/bathrooms"
                className=" hover:text-[var(--corPrincipal)] text-lg font-medium"
              >
                Banheiros
              </Link>
              </li>
              <li>
              <Link
                href="/bathrooms"
                className="hover:text-[var(--corPrincipal)] ml-3 text-lg font-medium"
              >
                Cozinhas
              </Link>
              </li>
              <li>
              <Link
                href="/"
                className=" hover:text-[var(--corPrincipal)] ml-3 text-lg font-medium"
              >
                Escadas
              </Link>
              </li>
              <li>
              <Link
                href="/"
                className=" hover:text-[var(--corPrincipal)] ml-3 text-lg font-medium"
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
