import ProductUpdate from "@/app/components/form/UpdateProduct";
import { Suspense } from "react";

export default async function UpdateProduct({
  params,
}: {
  params: { updateId: string };
}) {
  const { updateId } = await params;

  return (
      <Suspense fallback={"Loadding......."}>
        
        <ProductUpdate updateId={updateId} />
      </Suspense>
  
  );
}
