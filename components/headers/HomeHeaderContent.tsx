import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import BellIcon from "@/assets/icons/header/bell.svg";
import ChevronLeftIcon from "@/assets/icons/header/chevronLeft.svg";
import HeartIcon from "@/assets/icons/header/heart.svg";
import COLOR from "@/constants/colors";
import { cn } from "@/lib/util";

const HomeLeft = () => {
  return (
    <TouchableOpacity
      tw="items-center justify-center w-[50px] h-[45px] ml-[2px] rounded-[8px] bg-gray-200"
      activeOpacity={1}
    >
      <Text tw="font-medium text-xs">LOGO</Text>
    </TouchableOpacity>
  );
};

const HomeRight = () => {
  return (
    <TouchableOpacity tw="mr-[5px]" activeOpacity={1}>
      <BellIcon color={COLOR.gray[900]} />
    </TouchableOpacity>
  );
};

const Title = ({ title, size }: { title: string; size?: "small" }) => {
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

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <View tw="items-center justify-center w-8 h-8 rounded-full bg-black/50">
      {children}
    </View>
  );
};

const Back = ({
  color,
  withBackground,
}: {
  color: string;
  withBackground?: boolean;
}) => {
  const { back } = useRouter();

  return (
    <TouchableOpacity tw="w-10" onPress={back} activeOpacity={1}>
      {withBackground ? (
        <Background>
          <ChevronLeftIcon color={color} tw="mr-1" />
        </Background>
      ) : (
        <ChevronLeftIcon color={color} />
      )}
    </TouchableOpacity>
  );
};

const Like = ({
  color,
  withBackground,
}: {
  color: string;
  withBackground?: boolean;
}) => {
  const handleLike = () => {};

  return (
    <TouchableOpacity
      tw="items-end w-10 mr-2"
      onPress={handleLike}
      activeOpacity={1}
    >
      {withBackground ? (
        <Background>
          <HeartIcon color={color} />
        </Background>
      ) : (
        <HeartIcon color={color} />
      )}
    </TouchableOpacity>
  );
};

const Empty = () => {
  return <View tw="w-10" />;
};

const type = ["home", "list", "detail", "detailTransparent"] as const;
export type HomeHeaderType = (typeof type)[number];

interface HeaderContent {
  left: () => React.ReactNode;
  center: ({ title }: { title: string }) => React.ReactNode;
  right: () => React.ReactNode;
}

export const headerContent: Record<HomeHeaderType, HeaderContent> = {
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
  detailTransparent: {
    left: () => <Back color={COLOR.white} withBackground />,
    center: () => <Empty />,
    right: () => <Like color={COLOR.white} withBackground />,
  },
  detail: {
    left: () => <Back color={COLOR.gray[900]} />,
    center: ({ title }) => <Title title={title} size="small" />,
    right: () => <Like color={COLOR.gray[900]} />,
  },
};
