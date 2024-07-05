import { Slot } from "expo-router";
import Header from "@/components/ui/headers/Header";
import ToggleSwitch from "@/components/ui/travelReview/molecules/ToggleSwitch";

export default function TravelReviewIndexLayout() {
  return (
    <>
      <Header>
        <ToggleSwitch />
      </Header>
      <Slot />
    </>
  );
}
