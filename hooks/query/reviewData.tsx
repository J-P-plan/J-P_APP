import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  ReviewSort,
  ReviewSortType,
  TravelReviewType,
  ReviewResponse,
  ReviewListResponse,
} from "@/types/api/review";

export function useTravelReviewListData(
  type: TravelReviewType,
  sort: ReviewSortType = ReviewSort.NEW,
  page: number = 1,
  elementCnt: number = 10
): UseQueryResult<ReviewListResponse, Error> {
  const query =
    type === "review"
      ? fetch(
          `/api/reviews/reviews?sort=${sort}&page=${page}&elementCnt=${elementCnt}`
        ).then((res) => res.json())
      : fetch(
          // need to change with travel log api (when it becomes available)
          `/api/reviews/reviews?sort=${sort}&page=${page}&elementCnt=${elementCnt}`
        ).then((res) => res.json());

  return useQuery({
    queryKey: ["travel-review-list", type, sort, page],
    queryFn: () => query,
  });
}

export function usePlaceReviewListData(
  placeId: string,
  elementCnt: number = 10,
  sort: ReviewSortType = ReviewSort.NEW,
  page: number = 1
): UseQueryResult<ReviewListResponse, Error> {
  return useQuery({
    queryKey: ["place-review-list", placeId],
    queryFn: () =>
      fetch(
        `/api/reviews/reviews?placeId=${placeId}&elementCnt=${elementCnt}&sort=${sort}&page=${page}`
      ).then((res) => res.json()),
    enabled: !!placeId,
  });
}

export function useReviewData(
  id: string
): UseQueryResult<ReviewResponse, Error> {
  return useQuery({
    queryKey: ["review", id],
    queryFn: () =>
      fetch(`/api/reviews/review?id=${id}`).then((res) => res.json()),
    enabled: !!id,
  });
}
