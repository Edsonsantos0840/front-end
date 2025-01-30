import { ProdutoProps } from "@/app/types/produtoTypes";
import Container from "../containers/Container";

import { MdImageSearch } from "react-icons/md";
import Image from "next/image";
import { UploadProductSubmit } from "@/app/functions/handleSubmit/HandleUpdateProduct";

type ProductImages = "image1" | "image2" | "image3" | "image4";

async function ProductUpdate({ updateId }: { updateId: string }) {
  const url = `${process.env.BASE_URL}/products/${updateId}`;

  const res = await fetch(url);

  if (res.ok) {
    console.log("Produto retornado com sucesso");
  } else {
    console.log("Houve um erro ao buscar os produtos");
  }

  const updateProduct: ProdutoProps = await res.json();

  const category = ["banheiro", "cozinha", "escadas", "exteriores"];
  const img: ProductImages[] = ["image1", "image2", "image3", "image4"];

  const sele = category.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  const images = img.map((image) => (
    <label
      key={image}
      className="cursor-pointer border-dashed border-[1px] border-[#b91c1c]/15 alinha6 text-sm my-5 hover:scale-105"
    >
      <input type="file" name={image} className="hidden" />
      {updateProduct?.[image] ? (
        <Image
          src={updateProduct[image]}
          alt="fkjfd"
          width={200}
          height={200}
        />
      ) : (
        <MdImageSearch size={100} color="#b91c1c54" />
      )}
    </label>
  ));

  const UploadProductSubmitWithId = UploadProductSubmit.bind(null, updateProduct._id);

  return (
    <Container>
      <h1 className="text-2xl text-center font-bold mb-6">Editar produto</h1>

      <form
        action={UploadProductSubmitWithId}
        className="flex flex-col p-8 bg-white rounded-md  space-y-2"
      >
        <label className="font-medium">
          Título:
          <input
            type="text"
            name="title"
            placeholder="Digite o título do produto"
            className="border border-gray-300 rounded-md p-1 w-full"
            defaultValue={updateProduct.title}
          />
        </label>
        <label className="font-medium">
          Categoria:
          <select
            name="category"
            className="border border-gray-300 rounded-md p-1 w-full"
            defaultValue={updateProduct.category}
          >
            <option value="">----Selecione uma categoria----</option>
            {sele}
          </select>
        </label>
        <div className="flex justify-center items-center gap-10">{images}</div>

        <label className="font-medium">
          Descrição
          <input
            type="text"
            name="description"
            placeholder="Descreva o produto"
            className="border border-gray-300 rounded-md py-4 w-full"
            defaultValue={updateProduct.description}
          />
        </label>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
        >
          Enviar
        </button>
      </form>
    </Container>
  );
}
export default ProductUpdate;
