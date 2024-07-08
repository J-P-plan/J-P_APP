import { Text, View } from "react-native";
import type { HomeSectionItemProps } from "@/lib/types/screen/home";
import LinkButton from "@/components/common/navigation/LinkButton";

const homeSectionTitle = {
  "place-trending": "지금 가장 인기있는 여행지",
  "city-trending": "인기 여행 도시",
  "place-theme": "지금 가면 좋은 여행지",
  "travel-log": "사람들이 찜한 여행기",
  review: "지금 뜨는 리뷰",
  more: "더보기",
};

export default function HomeSectionHeader({ id }: HomeSectionItemProps) {
  return (
    <View tw="flex-row items-center justify-between w-[343px] mx-auto  mb-3">
      <Text tw="font-bold text-xl text-gray-900">{homeSectionTitle[id]}</Text>
      <LinkButton
        href={
          id === "travel-log" || id === "review"
            ? `/(tabs)/(travelReview)/${id}`
            : `/(tabs)/home/${id}`
        }
        text="더보기"
        textStyle="font-normal text-xs text-gray-300"
      />
    </View>
  );
}
