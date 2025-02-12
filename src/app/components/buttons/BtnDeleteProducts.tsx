"use client";

import { handleDeleteProducts } from "@/app/functions/handleSubmit/HandleDeleteProduct";
import { TbHttpDelete } from "react-icons/tb";

export default function BtnDeleteProducts({ url, pathToRevalidate }: { url: string, pathToRevalidate: string }) {

  return (
    <button
      onClick={() => handleDeleteProducts(url, pathToRevalidate)}
      className="hover:scale-110 text-end"
    >
      <TbHttpDelete size={30} color="red" />
    </button>
  );
}
