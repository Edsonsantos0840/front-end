import { IoPersonOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

export default function CardHeaderDashboard() {

  //lista de icones da barra superior
  const data = [
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

  const datas = data.map((item) => {
    return (
      <p
        key={item.name}
        className="alinha4 gap-2 hover:scale-125 shadow-md rounded-2xl p-1 bg-fundoProdduto2"
      >
        {item.ico}
        <span className="text-sm">{item.name}</span>
      </p>
    );
  });

  return <>{datas}</>;
}
