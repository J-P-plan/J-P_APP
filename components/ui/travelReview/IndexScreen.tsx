import { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
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
  const list = [{}];

  const handleSortChange = (value: Sort) => {
    setCurrentSort(value);
  };

  return (
    <SafeAreaView tw="flex-1 mb-20">
      <ScrollView>
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
