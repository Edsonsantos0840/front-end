'use client'

import { handleDeleteLike } from "@/app/functions/handleSubmit/HandleDeleteLike";
import { SlDislike } from "react-icons/sl";

export default  function BtnDesLike({url}: {url: string} ) {


  return (
     
      <button onClick={() => handleDeleteLike(url)} className=" hover:scale-110 text-end"><SlDislike size={26} /></button>
     
  )
}
