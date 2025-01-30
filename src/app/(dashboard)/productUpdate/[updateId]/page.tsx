import ProductUpdate from "@/app/components/form/UpdateProduct";
import Container from "../../../components/containers/Container";
import { Suspense } from "react";

export default async function UpdateProduct({
  params,
}: {
  params: { updateId: string };
}) {
  const { updateId } = await params;

  return (
    <Container>
      <Suspense fallback={"Loadding......."}>
        <ProductUpdate updateId={updateId} />
      </Suspense>
    </Container>
  );
}
