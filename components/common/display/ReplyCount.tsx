import { Text, View } from "react-native";
import ReplyIcon from "@/assets/icons/common/reply.svg";
import { cn } from "@/lib/util";

interface Props {
  count: number;
  textColor?: string;
}

export default function ReplyCount({
  count,
  textColor = "text-gray-300",
}: Props) {
  return (
    <View tw="flex-row items-center">
      <ReplyIcon tw="w-4 h-4 text-gray-300" />
      <Text tw={cn("ml-[3px] font-normal text-xs", textColor)}>
        {count > 0 ? count : "답글달기"}
      </Text>
    </View>
  );
}
