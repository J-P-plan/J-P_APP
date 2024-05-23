import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import HOME_MESSAGE from "@/message/home";
import type { HomeSectionItemProps } from "@/types/home";

export default function HomeSectionHeader({ id }: HomeSectionItemProps) {
  return (
    <View className="flex-row items-center justify-between">
      <Text className="font-bold text-[20px] text-gray-900">
        {HOME_MESSAGE.homeSectionHeader[id]}
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
          <Text className="text-[12px] text-gray-300">
            {HOME_MESSAGE.homeSectionHeader.more}
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
