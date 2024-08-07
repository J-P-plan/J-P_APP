import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { cn } from "@/lib/util";
import {
  type HomeHeaderType,
  HomeHeaderContent,
} from "@/components/ui/headers/molecules/HomeHeaderContents";

interface Props {
  type: HomeHeaderType;
  title?: string;
  transparent?: boolean;
}

export default function HomeHeader({
  type,
  title = "",
  transparent = false,
}: Props) {
  const paddingTop = useSafeAreaInsets().top;
  const height = paddingTop + 60;
  const HeaderContent = HomeHeaderContent[type];

  return (
    <View
      style={{ paddingTop, height }}
      tw={cn(
        "flex-row items-center justify-between px-4",
        transparent ? "" : "bg-background"
      )}
    >
      <HeaderContent.left />
      <HeaderContent.center title={title} />
      <HeaderContent.right />
    </View>
  );
}
