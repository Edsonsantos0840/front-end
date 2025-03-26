//meus componentes
import UsePreviewImage from "@/app/hooks/UsePreviewImage";
//componentes
import Image from "next/image";
//icons
import { MdImageSearch } from "react-icons/md";

export default function CardFormImage({ img }: { img: string[] }) {

  const { previews, handleImageChange } = UsePreviewImage();
  
  return (
    <section className="flex items-center justify-center gap-2 lg:gap-2 mt-2">
      {img.map((imageKey) => (
        <label
          key={imageKey}
          className="cursor-pointer border-dashed border-[1px] border-principal/15 lg:text-sm lg:my-1 hover:scale-105 flex flex-col items-center justify-center p-4 lg:p-0"
        >
          <input
            type="file"
            name={imageKey}
            onChange={(event) => handleImageChange(event, imageKey)}
            className="hidden"
          />
          {previews[imageKey] ? (
            <figure className="relative w-[220px] h-[220px] lg:w-[80px] lg:h-[80px]">
              <Image
                src={previews[imageKey] as string}
                alt={`Prévia da ${imageKey}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
                className="rounded-md"
              />
            </figure>
          ) : (
            <MdImageSearch color="#b91c1c54" className="w-[140px] h-[140px] lg:w-[80px] lg:h-[80px]" />
          )}
          <span className="text-gray-600 text-lg lg:text-sm mt-2">
          {imageKey}
          </span>
        </label>
      ))}
    </section>
  );
}
