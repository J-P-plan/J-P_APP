export async function GET(request: Request) {
  const placeId = new URL(request.url).searchParams.get("id");

  //   const response = await fetch(
  //     `https://jandp-travel.kro.kr/place/details/${placeId}`
  //   );
  //   const response = await fetch(
  //     `https://jandp-travel.kro.kr/place/details/ChIJucAviZkZbjURT-cf73qYS2I`
  //   );

  //   const res = await response.json();

  //   return Response.json(res);

  return Response.json(data);
}

// - ChIJR7Y1TBFyYzURB9CrhSkMGuE (소금산 출렁다리)
// - ChIJucAviZkZbjURT-cf73qYS2I (섬진강 벚꽃길)
// - ChIJR4ITliVveTURQmG3LJD9N30 (대구)

const data = {
  id: 17,
  placeId: "ChIJucAviZkZbjURT-cf73qYS2I",
  name: "구례 섬진강 벚꽃길 (동해마을 벚꽃길)",
  formattedAddress: "대한민국 전라남도 구례군 문척면 죽마리 산98-1",
  location: { lat: 35.167742, lng: 127.4672947 },
  description: "섬진강을 따라 펼쳐지는 아름다운 벚꽃길입니다.",
  tags: [],
  photoUrls: [
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1300&maxheight=731&photo_reference=AUc7tXU6FtZzqj6wu5_unaWMcRWjOXdY-wAQ0WgiEhSZnENgl1f1v4M4Y3xGr4c3SdjhdcVKQB-se4NOq62_OrckT2rE1H1FdxNsiEC9bGoo2P23R6HS8NyNe_le9XKeqdqzi0RCih9xoh9Oa9CA8cuKi7mdQwqS3S4XKXAX4EuwH9haxHO1&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1300&maxheight=731&photo_reference=AUc7tXW856N3hWqbGPeCMQklQ4G58GANpRrZBqPlWFqrRw4x7u5ZoTQ1ww9XsgfmoCVN-e2BAqjayllTYgd6B1vtdPrZWTXtG6OUqmjFCOnySfb3pA6PJyqrAsceQ2D04ue-7-uZlVNEdmbdKv_WgUqP8GMPXFEdvHCfZNn8TtmjwurGHYUF&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1300&maxheight=731&photo_reference=AUc7tXVSze_WUcAhYj_ImLSxCy7buFe7N35VwEia9vzyL4FDMJgZCXVWwsa41pNrb1AMzZDPPmfaJXgIbUQRGJCbC_ewXs4gPPaKouFQp-AcOPSIPiOCwIpOLd9E6lRKPtFget7nC3-3MnWeqh6qPkHFKP_FgQHyGOnweg5Db1AluJO-LqU3&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=2252&maxheight=4000&photo_reference=AUc7tXWf5c8zLRDPf6btMNswe5gTKKjC97PFE73LRP1qlf547lN4qZumQcEDBtq4WasE6UAYnD4HPEXfaNsGNxZyJxR0wIKPJdWoIIai6cAR2fvUKRjvWeKPjrASpmrHYQ82iHewBiOu6QuO3q0Qsxg8INJvR3wwUlEa1URbqX2HMT8Uo8pg&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1300&maxheight=731&photo_reference=AUc7tXXnIrryw66v5ff7u_01Qqbje0mhwBhmXCn77Mdr0XgGRjAeRB4RdmGrUc1V8SKO-XYOPTvcdR1L30_E3vYtTLELok54ftHtgdgnC6-um82ZTrawmCjwRjKWlKJbdOGsb06Sz08v6FSI09zpKThM0omNFmGiLnKre133t8U1WvKLfmEf&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1300&maxheight=731&photo_reference=AUc7tXWtW_cfDHZS54OYTHl7R6hOly97qRUHwBTzf3MrRrFM7EdPlvTTyy1HP306gmmpr4y-iNqQcA1Gv7qNJ_kLhQmCs6gYAHImBkZPumRiBBRgZ_J41PqCJ33Ngs-Lt3uk4UjU3nsrnCFYr-FdiW41yI7r5Yhxp3wO199wRbpezCQEYod3&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1300&maxheight=731&photo_reference=AUc7tXXi2Iho6adqrUKrwdUze1mu8oHUrABxw55w-FQinL4KuCOJU83dA2kfADvh_yb3IUP9H4S8H5k1E33zGsw46yAeszo4aod233KV7hq4fD3AG3aRKzkNggbGcJ_dMyGcjj4iGKjrJfYP_u3dSymFri_yvoPsQVqHNCvsBQgXjndin7xv&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1300&maxheight=731&photo_reference=AUc7tXXZ4Btk0s31I1COGWwoqA_HKPHWLaWlpEI3fwo5Yt2LTDbq7_Bglxg-J_PO1zmtiVRUDZLgN4j33GVTdpNI8UU3Mefdlx1GX7jPJQMnF1j7wYed9X0pN8Nru2mhiHB93EuGr67mtkTOY8Z47kyfhT5jdmiCVi4LNZMtBbBlFgHi1QzV&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&maxheight=2252&photo_reference=AUc7tXVwLYdWrHdFKL1qK0pIhGfC5MwEHpuTTSn3ir0u5KooVecDFt0AGwjh8wZcwX4cdh8t7nNwG6JuH3CigqJD1MRiGcgStCLg4DEzcFEW1i9D9lImORMEdtZlBZqJU3StfORDNEw_8SRwTzfOzLnTFzA3P67qzEmYvgW9bdmckdY2xpJi&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1300&maxheight=731&photo_reference=AUc7tXXJF1YpUsBeelBkfr123OY5hT03KXI906EFlHIU0TMTA77lZIcay-01-GLBJmwzbVo8jd2vfAGcSmajqNnEYc29QB4ZO8L6lyu_AfFwWk1XUDYS_fUoOaWdrdtnxrgRwwlTsulIJjRJ_MLw4EYVv9jj8bugXVOQAZTlf1wzaUID0G1s&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
  ],
  likeCount: 0,
  isLiked: false,
};
