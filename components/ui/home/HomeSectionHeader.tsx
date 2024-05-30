import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import HOME_MESSAGE from "@/message/home";
import type { HomeSectionItemProps } from "@/types/home";

export default function HomeSectionHeader({ id }: HomeSectionItemProps) {
  return (
    <View tw="flex-row items-center justify-between w-[343px] mb-3">
      <Text tw="font-bold text-xl text-gray-900">
        {HOME_MESSAGE.homeSectionTitle[id]}
      </Text>
      <Link
        href={
          id === "travel-log" || id === "review"
            ? `/(tabs)/(travelReview)/${id}`
            : `/(tabs)/home/${id}`
        }
        asChild
      >
        <TouchableOpacity>
          <Text tw="text-xs text-gray-300">
            {HOME_MESSAGE.homeSectionTitle.more}
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
