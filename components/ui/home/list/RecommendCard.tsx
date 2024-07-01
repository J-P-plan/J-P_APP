import { Text, View } from "react-native";
import StarRating from "@/components/common/StarRating";
import TagChip from "@/components/common/TagChip";
import type { PlaceData } from "@/types/api/place";

interface Props {
  data: PlaceData;
}

export default function RecommendCard({ data }: Props) {
  return (
    <View tw="flex-row items-center space-x-3 w-[343px] h-[100px] mb-2 px-3 rounded border border-gray-200 bg-white">
      <View tw="w-20 h-[78px] rounded bg-secondary-light"></View>
      <View tw="flex-1 h-[78px] justify-between mr-2.5">
        <View tw="flex-row items-center justify-between">
          <TagChip text="주변 여행지" padding="px-2.5" withoutHashtag />
          <View tw="flex-row items-center">
            <StarRating rating={4.8} />
          </View>
        </View>
        <Text tw="font-bold text-base text-gray-900">{data.name}</Text>
        <View tw="flex-row items-center justify-between">
          <Text tw="font-normal text-xs text-gray-700">{"address"}</Text>
          <Text tw="font-normal text-xs text-gray-300">{"주소 보기"}</Text>
        </View>
      </View>
    </View>
  );
}
