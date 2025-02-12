
import useSWR from "swr";

const fetcher = async(url: string) => {
  return await fetch(url)
    .then((res) => {
      if (res.status === 404) {
        return []; // Retorna um array vazio quando não há comentários
      }

      if (!res.ok) {
        throw new Error(`Erro na requisição: ${res.status} - ${res.statusText}`);
      }

      return res.json();
    })
    .catch((error) => {
      // Em caso de erro de rede ou outro erro, retorne um array vazio ou trate conforme necessário
      console.error('Erro ao buscar os comentários:', error);
      return [];
    });
};

export function useComments(productId: string) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/comments/product/${productId}`;
  const { data, error, mutate } = useSWR(url, fetcher,
     {
    refreshInterval: (latestData) =>
      latestData && latestData.length < 1 ? 12 * 60 * 60 * 1000 : 2000, 
  }
);

  return {
    comments: data || [],
    isLoading: !data && !error,
    isError: error,
    mutate, // Para revalidar os dados manualmente
  };
}
