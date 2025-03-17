"use client";

import { useRef, useEffect } from "react";

const useScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;

      const { top, height } = container.getBoundingClientRect();
      const mouseY = e.clientY - top; // Posição do mouse dentro do container

      const threshold = height * 0.3; // 30% superior e inferior ativam a rolagem
      let scrollAmount = 0;

      if (mouseY < threshold) {
        scrollAmount = -5; // Rolar para cima
      } else if (mouseY > height - threshold) {
        scrollAmount = 5; // Rolar para baixo
      }

      container.scrollTop += scrollAmount;
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return { containerRef }; // Adicionado scrollX no retorno
};

export default useScroll;
