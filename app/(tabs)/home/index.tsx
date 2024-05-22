import { Text, SafeAreaView, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView tw="flex-1 bg-background">
      <ScrollView>
        <Text tw="text-primary">home</Text>
        <Link href={"/(tabs)/home/city-trending"}>인기여행도시</Link>
      </ScrollView>
    </SafeAreaView>
  );
}
