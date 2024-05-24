import { Stack } from "expo-router";
import {
  HomeIndexHeaderLeft,
  HomeIndexHeaderRight,
  HeaderBack,
  HeaderLike,
} from "@/components/headers/HomeHeaders";
import HOME_MESSAGE from "@/message/home";
import COLORS from "@/constants/colors";

export default function HomeStacksLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerLeft: () => <HomeIndexHeaderLeft />,
          headerRight: () => <HomeIndexHeaderRight />,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.background },
          contentStyle: {
            paddingVertical: 8,
            backgroundColor: COLORS.background,
          },
        }}
      />
      <Stack.Screen
        name="place-trending"
        options={{
          title: HOME_MESSAGE.homeListHeader["place-trending"],
          headerLeft: () => <HeaderBack />,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.background },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 700,
            color: COLORS.gray[900],
          },
          contentStyle: {
            paddingVertical: 8,
            backgroundColor: COLORS.background,
          },
        }}
      />
      <Stack.Screen
        name="city-trending"
        options={{
          title: HOME_MESSAGE.homeListHeader["city-trending"],
          headerLeft: () => <HeaderBack />,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.background },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 700,
            color: COLORS.gray[900],
          },
          contentStyle: {
            paddingVertical: 8,
            backgroundColor: COLORS.background,
          },
        }}
      />
      <Stack.Screen
        name="place-theme"
        options={{
          title: HOME_MESSAGE.homeListHeader["place-theme"],
          headerLeft: () => <HeaderBack />,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.background },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 700,
            color: COLORS.gray[900],
          },
          contentStyle: {
            paddingVertical: 8,
            backgroundColor: COLORS.background,
          },
        }}
      />
      <Stack.Screen
        name="place-recommend"
        options={{
          title: HOME_MESSAGE.homeListHeader["place-recommend"],
          headerLeft: () => <HeaderBack />,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.background },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 700,
            color: COLORS.gray[900],
          },
          contentStyle: {
            paddingVertical: 8,
            backgroundColor: COLORS.background,
          },
        }}
      />
      <Stack.Screen
        name="(detail)/city/[id]"
        options={{
          title: "",
          headerLeft: () => <HeaderBack />,
          headerRight: () => <HeaderLike />,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.background },
          contentStyle: {
            paddingVertical: 8,
            backgroundColor: COLORS.background,
          },
        }}
      />
      <Stack.Screen
        name="(detail)/place/[id]"
        options={{
          title: "",
          headerLeft: () => <HeaderBack />,
          headerRight: () => <HeaderLike />,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.background },
          contentStyle: {
            paddingVertical: 8,
            backgroundColor: COLORS.background,
          },
        }}
      />
    </Stack>
  );
}
