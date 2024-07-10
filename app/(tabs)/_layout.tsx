import { Tabs } from "expo-router";
import HomeIcon from "@/assets/icons/tabs/home.svg";
import SearchIcon from "@/assets/icons/tabs/search.svg";
import PlanIcon from "@/assets/icons/tabs/plan.svg";
import TravelReviewIcon from "@/assets/icons/tabs/travelReview.svg";
import MypageIcon from "@/assets/icons/tabs/mypage.svg";
import COLOR from "@/lib/constants/colors";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLOR.primary.DEFAULT,
        tabBarInactiveTintColor: COLOR.gray[600],
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          paddingHorizontal: 10,
          paddingVertical: 0,
          backgroundColor: COLOR.background,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "홈",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          tabBarLabelStyle: { fontSize: 10 },
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          headerShown: true,
          title: "검색",
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
          tabBarLabelStyle: { fontSize: 10 },
        }}
      />
      <Tabs.Screen
        name="plan/index"
        options={{
          headerShown: false,
          title: "일정",
          tabBarIcon: ({ color }) => <PlanIcon color={color} />,
          tabBarLabelStyle: { fontSize: 10 },
        }}
      />
      <Tabs.Screen
        name="travelReview"
        options={{
          headerShown: false,
          title: "리뷰/여행기",
          tabBarIcon: ({ color }) => <TravelReviewIcon color={color} />,
          tabBarLabelStyle: { fontSize: 10 },
        }}
      />
      <Tabs.Screen
        name="mypage"
        options={{
          headerShown: false,
          title: "마이페이지",
          tabBarIcon: ({ color }) => <MypageIcon color={color} />,
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
