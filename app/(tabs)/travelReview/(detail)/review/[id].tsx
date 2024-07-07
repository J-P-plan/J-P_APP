import { Stack, useLocalSearchParams } from "expo-router";
import { useReviewData } from "@/hooks/query/reviewData";
import TravelReviewHeader from "@/components/ui/headers/TravelReviewHeader";
import MarkerIcon from "@/assets/icons/common/marker.svg";
import TravelReviewDetailScreen from "@/components/ui/travelReview/DetailScreen";

export default function ReviewDetailScreen() {
  const { id } = useLocalSearchParams();
  const { data: reviewData } = useReviewData(id as string);

  return (
    <>
      <Stack.Screen
        options={{
          header: () => (
            <TravelReviewHeader
              type="review"
              icon={<MarkerIcon tw="w-[18px] h-[18px] text-gray-900" />}
              title={"오대산 선재길"} /* replace with real data in reviewData */
            />
          ),
        }}
      />
      {reviewData && (
        <TravelReviewDetailScreen type="review" data={reviewData} />
      )}
    </>
  );
}
