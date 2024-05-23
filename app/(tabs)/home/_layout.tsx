import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import COLORS from "@/constants/colors";

export default function HomeStacksLayout() {
  const { top } = useSafeAreaInsets();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => (
            <View
              className="flex-row items-center justify-between p-4 px-5 bg-background"
              style={{ paddingTop: top }}
            >
              <TouchableOpacity className="items-center justify-center w-[50px] h-[45px] rounded-lg bg-gray-200">
                <Text>LOGO</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="bell" size={24} color={COLORS.gray[900]} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen name="place-trending" />
      <Stack.Screen name="city-trending" />
      <Stack.Screen name="place-theme" />
      <Stack.Screen name="place-recommend" />
      <Stack.Screen name="(detail)/city/[id]" />
      <Stack.Screen name="(detail)/place/[id]" />
    </Stack>
  );
}
