import { useState } from "react";
import { ScrollView, View } from "react-native";
import type { PlaceData } from "@/lib/types/api/place";
import ContentWrapper from "@/components/common/layout/ContentWrapper";
import LikeListItem from "@/components/ui/mypage/molecules/LikeListItem";
import LikeListSort, {
  LikeSort,
} from "@/components/ui/mypage/molecules/LikeListSort";

const likeList: PlaceData[] = [
  {
    id: 4,
    placeId: "4",
    name: "양평 두물머리",
    subName: "경기 양평",
    photoUrl: "",
  },
  {
    id: 3,
    placeId: "3",
    name: "해동 용궁사",
    subName: "부산 기장",
    photoUrl: "",
  },
  {
    id: 2,
    placeId: "2",
    name: "아반데기 마을",
    subName: "강원 강릉",
    photoUrl: "",
  },
  {
    id: 1,
    placeId: "1",
    name: "바람의 언덕",
    subName: "경남 거제",
    photoUrl: "",
  },
];

export default function LikeRoute() {
  const [currentSort, setCurrentSort] = useState<LikeSort>(LikeSort.ALL);

  const handleChangeSort = (sort: LikeSort) => {
    setCurrentSort(sort);
  };

  return (
    <ScrollView>
      <ContentWrapper tw="my-6">
        <LikeListSort
          currentSort={currentSort}
          handleChangeSort={handleChangeSort}
        />
        <View tw="flex-row flex-wrap justify-between mt-4 mx-2.5">
          {likeList.map((item) => (
            <LikeListItem key={item.id} item={item} />
          ))}
        </View>
      </ContentWrapper>
    </ScrollView>
  );
}
