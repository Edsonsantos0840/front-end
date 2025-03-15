//meus componentes
import Container from "@/app/(home)/components/containers/Container";
import { FetchGetAuth } from "@/app/functions/fetch/FetchGet";
import { Block } from "@/app/middleware/blockedPage";
import { UserProps } from "@/app/types/user";
import NavDashboard from "@/app/(dashboard)/components/headers/NavDashboard";
import DashboardCardUser from "../components/cards/DashboardCardUser";
import CardNotMobile from "../components/cards/CardNotMobile";

export default async function User() {
  const url = `${process.env.BASE_URL}/users`;
  //busca o usuário logado
  const { user } = await Block();
  //busca os dados do usuário
  const { data: userCard } = await FetchGetAuth<UserProps[]>(url);
//exibe se não hover usuário
  if (!userCard || userCard.length === 0) {
    return (
      <Container>
        <h1>Dashboard</h1>
        <h1>Nenhum Produto Cadastrado</h1>
      </Container>
    );
  }
  return (
    <div className="">
      {/* exibe este componente se for dispositivo móvel */}
      <CardNotMobile />
      <section className="hidden lg:grid grid-cols-[1fr_12fr]">
        <aside className="bg-principal text-white  ">
          <NavDashboard />
        </aside>
        <DashboardCardUser userCard={userCard} user={user} />
      </section>
    </div>
  );
}
