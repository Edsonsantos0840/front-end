"use client";
//meus componentes
import { ProdutoProps } from "@/app/types/produtoTypes";
//componentes
import useSWR from "swr";

export default function FetchUploadProducts(urlUpload: string) {
  
  const fetcher = (url: string) =>
    fetch(url).then((res) => {
      if (!res.ok) throw new Error("Erro ao buscar produtos");
      return res.json();
    });

  const {
    data: updateProduct,
    error,
    isLoading,
  }: {
    data: ProdutoProps;
    error: string | undefined;
    isLoading: boolean;
  } = useSWR(urlUpload, fetcher);

  return { updateProduct, error, isLoading };
}
