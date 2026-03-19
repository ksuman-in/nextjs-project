import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  if (!query || query?.length < 2) {
    return new Response(
      JSON.stringify({ error: "search value length grater that 2 char." }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 404,
      },
    );
  }

  const filterCommnets =
    query && query?.length > 1
      ? comments.filter((comment) => comment.text.includes(query))
      : comments;

  return Response.json(filterCommnets);
}

export async function POST(request: Request) {
  const { text, userId } = await request.json();
  const newComment = {
    id: comments.length + 1,
    text,
    userId,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
