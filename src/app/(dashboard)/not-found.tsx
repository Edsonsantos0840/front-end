"use client";
//componentes
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
//meu componente
import Logo from "../../../public/logo.png";

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);
  
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen text-center">
  
    {/* Cabeçalho da página de erro */}
    <header>
      <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold text-[var(--corPrincipal2)]">
        Erro 404
      </h1>
      <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-[var(--corPrincipal2)]">
        Página não encontrada!
      </h2>
    </header>
  
    {/* Logotipo */}
    <figure className="w-[300px] h-[100px] md:w-[400px] md:h-[133px] lg:w-[600px] lg:h-[200px]">
      <Image
        src={Logo}
        alt="Logotipo da empresa"
        width={600}
        height={200}
        className="w-auto h-auto"
      />
    </figure>
  
    {/* Botão de ação */}
    <section className="flex gap-3 lg:gap-10 mt-6">
      <button 
        onClick={() => router.push("/")} 
        className="btn"
        aria-label="Voltar para a página inicial"
      >
        Página inicial
      </button>
    </section>
  
  </main>
  
  );
}

  