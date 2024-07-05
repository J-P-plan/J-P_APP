import { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import type { Sort } from "@/types/screen/travelReview";
import SortToggle from "@/components/ui/travelReview/molecules/SortToggle";

const sorts: { name: string; value: Sort }[] = [
  { name: "최신순", value: "NEW" },
  { name: "인기순", value: "HOT" },
];

interface Props {
  type: "review" | "travel-log";
}

export default function TravelReviewIndexScreen({ type }: Props) {
  const [currentSort, setCurrentSort] = useState<Sort>("NEW");

  const handleSortChange = (value: Sort) => {
    setCurrentSort(value);
  };

  return (
    <SafeAreaView tw="flex-1 w-[343px] mx-auto mb-20">
      <ScrollView>
        <SortToggle
          sorts={sorts}
          currentSort={currentSort}
          handleSortChange={handleSortChange}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
