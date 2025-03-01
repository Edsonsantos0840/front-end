import Container from "@/app/components/containers/Container";
import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { ProdutoProps } from "@/app/types/produtoTypes";
import Image from "next/image";
import avatar from "../../../../public/1.jpg";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { FcLike} from "react-icons/fc";
import NavDashboard from "@/app/components/headers/NavDashboard";
import { FaCheck } from "react-icons/fa6";
import CardNavDashboard from "@/app/components/cards/CardNavDashboard";
import CardDashboardUser from "@/app/components/cards/CardDashboardUser";

export default async function Product() {
  const url = `${process.env.BASE_URL}/products`;

  const { data: product } = await FetchGet<ProdutoProps[]>(url);

  if (!product || product.length === 0) {
    return (
      <Container>
        <h1>Dashboard</h1>
        <h1>Nenhum Produto Cadastrado</h1>
      </Container>
    );
  }

  return (
    <main className=" grid grid-cols-[1fr_7fr_7fr]  h-screen ">
      <aside className="bg-principal text-white row-span-12 w-[8vw] ">
        <NavDashboard/>
      </aside>
      <header className=" col-span-2 row-span-1 ">
        <div className="flex justify-between items-center w-full h-full px-4">
          <div className="flex justify-center items-center w-[70%] gap-8">
            <p className="flex justify-between items-center gap-2 hover:scale-125 shadow-md rounded-2xl p-2 bg-fundoProdduto2" ><IoPersonOutline /><span>Usuários</span></p>
            <p className="flex justify-between items-center gap-2 hover:scale-125 shadow-md rounded-2xl p-2 bg-fundoProdduto2" ><BsShop /><span>Produtos</span></p>
            <p className="flex justify-between items-center gap-2 hover:scale-125 shadow-md rounded-2xl p-2 bg-fundoProdduto2" ><FaRegComments /><span>Comentários</span></p>
            <p className="flex justify-between items-center gap-2 hover:scale-125 shadow-md rounded-2xl p-2 bg-fundoProdduto2" ><FcLike/><span>Likes</span></p>
          </div> 
         <section className="flex justify-between items-center gap-5  ">
         <h5 className="flex justify-between items-center gap-2 hover:scale-125 shadow-md rounded-2xl p-2 bg-green-300 " ><FaCheck/><span >Usuário</span></h5>
          
          <figure className="relative w-10 h-10 rounded-full">
            <Image 
              src={avatar} 
              alt="avatar" 
              fill
              quality={100}
              className=" rounded-full"
            />
          </figure>
         </section>
        </div>
      </header>
      <article className=" col-span-2 row-span-1 "> <CardNavDashboard/></article>
      <article className=" row-span-5 "><CardDashboardUser/></article>
      <article className=" row-span-5 ">produtos</article>
      <article className=" row-span-5 ">comentários</article>
      <article className=" ">likes</article>
    </main>
  );
}
