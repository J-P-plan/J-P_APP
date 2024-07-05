import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useTravelReviewListData } from "@/hooks/query/reviewData";
import { ReviewSort, type TravelReviewType } from "@/types/api/review";
import type { SortOption } from "@/types/screen/travelReview";
import ContentWrapper from "@/components/common/ContentWrapper";
import SortToggle from "@/components/ui/travelReview/molecules/SortToggle";
import IndexArticleList from "@/components/ui/travelReview/organisms/IndexArticleList";

const sorts: { name: string; value: SortOption }[] = [
  { name: "최신순", value: ReviewSort.NEW },
  { name: "인기순", value: ReviewSort.HOT },
];

interface Props {
  type: TravelReviewType;
}

export default function TravelReviewIndexScreen({ type }: Props) {
  const [currentSort, setCurrentSort] = useState<SortOption>(ReviewSort.NEW);
  const { data: list } = useTravelReviewListData(type, currentSort);

  const handleSortChange = (value: SortOption) => {
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
          {list && <IndexArticleList list={list.data} />}
        </ContentWrapper>
      </ScrollView>
    </SafeAreaView>
  );
}
