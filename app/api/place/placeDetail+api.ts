export async function GET(request: Request) {
  const placeId = new URL(request.url).searchParams.get("id");

  const response = await fetch(
    `${process.env.BACKEND_ENDPOINT}/place/details/${placeId}`
  );

  if (response.ok) {
    const res = await response.json();

    return Response.json(res);
  }

  return Response.json(data);
}

// - ChIJR7Y1TBFyYzURB9CrhSkMGuE (소금산 출렁다리)
// - ChIJucAviZkZbjURT-cf73qYS2I (섬진강 벚꽃길)
// - ChIJR4ITliVveTURQmG3LJD9N30 (대구)

const data = {
  id: 300,
  placeId: "ChIJR7Y1TBFyYzURB9CrhSkMGuE",
  name: "소금산 출렁다리",
  formattedAddress: "대한민국 강원도 원주시 지정면 소금산길 12",
  description: "강원도 원주에 위치한 아름다운 출렁다리입니다.",
  tags: ["여름여행", "바닷가", "태그예시", "여행가고싶다"],
  photoUrls: [
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&maxheight=3024&photo_reference=AUc7tXVDIewxd2gfzAqtvXBwxs93gl0FLdehMd2zeXfqrm5AIrZLUmUj54tHvICTWFBxcDEVHqrtPKFdJtB5qdWIe3GJPLCiNun4y81Kox8sLkr1V_ruksUB-yw7lpkvLEIvjFsJIf68DqkwRk22RVtePygnJIvKP6Jf-JjG-2-3XPMKbOg&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1440&maxheight=1080&photo_reference=AUc7tXW29OymUE34TRD0o0Ly18DtAOUM2AU3eUZff63I4MefbaqBG83sfUJ6hglc3R4s0anJwuRV0M9PHBdE-yVapKKBMndht7UqO1CaHeTcbNXXm6IXw0iVPlaHHD-1Qwj4U95hd9KvVTw6Rsj0HGPD_t0FMy_ZSYnBwK5qFRrpX-62n776&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&maxheight=3000&photo_reference=AUc7tXUT8XGcHdFw4I2ApFP12fxw_Z6UHhbKq1izgYtO92cg6RsjG-TM7RPo-_U9eTs3_MjVXIOI3R98IKWpdpPoTPcEVG2Oikj515hWkKq93uMsAuueQCgL6US0N4ekbrFquWr1EZ5ZfVGHzFHPIs3YOVH-Mc2KdAH4WtLtXlPW985khT_F&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=9248&maxheight=6936&photo_reference=AUc7tXV_xOUDnad8rbti7Rf-996cdReQk3wRyooES-xGtiRKd_whceEXAwIiwKTF43E5ccl61HW-9bHtOsWwadCta5snbPO3GRCPaTFNOu5DI5owYTq3XtFMsbBWU5sAAlRFLEbmc4Uoxr8c1AHkIED8AZffzZSbiMTbgwmGeM4Q2sBPYEHW&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4656&maxheight=2620&photo_reference=AUc7tXUPruMQvGOt6aYYOhpQnPBANzX8Dj11AK3V4StyN8d7D0hcwUHqj3wPzHVhP5aGzayMPAW3Pukakx0JrgyfrN5hkom6hWBehySReOQ4TAaAii54YtdWRKCf31lrR-PxPHbB-ftSMTy6X8NkXWqiaWwhR-ETrO3Gwejz3wavFLutlHrg&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&maxheight=3000&photo_reference=AUc7tXUWFWISMurz4FY_jbrKG_bIomU0MP3UHYpMtWtBdMPb59Pl-MmM-40JaBc0gO4JZsZZUYrP6vl2lu4wyNCiWWfvrl2FvFJO1q2PONEq4hCuccdZNLmoujkwCfz-CVM-y27Uwq0WDt6qAkf26SICydW1mZvFOp-VNwadmBXTr6WktkMC&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&maxheight=3024&photo_reference=AUc7tXVKGIuJZVmTb9VqJJTfs9YJLlUWfAOgQaYzx1r4fsK3_TMESnbTkGLMwR1Z-W1S_TfORotyjagvBojxcG-TzCSkFujMMbBIUekiMDJiU9kZ4zAG_PHHUtbgVI9KHm9kWrW-mNlZem3yGoIdi9L3LHBfOZ3_HrdoIGLd0fFWhwO-2j_q&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&maxheight=2252&photo_reference=AUc7tXWf-YQ6W7IjDv6e72kWqbLw3pB9AzLnUcJOvQAKDvJ_iMv2_RczHdl4wkAE_F0egW873xBcm1Hn78mLTkl9vhk1FPRaaygzGBKMIkcphxp3tuANVQN_zu6AnI-E2uB9aIGJQOKc57BlOPofRNMb775-I_KxelHltUnKGz-_oPV_RZtG&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4624&maxheight=3468&photo_reference=AUc7tXU-iejl7qvQmcsUeC1mWEpyhYulnanKWzMP9rAXu6neR6dPz_VmHiPS7JZ6OJ9_TYZyqgfLvSoG2z-FnYdJesB511aE9s2EhEMKG0bIxTEVxPkoKmKEhW1EenpfL5X6kN1mxUcM0-LswOZ9Aj3TyqMsS9SthiJE0E4Q0Qc3i15fnPdS&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&maxheight=3000&photo_reference=AUc7tXVu1H1UDIXM_ZQSzllCXDPa6zwCX1JyWqCLZNhizi8E7WdCqdFLX2KQSJhKvjNW2yQqVO-SaEDdKkXDwYAJgf1dbOV7okLirn8s1WggtJjCal3fpBJtrg4ssl880_1v6ZtzmnvvLVZ9bDuhPzugorhPOW1LydaR2iY-vdlPC9pq-xBs&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
  ],
  placeType: "TRAVEL_PLACE",
  likeCount: 0,
  isLiked: false,
  location: {
    lat: 37.3676264,
    lng: 127.8248756,
  },
};
