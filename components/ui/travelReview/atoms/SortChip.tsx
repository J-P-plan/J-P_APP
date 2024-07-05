import { Pressable, Text } from "react-native";
import { cn } from "@/lib/util";

interface Props {
  text: string;
  selected: boolean;
  onPress: () => void;
}

export default function SortChip({ text, selected, onPress }: Props) {
  return (
    <Pressable
      tw={cn(
        "py-1.5 px-2.5 rounded-full border",
        selected ? "border-gray-700 bg-white" : "border-gray-200 bg-transparent"
      )}
      onPress={onPress}
    >
      <Text
        tw={cn(
          "font-normal text-xs",
          selected ? "text-gray-700" : "text-gray-400"
        )}
      >
        {text}
      </Text>
    </Pressable>
  );
}
