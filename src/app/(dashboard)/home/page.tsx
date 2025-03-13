import Container from "@/app/components/containers/Container";
import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { ProdutoProps } from "@/app/types/produtoTypes";
import Image from "next/image";
import avatar from "../../../../public/1.jpg";
import NavDashboard from "@/app/components/headers/NavDashboard";
import { FaCheck } from "react-icons/fa6";
import CardNavDashboard from "@/app/components/cards/CardNavDashboard";
import CardDashboardUser from "@/app/components/cards/CardDashboardUser";
import CardDashboardProduct from "@/app/components/cards/CardDashboardProduct";
import CardHeaderDashboard from "@/app/components/cards/CardHeaderDashboard";
import CardDashboardComments from "@/app/components/cards/CardDashboardComments";
import CardDashboardLikes from "@/app/components/cards/CardDashboardLikes";
import Logo from "../../../../public/logo.png";
import Link from "next/link";

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
    <main className=" ">
      <article className="flex flex-col justify-center items-center gap-4 text-textos p-2 font-semibold lg:hidden w-full h-screen ">
        <h2 className="text-2xl text-center">
          Não é possível acessar de dispositivos móveis.{" "}
        </h2>
        <div className=" w-[300px] h-[100px] md:w-[400px] md:h-[133px] lg:w-[600px] lg:h-[200px] ">
          <Image
            src={Logo}
            alt="Logo"
            width={600}
            height={200}
            className="w-auto h-auto"
          />
        </div>
        <p className="text-3xl ">Tente em um desktop!</p>
        <Link
          href={"/"}
          className="px-8 py-2 bg-principal rounded-lg text-textos2 font-bold hover:scale-105"
        >
          Voltar
        </Link>
      </article>
      <section className="hidden lg:grid grid-cols-[1fr_7fr_7fr]  h-screen">
        <aside className="bg-principal text-white row-span-12 w-[8vw] ">
          <NavDashboard />
        </aside>
        <header className=" col-span-2 row-span-1 border-b-2">
          <div className="flex justify-between items-center w-full h-full px-4 gap-4">
            <div className="flex justify-center items-center gap-4">
              <CardHeaderDashboard />
              <CardNavDashboard />
            </div>
            <section className="flex justify-between items-center gap-3  ">
              <h5 className="flex justify-between items-center gap-2 hover:scale-125 shadow-md rounded-2xl p-2 bg-green-300 ">
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
          <CardDashboardUser />
        </article>
        <article className=" row-span-5 ">
          <CardDashboardProduct />
        </article>
        <article className=" row-span-5 ">
          <CardDashboardComments />
        </article>
        <article className="row-span-5 ">
          <CardDashboardLikes />
        </article>
      </section>
    </main>
  );
}
