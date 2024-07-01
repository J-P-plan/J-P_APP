import { View, Text } from "react-native";
import { Link } from "expo-router";
import type { PlaceData } from "@/types/api/place";

interface Props {
  data: PlaceData;
}

export default function CityCard({ data }: Props) {
  return (
    <Link
      href={`/(tabs)/home/(detail)/city/${data.id}`}
      tw="w-[164px] h-[155px] mb-6"
    >
      <View tw="relative w-[164px] h-[155px] rounded bg-secondary-light">
        <View tw="absolute bottom-[17px] right-[17px] flex items-center justify-center w-[50px] py-1 rounded-full bg-white/60">
          <Text tw="font-bold text-sm text-gray-900">{data.name}</Text>
        </View>
      </View>
    </Link>
  );
}
