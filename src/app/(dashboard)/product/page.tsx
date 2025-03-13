import Container from "@/app/(home)/components/containers/Container";
import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { ProdutoProps } from "@/app/types/produtoTypes";
import NavDashboard from "@/app/(dashboard)/components/headers/NavDashboard";
import DashboardCardProduct from "../components/cards/DashboardCardProduct";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/logo.png";

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
    <div className="">
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
      <section className="hidden lg:grid grid-cols-[1fr_12fr]">
        <aside className="bg-principal text-white  ">
          <NavDashboard />
        </aside>
        <DashboardCardProduct product={product} />
      </section>
    </div>
  );
}
