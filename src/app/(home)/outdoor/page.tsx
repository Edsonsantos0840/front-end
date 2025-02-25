import Container from "@/app/components/containers/Container";
import MotionBatroom from "@/app/components/products/MotionBatroom";
import { FetchGet } from "@/app/functions/fetch/FetchGet";
import { ProdutoProps } from "@/app/types/produtoTypes";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Banheiros incríveis em M&A Marmores e Granitos.",
  description: "Faça seu logim para interagir com os produtos.",
  keywords:
    "Marmores e Granitos, Desing ambiente, Acabamento construção, marmore, granito, pedra onix, pedras ornamentais, pia de marmore, mesa de marmore, escada de marmore, balcao de marmore, soleira de marmore, porcelanato, construtora, construção civil, alvenaria, piso, pisos e revestimentos",
};

export default async function Outdoor() {
  const url = `${process.env.BASE_URL}/products/category/banheiro`;
  const { data: product } = await FetchGet<ProdutoProps[]>(url);

  if (!product || product.length === 0) {
    return (
      <Container>
        <h1>Dashboard</h1>
        <h1>Nenhum Produto Cadastrado</h1>
      </Container>
    );
  }

  return (
    <main className="px-6">
      <section aria-label="Lista de Produtos" className="mb-20" >
        <h2 className="text-xl font-bold mb-4">Banheiros</h2>
        <MotionBatroom product={product}/>
      </section>
    </main>
  );
}
