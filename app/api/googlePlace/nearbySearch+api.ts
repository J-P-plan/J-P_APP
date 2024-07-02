export async function GET(request: Request) {
  const lat = new URL(request.url).searchParams.get("lat");
  const lng = new URL(request.url).searchParams.get("lng");
  const radius = 5;

  const response = await fetch(
    `https://jandp-travel.kro.kr/googleplace/nearby-search/page?lat=${lat}&lng=${lng}&radius=${radius}`
  );

  const res = await response.json();
  console.log(res);

  return Response.json(res);
}
