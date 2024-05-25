import { isPlace } from "@/types/api/place";
import type { PlaceId, PlaceType } from "@/types/api/place";

export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get("id");
  const home = new URL(request.url).searchParams.get("home") ? true : false;

  if (!isPlace(id)) {
    return;
  }

  //   const placeType: Record<PlaceId, PlaceType> = {
  //     "place-trending": "TRAVEL_PLACE",
  //     "city-trending": "CITY",
  //     "place-theme": "THEME",
  //   };

  //   const elementCnt = home ? 6 : 10;

  //   const response = await fetch(
  //     `https://jandp-travel.kro.kr/place/page?page=1&placeType=${placeType[id]}&elementCnt=${elementCnt}`
  //   );

  //   const res = await response.json();

  //   return Response.json(res);

  let data;

  if (id === "city-trending") {
    data = mockDataCity;
  } else {
    data = mockDataPlace;
  }

  if (home) {
    data = {
      pageInfo: data.pageInfo,
      data: data.data.slice(0, 6),
    };
  }

  return Response.json(data);
}

const mockDataCity = {
  pageInfo: {
    page: 1,
    hasNext: true,
    hasPrevious: false,
    totalElements: 15,
    totalPages: 2,
  },
  data: [
    {
      id: 15,
      placeId: "ChIJX7zzpqekczURlIbIAK4ltrs",
      name: "목포",
      subName: "전라남도 목포",
      photoUrl: null,
    },
    {
      id: 14,
      placeId: "ChIJzZqMtnOifDURQ0_wKF2H2gg",
      name: "익산",
      subName: "전라북도 익산",
      photoUrl: null,
    },
    {
      id: 13,
      placeId: "ChIJR4ITJ4mplzUR1JYR3TPT4Rg",
      name: "청주",
      subName: "충청북도 청주",
      photoUrl: null,
    },
    {
      id: 12,
      placeId: "ChIJS5dFeFaZfDURi9RQRful5IM",
      name: "수원",
      subName: "경기도 수원",
      photoUrl: null,
    },
    {
      id: 11,
      placeId: "ChIJVXealLU_cDUR3xhqMqzQkaY",
      name: "원주",
      subName: "강원도 원주",
      photoUrl: null,
    },
    {
      id: 10,
      placeId: "ChIJ8ZqSs8-8fDUR",
      name: "울산",
      subName: "울산광역시 울산",
      photoUrl: null,
    },
    {
      id: 9,
      placeId: "ChIJdQebfF1SezURqtDTRF4TpcU",
      name: "대전",
      subName: "대전광역시 대전",
      photoUrl: null,
    },
    {
      id: 7,
      placeId: "ChIJRcbZaklQ4jURlDxR12WazAM",
      name: "인천",
      subName: "인천광역시 인천",
      photoUrl: null,
    },
    {
      id: 3,
      placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
      name: "제주도",
      subName: "제주특별자치도 제주도",
      photoUrl: null,
    },
    {
      id: 2,
      placeId: "ChIJzWXFYYuifDURQnDlzCk3DUI",
      name: "전주",
      subName: "전라북도 전주",
      photoUrl: null,
    },
  ],
};

const mockDataPlace = {
  pageInfo: {
    page: 1,
    hasNext: true,
    hasPrevious: false,
    totalElements: 20,
    totalPages: 2,
  },
  data: [
    {
      id: 35,
      placeId: "ChIJa_-BmFusZTURS5qX2VO3vCE",
      name: "남이섬",
      subName: "강원도 춘천",
      photoUrl: null,
    },
    {
      id: 34,
      placeId: "ChIJzWXFYYuifDURmj6F2Wf_NZs",
      name: "전주 한옥마을",
      subName: "전라북도 전주",
      photoUrl: null,
    },
    {
      id: 33,
      placeId: "ChIJJ0lG1G6jfDURQeKP1MfRMUE",
      name: "경주 불국사",
      subName: "경상북도 경주",
      photoUrl: null,
    },
    {
      id: 32,
      placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
      name: "제주도 성산일출봉",
      subName: "제주특별자치도 제주도",
      photoUrl: null,
    },
    {
      id: 31,
      placeId: "ChIJR4ITliVveTURezFS5whFz4k",
      name: "부산 광안리 해변",
      subName: "부산광역시 수영",
      photoUrl: null,
    },
    {
      id: 30,
      placeId: "ChIJa147K9HXaDUR_qBdpL2QKk0",
      name: "경복궁",
      subName: "서울특별시 종로",
      photoUrl: null,
    },
    {
      id: 29,
      placeId: "",
      name: "베어트리파크",
      subName: "경기도 포천",
      photoUrl: null,
    },
    {
      id: 28,
      placeId: "",
      name: "경주 동궁과 월지",
      subName: "경상북도 경주",
      photoUrl: null,
    },
    {
      id: 27,
      placeId: "",
      name: "율곡습지공원",
      subName: "경기도 이천",
      photoUrl: null,
    },
    {
      id: 26,
      placeId: "",
      name: "관한루원",
      subName: "전라북도 남원",
      photoUrl: null,
    },
  ],
};
