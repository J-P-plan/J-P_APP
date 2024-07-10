import { SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useTextSearchData } from "@/lib/hooks/query/googlePlaceData";
import ContentWrapper from "@/components/common/layout/ContentWrapper";
import SearchBar from "@/components/common/input/SearchBar";
import NoSearchTerm from "@/components/ui/search/templates/NoSearchTerm";
import SearchResult from "@/components/ui/search/templates/SearchResult";
import NoSearchResult from "@/components/ui/search/templates/NoSearchResult";

export default function SearchIndexScreen() {
  const { term }: Partial<{ term: string }> = useLocalSearchParams();
  const { data: resultData } = useTextSearchData(term);

  return (
    <SafeAreaView tw="flex-1 mb-20 bg-background">
      <ContentWrapper>
        <SearchBar currentValue={term} onSearchScreen />
        {!term ? (
          <NoSearchTerm />
        ) : resultData ? (
          <SearchResult results={resultData.results} />
        ) : (
          <NoSearchResult />
        )}
      </ContentWrapper>
    </SafeAreaView>
  );
}
