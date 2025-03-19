"use client";
//componentes
import Image from "next/image";
//meus componentes
import { ProdutoProps } from "@/app/types/produtoTypes";
import useShowImages from "@/app/hooks/useShowImages";

export default function CardImages({ product }: { product: ProdutoProps }) {
//busca as imagens
 const {images, isFading, handleImageChange, selectedImage} = useShowImages({product})

  return (
    <section className="flex flex-col md:flex-row md:gap-4">
      {/* Galeria de miniaturas */}
      <ul
        className="flex flex-row md:flex-col justify-between gap-3  md:max-h-[600px] lg:max-h-[380px]"
        aria-label="Galeria de miniaturas do produto"
      >
        {images.map((image, index) => (
          <figure
            key={index}
            className="relative w-[90px] h-[90px] md:w-[150px] md:h-[150px] lg:w-[92px] lg:h-[92px] cursor-pointer rounded-lg"
          >
            <Image
              src={image || ""}
              alt={`Miniatura ${index + 1} do produto ${product.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              onClick={() => handleImageChange(image)}
              className="hover:opacity-80 transition-opacity hover:scale-105 bg-black rounded-lg"
            />
          </figure>
        ))}
      </ul>

      {/* Imagem principal com efeito de transição */}
      <figure
        id="show"
        className="w-[380px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[380px] lg:max-h-[380px] mt-2 relative rounded-lg md:mt-0"
      >
        <Image
          src={selectedImage || ""}
          alt={`Imagem principal do produto ${product.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          className={`transition-opacity duration-200 ${
            isFading ? "opacity-0" : "opacity-100"
          } rounded-lg`}
        />
      </figure>
    </section>
  );
}
