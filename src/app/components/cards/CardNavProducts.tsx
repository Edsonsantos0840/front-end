import Link from "next/link";

export default function CardNavProducts() {
  return (
    <div className="my-2 space-x-2">
      <Link
        href={"/bathrooms"}
        className="p-1 text-sm bg-fundo3 font-medium text-principal rounded-md shadow-sm cursor-pointer hover:bg-fundo"
      >
        Banheiros
      </Link>
      <Link
        href={"/kitchen"}
        className="p-1 text-sm bg-fundo3 font-medium text-principal rounded-md shadow-sm cursor-pointer hover:bg-fundo"
      >
        Cozinhas
      </Link>
      <Link
        href={"/steps"}
        className="p-1 text-sm bg-fundo3 font-medium text-principal rounded-md shadow-sm cursor-pointer hover:bg-fundo"
      >
        Escadas
      </Link>
      <Link
        href={"/outdoor"}
        className="p-1 text-sm bg-fundo3 font-medium text-principal rounded-md shadow-sm cursor-pointer hover:bg-fundo"
      >
        Exteriores
      </Link>
    </div>
  );
}
