import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  MypageHeaderContent,
  MypageHeaderType,
} from "@/components/ui/headers/molecules/MypageHeaderContents";

interface Props {
  type: MypageHeaderType;
  title: string;
}

export default function MypageHeader({ type, title = "" }: Props) {
  const paddingTop = useSafeAreaInsets().top;
  const height = paddingTop + 60;
  const HeaderContent = MypageHeaderContent[type];

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
