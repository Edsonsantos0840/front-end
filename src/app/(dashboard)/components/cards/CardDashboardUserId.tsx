import { UserProps } from "@/app/types/user";
import { getUserData } from "../../content/ContentFields";

export default function CardDashboardUserId({
  userCard,
}: {
  userCard: UserProps;
}) {

  // lista dos dados do usuário
  const userData = getUserData(userCard)

  return (
    <>
      {
        userData.map((item, index) => (
            <p key={index} className="flex gap-2 items-center text-textos text-lg">
                {item.icon} {item.name} {item.data}
            </p>
        ))
      }
      
    </>
  );
}
