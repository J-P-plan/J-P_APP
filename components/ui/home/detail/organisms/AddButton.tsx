import { View, Text } from "react-native";
import PlusLargeIcon from "@/assets/icons/common/plusLarge.svg";

export default function DetailScreenAddButton() {
  return (
    <View tw="self-center flex-row mt-10 mb-5 py-3 px-4 rounded-full bg-primary shadow">
      <PlusLargeIcon tw="w-[18px] h-[18px] text-white" />
      <Text tw="ml-[3px] font-bold text-sm text-white">{"내 일정에 추가"}</Text>
    </View>
  );
}
