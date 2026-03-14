import { notFound } from "next/navigation";

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ categoryIds: string; reviewIds: string }>;
}) {
  const catParams = await params;
  if (isNaN(parseInt(catParams?.reviewIds))) {
    notFound();
  }
  return (
    <div>
      review details page for category id: {catParams?.categoryIds} and review
      id: {catParams?.reviewIds}
    </div>
  );
}
