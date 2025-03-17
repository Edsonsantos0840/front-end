//meus componentes
import UsePreviewImage from "@/app/hooks/UsePreviewImage";
//componentes
import Image from "next/image";
//icons
import { MdImageSearch } from "react-icons/md";

export default function CardFormImage({ img }: { img: string[] }) {

  const { previews, handleImageChange } = UsePreviewImage();
  
  return (
    <section className="flex items-center justify-center gap-2 mt-2">
      {img.map((imageKey) => (
        <label
          key={imageKey}
          className="cursor-pointer border-dashed border-[1px] border-principal/15 lg:text-sm lg:my-3 hover:scale-105 flex flex-col items-center justify-center p-4"
        >
          <input
            type="file"
            name={imageKey}
            onChange={(event) => handleImageChange(event, imageKey)}
            className="hidden"
          />
          {previews[imageKey] ? (
            <figure className="relative w-[220px] h-[220px] lg:w-[110px] lg:h-[110px]">
              <Image
                src={previews[imageKey] as string}
                alt={`Prévia da ${imageKey}`}
                fill
                quality={100}
                className="rounded-md"
              />
            </figure>
          ) : (
            <MdImageSearch color="#b91c1c54" className="w-[140px] h-[140px] lg:w-[70px] lg:h-[70px]" />
          )}
          <span className="text-gray-600 text-lg lg:text-sm mt-2">
          {imageKey}
          </span>
        </label>
      ))}
    </section>
  );
}
