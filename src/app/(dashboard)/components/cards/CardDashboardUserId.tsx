import { UserProps } from "@/app/types/user";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { BsCalendarDate, BsFillCalendarDateFill } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";

export default function CardDashboardUserId({
  userCard,
}: {
  userCard: UserProps;
}) {

  // lista dos dados do usuário
  const userData = [
    {
      icon: <TfiEmail size={24} className="text-principal/80" />,
      name: <strong>Email: </strong>,
      data: userCard.email,
    },
    {
      icon: <GrUserWorker size={30} className="text-principal/80" />,
      name: <strong>Tipo: </strong>,
      data: userCard.tipo,
    },
    {
      icon: <BsCalendarDate size={30} className="text-principal/80" />,
      name: <strong>Criado em:</strong>,
      data: userCard.createdAt
        ? format(new Date(userCard.createdAt), "dd 'de' MMMM 'de' yyyy", {
            locale: ptBR,
          })
        : "Data não disponível",
    },
    {
      icon: <BsFillCalendarDateFill size={30} className="text-principal/80" />,
      name: <strong>Atualizado em: </strong>,
      data: userCard.updatedAt
        ? format(new Date(userCard.updatedAt), "dd 'de' MMMM 'de' yyyy", {
            locale: ptBR,
          })
        : "Data não disponível",
    },
  ];

  return (
    <>
      {
        userData.map(item => (
            <p key={item.data} className="flex gap-2 items-center text-textos text-lg">
                {item.icon} {item.name} {item.data}
            </p>
        ))
      }
      
    </>
  );
}
