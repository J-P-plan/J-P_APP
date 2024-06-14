import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import type { PlaceId, PlaceResponse } from "@/types/api/place";

export function usePlaceListData(
  type: PlaceId
): UseQueryResult<PlaceResponse, Error> {
  return useQuery({
    queryKey: ["place-list", type],
    queryFn: () =>
      fetch(`/api/place?type=${type}`).then((res) => res.json()),
  });
}
