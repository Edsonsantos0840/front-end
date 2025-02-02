"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function BtnEdit() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

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
