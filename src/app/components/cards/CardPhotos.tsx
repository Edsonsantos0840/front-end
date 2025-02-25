import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface PropsCardPhotos {
  title: string;
  image?: string | StaticImport;
  extend?: boolean
}

export default function CardPhotos({ title, image, extend }: PropsCardPhotos) {
  return (
    <article className={`my-5  transition-all duration-500 min-w-80 ${extend ? 'w-[600px]' : 'w-[380px]'}`}>
      <h3 className="text-xl text-textos3 p-4 py-4 text-center">{title}</h3>
      {image && (
        <figure className={`relative h-[320px] hover:scale-110 transition-all duration-500 `}>
          <Image 
            src={image || ""} 
            alt={title} fill 
            quality={100} 
            className="rounded-xl"
        />
        </figure>
      )}
     
    </article>
  );
}
