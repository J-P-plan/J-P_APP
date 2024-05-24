import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import COLORS from "@/constants/colors";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary.DEFAULT,
        tabBarInactiveTintColor: COLORS.gray[600],
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          paddingHorizontal: 10,
          paddingVertical: 0,
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "홈",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
          tabBarLabelStyle: { fontSize: 10 },
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          title: "검색",
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
          tabBarLabelStyle: { fontSize: 10 },
        }}
      />
      <Tabs.Screen
        name="plan/index"
        options={{
          title: "일정",
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" size={24} color={color} />
          ),
          tabBarLabelStyle: { fontSize: 10 },
        }}
      />
      <Tabs.Screen
        name="(travelReview)"
        options={{
          title: "리뷰/여행기",
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={24} color={color} />
          ),
          tabBarLabelStyle: { fontSize: 10 },
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          title: "마이페이지",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
          tabBarLabelStyle: { fontSize: 10 },
        }}
      />

      <Tabs.Screen name="plan/(create)/select-date" options={{ href: null }} />
      <Tabs.Screen name="plan/(create)/select-city" options={{ href: null }} />
      <Tabs.Screen name="plan/[planId]/index" options={{ href: null }} />
      <Tabs.Screen name="plan/[planId]/add" options={{ href: null }} />
    </Tabs>
  );
}
