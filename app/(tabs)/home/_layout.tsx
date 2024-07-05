import { Stack } from "expo-router";
import HOME_MESSAGE from "@/message/home";
import COLOR from "@/constants/colors";
import HomeHeader from "@/components/ui/headers/HomeHeader";
import { HomeHeaderContent } from "@/components/ui/headers/molecules/HomeHeaderContents";

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
            <HomeHeader
              type="list"
              title={HOME_MESSAGE.homeListHeader["place-trending"]}
            />
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
            <HomeHeader
              type="list"
              title={HOME_MESSAGE.homeListHeader["city-trending"]}
            />
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
            <HomeHeader
              type="list"
              title={HOME_MESSAGE.homeListHeader["place-theme"]}
            />
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
            <HomeHeader
              type="list"
              title={HOME_MESSAGE.homeListHeader["place-recommend"]}
            />
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
