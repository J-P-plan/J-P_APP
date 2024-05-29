import { Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import BellIcon from "@/assets/icons/header/bell.svg";
import ChevronLeftIcon from "@/assets/icons/header/chevronLeft.svg";
import HeartIcon from "@/assets/icons/header/heart.svg";

export const HomeIndexHeaderLeft = () => {
  return (
    <TouchableOpacity tw="items-center justify-center w-[50px] h-[45px] rounded-lg bg-gray-200">
      <Text>LOGO</Text>
    </TouchableOpacity>
  );
};

export const HomeIndexHeaderRight = () => {
  return (
    <TouchableOpacity>
      <BellIcon />
    </TouchableOpacity>
  );
};

export const HeaderBack = () => {
  const { back } = useRouter();

  return (
    <TouchableOpacity onPress={back}>
      <ChevronLeftIcon />
    </TouchableOpacity>
  );
};

export const HeaderLike = () => {
  const handleLike = () => {};

  return (
    <TouchableOpacity tw="mr-3" onPress={handleLike}>
      <HeartIcon />
    </TouchableOpacity>
  );
};
