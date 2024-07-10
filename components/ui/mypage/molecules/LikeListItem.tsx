import { Image, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import type { PlaceData } from "@/lib/types/api/place";
import LikeIcon from "@/assets/icons/common/heart.svg";

interface Props {
  item: PlaceData;
}

export default function LikeListItem({ item }: Props) {
  return (
    <Link href={"/(tabs)/travelReview/(index)/review"} tw="mb-3" asChild>
      <Pressable tw="w-[150px]">
        {item.photoUrl ? (
          <Image source={{ uri: item.photoUrl }} tw="h-[130px] rounded" />
        ) : (
          <View tw="h-[130px] rounded bg-secondary-light" />
        )}
        <Pressable tw="absolute top-4 right-4">
          <LikeIcon tw="w-6 h-6 text-point-like" />
        </Pressable>
        <View tw="mt-3" style={{ gap: 4 }}>
          <Text tw="font-bold text-sm text-gray-900">{item.name}</Text>
          <Text tw="font-bold text-xs text-gray-600">{item.subName}</Text>
        </View>
      </Pressable>
    </Link>
  );
}
