import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { type PlaceResponse, PlaceType } from "@/lib/types/api/place";
import type { PlaceDetailData } from "@/lib/types/api/placeDetail";

export function usePlaceListData(
  type: keyof typeof PlaceType
): UseQueryResult<PlaceResponse, Error> {
  return useQuery({
    queryKey: ["place-list", type],
    queryFn: () =>
      fetch(`/api/place/place?placeType=${type}`).then((res) => res.json()),
    enabled: !!type,
  });
}

export function usePlaceData(
  id: string | undefined
): UseQueryResult<PlaceDetailData, Error> {
  return useQuery({
    queryKey: ["place", id],
    queryFn: () =>
      fetch(`/api/place/placeDetail?id=${id}`).then((res) => res.json()),
    enabled: !!id,
  });
}
