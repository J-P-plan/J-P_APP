import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  TravelReviewHeaderContent,
  type TravelReviewHeaderType,
} from "./molecules/TravelReviewHeaderContents";

interface Props {
  type: TravelReviewHeaderType;
  title: string;
  icon?: React.ReactNode;
}

export default function TravelReviewHeader({ type, title, icon }: Props) {
  const paddingTop = useSafeAreaInsets().top;
  const height = paddingTop + 60;
  const HeaderContent = TravelReviewHeaderContent[type];

  return (
    <View
      style={{ paddingTop, height }}
      tw="flex-row items-center justify-between px-4 bg-background"
    >
      <HeaderContent.left />
      <HeaderContent.center title={title} icon={icon} />
      <HeaderContent.right />
    </View>
  );
}
