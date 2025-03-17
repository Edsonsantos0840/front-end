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
<main className="flex flex-col items-center justify-center w-full h-screen text-center">
  
  {/* Cabeçalho da página de erro */}
  <header>
    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-[var(--corPrincipal2)] fontPersonalizada">
      Erro Inesperado
    </h1>
  </header>

  {/* Logo da empresa */}
  <figure className="w-[300px] h-[100px] md:w-[400px] md:h-[133px] lg:w-[600px] lg:h-[200px]">
    <Image
      src={Logo}
      alt="Logotipo da empresa"
      width={600}
      height={200}
      className="w-auto h-auto"
    />
  </figure>

  {/* Botões de ação */}
  <section className="flex gap-3 lg:gap-10 mt-6">
    <button 
      onClick={() => router.push("/")} 
      className="btn"
      aria-label="Voltar para a página inicial"
    >
      Página inicial
    </button>
    <button 
      onClick={() => reset()} 
      className="btn"
      aria-label="Tentar novamente"
    >
      Tentar novamente
    </button>
  </section>

</main>

  );
}

