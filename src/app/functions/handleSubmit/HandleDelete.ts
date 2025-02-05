'use server'

import { cookies } from "next/headers";

async function handleDelete(commentId: string){


const url = `${process.env.BASE_URL}/product/comments/${commentId}`;
const token = (await cookies()).get("MA_MARMORE")?.value;

try {
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          'content-type':'application/json',
          Authorization: `Bearer ${token}`
        }
        }
        )
        if(!res.ok){
        console.log('Houve um erro ao deletar')
        }
        
} catch (error) {
    console.log(error)
}
}
export {handleDelete}