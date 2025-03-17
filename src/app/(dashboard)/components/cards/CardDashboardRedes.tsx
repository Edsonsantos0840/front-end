//meus componentes
import { UserProps } from "@/app/types/user";
import { getRedeData } from "../../content/ContentFields";
import { JSX } from "react";

interface RedeProps{
  name : JSX.Element ,
  icon: JSX.Element
}

export default function CardDashboardRedes({
  userCard,
}: {
  userCard: UserProps;
}) {
  //Lista de redes sociais
  const redeData:  RedeProps[] = getRedeData(userCard)

  return (
    <>
      {redeData.map((item, index) => (
        <p key={index} className="flex gap-2 items-center text-textos text-lg">
          {item.icon} {item.name}
        </p>
      ))}
    </>
  );
}
