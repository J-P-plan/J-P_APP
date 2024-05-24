import { View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import HomeSectionListItem from "./HomeSectionListItem";
import type { HomeSectionItemProps } from "@/types/home";
import type { PlaceResponse } from "@/types/api/place";

export default function HomeSectionList({ id }: HomeSectionItemProps) {
  const { data }: { data: PlaceResponse | undefined } = useQuery({
    queryKey: ["place", id],
    queryFn: () => {
      return id === "review"
        ? fetch(`/api/place?id=${id}`).then((res) => res.json())
        : fetch(`/api/place?id=${id}`).then((res) => res.json());
    },
  });

  return (
    <View
      tw={
        id === "travel-log" || id === "review" ? "flex-column" : "flex-row"
      }
    >
      {data ? (
        data.data.map((item) => <HomeSectionListItem key={item.id} id={id} data={item} />)
      ) : (
        <View></View>
      )}
    </View>
  );
}
