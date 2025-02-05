import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useComments(productId: string) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/comments/product/${productId}`;
  const { data, error, mutate } = useSWR(url, fetcher, {
    refreshInterval: 2000, // Atualiza a cada 5 segundos (opcional)
  });

  return {
    comments: data || [],
    isLoading: !data && !error,
    isError: error,
    mutate, // Para revalidar os dados manualmente
  };
}
