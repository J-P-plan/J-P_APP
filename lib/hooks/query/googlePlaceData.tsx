import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import type { NearBySearchResponse } from "@/lib/types/api/nearby";

export function useNearByListData(
  lat: string | number | undefined,
  lng: string | number | undefined
): UseQueryResult<NearBySearchResponse> {
  return useQuery({
    queryKey: ["nearby-list", lat, lng],
    queryFn: () =>
      fetch(`/api/googlePlace/nearbySearch?lat=${lat}&lng=${lng}`).then((res) =>
        res.json()
      ),
    enabled: !!lat && !!lng,
  });
}
