import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../../public/logo.png";

export default function CardNotMobile() {
  return (
    <article className="alinha2 gap-4 text-textos p-2 font-semibold lg:hidden w-full h-screen ">
      {/* mostra este componente se for dispositivo móvel */}
      <h2 className="text-2xl text-center">
        Não é possível acessar de dispositivos móveis.{" "}
      </h2>
      <div className=" w-[300px] h-[100px] md:w-[400px] md:h-[133px] lg:w-[600px] lg:h-[200px] ">
        <Image
          src={Logo}
          alt="Logo"
          width={600}
          height={200}
          className="w-auto h-auto"
        />
      </div>
      <p className="text-3xl ">Tente em um desktop!</p>
      <Link
        href={"/"}
        className="px-8 py-2 bg-principal rounded-lg text-textos2 font-bold hover:scale-105"
      >
        Voltar
      </Link>
    </article>
  );
}
