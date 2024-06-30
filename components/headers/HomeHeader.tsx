import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  type Type,
  headerContent,
} from "@/components/headers/HomeHeaderContent";

interface Props {
  type: Type;
  title?: string;
}

export default function HomeHeader({ type, title = "" }: Props) {
  const paddingTop = useSafeAreaInsets().top;
  const height = paddingTop + 60;
  const HeaderContent = headerContent[type];

  return (
    <View
      style={{ paddingTop, height }}
      tw="flex-row items-center justify-between px-4 bg-background"
    >
      <HeaderContent.left />
      <HeaderContent.center title={title} />
      <HeaderContent.right />
    </View>
  );
}
