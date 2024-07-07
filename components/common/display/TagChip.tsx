import { cn } from "@/lib/util";
import { View, Text } from "react-native";

interface Props {
  text: string;
  margin?: string;
  padding?: string;
  withoutHashtag?: boolean;
}

export default function TagChip({
  text,
  margin = "mr-[3px]",
  padding = "px-2",
  withoutHashtag = false,
}: Props) {
  return (
    <View
      tw={cn(
        "py-[3px] rounded-full border border-gray-700 bg-white",
        margin,
        padding
      )}
    >
      <Text tw="font-normal text-xs text-gray-700">
        {withoutHashtag ? text : `#${text}`}
      </Text>
    </View>
  );
}
