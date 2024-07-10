import { View } from "react-native";
import { Stack } from "expo-router";
import Header from "@/components/ui/headers/Header";
import { Title } from "@/components/ui/headers/atoms/Components";
import SearchIndexScreen from "@/components/ui/search/IndexScreen";

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
      <SearchIndexScreen />
    </>
  );
}
