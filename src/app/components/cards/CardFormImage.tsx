import UsePreviewImage from "@/app/hooks/UsePreviewImage";
import Image from "next/image";
import { MdImageSearch } from "react-icons/md";

export default function CardFormImage({ img }: { img: string[] }) {
  const { previews, handleImageChange } = UsePreviewImage();
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {img.map((imageKey) => (
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
            <MdImageSearch size={100} color="#b91c1c54" />
          )}
          <span className="text-gray-600 text-sm mt-2">
            Clique para selecionar {imageKey}
          </span>
        </label>
      ))}
    </div>
  );
}
