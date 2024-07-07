import { View, Text } from "react-native";
import LinkButton from "@/components/common/input/LinkButton";

interface Props {
  title: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  link?: string;
}

export default function DetailScreenSectionTitle({
  title,
  iconLeft,
  iconRight,
  link,
}: Props) {
  return (
    <View tw="flex-row items-center justify-between mt-6 mb-3">
      <View tw="flex-row items-center">
        {iconLeft}
        <Text tw="font-bold text-xl text-gray-900">{title}</Text>
        {iconRight}
      </View>
      {link && (
        <LinkButton
          href={link}
          text="더보기"
          textStyle="font-normal text-xs text-gray-300"
        />
      )}
    </View>
  );
}
