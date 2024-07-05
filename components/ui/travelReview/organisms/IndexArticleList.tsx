import ArticlePreview from "@/components/ui/travelReview/molecules/ArticlePreview";
import type { ReviewData } from "@/types/api/review";

interface Props {
  list: ReviewData[];
}

export default function IndexArticleList({ list }: Props) {
  return (
    <>
      {list.map((item, i) => (
        <ArticlePreview key={item.id} article={item} last={i === list.length - 1} />
      ))}
    </>
  );
}
