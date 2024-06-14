import { View, Text } from "react-native";
import { Link } from "expo-router";
import type { PlaceData } from "@/types/api/place";

interface Props {
  data: PlaceData;
}

export default function PlaceCard({ data }: Props) {
  return (
    <Link
      href={`/(tabs)/home/(detail)/place/${data.id}`}
      tw="w-[164px] h-[200px] mb-4"
    >
      <View>
        <View tw="w-[164px] h-[155px] rounded bg-secondary-light" />
        <View tw="mt-2 ml-2.5">
          <Text tw="mb-1 font-bold text-sm text-gray-900">{data.name}</Text>
          <Text tw="font-bold text-xs text-gray-600">{data.subName}</Text>
        </View>
      </View>
    </Link>
  );
}
