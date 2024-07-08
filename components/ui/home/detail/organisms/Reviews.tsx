import { usePlaceReviewListData } from "@/lib/hooks/query/reviewData";
import ContentWrapper from "@/components/common/layout/ContentWrapper";
import HorizontalScrollView from "@/components/common/layout/HorizontalScrollView";
import DetailScreenSectionTitle from "@/components/ui/home/detail/molecules/shared/Title";
import ReviewCard from "@/components/ui/home/detail/molecules/ReviewCard";
import EditIcon from "@/assets/icons/common/edit.svg";

interface Props {
  id: string;
}

export default function DetailScreenReviews({ id }: Props) {
  const { data: reviewList } = usePlaceReviewListData(id, 5);

  return (
    <>
      <ContentWrapper>
        <DetailScreenSectionTitle
          title="리뷰"
          iconRight={<EditIcon tw="ml-1.5 w-[18px] h-[18px] text-gray-900" />}
          link="/"
        />
      </ContentWrapper>
      <HorizontalScrollView>
        {reviewList &&
          reviewList.data.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
      </HorizontalScrollView>
    </>
  );
}
