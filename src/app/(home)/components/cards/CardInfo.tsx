'use client'
//componentes
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

interface PropsCardInfo {
  title: string;
  paragraph?: string;
  textHidden?: string;
  image?: string | StaticImport;
  btn?: string
  extend?: boolean
}
export default function CardInfo({
  title,
  paragraph,
  textHidden,
  image,
  btn,
  extend
}: PropsCardInfo) {
  const [showText, setShowTest] = useState(false)

  return (
    <article className={`my-5 mx-2  rounded-lg lg:min-w-80 ${extend ? 'lg:w-[400px] text-lg ' : 'lg:w-[380px] bg-fundo'}`} >
      <h3 className="text-3xl text-principal p-4 py-4">{title}</h3>
      {image && (
        <figure className={`relative w-[250px] h-[250px]`}>
          <Image src={image || ""} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" quality={100} />
          <figcaption className="sr-only">Imagem ilustrativa relacionada a {title}</figcaption>
        </figure>
      )}
      <p className="text-justify text-textos px-4 py-3 font-sansModifi ">{paragraph}</p>
       {
        showText &&
        <p className="text-justify text-textos px-4 font-sansModifi " >{textHidden}</p>
       }
      {
        btn &&
          showText ?
         <button 
           className="bg-principal text-textos2 rounded-xl shadow-lg
             hover:bg-principal2 hover:scale-105 
              ml-4 px-6 py-1 font-semibold my-5" 
            onClick={() => setShowTest(false)}
            aria-live="polite"
          >{`${btn} menos`}</button> :
         <button 
           className="bg-principal text-textos2 rounded-xl shadow-lg
             hover:bg-principal2 hover:scale-105 
              ml-4 px-6 py-1 font-semibold my-5" 
            onClick={() => setShowTest(true)}
            aria-live="polite"
          >{`${btn} mais`}</button>
      }
    </article>
  );
}
