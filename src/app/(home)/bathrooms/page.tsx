

import { ProdutoProps } from '@/app/types/produtoTypes';
import Image from 'next/image'
import Link from 'next/link';

export default async function Bathrooms() {
  const url = `${process.env.BASE_URL}/products/category/banheiro`

  const res = await fetch(url)
  if(res.ok){
   console.log("Produto retornado com sucesso")
  }else {
    console.log('Houve um erro ao buscar os produtos')
  }
  const product: ProdutoProps[] = await res.json() 
 
 
  return (
<main className="px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {product ?
            product.map((prod) => (
            <div
              key={prod._id}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            > 
              <Link href={`/product/${prod._id}`} className="relative bg-cover object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-xl">
               <Image
                src={prod.image1}
                alt={prod.title}
                width={400}
                height={300}
                quality={100}
                className=" rounded-t-xl bg-cover object-cover"
               />
              </Link>
            </div>
          )):
          <h1>Nenhum Produto</h1>
        }
        </div>
      </main>
  )
}
