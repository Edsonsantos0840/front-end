import Link from "next/link";

export default function CardNavProducts() {
  return (
    <div className="my-2 space-x-2 p-1 text-xl lg:text-sm bg-fundo3 font-medium text-principal rounded-md shadow-sm cursor-pointer hover:bg-fundo">
      <Link
        href={"/bathrooms"}
      >
        Banheiros
      </Link>
      <Link
        href={"/kitchen"}
      >
        Cozinhas
      </Link>
      <Link
        href={"/steps"}
      >
        Escadas
      </Link>
      <Link
        href={"/outdoor"}
      >
        Exteriores
      </Link>
    </div>
  );
}
