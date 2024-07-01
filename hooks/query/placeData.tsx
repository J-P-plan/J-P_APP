import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import type { PlaceId, PlaceResponse } from "@/types/api/place";
import type { PlaceDetailData } from "@/types/api/placeDetail";

export function usePlaceListData(
  type: PlaceId
): UseQueryResult<PlaceResponse, Error> {
  return useQuery({
    queryKey: ["place-list", type],
    queryFn: () => fetch(`/api/place?type=${type}`).then((res) => res.json()),
    enabled: !!type,
  });
}

export function usePlaceData(
  id: string | undefined
): UseQueryResult<PlaceDetailData, Error> {
  return useQuery({
    queryKey: ["place", id],
    queryFn: () => fetch(`/api/placeDetail?id=${id}`).then((res) => res.json()),
    enabled: !!id,
  });
}
