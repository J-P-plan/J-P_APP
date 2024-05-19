import { Slot } from "expo-router";
import { View, Text } from "react-native";

export default function MyPageLayout() {
  return (
    <View>
      <Text>my page layout</Text>
      <Slot />
    </View>
  );
}
