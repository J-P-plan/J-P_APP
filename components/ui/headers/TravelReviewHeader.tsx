import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  TravelReviewHeaderContent,
  type TravelReviewHeaderType,
} from "./molecules/TravelReviewHeaderContents";

interface Props {
  type: TravelReviewHeaderType;
  title?: string | React.ReactNode;
}

export default function TravelReviewHeader({ type, title = "" }: Props) {
  const paddingTop = useSafeAreaInsets().top;
  const height = paddingTop + 60;
  const HeaderContent = TravelReviewHeaderContent[type];

  return (
    <View
      style={{ paddingTop, height }}
      tw="flex-row items-center justify-between px-4"
    >
      <HeaderContent.left />
      <HeaderContent.center title={title} />
      <HeaderContent.right />
    </View>
  );
}
