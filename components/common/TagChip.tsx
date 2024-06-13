import { View, Text } from "react-native";

interface Props {
  text: string;
}

export default function TagChip({ text }: Props) {
  return (
    <View tw="mr-[3px] py-[3px] px-2 rounded-full border border-gray-700 bg-white">
      <Text tw="font-normal text-xs text-gray-700">{`#${text}`}</Text>
    </View>
  );
}
