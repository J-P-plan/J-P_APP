import { Stack } from "expo-router";
import COLORS from "@/constants/colors";
import Header from "@/components/ui/headers/Header";
import ToggleSwitch from "@/components/ui/travelReview/molecules/ToggleSwitch";

export default function TravelReviewLayout() {
  return (
    <Stack
      screenOptions={{
        title: "",
        contentStyle: { backgroundColor: COLORS.background },
      }}
    >
      <Stack.Screen
        name="(index)"
        options={{
          headerTransparent: true,
          header: () => (
            <Header transparent>
              <ToggleSwitch />
            </Header>
          ),
        }}
      />
    </Stack>
  );
}
