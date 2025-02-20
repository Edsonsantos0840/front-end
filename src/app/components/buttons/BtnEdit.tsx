"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function BtnEdit() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

// Função para controlar a renderização condicional do botão edite.
// EX. se tiver edite não aparece a linha do comentário e vice versa.
  function handleCancelEdit() {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("edit");
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  }

  return (
    <button  onClick={handleCancelEdit}>
      editar
    </button>
  );
}
