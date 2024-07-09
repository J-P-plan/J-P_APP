import { Text, Pressable } from "react-native";
import COLOR from "@/lib/constants/colors";
import { Background } from "@/components/ui/headers/atoms/Components";
import HeartIcon from "@/assets/icons/header/heart.svg";

export const Logo = () => {
  return (
    <Pressable tw="items-center justify-center w-[50px] h-[45px] ml-[2px] rounded-[8px] bg-gray-200">
      <Text tw="font-medium text-xs">LOGO</Text>
    </Pressable>
  );
};

export const Like = ({
  color = COLOR.gray[900],
  withBackground,
}: {
  color?: string;
  withBackground?: boolean;
}) => {
  const handleLike = () => {};

  return (
    <Pressable tw="items-end w-10 pr-2" onPress={handleLike}>
      {withBackground ? (
        <Background>
          <HeartIcon color={color} />
        </Background>
      ) : (
        <HeartIcon color={color} />
      )}
    </Pressable>
  );
};
