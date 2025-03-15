//meus componentes
import Container from "@/app/(home)/components/containers/Container";
import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { ProdutoProps } from "@/app/types/produtoTypes";
import avatar from "../../../../public/1.jpg";
import NavDashboard from "@/app/(dashboard)/components/headers/NavDashboard";
import CardNavDashboard from "@/app/(dashboard)/components/cards/CardNavDashboard";
import CardDashboardUser from "@/app/(dashboard)/components/cards/CardDashboardUser";
import CardDashboardProduct from "@/app/(dashboard)/components/cards/CardDashboardProduct";
import CardHeaderDashboard from "@/app/(dashboard)/components/cards/CardHeaderDashboard";
import CardDashboardComments from "@/app/(dashboard)/components/cards/CardDashboardComments";
import CardDashboardLikes from "@/app/(dashboard)/components/cards/CardDashboardLikes";
import CardNotMobile from "../components/cards/CardNotMobile";
//componentes
import Image from "next/image";
//icons
import { FaCheck } from "react-icons/fa6";

export default async function Product() {
  const url = `${process.env.BASE_URL}/products`;
  //busca os dados do produto
  const { data: product } = await FetchGet<ProdutoProps[]>(url);
// Caso não tenha produto cadastrado 
  if (!product || product.length === 0) {
    return (
      <Container>
        <h1>Dashboard</h1>
        <h1>Nenhum Produto Cadastrado</h1>
      </Container>
    );
  }

  return (
    <main className=" ">
      {/* mostra este componente se for dispositivo móvel */}
      <CardNotMobile />
      <section className="hidden lg:grid grid-cols-[1fr_7fr_7fr]  h-screen">
        <aside className="bg-principal text-white row-span-12 w-[8vw] ">
          {/* navbar */}
          <NavDashboard />
        </aside>
        <header className=" col-span-2 row-span-1 border-b-2 py-2">
          <div className="alinha4 w-full h-full px-4 gap-4">
            <div className="alinha6 gap-4">
              {/* Os dois componetes formam a barra superior */}
              <CardHeaderDashboard />
              <CardNavDashboard />
            </div>
            <section className="alinha4 gap-3  ">
              <h5 className="alinha4 gap-2 hover:scale-125 shadow-md rounded-2xl p-2 bg-green-300 ">
                <FaCheck />
                <span className="text-sm">Usuário</span>
              </h5>

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
        <article className=" col-span-2 row-span-1 "> </article>
        <article className=" row-span-5 ">
          {/* Mostra o campo de usuários */}
          <CardDashboardUser />
        </article>
        <article className=" row-span-5 ">
          {/* Mostra o campo de produtos */}
          <CardDashboardProduct />
        </article>
        <article className=" row-span-5 ">
        {/* Mostra o campo de comentários */}
          <CardDashboardComments />
        </article>
        <article className="row-span-5 ">
          {/* Mostra o campo de likes */}
          <CardDashboardLikes />
        </article>
      </section>
    </main>
  );
}
