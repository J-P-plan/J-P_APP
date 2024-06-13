export async function GET(request: Request) {
  const response = await fetch(
    "https://jandp-travel.kro.kr/googleplace/details?placeId=ChIJ9SUiOHBOZjUR_YnH8Lbjzt0"
  );

  const res = await response.json();
  console.log(res);

  return Response.json(res);
}
