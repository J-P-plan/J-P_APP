import { Pressable, Text, View } from "react-native";
import { cn } from "@/lib/util";

export enum LikeSort {
  ALL = "all",
  PLACE = "place",
  CITY = "city",
  TRAVEL_LOG = "travel-log",
}

const sortList: { key: LikeSort; name: string }[] = [
  {
    key: LikeSort.ALL,
    name: "전체",
  },
  {
    key: LikeSort.PLACE,
    name: "여행지",
  },
  {
    key: LikeSort.CITY,
    name: "도시",
  },
  {
    key: LikeSort.TRAVEL_LOG,
    name: "여행기",
  },
];

interface Props {
  currentSort: LikeSort;
  handleChangeSort: (sort: LikeSort) => void;
}

export default function LikeListSort({ currentSort, handleChangeSort }: Props) {
  return (
    <View tw="flex-row ml-0.5" style={{ gap: 16 }}>
      {sortList.map((sort) => (
        <Pressable key={sort.key} onPress={() => handleChangeSort(sort.key)}>
          <Text
            tw={cn(
              "font-bold text-base",
              sort.key === currentSort ? "text-gray-900" : "text-gray-400"
            )}
          >
            {sort.name}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
