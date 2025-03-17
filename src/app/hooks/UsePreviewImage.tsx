"use client";
import { useState } from "react";

export default function UsePreviewImage() {
  const [previews, setPreviews] = useState<{ [key: string]: string | null }>({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  // Estado para armazenar os ficheiros selecionados
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  console.log(files);
  // Atualiza a prévia da imagem correta
  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    imageKey: string
  ) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [imageKey]: selectedFile,
      }));

      setPreviews((prevPreviews) => ({
        ...prevPreviews,
        // Cria um link temporário para exibir a imagem
        [imageKey]: URL.createObjectURL(selectedFile), 
      }));
    }
  };

  return { previews, handleImageChange };
}
