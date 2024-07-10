import { SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import ContentWrapper from "@/components/common/layout/ContentWrapper";
import SearchBar from "@/components/common/input/SearchBar";

export default function SearchIndexScreen() {
  const { term }: Partial<{ term: string }> = useLocalSearchParams();

  return (
    <SafeAreaView tw="flex-1 mb-20 bg-background">
      <ContentWrapper>
        <SearchBar currentValue={term} onSearchScreen />
      </ContentWrapper>
    </SafeAreaView>
  );
}
