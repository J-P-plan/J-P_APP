import { View, Text, SafeAreaView, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView tw="flex-1 bg-background">
      <ScrollView>
        <Text tw="text-primary">home</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
