import { Text, Pressable, View } from "react-native";
import { useRouter } from "expo-router";
import { cn } from "@/lib/util";
import COLOR from "@/lib/constants/colors";
import BellIcon from "@/assets/icons/header/bell.svg";
import ChevronLeftIcon from "@/assets/icons/header/chevronLeft.svg";

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
  color = COLOR.gray[900],
  withBackground,
}: {
  color?: string;
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

export const Notification = () => {
  return (
    <Pressable tw="w-10 pr-[5px]">
      <BellIcon color={COLOR.gray[900]} />
    </Pressable>
  );
};
