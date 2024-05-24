import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function TrendingPlaceScreen() {
  return (
    <SafeAreaView tw="flex-1">
      <ScrollView>
        <View>
          <Text>TrendingPlace</Text>
        </View>
        <View>
          <Link href={"/(tabs)/home/(detail)/place/1"}>
            <Text>Place Detail</Text>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
