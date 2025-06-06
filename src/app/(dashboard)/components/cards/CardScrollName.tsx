"use client";
//meus componentes
import useScroll from "@/app/hooks/useScroll";
import { UserProps } from "@/app/types/user";

export default function UserList({user}: {user: UserProps[]}) {
  //função de scrooll
const {containerRef} = useScroll()

  return (
    <section className=" py-2 rounded-md mt-4 w-[55%]">
      <div
        ref={containerRef}
        className=" overflow-hidden w-full h-40 relative  scrollbar-hidden"
      >
        <ul className="w-full p-3 text-textos font-ysabeau scrollbar-hidden">
          {user.map((item) => (
            <li
              key={item._id}
              className=" hover:scale-110 pl-10 hover:bg-black/10 rounded-2xl cursor-pointer relative flex items-center capitalize"
              role="listitem"  // Especifica o item como parte de uma lista
              aria-label={`Usuário ${item.name}`}  // Acessibilidade, descrevendo o item
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
