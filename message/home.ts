import type { HomeListScreenId, HomeSectionId } from "@/types/screen/home";

interface HomeMessage {
  homeSectionTitle: Record<HomeSectionId | "more", string>;
  homeListHeader: Record<HomeListScreenId, string>;
}

const HOME_MESSAGE: HomeMessage = {
  homeSectionTitle: {
    "place-trending": "지금 가장 인기있는 여행지",
    "city-trending": "인기 여행 도시",
    "place-theme": "지금 가면 좋은 여행지",
    "travel-log": "사람들이 찜한 여행기",
    review: "지금 뜨는 리뷰",
    more: "더보기",
  },
  homeListHeader: {
    "place-trending": "인기 여행지",
    "city-trending": "인기 도시",
    "place-theme": "테마 여행지",
    "place-recommend": "주변 여행지",
  },
};

export default HOME_MESSAGE;
