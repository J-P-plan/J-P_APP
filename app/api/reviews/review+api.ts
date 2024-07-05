export async function GET(request: Request) {
  const reviewId = new URL(request.url).searchParams.get("id");

  const response = await fetch(
    `${process.env.BACKEND_ENDPOINT}/review/${reviewId}`
  );

  const res = await response.json();

  return Response.json(res);
}
