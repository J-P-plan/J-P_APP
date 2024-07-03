import { ScrollView, View } from "react-native";
import { cn } from "@/lib/util";

interface Props {
  children: React.ReactNode;
  tw?: string;
}

export default function HorizontalScrollView({ children, tw }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      tw={cn("pl-5", tw)}
    >
      {children}
      <View tw="w-8" />
    </ScrollView>
  );
}
