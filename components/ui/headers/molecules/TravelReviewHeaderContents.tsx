import COLOR from "@/constants/colors";
import { Back, Empty, Title } from "@/components/ui/headers/atoms/Components";

const type = ["review", "travel-log"] as const;
export type TravelReviewHeaderType = (typeof type)[number];

interface TravelReviewContent {
  left: () => React.ReactNode;
  center: ({ title }: { title: string | React.ReactNode }) => React.ReactNode;
  right: () => React.ReactNode;
}

export const TravelReviewHeaderContent: Record<
  TravelReviewHeaderType,
  TravelReviewContent
> = {
  review: {
    left: () => <Back color={COLOR.gray[900]} />,
    center: ({ title }) => <Title title={title} />,
    right: () => <Empty />,
  },
  "travel-log": {
    left: () => <Back color={COLOR.gray[900]} />,
    center: ({ title }) => <Title title={title} />,
    right: () => <Empty />,
  },
};
