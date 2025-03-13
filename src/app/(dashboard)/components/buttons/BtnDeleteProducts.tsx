"use client";

import { handleDeleteProducts } from "@/app/functions/handleSubmit/HandleDeleteProduct";
import { IoCloseOutline } from "react-icons/io5";

export default function BtnDeleteProducts({ url, pathToRevalidate }: { url: string, pathToRevalidate: string }) {

  return (
    <button
      onClick={() => handleDeleteProducts(url, pathToRevalidate)}
      className="hover:scale-125 text-end"
    >
      <IoCloseOutline size={34} className="text-principal2/80" />
    </button>
  );
}
