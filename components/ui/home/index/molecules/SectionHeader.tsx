import { Text, View } from "react-native";
import type { HomeSectionItemProps } from "@/types/screen/home";
import HOME_MESSAGE from "@/message/home";
import LinkButton from "@/components/common/navigation/LinkButton";

export default function HomeSectionHeader({ id }: HomeSectionItemProps) {
  return (
    <View tw="flex-row items-center justify-between w-[343px] mx-auto  mb-3">
      <Text tw="font-bold text-xl text-gray-900">
        {HOME_MESSAGE.homeSectionTitle[id]}
      </Text>
      <LinkButton
        href={
          id === "travel-log" || id === "review"
            ? `/(tabs)/(travelReview)/${id}`
            : `/(tabs)/home/${id}`
        }
        text="더보기"
        textStyle="font-normal text-xs text-gray-300"
      />
    </View>
  );
}
