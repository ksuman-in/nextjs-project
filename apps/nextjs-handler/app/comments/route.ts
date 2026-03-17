import { comments } from "./data";

export async function GET() {
  return Response.json(comments);
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
