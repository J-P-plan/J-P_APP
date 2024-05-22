import { Stack } from "expo-router";

export default function HomeStacksLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="place-trending" />
      <Stack.Screen name="city-trending" />
      <Stack.Screen name="place-theme" />
      <Stack.Screen name="place-recommend" />
      <Stack.Screen name="(detail)/city/[id]" />
      <Stack.Screen name="(detail)/place/[id]" />
    </Stack>
  );
}
