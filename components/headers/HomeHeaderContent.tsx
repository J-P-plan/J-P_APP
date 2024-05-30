import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import BellIcon from "@/assets/icons/header/bell.svg";
import ChevronLeftIcon from "@/assets/icons/header/chevronLeft.svg";
import HeartIcon from "@/assets/icons/header/heart.svg";
import COLOR from "@/constants/colors";

const HomeLeft = () => {
  return (
    <TouchableOpacity tw="items-center justify-center w-[50px] h-[45px] ml-[2px] rounded-[8px] bg-gray-200">
      <Text tw="font-medium text-xs">LOGO</Text>
    </TouchableOpacity>
  );
};

const HomeRight = () => {
  return (
    <TouchableOpacity tw="mr-[5px]">
      <BellIcon color={COLOR.gray[900]} />
    </TouchableOpacity>
  );
};

const Title = ({ title }: { title: string }) => {
  return (
    <View>
      <Text tw="font-bold text-xl text-gray-900">{title}</Text>
    </View>
  );
};

const Back = ({ color }: { color: string }) => {
  const { back } = useRouter();

  return (
    <TouchableOpacity tw="w-20" onPress={back}>
      <ChevronLeftIcon color={color} />
    </TouchableOpacity>
  );
};

const Like = ({ color }: { color: string }) => {
  const handleLike = () => {};

  return (
    <TouchableOpacity tw="items-end w-20 mr-2" onPress={handleLike}>
      <HeartIcon color={color} />
    </TouchableOpacity>
  );
};

const Empty = () => {
  return <View tw="w-20"></View>;
};

const type = ["home", "list", "detail"] as const;
export type Type = (typeof type)[number];

interface HeaderContent {
  left: () => React.ReactNode;
  center: ({ title }: { title: string }) => React.ReactNode;
  right: () => React.ReactNode;
}

export const headerContent: Record<Type, HeaderContent> = {
  home: {
    left: () => <HomeLeft />,
    center: () => <Empty />,
    right: () => <HomeRight />,
  },
  list: {
    left: () => <Back color={COLOR.gray[900]} />,
    center: ({ title }) => <Title title={title} />,
    right: () => <Empty />,
  },
  detail: {
    left: () => <Back color={COLOR.white} />,
    center: () => <Empty />,
    right: () => <Like color={COLOR.white} />,
  },
};
