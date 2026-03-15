import Link from "next/link";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div>
      <nav className="flex space-x-4 flex-row ">
        <Link href="/products">Products</Link>
        <Link href="/about">About</Link>
        <Link href="/categories">Categories</Link>
      </nav>

      <h1>Nextjs Router Learning</h1>
    </div>
  );
}
