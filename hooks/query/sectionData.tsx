import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { type PlaceResponse, placeType } from "@/types/api/place";
import type { ReviewResponse } from "@/types/api/review";
import type { TravelLogResponse } from "@/types/api/travelLog";
import type { HomeSectionId } from "@/types/home";

export type SectionResponse =
  | PlaceResponse
  | ReviewResponse
  | TravelLogResponse
  | undefined;

export function useSectionData(
  id: HomeSectionId
): UseQueryResult<SectionResponse, Error> {
  const query =
    id === "review"
      ? fetch(`/api/reviews/reviews?elementCnt=2`).then((res) => res.json())
      : id === "travel-log"
      ? fetch(`/api/travelLog?home=true`).then((res) => res.json())
      : fetch(`/api/place/place?placeType=${placeType[id]}&elementCnt=6`).then(
          (res) => res.json()
        );

  return useQuery({
    queryKey: ["section", id],
    queryFn: () => query,
  });
}
