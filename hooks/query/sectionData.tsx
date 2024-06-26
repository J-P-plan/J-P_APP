import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import type { PlaceResponse } from "@/types/api/place";
import type { ReviewsResponse } from "@/types/api/review";
import type { TravelLogResponse } from "@/types/api/travelLog";

export type SectionResponse =
  | PlaceResponse
  | ReviewsResponse
  | TravelLogResponse
  | undefined;

export function useSectionData(
  id: string
): UseQueryResult<SectionResponse, Error> {
  const query =
    id === "review"
      ? fetch(`/api/reviews?home=true`).then((res) => res.json())
      : id === "travel-log"
      ? fetch(`/api/travelLog?home=true`).then((res) => res.json())
      : fetch(`/api/place?type=${id}&home=true`).then((res) => res.json());

  return useQuery({
    queryKey: ["section", id],
    queryFn: () => query,
  });
}
