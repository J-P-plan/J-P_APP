import { Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import BellIcon from "@/assets/icons/header/bell.svg";
import ChevronLeftIcon from "@/assets/icons/header/chevronLeft.svg";
import HeartIcon from "@/assets/icons/header/heart.svg";

export const HomeIndexHeaderLeft = () => {
  return (
    <TouchableOpacity tw="items-center justify-center w-[50px] h-[45px] mt-1 ml-2 rounded-[8px] bg-gray-200">
      <Text tw="font-medium text-xs">LOGO</Text>
    </TouchableOpacity>
  );
};

export const HomeIndexHeaderRight = () => {
  return (
    <TouchableOpacity tw="mt-1 mr-2">
      <BellIcon />
    </TouchableOpacity>
  );
};

export const HeaderBack = () => {
  const { back } = useRouter();

  return (
    <TouchableOpacity tw="mt-1" onPress={back}>
      <ChevronLeftIcon />
    </TouchableOpacity>
  );
};

export const HeaderLike = () => {
  const handleLike = () => {};

  return (
    <TouchableOpacity tw="mt-1 mr-3" onPress={handleLike}>
      <HeartIcon />
    </TouchableOpacity>
  );
};
