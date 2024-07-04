import { View, Text } from "react-native";
import VerticalSeparator from "@/components/common/Separator";
import StarRating from "@/components/common/StarRating";
import PlusIcon from "@/assets/icons/common/plus.svg";

interface Props {
  place: string;
}

export default function NearByPlaceCard({ place }: Props) {
  return (
    <View
      key={place}
      tw="flex-1 flex-row items-center h-[83px] mb-2 p-3 rounded border border-gray-200 bg-white"
    >
      <View tw="w-[60px] h-[60px] mr-[22px] rounded bg-primary"></View>
      <View tw="space-y-1.5">
        <Text tw="font-bold text-base text-gray-900">{place}</Text>
        <View tw="flex-row items-center">
          <StarRating rating={4.9} />
          <VerticalSeparator />
          <Text tw="font-normal text-xs text-gray-700">{"위치 보기"}</Text>
        </View>
      </View>
      <View tw="flex-1 items-end mr-2">
        <View tw="flex-row items-center py-2 px-3 rounded-full border border-gray-600">
          <PlusIcon tw="w-[14px] h-[14px] text-gray-700" />
          <Text tw="font-medium text-xs text-gray-700">{"추가"}</Text>
        </View>
      </View>
    </View>
  );
}
