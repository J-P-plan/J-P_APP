import { View, Text } from "react-native";
import VerticalSeparator from "@/components/common/Separator";
import StarRating from "@/components/common/StarRating";
import PlusIcon from "@/assets/icons/common/plus.svg";
import type { Location } from "@/types/api/placeDetail";
import DetailScreenSectionTitle from "@/components/ui/home/detail/molecules/shared/Title";

interface Props {
  location: Location;
}

export default function DetailScreenNearByPlaces({ location }: Props) {
  return (
    <View tw="w-[343px] mx-auto">
      <DetailScreenSectionTitle
        title="주변 여행지 추천"
        link={`/(tabs)/home/place-recommend?lat=${location.lat}&lng=${location.lng}`}
      />
      <View tw="space-y-2">
        {["섬진강 대나무숲길", "구례 꽃강", "화엄사"].map((place) => (
          <View
            key={place}
            tw="flex-1 flex-row items-center h-[83px] p-3 rounded border border-gray-200 bg-white"
          >
            <View tw="w-[60px] h-[60px] mr-[22px] rounded bg-primary"></View>
            <View tw="space-y-1.5">
              <Text tw="font-bold text-base text-gray-900">{place}</Text>
              <View tw="flex-row items-center">
                <StarRating rating={4.9} />
                <VerticalSeparator />
                <Text tw="font-normal text-xs text-gray-700">
                  {"위치 보기"}
                </Text>
              </View>
            </View>
            <View tw="flex-1 items-end mr-2">
              <View tw="flex-row items-center py-2 px-3 rounded-full border border-gray-600">
                <PlusIcon tw="w-[14px] h-[14px] text-gray-700" />
                <Text tw="font-medium text-xs text-gray-700">{"추가"}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
