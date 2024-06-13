import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useQuery } from "@tanstack/react-query";
import HomeSectionListItem from "./HomeSectionListItem";
import type { HomeSectionItemProps } from "@/types/home";
import type { PlaceResponse } from "@/types/api/place";
import type { ReviewsResponse } from "@/types/api/review";
import type { TravelLogResponse } from "@/types/api/travelLog";

export default function HomeSectionList({ id }: HomeSectionItemProps) {
  const {
    data,
  }: { data: PlaceResponse | ReviewsResponse | TravelLogResponse | undefined } =
    useQuery({
      queryKey: ["section", id],
      queryFn: () => {
        return id === "review"
          ? fetch(`/api/reviews?home=true`).then((res) => res.json())
          : id === "travel-log"
          ? fetch(`/api/travelLog?home=true`).then((res) => res.json())
          : fetch(`/api/place?id=${id}&home=true`).then((res) => res.json());
      },
    });

  return (
    <>
      {id === "travel-log" || id === "review" ? (
        <View>
          {data &&
            data.data.map((item) => (
              <HomeSectionListItem key={item.id} id={id} data={item} />
            ))}
        </View>
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} tw="pt-1">
          {data &&
            data.data.map((item) => (
              <HomeSectionListItem key={item.id} id={id} data={item} />
            ))}
        </ScrollView>
      )}
    </>
  );
}
