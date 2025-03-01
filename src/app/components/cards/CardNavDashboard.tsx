import Link from "next/link";
import { FaRestroom, FaUtensils } from "react-icons/fa";
import { MdOutdoorGrill } from "react-icons/md";
import { PiLadderBold } from "react-icons/pi";

export default function CardNavDashboard() {
  return (
    <nav className="flex justify-around items-center m-auto text-center w-[50vw]">
      <Link
        href={"/bathrooms"}
        className=" flex items-center gap-2 px-2 py-1 text-base bg-textos/90 font-medium text-textos2 rounded-xl shadow-base cursor-pointer hover:scale-110"
      >
       <span>Banheiros</span><FaRestroom size={28} className=""/>
      </Link>
      <Link
        href={"/kitchen"}
        className=" flex items-center gap-2 px-2 py-1 text-base bg-textos/90 font-medium text-textos2 rounded-xl shadow-base cursor-pointer hover:scale-110"
      >
      <span>Cozinha</span><FaUtensils size={22} className=""/>
      </Link>
      <Link
        href={"/steps"}
        className="flex items-center gap-2 px-2 py-1 text-base bg-textos/90 font-medium text-textos2 rounded-xl shadow-base cursor-pointer hover:scale-110"
      >
      <span>Escadas</span><PiLadderBold size={28} className=""/>
      </Link>
      <Link
        href={"/outdoor"}
        className="flex items-center gap-2 px-2 py-1 text-base bg-textos/90 font-medium text-textos2 rounded-xl shadow-base cursor-pointer hover:scale-110"
      >
   <span>Exteriores</span><MdOutdoorGrill size={30} className=""/>
      </Link>
    </nav>
  );
}
