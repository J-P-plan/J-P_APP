import { Stack } from "expo-router";
import Header from "@/components/ui/headers/Header";
import ToggleSwitch from "@/components/ui/travelReview/molecules/ToggleSwitch";
import COLOR from "@/constants/colors";

export default function TravelReviewLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="review"
        options={{
          header: () => (
            <Header>
              <ToggleSwitch currentValue="review" />
            </Header>
          ),
          contentStyle: {
            backgroundColor: COLOR.background,
          },
        }}
      />
      <Stack.Screen
        name="travel-log"
        options={{
          header: () => (
            <Header>
              <ToggleSwitch currentValue="travel-log" />
            </Header>
          ),
          contentStyle: {
            backgroundColor: COLOR.background,
          },
        }}
      />
    </Stack>
  );
}
