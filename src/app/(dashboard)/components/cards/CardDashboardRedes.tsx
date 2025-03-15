import { UserProps } from "@/app/types/user";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";

export default function CardDashboardRedes({
  userCard,
}: {
  userCard: UserProps;
}) {
  //Lista de redes sociais
  const redeData = [
    {
      icon: <FaFacebookSquare size={30} color="#1877F2" />,
      name: <strong className="text-textos">@{userCard.name}</strong>,
    },
    {
      icon: (
        <FaInstagram
          size={30}
          className="bg-[#FF9933] text-textos2 rounded-md"
        />
      ),
      name: <strong className="text-textos">@{userCard.name}</strong>,
    },
    {
      icon: <AiFillTikTok size={36} color="#FF0050" />,
      name: <strong>Não tem.</strong>,
    },
    {
      icon: <MdPhoneInTalk size={30} color="#075E54" />,
      name: <strong>19-994758374</strong>,
    },
    {
      icon: <FaWhatsappSquare size={36} color="#075E54" />,
      name: <strong>19-994758374 </strong>,
    },
  ];

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
