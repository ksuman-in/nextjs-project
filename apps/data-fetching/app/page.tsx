import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center  py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Data Fetching</h1>
        <Link
          href={"/user-client"}
          className="text-blue-500 hover:text-blue-300"
        >
          Client User Details
        </Link>
        <Link
          href={"/user-server"}
          className="text-blue-500 hover:text-blue-300"
        >
          Server User Details
        </Link>
        <Link
          href={"/post-sequential"}
          className="text-blue-500 hover:text-blue-300"
        >
          Sequential Post Details
        </Link>
      </main>
    </div>
  );
}
