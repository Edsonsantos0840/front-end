//meus componentes
import Container from "@/app/(home)/components/containers/Container";
import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { ProdutoProps } from "@/app/types/produtoTypes";
import NavDashboard from "@/app/(dashboard)/components/headers/NavDashboard";
import DashboardCardProduct from "../components/cards/DashboardCardProduct";
import CardNotMobile from "../components/cards/CardNotMobile";

export default async function Product() {
  const url = `${process.env.BASE_URL}/products`;
//busca os dados do produto
  const { data: product } = await FetchGet<ProdutoProps[]>(url);
//exibe se não houver produtos
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
      {/* mostra este componente se for dispositivo móvel */}
     <CardNotMobile/>
      <section className="hidden lg:grid grid-cols-[1fr_12fr]">
         {/* navbar */}
        <aside className="bg-principal text-white  ">
          <NavDashboard />
        </aside>
        <DashboardCardProduct product={product} />
      </section>
    </div>
  );
}
