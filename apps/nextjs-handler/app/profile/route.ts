import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeader = new Headers(request.headers);

  console.log(requestHeader.get("Authorization"));

  const headerList = await headers();

  console.log(headerList.get("Authorization"));

  console.log(request.cookies.get("theme"));

  const cookieStorage = await cookies();
  cookieStorage.set("perPage", "20");
  console.log(cookieStorage.get("perPage"));

  return new Response(JSON.stringify("<h1>Profile data</h1>"), {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=light",
    },
  });
}
