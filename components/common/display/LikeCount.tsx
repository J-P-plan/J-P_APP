import { Text, View } from "react-native";
import HeartIcon from "@/assets/icons/common/heart.svg";
import { cn } from "@/lib/util";

interface Props {
  count: number;
  textColor?: string;
}

export default function LikeCount({
  count,
  textColor = "text-gray-700",
}: Props) {
  return (
    <View tw='flex-row items-center'>
      <HeartIcon tw="w-4 h-4 text-point-like" />
      <Text tw={cn("ml-[3px] font-normal text-xs", textColor)}>{count}</Text>
    </View>
  );
}
