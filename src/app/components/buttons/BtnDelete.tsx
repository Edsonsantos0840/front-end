import { handleDelete } from "@/app/functions/handleSubmit/HandleDelete";

import { TbHttpDelete } from "react-icons/tb";

export default  function BtnDelete({commentId}: {commentId: string} ) {
 

  return (
     
      <button onClick={() => handleDelete(commentId)} className=" hover:scale-110 text-end"><TbHttpDelete size={30} color="red" /></button>
     
  )
}
