import { notFound } from "next/navigation";

export default async function DocDetails({
  params,
}: {
  params: Promise<{ docIds: string[] }>;
}) {
  const { docIds } = await params;
  if (docIds?.length > 2) {
    notFound();
  }
  console.log("docIds: ", docIds);
  return <div>doc details page for doc ids: {docIds?.join(", ")}</div>;
}
