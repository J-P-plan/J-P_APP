import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { ReviewResponse, type TravelReviewType } from "@/types/api/review";
import ContentWrapper from "@/components/common/ContentWrapper";
import Article from "@/components/ui/travelReview/molecules/Article";
import CommentSection from "@/components/ui/travelReview/organisms/CommentSection";

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
          <CommentSection comments={data.commentResDtoList} />
        </ContentWrapper>
      </ScrollView>
    </SafeAreaView>
  );
}
