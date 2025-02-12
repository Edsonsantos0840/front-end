import BtnDeleteProducts from '@/app/components/buttons/BtnDeleteProducts';
import { BtnUpdate } from '@/app/components/buttons/BtnUpdate';
import { BtnView } from '@/app/components/buttons/BtnView';
import Container from '@/app/components/containers/Container'
import { UserProps } from '@/app/types/user';
import Image from 'next/image';

import React from 'react'

export default async function User() {
    const url = `${process.env.BASE_URL}/users`;
    const urlDel = `${process.env.BASE_URL}/user`;

    async function  getUser(){

        try {
            const res = await fetch(url)
            if(!res.ok){
                console.log(` Houve um erro ${res.status} ao buscar os dados`)
            }
            const json = await res.json()
            return json
        } catch (error) {
            console.log(`${error} Houve este erro ao buscar os dados`)
        }
    }
const user: UserProps[] = await getUser()


 if(user) return (
    <Container>
          <h1>usuários</h1>
            <main className="px-6 space-y-4">
              {user ? 
                user.map((item) => (
                  <div key={item._id} className="flex justify-between flex-wrap items-end gap-5 relative overflow-hidden border-b-[.7px] border-black/10 p-1">
                    <div className="relative w-12 h-12 bg-cover object-cover ">
                      <Image
                        src={item.image || ''}
                        alt={item.name}
                        fill
                        quality={100}
                        className="bg-cover object-cover rounded-full shadow-lg"
                      />
                    </div>
                    <div className="flex items-end gap-5 w-[80%]">
                      <p className="text-left w-[30%]">{item.name}</p>
                      <p className="text-left w-[50%]"><strong>email: </strong>{   item.email}</p>
                      <p className="text-left w-[15%]"><strong>tipo: </strong>{  item.tipo}</p>
                    </div>
                    <div className="flex justify-between items-end gap-5">
                      <BtnView url={`/user/${item._id}`} />
                      <BtnUpdate url={`/user/${item._id}/userUpdate`} />
                      <BtnDeleteProducts 
                        url={`${urlDel}/${item._id}`} 
                        pathToRevalidate="/dashboard" // caminho da página que você quer revalidar
                      />
                    </div>
                  </div>
                )) : 
                <h1>Nenhum itemuto Cadastrado</h1>
              }
            </main>
    </Container>
  )
}
