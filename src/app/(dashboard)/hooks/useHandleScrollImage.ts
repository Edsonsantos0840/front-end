'use client'

import { useEffect, useRef, useState } from "react";

export default function useHandleScrollImage() {
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
    
  return {containerRef, scrollX}
}
