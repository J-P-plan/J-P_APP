export async function GET(request: Request) {
  const lat = new URL(request.url).searchParams.get("lat");
  const lng = new URL(request.url).searchParams.get("lng");
  const radius = new URL(request.url).searchParams.get("radius") || 5;

  if (!lat || !lng) {
    return Response.json(null);
  }

  const response = await fetch(
    `https://jandp-travel.kro.kr/googleplace/nearby-search/page?lat=${lat}&lng=${lng}&radius=${radius}`
  );

  const res = await response.json();

  return Response.json(res);
  return Response.json(data);
}

const data = {
  nextPageToken:
    "AUc7tXVgkFBCvwdMq2OFDG3-YOYUbd5MfCuy7CNF-bEwbs_4SMNJ9B1MibEF8PBjEO5dCEBlsIYZsfeACyF7df__49tE2mReENTtfxTgfYjbyP0u5helK4xCYpis3_YZ5hle1uGogyUUOUyHLw8mgkE5HIGrMJ1tn9atfYfR1g4sLlPJp8X78nIeRDUYL2uDnz5Er7lx0oTw5IbytWe8PVTPrJC-0tCHDk4gJX_lLmiz_jnPU8wS2aHqTGSCiSNyJlp5awmXqM8ySwEltFBSkt71QzNCRsTYd33BDgOUedZiwlbF7ztlDiU0_KNvYY1Nct94_Y9rxnGjtUIvqaBU6t0SK2v0AzQcI0cFH8Hi7fl4bEqnBmwfs0GYWfAj3uhfClr_hVKZZ9PeyZkJ2ECTbYUQP4rSHtb2zdANPDi7XjVn",
  results: [
    {
      placeId: "ChIJl5rXmjE9bjURBt9kTJxM2Ss",
      name: "문척교",
      vicinity: "구례군 문척면 월전리",
      geometry: [Object],
      rating: 4.3,
      userRatingsTotal: 17,
      photoUrls: [Array],
    },
    {
      placeId: "ChIJz0tUtRwYbjURRcaJFsQ_Gks",
      name: "구례1교",
      vicinity: "구례군 구례읍",
      geometry: [Object],
      rating: 3.7,
      userRatingsTotal: 10,
      photoUrls: [Array],
    },
    {
      placeId: "ChIJWUsDkSYYbjURCfhebns32gA",
      name: "용서교",
      vicinity: "순천시 황전면 금평리",
      geometry: [Object],
      rating: 2.8,
      userRatingsTotal: 4,
      photoUrls: [Array],
    },
    {
      placeId: "ChIJwz6T7mwYbjURqHUY_moIBx4",
      name: "복호제1교",
      vicinity: "순천시 황전면 비촌리",
      geometry: [Object],
      rating: 4.3,
      userRatingsTotal: 3,
      photoUrls: [Array],
    },
    {
      placeId: "ChIJRbaEbdUibjUROJ1lcnlweCQ",
      name: "우리청과",
      vicinity: "South Korea",
      geometry: [Object],
      rating: 4,
      userRatingsTotal: 3,
      photoUrls: [],
    },
    {
      placeId: "ChIJTfUt-dMibjURasIga1jv8sA",
      name: "KT 구례지점",
      vicinity: "구례군 구례읍 봉남리 116",
      geometry: [Object],
      rating: 5,
      userRatingsTotal: 2,
      photoUrls: [],
    },
    {
      placeId: "ChIJf9TcS9UibjURSRcTnnHqZ1o",
      name: "축협판매장",
      vicinity: "구례군 구례읍 봉동리 201-3",
      geometry: [Object],
      rating: 4.5,
      userRatingsTotal: 2,
      photoUrls: [],
    },
    {
      placeId: "ChIJgesk_BcYbjURs71ZbBQ4Aw0",
      name: "용림도로교",
      vicinity: "순천시 황전면 선변리",
      geometry: [Object],
      rating: 5,
      userRatingsTotal: 1,
      photoUrls: [],
    },
    {
      placeId: "ChIJvXmendMibjURBwr-TK2X7u8",
      name: "삼성오에이",
      vicinity: "구례군 구례읍 봉남리 113-15",
      geometry: [Object],
      rating: 4,
      userRatingsTotal: 1,
      photoUrls: [Array],
    },
    {
      placeId: "ChIJ48e4ExEYbjURaa7azMaojgc",
      name: "구례대교",
      vicinity: "구례군 구례읍 신월리",
      geometry: [Object],
      rating: 3,
      userRatingsTotal: 1,
      photoUrls: [Array],
    },
    {
      placeId: "ChIJGXsLRRgYbjURcesRZ-W5kDM",
      name: "용문교",
      vicinity: "순천시 황전면 선변리",
      geometry: [Object],
      rating: 1,
      userRatingsTotal: 1,
      photoUrls: [Array],
    },
    {
      placeId: "ChIJLSQoqIcDbjURE5dE2O5aDh0",
      name: "순천시",
      vicinity: "순천시",
      geometry: [Object],
      rating: 0,
      userRatingsTotal: 0,
      photoUrls: [Array],
    },
    {
      placeId: "ChIJoTKJkj8YbjURfHlYpAgEDzw",
      name: "황전3터널",
      vicinity: "순천시 황전면 비촌리",
      geometry: [Object],
      rating: 0,
      userRatingsTotal: 0,
      photoUrls: [],
    },
    {
      placeId: "ChIJMQaWZaAibjUR2u3vXWLk2z0",
      name: "구례1터널",
      vicinity: "구례군 구례읍 신월리",
      geometry: [Object],
      rating: 0,
      userRatingsTotal: 0,
      photoUrls: [],
    },
    {
      placeId: "ChIJv9Yc_Sw9bjURM2UueMmRNpo",
      name: "구례119안전센터",
      vicinity: "South Korea",
      geometry: [Object],
      rating: 0,
      userRatingsTotal: 0,
      photoUrls: [],
    },
    {
      placeId: "ChIJCwvQttUibjURgqXOXfgfkMI",
      name: "맘모스의류",
      vicinity: "구례군 구례읍 봉동리 307-3",
      geometry: [Object],
      rating: 0,
      userRatingsTotal: 0,
      photoUrls: [],
    },
    {
      placeId: "ChIJb56spNUibjURAWUuIZ8JPVY",
      name: "우리식품",
      vicinity: "South Korea",
      geometry: [Object],
      rating: 0,
      userRatingsTotal: 0,
      photoUrls: [],
    },
    {
      placeId: "ChIJr5ha2NcZbjUReEeunJICdMo",
      name: "황전북초등학교병설유치원 휴원",
      vicinity: "순천시 황전면 대치리 435",
      geometry: [Object],
      rating: 0,
      userRatingsTotal: 0,
      photoUrls: [],
    },
    {
      placeId: "ChIJubnneBcYbjURuvvuQlvZbSs",
      name: "용림지하차도",
      vicinity: "순천시 황전면 선변리",
      geometry: [Object],
      rating: 0,
      userRatingsTotal: 0,
      photoUrls: [],
    },
    {
      placeId: "ChIJtQMMMZo8bjURrJ27b3pIfWA",
      name: "구례군",
      vicinity: "구례군",
      geometry: [Object],
      rating: 0,
      userRatingsTotal: 0,
      photoUrls: [Array],
    },
  ],
};
