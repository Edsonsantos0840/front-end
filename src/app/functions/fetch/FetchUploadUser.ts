"use client";
//meus componentes
import { UserProps } from "@/app/types/user";
//componentes
import useSWR from "swr";

export default function FetchUploadUser(urlUpload: string) {
  
  const fetcher = (url: string) =>
    fetch(url).then((res) => {
      if (!res.ok) throw new Error("Erro ao buscar produtos");
      return res.json();
    });

  const {
    data: user,
    error,
    isLoading,
  }: {
    data: UserProps;
    error: string | undefined;
    isLoading: boolean;
  } = useSWR(urlUpload, fetcher);

  return { user, error, isLoading };
}
