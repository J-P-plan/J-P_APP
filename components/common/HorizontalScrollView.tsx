import { ScrollView, View } from "react-native";

interface Props {
  children: React.ReactNode;
  tw?: string;
}

export default function HorizontalScrollView({ children, tw }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} tw={tw}>
      {children}
      <View tw="w-8" />
    </ScrollView>
  );
}
