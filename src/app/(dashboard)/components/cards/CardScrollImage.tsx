"use client";
//componente biblioteca
import { motion } from "framer-motion";
//componente
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
//meu componentte
import { UserProps } from "@/app/types/user";

export default function CardScrollImage({user}: {user: UserProps[]}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);

//Função realiza o efeito de scroll horizontal nas imagens
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;

      const { left, width } = container.getBoundingClientRect();
      const mouseX = e.clientX - left; // Posição do mouse dentro do container

      const threshold = width * 0.3; // Define as zonas de ativação (30% das laterais)
      const maxScroll = container.scrollWidth - container.clientWidth;
      let newScrollX = scrollX;

      if (mouseX < threshold) {
        newScrollX = Math.max(scrollX - 5, 0); // Rola para a esquerda
      } else if (mouseX > width - threshold) {
        newScrollX = Math.min(scrollX + 5, maxScroll); // Rola para a direita
      }

      setScrollX(newScrollX);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [scrollX]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden flex items-center  h-28 relative w-[80%]"
    >
      {/* cria um efeito na imagem */}
      <motion.div
        className="flex z-0"
        animate={{ x: -scrollX }}
        transition={{ type: "tween", duration: 0.8 }}
      >
        {user.map((item, index) => (
          <div
            key={item._id}
            className={`relative z-10 w-14 h-14 hover:scale-150 hover:shadow-2xl rounded-full ${
              index !== 0 ? "ml-[-20px]" : ""
            }`}
          >
            <Image src={item.image || ''} alt="avatar" fill quality={100} className="rounded-full shadow-md" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
