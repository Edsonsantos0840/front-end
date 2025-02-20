import { cookies } from "next/headers";

async function FetchGet<T>(url: string): Promise<{ data: T | null; error?: string }> {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Erro ao buscar os dados");
    
        const data: T = await res.json();
        return { data };
      } catch (error) {
        console.error("Erro ao retornar os dados:", error);
        return { data: null, error: "Houve um erro ao retornar os dados" };
      }
    }
    
    export { FetchGet };

async function FetchGetAuth<T>(url: string): Promise<{ data: T | null; error?: string }> {
  const token = (await cookies()).get("MA_MARMORE")?.value;
      try {
        const res = await fetch(url, {
          method: 'GET',
          headers: {
             'content-type':'application/json',
              Authorization: `Bearer ${token}`
          }
        });
        if (!res.ok) throw new Error("Erro ao buscar os dados");
    
        const data: T = await res.json();
        return { data };
      } catch (error) {
        console.error("Erro ao retornar os dados:", error);
        return { data: null, error: "Houve um erro ao retornar os dados" };
      }
    }
    
    export { FetchGetAuth };
    
    