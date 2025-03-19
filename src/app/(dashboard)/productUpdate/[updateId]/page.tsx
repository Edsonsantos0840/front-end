import ProductUpdate from "@/app/(dashboard)/components/form/UpdateProduct";
import LoadingSuspense from "@/app/(home)/LoadingSuspense";
import { Suspense } from "react";

export default function UpdateProduct({ params }: { params: Record<string, string>  }) {
  const { updateId } = params;

  return (
    <Suspense fallback={<LoadingSuspense/>}>
      <ProductUpdate updateId={updateId} />
    </Suspense>
  );
}
