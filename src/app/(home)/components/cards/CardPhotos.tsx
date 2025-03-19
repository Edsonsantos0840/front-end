//componentes
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface PropsCardPhotos {
  title: string;
  image?: string | StaticImport;
  extend?: boolean
  mquality?: boolean
}

export default function CardPhotos({ title, image, extend, mquality }: PropsCardPhotos) {
  return (
    <article className={`my-5 mx-2 transition-all duration-500 ${extend ? 'w-[400px] md:w-[700px] lg:w-[600px]' : 'w-[400px] md:w-[650px] lg:w-[380px]'}`}>
      <h3 className="text-xl text-textos3 p-4 py-4 text-center">{title}</h3>
      {image && (
        <figure className={`relative h-[320px] md:h-[400px] lg:h-[320px] hover:scale-110 transition-all duration-500 ${mquality && 'w-[650px] '}`}>
          <Image 
            src={image || ""} 
            alt={title} fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100} 
            className="rounded-xl"
        />
        </figure>
      )}
     
    </article>
  );
}
