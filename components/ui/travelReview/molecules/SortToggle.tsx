import { View } from "react-native";
import type { Sort } from "@/types/screen/travelReview";
import SortChip from "@/components/ui/travelReview/atoms/SortChip";

interface Props {
  sorts: { name: string; value: Sort }[];
  currentSort: Sort;
  handleSortChange: (value: Sort) => void;
}

export default function SortToggle({
  sorts,
  currentSort,
  handleSortChange,
}: Props) {
  return (
    <View tw="flex-row">
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
