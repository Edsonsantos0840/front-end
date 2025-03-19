"use client";
//componente biblioteca
import { motion } from "framer-motion";
//componente
import Image from "next/image";
//meu componentte
import { UserProps } from "@/app/types/user";
import useHandleScrollImage from "../../hooks/useHandleScrollImage";

export default function CardScrollImage({user}: {user: UserProps[]}) {
 const {containerRef, scrollX} = useHandleScrollImage()
  return (
    <section
      ref={containerRef}
      className="overflow-hidden flex items-center  h-28 relative w-[80%]"
      aria-live="polite"
    >
      {/* cria um efeito na imagem */}
      <motion.div
        className="flex z-0"
        animate={{ x: -scrollX }}
        transition={{ type: "tween", duration: 0.8 }}
      >
        {user.map((item, index) => (
          <figure
            key={item._id}
            className={`relative z-10 w-14 h-14 hover:scale-150 hover:shadow-2xl rounded-full ${
              index !== 0 ? "ml-[-20px]" : ""
            }`}
            role="group"
          >
            <Image src={item.image || ''} alt={`avatar de ${item.name}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={100} className="rounded-full shadow-md" />
            <figcaption className="sr-only">{item.name}</figcaption> 
          </figure>
        ))}
      </motion.div>
    </section>
  );
}
