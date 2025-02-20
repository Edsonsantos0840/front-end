import Image from "next/image";
import { ProdutoProps } from "@/app/types/produtoTypes";

export default function CardImages({ product }: { product: ProdutoProps }) {
  return (
    <section className="flex gap-8">
    <div className="space-y-2 max-h-[400px]">
        <div className="relative w-[100px] h-[95px]">
          <Image
            src={product.image1}
            alt={product.title}
            fill
            quality={100}
            className=" "
          />
        </div>
        <div className="relative w-[100px] h-[95px]">
          <Image
            src={product.image2 || ""}
            alt={product.title}
            fill
            quality={100}
            className=" "
          />
        </div>
        <div className="relative w-[100px] h-[95px]">
          <Image
            src={product.image3 || ""}
            alt={product.title}
            fill
            quality={100}
            className=" "
          />
        </div>
        <div className="relative w-[100px] h-[95px]">
          <Image
            src={product.image4 || ""}
            alt={product.title}
            fill
            quality={100}
            className=" "
          />
        </div>
    </div>
      <div className="w-[400px] max-h-[400px] relative">
        <Image
          src={product.image1}
          alt={product.title}
          fill
          quality={100}
          className="  "
        />
      </div>
    </section>
  );
}
