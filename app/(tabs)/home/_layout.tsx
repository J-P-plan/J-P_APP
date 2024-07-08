import { Stack } from "expo-router";
import COLOR from "@/lib/constants/colors";
import HomeHeader from "@/components/ui/headers/HomeHeader";
import { HomeHeaderContent } from "@/components/ui/headers/molecules/HomeHeaderContents";

const homeListHeader = {
  "place-trending": "인기 여행지",
  "city-trending": "인기 도시",
  "place-theme": "테마 여행지",
  "place-recommend": "주변 여행지",
};

export default function HomeStacksLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <HomeHeader type="home" />,
          contentStyle: {
            backgroundColor: COLOR.background,
          },
        }}
      />
      <Stack.Screen
        name="place-trending"
        options={{
          header: () => (
            <HomeHeader type="list" title={homeListHeader["place-trending"]} />
          ),
          contentStyle: {
            backgroundColor: COLOR.background,
          },
        }}
      />
      <Stack.Screen
        name="city-trending"
        options={{
          header: () => (
            <HomeHeader type="list" title={homeListHeader["city-trending"]} />
          ),
          contentStyle: {
            backgroundColor: COLOR.background,
          },
        }}
      />
      <Stack.Screen
        name="place-theme"
        options={{
          header: () => (
            <HomeHeader type="list" title={homeListHeader["place-theme"]} />
          ),
          contentStyle: {
            backgroundColor: COLOR.background,
          },
        }}
      />
      <Stack.Screen
        name="place-recommend"
        options={{
          header: () => (
            <HomeHeader type="list" title={homeListHeader["place-recommend"]} />
          ),
          contentStyle: {
            backgroundColor: COLOR.background,
          },
        }}
      />
      <Stack.Screen
        name="(detail)/city/[id]"
        options={{
          title: "",
          headerTransparent: true,
          headerLeft: HomeHeaderContent.detailTransparent.left,
          headerRight: HomeHeaderContent.detailTransparent.right,
          contentStyle: {
            backgroundColor: COLOR.background,
          },
        }}
      />
      <Stack.Screen
        name="(detail)/place/[id]"
        options={{
          title: "",
          headerTransparent: true,
          headerLeft: HomeHeaderContent.detailTransparent.left,
          headerRight: HomeHeaderContent.detailTransparent.right,
          contentStyle: {
            backgroundColor: COLOR.background,
          },
        }}
      />
    </Stack>
  );
}
