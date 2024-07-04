import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { ReviewSort, ReviewSortType, ReviewResponse } from "@/types/api/review";

export function useReviewListData(): UseQueryResult<ReviewResponse, Error> {
  return useQuery({
    queryKey: ["review-list"],
    queryFn: () => fetch(`/api/reviews`).then((res) => res.json()),
  });
}

export function usePlaceReviewListData(
  placeId: string,
  elementCnt: number = 10,
  sort: ReviewSortType = ReviewSort.NEW,
  page: number = 1
): UseQueryResult<ReviewResponse, Error> {
  return useQuery({
    queryKey: ["review-list"],
    queryFn: () =>
      fetch(
        `/api/reviews/reviews?placeId=${placeId}&elementCnt=${elementCnt}&sort=${sort}&page=${page}`
      ).then((res) => res.json()),
    enabled: !!placeId,
  });
}
