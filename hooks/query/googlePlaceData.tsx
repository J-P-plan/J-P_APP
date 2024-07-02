import { NearBySearchResponse } from "@/types/api/nearby";
import { type UseQueryResult, useQuery } from "@tanstack/react-query";

export function useNearByListData(
  lat: string | undefined,
  lng: string | undefined
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
