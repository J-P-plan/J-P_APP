import { Image, Text, View } from "react-native";
import { Link } from "expo-router";
import type { TravelListItem } from "@/components/ui/mypage/organisms/TravelRoute";

interface Props {
  item: TravelListItem;
}

export default function TravelLogListItem({ item }: Props) {
  return (
    <Link href={"/(tabs)/travelReview/(index)/travel-log"}>
      <View tw="items-center justify-center w-[150px] h-[130px] mb-4">
        {item.picture ? (
          <Image
            source={{ uri: item.picture }}
            tw="absolute w-[150px] h-[130px] rounded"
          />
        ) : (
          <View tw="absolute w-[150px] h-[130px] rounded bg-secondary" />
        )}
        <View tw="items-center" style={{ gap: 8 }}>
          <Text tw="font-bold text-base text-white">{item.city}</Text>
          <Text tw="font-normal text-sm text-white">
            {`${item.startDate.slice(3)} ~ ${item.endDate.slice(3)}`}
          </Text>
        </View>
        <View tw="absolute top-3 right-3 flex justify-center h-5 px-2 rounded-full bg-white/60">
          <Text tw="font-normal text-[10px] text-gray-900">
            {item.isPublic ? "공개" : "비공개"}
          </Text>
        </View>
      </View>
    </Link>
  );
}
