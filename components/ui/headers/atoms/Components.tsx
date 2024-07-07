import { Text, Pressable, View } from "react-native";
import { useRouter } from "expo-router";
import ChevronLeftIcon from "@/assets/icons/header/chevronLeft.svg";
import { cn } from "@/lib/util";

export const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <View tw="items-center justify-center w-8 h-8 rounded-full bg-black/50">
      {children}
    </View>
  );
};

export const Empty = () => {
  return <View tw="w-10" />;
};

export const Title = ({
  title,
  size,
}: {
  title: string | React.ReactNode;
  size?: "small";
}) => {
  return (
    <Text
      tw={cn(
        "font-bold text-gray-900",
        size === "small" ? "text-base" : "text-xl"
      )}
    >
      {title}
    </Text>
  );
};

export const Back = ({
  color,
  withBackground,
}: {
  color: string;
  withBackground?: boolean;
}) => {
  const { back } = useRouter();

  return (
    <Pressable tw="w-10" onPress={back}>
      {withBackground ? (
        <Background>
          <ChevronLeftIcon color={color} tw="mr-1" />
        </Background>
      ) : (
        <ChevronLeftIcon color={color} />
      )}
    </Pressable>
  );
};
