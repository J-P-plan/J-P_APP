import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import type { Sort } from "@/types/screen/travelReview";
import ContentWrapper from "@/components/common/ContentWrapper";
import SortToggle from "@/components/ui/travelReview/molecules/SortToggle";
import IndexArticleList from "@/components/ui/travelReview/organisms/IndexArticleList";

const sorts: { name: string; value: Sort }[] = [
  { name: "최신순", value: "NEW" },
  { name: "인기순", value: "HOT" },
];

interface Props {
  type: "review" | "travel-log";
}

export default function TravelReviewIndexScreen({ type }: Props) {
  const [currentSort, setCurrentSort] = useState<Sort>("NEW");
  const list = [{}, {}, {}];

  const handleSortChange = (value: Sort) => {
    setCurrentSort(value);
  };

  return (
    <SafeAreaView tw="flex-1 mb-10">
      <ScrollView tw="pt-14">
        <ContentWrapper>
          <SortToggle
            sorts={sorts}
            currentSort={currentSort}
            handleSortChange={handleSortChange}
          />
          {list && <IndexArticleList list={list} />}
        </ContentWrapper>
      </ScrollView>
    </SafeAreaView>
  );
}
