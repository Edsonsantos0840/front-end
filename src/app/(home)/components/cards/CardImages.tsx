'use client'
import Image from "next/image";
import { ProdutoProps } from "@/app/types/produtoTypes";
import { useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function CardImages({ product }: { product: ProdutoProps }) {
  const images = [product.image1, product.image2, product.image3, product.image4].filter(Boolean);
  const [selectedImage, setSelectedImage] = useState(images[0]); // Define a primeira imagem como padrão
  const [isFading, setIsFading] = useState(false);


  const handleImageChange = (image: string | StaticImport | undefined) => {
    if (image !== selectedImage) {
      setIsFading(true);
     setTimeout(() => {
        setSelectedImage(image);
        setIsFading(false);
      }, 300); // Tempo de transição
      
    }
  };

  return (
    <section className="flex flex-col md:flex-row md:gap-4">
      {/* Galeria de miniaturas */}
      <ul className="flex flex-row md:flex-col justify-between gap-3  md:max-h-[600px] lg:max-h-[380px]" aria-label="Galeria de miniaturas do produto">
        {images.map((image, index) => (
          <li key={index} className="relative w-[90px] h-[90px] md:w-[150px] md:h-[150px] lg:w-[92px] lg:h-[92px] cursor-pointer rounded-lg">
            <Image
              src={image || ''}
              alt={`Miniatura ${index + 1} do produto ${product.title}`}
              fill
              quality={100}
              onClick={() => handleImageChange(image)}
              className="hover:opacity-80 transition-opacity hover:scale-105 bg-black rounded-lg"
            />
          </li>
        ))}
      </ul>

      {/* Imagem principal com efeito de transição */}
      <figure id="show" className="w-[380px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[380px] lg:max-h-[380px] mt-2 relative rounded-lg md:mt-0">
        <Image
          src={selectedImage ||''}
          alt={`Imagem principal do produto ${product.title}`}
          fill
          quality={100}
          className={`transition-opacity duration-200 ${isFading ? "opacity-0" : "opacity-100"} rounded-lg`}
        />
      </figure>
    </section>
  );
}
