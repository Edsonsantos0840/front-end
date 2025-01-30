import Image from "next/image";
import { ProdutoProps } from "@/app/types/produtoTypes";

export default function CardImages({ product }: { product: ProdutoProps }) {
  return (
    <section className="flex gap-8">
    <div className="space-y-2 max-h-[400px]">
        <div>
          <Image
            src={product.image1}
            alt={product.title}
            width={100}
            height={95}
            className=" "
          />
        </div>
        <div>
          <Image
            src={product.image2 || ""}
            alt={product.title}
            width={100}
            height={95}
            className=" "
          />
        </div>
        <div>
          <Image
            src={product.image3 || ""}
            alt={product.title}
            width={100}
            height={95}
            className=" "
          />
        </div>
        <div >
          <Image
            src={product.image4 || ""}
            alt={product.title}
            width={100}
            height={95}
            className=" "
          />
        </div>
    </div>
      <div className="w-[400px] max-h-[400px] relative">
        <Image
          src={product.image1}
          alt={product.title}
          fill
          className="  "
        />
      </div>
    </section>
  );
}
