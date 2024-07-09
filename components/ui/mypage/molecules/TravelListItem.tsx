import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import type { TravelListItem } from "@/components/ui/mypage/organisms/TravelRoute";
import CalenderIcon from "@/assets/icons/common/calendar-check.svg";

interface Props {
  item: TravelListItem;
}

export default function TravelListItem({ item }: Props) {
  return (
    <Link href={"/(tabs)/plan"} asChild>
      <Pressable
        tw="flex-row items-center h-[60px] mt-3 px-7 rounded border border-gray-200 bg-white"
        style={{ gap: 20 }}
      >
        <Text tw="font-medium text-sm text-gray-900">{item.city}</Text>
        <View tw="flex-1 flex-row items-center" style={{ gap: 4 }}>
          <CalenderIcon tw="text-gray-700" />
          <Text tw="font-normal text-sm text-gray-700">
            {`${item.startDate.slice(3)} ~ ${item.endDate.slice(3)}`}
          </Text>
        </View>
        <Text tw="font-normal text-xs text-gray-300">
          {item.isPublic ? "공개" : "비공개"}
        </Text>
      </Pressable>
    </Link>
  );
}
