import { Slot } from "expo-router";
import { View, Text } from "react-native";

export default function TravelReviewLayout() {
  return (
    <View>
      <Text>travel-review</Text>
      <Text>switch button</Text>
      <Slot />
    </View>
  );
}
