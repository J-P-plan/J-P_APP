import ArticlePreview from "@/components/ui/travelReview/molecules/ArticlePreview";
import type { ReviewData, TravelReviewType } from "@/lib/types/api/review";

interface Props {
  type: TravelReviewType;
  list: ReviewData[];
}

export default function IndexArticleList({ type, list }: Props) {
  return (
    <>
      {list.map((item, i) => (
        <ArticlePreview key={item.id} type={type} article={item} last={i === list.length - 1} />
      ))}
    </>
  );
}
