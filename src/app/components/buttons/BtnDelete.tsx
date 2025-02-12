'use client'
import { handleDelete } from "@/app/functions/handleSubmit/HandleDelete";

import { TbHttpDelete } from "react-icons/tb";

export default  function BtnDelete({url}: {url: string} ) {


  return (
     
      <button onClick={() => handleDelete(url)} className=" hover:scale-110 text-end"><TbHttpDelete size={30} color="red" /></button>
     
  )
}
