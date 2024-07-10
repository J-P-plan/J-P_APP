import { View, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import Header from "@/components/ui/headers/Header";
import { Title } from "@/components/ui/headers/atoms/Components";

export default function SearchScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => (
            <Header>
              <View tw="flex-1 items-center justify-center">
                <Title title="검색" />
              </View>
            </Header>
          ),
        }}
      />
      <SafeAreaView tw="flex-1 mb-20 bg-background"></SafeAreaView>
    </>
  );
}
