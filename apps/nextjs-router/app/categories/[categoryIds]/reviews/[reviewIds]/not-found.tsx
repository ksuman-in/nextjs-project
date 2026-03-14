export default async function Notfound({
  params,
}: {
  params: Promise<{ categoryIds: string; reviewIds: string }>;
}) {
  const catParams = await params;

  return <div>Reviews not found for Category of {catParams?.categoryIds}</div>;
}
