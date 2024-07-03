import { View } from "react-native";
import { cn } from "@/lib/util";

interface Props {
  children: React.ReactNode;
  tw?: string;
}

export default function ContentWrapper({ children, tw }: Props) {
  return <View tw={cn("w-[343px] mx-auto", tw)}>{children}</View>;
}
