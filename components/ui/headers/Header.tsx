import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

export default function Header({ children }: Props) {
  const paddingTop = useSafeAreaInsets().top;
  const height = paddingTop + 60;

  return (
    <View style={{ paddingTop, height }} tw="bg-background">
      {children}
    </View>
  );
}
