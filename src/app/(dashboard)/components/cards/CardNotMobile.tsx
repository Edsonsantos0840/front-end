import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../../public/logo.png";

export default function CardNotMobile() {
  return (
<main className="alinha2 gap-4 text-textos p-2 font-semibold lg:hidden w-full h-screen">
  {/* Mensagem de aviso para dispositivos móveis */}
  <h1 className="text-2xl text-center">Não é possível acessar de dispositivos móveis.</h1>

  {/* Logo da plataforma */}
  <figure className="w-[300px] h-[100px] md:w-[400px] md:h-[133px] lg:w-[600px] lg:h-[200px]">
    <Image
      src={Logo}
      alt=""
      width={600}
      height={200}
      className="w-auto h-auto"
      aria-hidden="true"
    />
  </figure>

  {/* Mensagem adicional */}
  <p className="text-3xl">Tente em um desktop!</p>

  {/* Botão de voltar */}
  <Link href="/" className="inline-block">
    <button className="px-8 py-2 bg-principal rounded-lg text-textos2 font-bold hover:scale-105">
      Voltar
    </button>
  </Link>
</main>

  );
}
