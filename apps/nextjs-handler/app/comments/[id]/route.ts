import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const existingComment = comments.find(
    (comment) => comment.id === parseInt(id),
  );
  if (existingComment) {
    return Response.json(existingComment);
  } else {
    return new Response(JSON.stringify({ error: "Comment not found" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const body = await request.json();
  const { id } = await params;

  const existingId = comments.findIndex(
    (comment) => comment.id === parseInt(id),
  );

  if (existingId >= 0) {
    comments[existingId].text = body.text;
    return Response.json(comments[existingId]);
  } else {
    return new Response(JSON.stringify({ error: "Id not found" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const indexDelete = comments.findIndex(
    (comment) => comment.id === parseInt(id),
  );

  if (indexDelete >= 0) {
    const deleteComment = comments[indexDelete];
    comments.splice(indexDelete, 1);

    return Response.json(deleteComment);
  } else {
    return new Response(JSON.stringify({ error: "That id not found in DB" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 404,
    });
  }
}
