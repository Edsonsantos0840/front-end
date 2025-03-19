import ProductUpdate from "@/app/(dashboard)/components/form/UpdateProduct";
import LoadingSuspense from "@/app/(home)/LoadingSuspense";
import React from "react";
import { Suspense } from "react";

export default function UpdateProduct({ params }: { params: Promise<{ updateId: string }> }) {
  const { updateId } = React.use(params);

  return (
    <Suspense fallback={<LoadingSuspense/>}>
      <ProductUpdate updateId={updateId} />
    </Suspense>
  );
}
