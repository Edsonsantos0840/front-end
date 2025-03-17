//icons 
import { UserProps } from "@/app/types/user";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { BsCalendarDate, BsFillCalendarDateFill } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FaRestroom, FaUtensils } from "react-icons/fa";
import { MdOutdoorGrill } from "react-icons/md";
import { PiLadderBold } from "react-icons/pi";
//componentes bibliotecas
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const getRedeData = (userCard: UserProps) => [
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

  export  const getUserData = (userCard: UserProps) => [
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

   export const data = [
        {
          name: "Usuários",
          ico: <IoPersonOutline />,
        },
        {
          name: "Produtos",
          ico: <BsShop />,
        },
        {
          name: "Comentários",
          ico: <FaRegComments />,
        },
        {
          name: "Likes",
          ico: <FcLike />,
        },
      ];

      export   const dashLink = [
        {
          href: "/bathrooms",
          name: "Banheiros",
          ico: <FaRestroom size={17} className="" />,
        },
        {
          href: "/kitchen",
          name: "Cozinhas",
          ico: <FaUtensils size={14} className="" />,
        },
        {
          href: "/steps",
          name: "Escadas",
          ico: <PiLadderBold size={16} className="" />,
        },
        {
          href: "/outdoor",
          name: "Exteriores",
          ico: <MdOutdoorGrill size={17} className="" />,
        },
      ];