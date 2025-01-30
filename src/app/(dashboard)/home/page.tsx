import BtnDelete from "@/app/components/buttons/BtnDelete";
import { BtnUpdate } from "@/app/components/buttons/BtnUpdate";
import { BtnView } from "@/app/components/buttons/BtnView";
import Container from "@/app/components/containers/Container";
import { ProdutoProps } from '@/app/types/produtoTypes';
import Image from 'next/image'

export default async function HomeDashboard() {
  const url = `${process.env.BASE_URL}/products`

  const res = await fetch(url)
  if(res.ok){
   console.log("Produto retornado com sucesso")
  }else {
    console.log('Houve um erro ao buscar os produtos')
  }
  const product: ProdutoProps[] = await res.json() 
  const dataFormatada = new Date(product[0].createdAt).toLocaleDateString("pt-BR");

  return (
    <Container>
      <h1>Dashboard</h1>
      <main className="px-6 space-y-4 ">
          {product ?
            product.map((prod) => (
            <div
              key={prod._id}
              className="flex justify-between flex-wrap items-end gap-5 relative overflow-hidden border-b-[.7px] border-black/10 p-1 "
            > 
              <div className="relative w-16 h-16 bg-cover object-cover">
               <Image
                src={prod.image1}
                alt={prod.title}
                fill
                quality={100}
                className=" bg-cover object-cover"
               />
              </div>
              <div className="flex items-end gap-5 w-[60%] ">
                <p className="text-left w-[55%] ">{prod.title}</p>
                <p className="text-left w-[15%] ">{dataFormatada}</p>
                <p className="text-left w-[30%] "><strong>Categoria: </strong> {prod.category}</p>
              </div>
               <div className="flex justify-between items-end gap-5">
                 <BtnView url={`/product/${prod._id}`} />
                 <BtnUpdate url={`/productUpdate/${prod._id}`} />
                 <BtnDelete/>
               </div>
            </div>
          )):
          <h1>Nenhum Produto Cadastrado</h1>
        }
      </main>
    </Container>
  )
}
