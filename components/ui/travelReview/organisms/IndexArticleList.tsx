import ArticlePreview from "@/components/ui/travelReview/molecules/ArticlePreview";

interface Props {
  list: Object[];
}

export default function IndexArticleList({ list }: Props) {
  return (
    <>
      {list.map((item, i) => (
        <ArticlePreview key={i} article={item} last={i === list.length - 1} />
      ))}
    </>
  );
}
