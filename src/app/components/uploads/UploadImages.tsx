"use client";


import {  useState } from "react";
import { MdImageSearch } from "react-icons/md";

export default function UploadImages({ qtdImages }: { qtdImages: number }) {

  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImg(e.target.files[0]);
    }
  };

  const imageFields = Array.from({ length: qtdImages }, (_, index) => (
    <label
      key={`image-${index + 1}`}
      className="cursor-pointer border-dashed border-[1px] border-[#b91c1c]/15 alinha6 text-sm my-5 hover:scale-105"
    >

       
          <input
            type="file"
            name={`image${index + 1}`}
            className="hidden"
          />
          <MdImageSearch size={100} color="#b91c1c54" />
      
    </label>
  ));
  return imageFields;
}
