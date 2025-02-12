import CardComments from "@/app/components/cards/CardComments";
import CardImages from "@/app/components/cards/CardImages";
import Container from "@/app/components/containers/Container";
import CommentRegister from "@/app/components/form/CommentRegister";
import LikeRegister from "@/app/components/form/LikeRegister";
import { ProdutoProps } from "@/app/types/produtoTypes";
import { Block } from "@/app/middleware/blockedPage";
import BtnDesLike from "@/app/components/buttons/BtnDesLike";

export interface likesProps {
  _id: string;
  likes: string;
  user: string;
  product: string;
}

export default async function ProductOne({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const { user } = await Block(); // Chama no Server Component
  const url = `${process.env.BASE_URL}/products/${id}`;
  const urlLikes = `${process.env.BASE_URL}/likes`;

  const [productRes, likesRes] = await Promise.all([
    fetch(url, { cache: "no-store" }),

    fetch(urlLikes, { next: { tags: ["likes"] } }),
  ]);

  const product: ProdutoProps = await productRes.json();
  const likes: likesProps[] = likesRes.ok ? await likesRes.json() : [];

  const userComments = {
    _id: "",
    name: "",
    email: "",
    image: "",
    tipo: "",
  };

  // const arrayLike = likes.map((item) => {
  //   return item.user;
  // });

  let urlDelLike = "";

  if (likes.length > 0 && likes[0]?._id) {
    urlDelLike = `${process.env.BASE_URL}/product/likes/${likes[0]._id}`;
  }

  return (
    <Container>
      <main className="px-6 relative z-0">
        <div className="flex-col sm:basis-1/2 md:basis-1/3 lg:basis-1/4 max-w-full">
          <>
            <h2>{product.title}</h2>
            <p>
              Categoria: <strong>{product.category}</strong>
            </p>
            {product && (
              <section className="">
                <CardImages product={product} />
                <div className=" inset-0 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-red-700 text-2xl font-semibold px-4 text-center">
                    {product.description}
                  </p>
                </div>
              </section>
            )}
          </>
          <div className="flex gap-4">
            <LikeRegister id={product._id} />
            <BtnDesLike url={urlDelLike} />
            <h2>{likes.length}</h2>
          </div>
          <CommentRegister id={product._id} />
          <CardComments id={id} user={user?.data || userComments} />
        </div>
      </main>
    </Container>
  );
}
