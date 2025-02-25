"use client";
import UsePreviewImage from "@/app/hooks/UsePreviewImage";
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
      <div className="grid grid-cols-4 gap-4">
        {img.map((imageKey, index) => (
          <label
            key={imageKey}
            className="cursor-pointer border-dashed border-[1px] border-[#b91c1c]/15 text-sm my-5 hover:scale-105 flex flex-col items-center justify-center p-4"
          >
            <input
              type="file"
              name={imageKey}
              onChange={(event) => handleImageChange(event, imageKey)}
              className="hidden"
            />

            {previews[imageKey] ? (
              <div className="relative w-[170px] h-[170px]">
                <Image
                  src={previews[imageKey] as string}
                  alt={`Prévia da ${imageKey}`}
                  fill
                  quality={100}
                  className="rounded-md"
                />
              </div>
            ) : (
              <div className="relative w-[170px] h-[170px]">
                <Image
                  src={currentImage[index] || ""}
                  alt={`Prévia da imagem`}
                  fill
                  quality={100}
                  className="rounded-md"
                />
              </div>
            )}

            <span className="text-gray-600 text-sm mt-2">
              Clique para selecionar {imageKey}
            </span>
          </label>
        ))}
      </div>
    </>
  );
}
