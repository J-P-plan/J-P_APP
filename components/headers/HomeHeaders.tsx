import { Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import COLORS from "@/constants/colors";

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
      <Feather name="bell" size={24} color={COLORS.gray[900]} />
    </TouchableOpacity>
  );
};

export const HeaderBack = () => {
  const { back } = useRouter();

  return (
    <TouchableOpacity onPress={back}>
      <Feather name="chevron-left" size={24} color={COLORS.gray[900]} />
    </TouchableOpacity>
  );
};

export const HeaderLike = () => {
  const handleLike = () => {};

  return (
    <TouchableOpacity tw="mr-3" onPress={handleLike}>
      <Feather name="heart" size={24} color={COLORS.gray[900]} />
    </TouchableOpacity>
  );
};
