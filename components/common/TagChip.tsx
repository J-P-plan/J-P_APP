import { cn } from "@/lib/util";
import { View, Text } from "react-native";

interface Props {
  text: string;
  margin?: string;
}

export default function TagChip({ text, margin = "mr-[3px]" }: Props) {
  return (
    <View
      tw={cn(
        "py-[3px] px-2 rounded-full border border-gray-700 bg-white",
        margin
      )}
    >
      <Text tw="font-normal text-xs text-gray-700">{`#${text}`}</Text>
    </View>
  );
}
