import { useLocalSearchParams } from "expo-router";
import { useTextSearchData } from "@/lib/hooks/query/googlePlaceData";
import { DismissKeyboardSafeAreaView } from "@/components/common/utils/DismissKeyboard";
import ContentWrapper from "@/components/common/layout/ContentWrapper";
import SearchBar from "@/components/common/input/SearchBar";
import LoadingSpinner from "@/components/common/feedback/LoadingSpinner";
import NoSearchTerm from "@/components/ui/search/templates/NoSearchTerm";
import SearchResult from "@/components/ui/search/templates/SearchResult";
import NoSearchResult from "@/components/ui/search/templates/NoSearchResult";

export default function SearchIndexScreen() {
  const { term }: Partial<{ term: string }> = useLocalSearchParams();
  const { data: resultData, isLoading } = useTextSearchData(term);

  return (
    <DismissKeyboardSafeAreaView tw="flex-1 mb-20 bg-background">
      <ContentWrapper tw="flex-1">
        <SearchBar currentValue={term} onSearchScreen />
        {!term ? (
          <NoSearchTerm />
        ) : resultData ? (
          <SearchResult results={resultData.results} />
        ) : isLoading ? (
          <LoadingSpinner />
        ) : (
          <NoSearchResult />
        )}
      </ContentWrapper>
    </DismissKeyboardSafeAreaView>
  );
}
