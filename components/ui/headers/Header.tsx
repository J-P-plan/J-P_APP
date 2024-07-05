import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
  transparent?: boolean;
}

export default function Header({ children, transparent }: Props) {
  const paddingTop = useSafeAreaInsets().top;
  const height = paddingTop + 60;

  return (
    <View
      style={{ paddingTop, height }}
      tw={transparent ? "" : "bg-background"}
    >
      {children}
    </View>
  );
}
