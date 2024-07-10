import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import type { NearBySearchResponse } from "@/lib/types/api/nearby";
import type { TextSearchResponse } from "@/lib/types/api/search";

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

export function useTextSearchData(
  term: string | undefined
): UseQueryResult<TextSearchResponse> {
  return useQuery({
    queryKey: ["text-search-list", term],
    queryFn: () =>
      fetch(`/api/googlePlace/textSearch?contents=${term}`).then((res) =>
        res.json()
      ),
    enabled: !!term,
  });
}
