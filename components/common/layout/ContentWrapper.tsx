import { StyleProp, View, ViewStyle } from "react-native";
import { cn } from "@/lib/util";

interface Props {
  children: React.ReactNode;
  tw?: string;
  style?: StyleProp<ViewStyle>;
}

export default function ContentWrapper({ children, tw, style }: Props) {
  return (
    <View tw={cn("w-[343px] mx-auto", tw)} style={style}>
      {children}
    </View>
  );
}
