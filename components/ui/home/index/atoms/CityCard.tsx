import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
import type { PlaceData } from "@/types/api/place";

interface Props {
  data: PlaceData;
}

export default function CityCard({ data }: Props) {
  return (
    <Link href={`/(tabs)/home/(detail)/city/${data.placeId}`} tw="mt-1">
      <View tw="mr-2">
        <View tw="w-[120px] h-[120px] rounded bg-gray-200">
          {data.photoUrl && (
            <Image source={{ uri: data.photoUrl }} tw="w-full h-full rounded" />
          )}
          <View tw="absolute bottom-[13px] right-[10.5px] items-center justify-center w-[45px] h-[25px] rounded-large bg-white/60">
            <Text tw="font-bold text-sm text-gray-700">{data.name}</Text>
          </View>
        </View>
        {/* <Image source={{ uri: data.photoUrl }} /> */}
      </View>
    </Link>
  );
}
