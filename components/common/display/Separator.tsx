import { cn } from "@/lib/util";
import { View } from "react-native";

interface Props {
  color?: string;
  height?: string;
  margin?: string;
}

export default function VerticalSeparator({
  color = "border-gray-300",
  height = "h-3",
  margin = "mx-1.5",
}: Props) {
  return <View tw={cn("border-l", color, height, margin)} />;
}
