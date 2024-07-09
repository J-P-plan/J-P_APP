import { useState } from "react";
import { Pressable, View } from "react-native";
import {
  TabView,
  SceneMap,
  SceneRendererProps,
  NavigationState,
} from "react-native-tab-view";
import { renderItem } from "@/components/ui/mypage/molecules/TabBarItem";
import TravelRoute from "@/components/ui/mypage/organisms/TravelRoute";
import TravelLogRoute from "@/components/ui/mypage/organisms/TravelLogRoute";
import ReviewRoute from "@/components/ui/mypage/organisms/ReviewRoute";
import LikeRoute from "@/components/ui/mypage/organisms/LikeRoute";

export enum MypageTabs {
  TRAVEL = "travel",
  "TRAVEL-LOG" = "travel-log",
  REVIEW = "review",
  LIKE = "like",
}

export type Route = {
  key: MypageTabs;
  title: string;
};

export type TabState = NavigationState<Route>;

const renderTabBar = (
  props: SceneRendererProps & { navigationState: TabState }
) => (
  <View tw="flex-row justify-between h-10 bg-background">
    {props.navigationState.routes.map((route: Route, index: number) => (
      <Pressable
        key={route.key}
        onPress={() => props.jumpTo(route.key)}
        tw="flex-1 pt-2"
      >
        {renderItem(props)({ route, index })}
      </Pressable>
    ))}
  </View>
);

const renderScene = SceneMap<Record<MypageTabs, () => React.ReactNode>>({
  travel: TravelRoute,
  "travel-log": TravelLogRoute,
  review: ReviewRoute,
  like: LikeRoute,
});

export default function MypageTabSection() {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState<Route[]>([
    { key: MypageTabs.TRAVEL, title: "내 여행" },
    { key: MypageTabs["TRAVEL-LOG"], title: "내 여행기" },
    { key: MypageTabs.REVIEW, title: "내 리뷰" },
    { key: MypageTabs.LIKE, title: "내 찜 목록" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      tw="mt-8"
    />
  );
}
