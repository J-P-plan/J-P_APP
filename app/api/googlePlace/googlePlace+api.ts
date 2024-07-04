export async function GET(request: Request) {
  const response = await fetch(
    `${process.env.BACKEND_ENDPOINT}/googleplace/details?placeId=ChIJ9SUiOHBOZjUR_YnH8Lbjzt0`
  );

  const res = await response.json();
  console.log(res);

  return Response.json(res);
}
