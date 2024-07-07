import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
import type { PlaceData } from "@/types/api/place";

interface Props {
  data: PlaceData;
  type?: "trending" | "theme";
}

export default function PlaceCard({ data, type }: Props) {
  return (
    <Link href={`/(tabs)/home/(detail)/place/${data.placeId}`} tw="mt-1 mr-2">
      <View>
        <View tw="w-[120px] h-[120px] rounded bg-gray-200">
          {data.photoUrl && (
            <Image source={{ uri: data.photoUrl }} tw="w-full h-full rounded" />
          )}
          {type === "theme" && (
            <View tw="absolute top-[15px] right-[11px] items-center justify-center w-[43px] h-5 rounded-large bg-white/60">
              <Text tw="text-[10px] text-black">{"여행지"}</Text>
            </View>
          )}
        </View>
        <Text tw="ml-1.5 mt-2 font-bold text-sm text-gray-900">
          {data.name}
        </Text>
        <Text tw="ml-1.5 mt-1 font-bold text-xs text-gray-600">
          {data.subName}
        </Text>
      </View>
    </Link>
  );
}
