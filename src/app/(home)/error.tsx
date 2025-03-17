"use client";
//componentes
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
//meus componentes
import Logo from "./../../../public/logo.png";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);
  
  return (
    <main className="alinha2 w-full h-screen">
      <h1 className="text-xl  md:text-3xl  lg:text-5xl  font-bold text-[var(--corPrincipal2)] fontPersonalizada">
        Erro Inesperado.
      </h1>
      <figure className=" w-[300px] h-[100px] md:w-[400px] md:h-[133px] lg:w-[600px] lg:h-[200px] ">
        <Image
          src={Logo}
          alt="Logo"
          width={600}
          height={200}
          className="w-auto h-auto"
        />
      </figure>
      <div className="alinha5 gap-3 lg:gap-10">
        <button onClick={() => router.push("/")} className="btn" aria-label="Voltar para página inicial">
          Página inicial
        </button>
        <button onClick={() => reset()} className="btn" aria-label="tentar novamente">
          Tentar novamente.
        </button>
      </div>
    </main>
  );
}

