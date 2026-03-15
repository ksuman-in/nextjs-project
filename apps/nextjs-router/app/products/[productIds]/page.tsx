import { Metadata } from "next";

type Props = {
  params: Promise<{ productIds: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const resolvedParams = await params;
  return {
    title: {
      absolute: `Product details for product id: ${resolvedParams.productIds}`,
    },
  };
};

export default async function ProdcutDetails({ params }: Props) {
  const resolvedParams = await params;
  return (
    <div>product details page for product id: {resolvedParams.productIds}</div>
  );
}
