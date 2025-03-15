import Link from "next/link";
import { FaRestroom, FaUtensils } from "react-icons/fa";
import { MdOutdoorGrill } from "react-icons/md";
import { PiLadderBold } from "react-icons/pi";

export default function CardNavDashboard() {

  //lista de categorias da barra superior
  const dashLink = [
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

  const dashLinks = dashLink.map((item) => {
    return (
      <Link
        key={item.name}
        href={item.href}
        className=" flex items-center gap-2 p-1 text-sm bg-textos/90 font-medium text-textos2 rounded-xl shadow-base cursor-pointer hover:scale-105"
      >
        <span>{item.name}</span>
        {item.ico}
      </Link>
    );
  });

  return <nav className="alinha4 text-center gap-4 ">{dashLinks}</nav>;
}
