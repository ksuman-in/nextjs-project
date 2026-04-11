import { Suspense } from "react";
import Author from "./authorBy";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsSequential() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Posts[] = await response.json();

  const filterPosts = posts.filter((post) => post.id % 10 === 1);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filterPosts.map((post) => {
          return (
            <div
              key={post.id}
              className="bg-[#f1f1f1] shadow-md p-4 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-3 leading-tight text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{post.body}</p>
              <Suspense
                fallback={
                  <div className="animate-plus">
                    <div className="h-2.5 bg-neutral-300 rounded-full w-48 mb-4"></div>
                  </div>
                }
              >
                <Author userId={post.userId} />
              </Suspense>
            </div>
          );
        })}
      </div>
    </div>
  );
}
