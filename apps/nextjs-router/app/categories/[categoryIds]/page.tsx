export default async function CategoryIds({
  params,
}: {
  params: Promise<{ categoryIds: string }>;
}) {
  const resolvedParams = await params;

  return (
    <div>
      category details page for category id: {resolvedParams.categoryIds}
    </div>
  );
}
