import { View, Text } from "react-native";
import { Link } from "expo-router";
import type { PlaceData } from "@/lib/types/api/place";

interface Props {
  data: PlaceData;
  type?: "trending" | "theme";
}

export default function PlaceCard({ data, type = "trending" }: Props) {
  return (
    <Link
      href={`/(tabs)/home/(detail)/place/${data.id}`}
      tw="w-[164px] h-[200px] mb-5"
    >
      <View>
        <View tw="w-[164px] h-[155px] rounded bg-secondary-light">
          {type === "theme" && (
            <View tw="absolute top-[15px] right-[17px] flex items-center justify-center w-[42px] h-5 rounded-full bg-white/60">
              <Text tw="font-normal text-[10px] text-gray-900">{"여행지"}</Text>
            </View>
          )}
        </View>
        <View tw="mt-2 ml-2.5">
          <Text tw="mb-1 font-bold text-sm text-gray-900">{data.name}</Text>
          <Text tw="font-bold text-xs text-gray-600">{data.subName}</Text>
        </View>
      </View>
    </Link>
  );
}
