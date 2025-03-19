import ProductUpdate from "@/app/(dashboard)/components/form/UpdateProduct";
import LoadingSuspense from "@/app/(home)/LoadingSuspense";
import { Suspense } from "react";

export default async function UpdateProduct({ params }: { params: { updateId: string } }) {
  const { updateId } = params;

  return (
    <Suspense fallback={<LoadingSuspense/>}>
      <ProductUpdate updateId={updateId} />
    </Suspense>
  );
}
