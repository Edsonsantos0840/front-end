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
<main>
  {/* Componente que aparece apenas em dispositivos móveis */}
  <CardNotMobile />

  <section className="hidden lg:grid grid-cols-[1fr_7fr_7fr] h-screen">
    {/* Barra lateral do dashboard */}
    <aside className="bg-principal text-white row-span-12 w-[8vw]">
      <NavDashboard />
    </aside>

    {/* Cabeçalho do dashboard */}
    <header className="col-span-2 row-span-1 border-b-2 py-2">
      <nav className="alinha4 w-full h-full px-4 gap-4">
        <div className="alinha6 gap-4">
          {/* Elementos da barra superior */}
          <CardHeaderDashboard />
          <CardNavDashboard />
        </div>
        <div className="alinha4 gap-3">
          <h5
            className="alinha4 gap-2 hover:scale-125 shadow-md rounded-2xl p-2 bg-green-300"
            aria-label="Usuário autenticado"
          >
            <FaCheck />
            <span className="text-sm">Usuário</span>
          </h5>

          {/* Avatar do usuário */}
          <figure className="relative w-10 h-10 rounded-full">
            <Image
              src={avatar}
              alt="Avatar do usuário"
              fill
              quality={100}
              className="rounded-full"
            />
          </figure>
        </div>
      </nav>
    </header>

    {/* Seção principal do painel */}
    <section className="col-span-2 row-span-1"></section>

    {/* Seções de conteúdo do dashboard */}
    <section className="row-span-5">
      <h2 className="sr-only">Usuários</h2>
      <CardDashboardUser />
    </section>

    <section className="row-span-5">
      <h2 className="sr-only">Produtos</h2>
      <CardDashboardProduct />
    </section>

    <section className="row-span-5">
      <h2 className="sr-only">Comentários</h2>
      <CardDashboardComments />
    </section>

    <section className="row-span-5">
      <h2 className="sr-only">Likes</h2>
      <CardDashboardLikes />
    </section>
  </section>
</main>

  );
}
