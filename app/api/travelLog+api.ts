export async function GET(request: Request) {
  const home = new URL(request.url).searchParams.get("home") ? true : false;

  //   const elementCnt = home ? 2 : 10;

  //   const response = await fetch(
  //     `https://jandp-travel.kro.kr/reviews?page=1&sort=HOT&elementCnt=${elementCnt}`
  //   );

  //   const res = await response.json();

  //   return Response.json(res);

  let data: any = mockData;

  if (home) {
    data = {
      pageInfo: data.pageInfo,
      data: data.data.slice(0, 2),
    };
  }

  return Response.json(data);
}

const mockData = {
  pageInfo: {
    page: 1,
    hasNext: true,
    hasPrevious: false,
    totalElements: 15,
    totalPages: 8,
  },
  data: [
    {
      id: 1544,
      subject: "안동 혼자 뚜벅이 여행 떠나기",
      tags: ["안동", "2박3일", "월영교", "혼행"],
      userCompactResDto: {
        id: 15446,
        nickname: "coco1202",
        picture: "",
      },
      commentCnt: 16,
      like: 26,
      placeId: "ChIJX7zzpqekczURlIbIAK4ltrs",
    },
    {
      id: 146544,
      subject: "1박2일 남원 힐링 여행 코스",
      tags: ["남원", "힐링코스", "도보여행"],
      userCompactResDto: {
        id: 45664,
        nickname: "트래블러",
        picture: "",
      },
      commentCnt: 12,
      like: 30,
      placeId: "ChIJzZqMtnOifDURQ0_wKF2H2gg",
    },
    {
      id: 1544,
      subject: "안동 혼자 뚜벅이 여행 떠나기",
      tags: ["안동", "2박3일", "월영교", "혼행"],
      userCompactResDto: {
        id: 15446,
        nickname: "coco1202",
        picture: "",
      },
      commentCnt: 16,
      like: 26,
      placeId: "ChIJX7zzpqekczURlIbIAK4ltrs",
    },
    {
      id: 146544,
      subject: "1박2일 남원 힐링 여행 코스",
      tags: ["남원", "힐링코스", "도보여행"],
      userCompactResDto: {
        id: 45664,
        nickname: "트래블러",
        picture: "",
      },
      commentCnt: 12,
      like: 30,
      placeId: "ChIJzZqMtnOifDURQ0_wKF2H2gg",
    },
  ],
};
