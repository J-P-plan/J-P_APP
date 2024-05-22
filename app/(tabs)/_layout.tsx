import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home/index" options={{ headerShown: false }} />
      <Tabs.Screen name="home/place-trending" options={{ href: null }} />
      <Tabs.Screen name="home/city-trending" options={{ href: null }} />
      <Tabs.Screen name="home/place-theme" options={{ href: null }} />
      <Tabs.Screen name="home/place-recommend" options={{ href: null }} />
      <Tabs.Screen name="home/(detail)/city/[id]" options={{ href: null }} />
      <Tabs.Screen name="home/(detail)/place/[id]" options={{ href: null }} />
      <Tabs.Screen name="search/index" options={{ headerShown: false }} />
      <Tabs.Screen name="plan/index" options={{ headerShown: false }} />
      <Tabs.Screen name="plan/(create)/select-date" options={{ href: null }} />
      <Tabs.Screen name="plan/(create)/select-city" options={{ href: null }} />
      <Tabs.Screen name="plan/[planId]/index" options={{ href: null }} />
      <Tabs.Screen name="plan/[planId]/add" options={{ href: null }} />
      <Tabs.Screen name="(travelReview)" options={{ headerShown: false }} />
      <Tabs.Screen name="mypage" options={{ headerShown: false }} />
    </Tabs>
  );
}
