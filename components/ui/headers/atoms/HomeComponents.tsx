import { Text, Pressable } from "react-native";
import COLOR from "@/constants/colors";
import BellIcon from "@/assets/icons/header/bell.svg";
import HeartIcon from "@/assets/icons/header/heart.svg";
import { Background } from "@/components/ui/headers/atoms/Components";

export const HomeLeft = () => {
  return (
    <Pressable tw="items-center justify-center w-[50px] h-[45px] ml-[2px] rounded-[8px] bg-gray-200">
      <Text tw="font-medium text-xs">LOGO</Text>
    </Pressable>
  );
};

export const HomeRight = () => {
  return (
    <Pressable tw="mr-[5px]">
      <BellIcon color={COLOR.gray[900]} />
    </Pressable>
  );
};

export const Like = ({
  color,
  withBackground,
}: {
  color: string;
  withBackground?: boolean;
}) => {
  const handleLike = () => {};

  return (
    <Pressable tw="items-end w-10 mr-2" onPress={handleLike}>
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
