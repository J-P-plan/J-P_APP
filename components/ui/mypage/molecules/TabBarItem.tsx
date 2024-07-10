import { Animated, Text } from "react-native";
import COLORS from "@/lib/constants/colors";
import type {
  MypageTabs,
  Route,
  TabState,
} from "@/components/ui/mypage/templates/TabSection";
import TravelIcon from "@/assets/icons/mypageTabs/travel.svg";
import TravelLogIcon from "@/assets/icons/mypageTabs/travel-log.svg";
import ReviewIcon from "@/assets/icons/mypageTabs/review.svg";
import LikeIcon from "@/assets/icons/mypageTabs/like.svg";

const renderIcon: Record<MypageTabs, (isActive: boolean) => React.ReactNode> = {
  travel: (isActive) => (
    <TravelIcon color={isActive ? COLORS.gray[900] : COLORS.gray[400]} />
  ),
  "travel-log": (isActive) => (
    <TravelLogIcon color={isActive ? COLORS.gray[900] : COLORS.gray[400]} />
  ),
  review: (isActive) => (
    <ReviewIcon color={isActive ? COLORS.gray[900] : COLORS.gray[400]} />
  ),
  like: (isActive) => (
    <LikeIcon color={isActive ? COLORS.gray[900] : COLORS.gray[400]} />
  ),
};

export const renderItem =
  ({
    navigationState,
    position,
  }: {
    navigationState: TabState;
    position: Animated.AnimatedInterpolation<number>;
  }) =>
  ({ route, index }: { route: Route; index: number }) => {
    const inputRange = navigationState.routes.map((_, i) => i);

    const activeOpacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map((i: number) => (i === index ? 1 : 0)),
    });
    const inactiveOpacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map((i: number) => (i === index ? 0 : 1)),
    });
    const borderColor = position.interpolate({
      inputRange,
      outputRange: inputRange.map((i: number) =>
        i === index ? COLORS.primary.DEFAULT : COLORS.gray[200]
      ),
    });

    return (
      <Animated.View
        tw="flex-1 items-center border-b-2"
        style={{ borderColor: borderColor }}
      >
        <Animated.View
          style={{ opacity: inactiveOpacity, gap: 3 }}
          tw="flex-row items-center"
        >
          {renderIcon[route.key](false)}
          <Text tw="font-bold font-sm text-gray-400">{route.title}</Text>
        </Animated.View>
        <Animated.View
          style={{ opacity: activeOpacity, gap: 3 }}
          tw="absolute inset-0 flex-row items-center"
        >
          {renderIcon[route.key](true)}
          <Text tw="font-bold font-sm text-gray-900">{route.title}</Text>
        </Animated.View>
      </Animated.View>
    );
  };
