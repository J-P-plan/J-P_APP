import { View } from "react-native";
import type { SortOption } from "@/lib/types/screen/travelReview";
import SortChip from "@/components/ui/travelReview/atoms/SortChip";

interface Props {
  sorts: { name: string; value: SortOption }[];
  currentSort: SortOption;
  handleSortChange: (value: SortOption) => void;
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
