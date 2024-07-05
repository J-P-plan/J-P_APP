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
        "mr-1.5 py-1.5 px-2.5 rounded-full border",
        selected ? "border-gray-700" : "border-gray-200"
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
