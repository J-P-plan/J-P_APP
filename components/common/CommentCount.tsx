import { Text } from "react-native";
import CommentIcon from "@/assets/icons/common/comment.svg";
import { cn } from "@/lib/util";

interface Props {
  count: number;
  textColor?: string;
}

export default function CommentCount({
  count,
  textColor = "text-gray-700",
}: Props) {
  return (
    <>
      <CommentIcon tw="w-4 h-4 text-gray-300" />
      <Text tw={cn("ml-[3px] font-normal text-xs", textColor)}>{count}</Text>
    </>
  );
}
