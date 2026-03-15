import { notFound } from "next/navigation";

export default async function CategoryIds({
  params,
}: {
  params: Promise<{ categoryIds: string }>;
}) {
  await new Promise((resolve) => setTimeout(() => resolve(0), 1000));
  const resolvedParams = await params;
  if (isNaN(parseInt(resolvedParams?.categoryIds))) {
    throw new Error("category id should be a number");
  }
  if (parseInt(resolvedParams?.categoryIds) >= 500) {
    notFound();
  }
  return (
    <div>
      category details page for category id: {resolvedParams.categoryIds}
    </div>
  );
}
