
"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { NavFields } from "../fields/NavFields";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="inline-flex items-center text-sm font-semibold cursor-pointer">
        <Bars3Icon className="w-8 h-8 text-white" />
      </div>

      {isOpen && (
        <div className="absolute min-w-[600px] md:min-w-[400px] left-[-10px] lg:left-[-90px] z-10 -mt-2 flex lg:max-w-[400px] animate-fade-in">
          <nav className="w-full px-4 pb-2 text-sm font-semibold text-gray-800 shadow-lg inset-0 bg-black/9 backdrop-blur-xl">
            <p className="mb-1 text-2xl md:text-xl">
              Nossos serviços por categoria.
            </p>
            <ul className="flex gap-4 text-principal2 text-xl lg:text-lg font-bold lg:font-medium">
              {NavFields.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-textos">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
