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
      id: 15,
      subject: "오대산 선재길에서 산책하기",
      content:
        "자연의 힐링을 동시에 누릴 수 있는 최고의 장소였어요! 산택로따라 걸으며 힐링을 만끽했어요! 호젓한 숲길을 계속 걷다보면 저절로 기분이 상쾌해지고 가벼워져요!",
      userCompactResDto: {
        id: 215,
        nickname: "yeeso",
        picture: "",
      },
      commentCnt: 21,
      star: 4.8,
      placeId: "ChIJX7zzpqekczURlIbIAK4ltrs",
    },
    {
      id: 14,
      subject: "남한산성 둘레길 최고의 뷰 즐기기",
      content:
        "주말 당일치기로 둘레길 등산하고 경치도 구경하고 왔어요. 총 1시간정도 가볍게 걸었어요. 길도 찾기",
      userCompactResDto: {
        id: 4664,
        nickname: "은지",
        picture: "",
      },
      commentCnt: 10,
      star: 4.9,
      placeId: "ChIJzZqMtnOifDURQ0_wKF2H2gg",
    },
    {
      id: 13,
      subject: "남한산성 둘레길 최고의 뷰 즐기기",
      content:
        "주말 당일치기로 둘레길 등산하고 경치도 구경하고 왔어요. 총 1시간정도 가볍게 걸었어요. 길도 찾기",
      userCompactResDto: {
        id: 4664,
        nickname: "은지",
        picture: "",
      },
      commentCnt: 8,
      star: 4.8,
      placeId: "ChIJzZqMtnOifDURQ0_wKF2H2gg",
    },
    {
      id: 12,
      subject: "남한산성 둘레길 최고의 뷰 즐기기",
      content:
        "주말 당일치기로 둘레길 등산하고 경치도 구경하고 왔어요. 총 1시간정도 가볍게 걸었어요. 길도 찾기",
      userCompactResDto: {
        id: 4664,
        nickname: "은지",
        picture: "",
      },
      commentCnt: 8,
      star: 4.8,
      placeId: "ChIJzZqMtnOifDURQ0_wKF2H2gg",
    },
    {
      id: 11,
      subject: "남한산성 둘레길 최고의 뷰 즐기기",
      content:
        "주말 당일치기로 둘레길 등산하고 경치도 구경하고 왔어요. 총 1시간정도 가볍게 걸었어요. 길도 찾기",
      userCompactResDto: {
        id: 4664,
        nickname: "은지",
        picture: "",
      },
      commentCnt: 8,
      star: 4.8,
      placeId: "ChIJzZqMtnOifDURQ0_wKF2H2gg",
    },
    {
      id: 10,
      subject: "남한산성 둘레길 최고의 뷰 즐기기",
      content:
        "주말 당일치기로 둘레길 등산하고 경치도 구경하고 왔어요. 총 1시간정도 가볍게 걸었어요. 길도 찾기",
      userCompactResDto: {
        id: 4664,
        nickname: "은지",
        picture: "",
      },
      commentCnt: 8,
      star: 4.8,
      placeId: "ChIJzZqMtnOifDURQ0_wKF2H2gg",
    },
    {
      id: 9,
      subject: "남한산성 둘레길 최고의 뷰 즐기기",
      content:
        "주말 당일치기로 둘레길 등산하고 경치도 구경하고 왔어요. 총 1시간정도 가볍게 걸었어요. 길도 찾기",
      userCompactResDto: {
        id: 4664,
        nickname: "은지",
        picture: "",
      },
      commentCnt: 8,
      star: 4.8,
      placeId: "ChIJzZqMtnOifDURQ0_wKF2H2gg",
    },
    {
      id: 8,
      subject: "남한산성 둘레길 최고의 뷰 즐기기",
      content:
        "주말 당일치기로 둘레길 등산하고 경치도 구경하고 왔어요. 총 1시간정도 가볍게 걸었어요. 길도 찾기",
      userCompactResDto: {
        id: 4664,
        nickname: "은지",
        picture: "",
      },
      commentCnt: 8,
      star: 4.8,
      placeId: "ChIJzZqMtnOifDURQ0_wKF2H2gg",
    },
  ],
};
