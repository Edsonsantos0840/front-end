"use client";
//meus componentes
import UsePreviewImage from "@/app/hooks/UsePreviewImage";
//componentes
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface PreviewImageProps {
  img: string[];
  current2?: string | StaticImport;
  current3?: string | StaticImport;
  current1: string | StaticImport;
  current4?: string | StaticImport;
}

export default function CardPreviewImage({img, current1, current2, current3, current4,}: PreviewImageProps) {
  const { previews, handleImageChange } = UsePreviewImage();

  const currentImage = [current1, current2, current3, current4];

  return (
    <>
      <section className="flex flex-wrap  justify-center items-center">
        {img.map((imageKey, index) => (
          <label
            key={imageKey}
            className="cursor-pointer border-dashed border-[1px] border-[#b91c1c]/15 lg:text-sm lg:my-1 hover:scale-105 flex flex-col justify-center items-center  p-2 ml-4 lg:p-1 "
          >
            <input
              type="file"
              name={imageKey}
              onChange={(event) => handleImageChange(event, imageKey)}
              className="hidden"
            />

            {previews[imageKey] ? (
              <figure className="relative w-[100px] h-[80px]  ">
                <Image
                  src={previews[imageKey] as string}
                  alt={`Prévia da ${imageKey}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 23vw"
                  quality={100}
                  className="rounded-md"
                />
              </figure>
            ) : (
              <figure className="relative w-[100px] h-[80px] ">
                <Image
                  src={currentImage[index] || ""}
                  alt={`Prévia da imagem`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 23vw"
                  quality={100}
                  className="rounded-md"
                />
              </figure>
            )}

            <span className="text-gray-600 text-lg md:text-sm mt-2 " aria-describedby="Campo de seleção de imagem">
             Selecionar 
            </span>
          </label>
        ))}
      </section>
    </>
  );
}
