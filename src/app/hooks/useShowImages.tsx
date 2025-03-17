import { useState } from "react";
import { ProdutoProps } from "../types/produtoTypes";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


export default function useShowImages({product}: {product: ProdutoProps}) {
      //lista de imagens
      const images = [
        product.image1,
        product.image2,
        product.image3,
        product.image4,
      ].filter(Boolean);
    
      const [selectedImage, setSelectedImage] = useState(images[0]); // Define a primeira imagem como padrão
      const [isFading, setIsFading] = useState(false);
     //função para apresentar a imagem clicada.
      const handleImageChange = (image: string | StaticImport | undefined) => {
        if (image !== selectedImage) {
          setIsFading(true);
          setTimeout(() => {
            setSelectedImage(image);
            setIsFading(false);
          }, 300); // Tempo de transição
        }
      };
  return {images, isFading, handleImageChange, selectedImage}
}
