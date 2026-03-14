export default async function ProdcutDetails({
  params,
}: {
  params: Promise<{ productIds: string }>;
}) {
  const resolvedParams = await params;
  console.log("params: ", resolvedParams);
  return (
    <div>product details page for product id: {resolvedParams.productIds}</div>
  );
}
