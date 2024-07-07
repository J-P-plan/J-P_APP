import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useReviewData } from "@/hooks/query/reviewData";
import { ReviewResponse, type TravelReviewType } from "@/types/api/review";
import ContentWrapper from "@/components/common/ContentWrapper";
import Article from "@/components/ui/travelReview/molecules/Article";

interface Props {
  type: TravelReviewType;
  data: ReviewResponse;
}

export default function TravelReviewDetailScreen({ type, data }: Props) {
  return (
    <SafeAreaView tw="flex-1 mb-10">
      <ScrollView tw="pt-14">
        <ContentWrapper>
          <Article type={type} article={data} />
        </ContentWrapper>
      </ScrollView>
    </SafeAreaView>
  );
}
