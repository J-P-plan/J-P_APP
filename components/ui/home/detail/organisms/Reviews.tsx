import ContentWrapper from "@/components/common/ContentWrapper";
import HorizontalScrollView from "@/components/common/HorizontalScrollView";
import DetailScreenSectionTitle from "@/components/ui/home/detail/molecules/shared/Title";
import ReviewCard from "@/components/ui/home/detail/molecules/ReviewCard";
import EditIcon from "@/assets/icons/common/edit.svg";

interface Props {
  id: string;
}

export default function DetailScreenReviews({ id }: Props) {
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
        {Array.from({ length: 5 }).map((review, i) => (
          <ReviewCard key={i} review={{}} />
        ))}
      </HorizontalScrollView>
    </>
  );
}
