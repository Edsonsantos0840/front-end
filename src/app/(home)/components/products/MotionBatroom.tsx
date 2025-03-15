"use client";
// meus componentes
import { ProdutoProps } from "@/app/types/produtoTypes";
//componentes biblioteca
import { motion } from "framer-motion";
//componentes
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function MotionBatroom({
  product,
}: {
  product: ProdutoProps[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      <Suspense fallback={<p>Carregando...</p>}>
        {product && product.length > 0 ? (
          product.map((prod) => (
            <article
              key={prod._id}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.2 }}
              >
                <Link href={`/product/${prod._id}`} className="block">
                  <figure className="relative w-[400px] h-[350px] md:w-[230px] md:h-[190px] bg-cover object-cover transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={prod.image1}
                      alt={prod.title}
                      fill
                      quality={100}
                      className="rounded-xl "
                    />
                  </figure>
                </Link>
              </motion.div>
            </article>
          ))
        ) : (
          <p className="text-gray-600">Nenhum produto encontrado.</p>
        )}
      </Suspense>
    </div>
  );
}
