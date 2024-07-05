import { useState } from "react";
import { View } from "react-native";
import SortChip from "@/components/ui/travelReview/atoms/SortChip";

type Sort = "NEW" | "HOT";

export default function SortToggle() {
  const [currentSort, setCurrentSort] = useState<Sort>("NEW");
  const sorts: { name: string; value: Sort }[] = [
    { name: "최신순", value: "NEW" },
    { name: "인기순", value: "HOT" },
  ];

  const handleSortChange = (value: Sort) => {
    setCurrentSort(value);
  };

  return (
    <View>
      {sorts.map((sort) => (
        <SortChip
          key={sort.value}
          text={sort.name}
          selected={sort.value === currentSort}
          onPress={() => handleSortChange(sort.value)}
        />
      ))}
    </View>
  );
}
