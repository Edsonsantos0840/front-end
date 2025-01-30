'use server'
import { cookies } from "next/headers"

export async function logOut(){
    (await cookies()).delete('MA_MARMORE')
}