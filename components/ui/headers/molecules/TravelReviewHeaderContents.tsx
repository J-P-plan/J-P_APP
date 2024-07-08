import COLOR from "@/lib/constants/colors";
import { Back, Empty } from "@/components/ui/headers/atoms/Components";
import { Title } from "@/components/ui/headers/atoms/TravelReviewComponents";

const type = ["review", "travel-log"] as const;
export type TravelReviewHeaderType = (typeof type)[number];

interface TravelReviewContent {
  left: () => React.ReactNode;
  center: ({
    title,
    icon,
  }: {
    title: string;
    icon?: React.ReactNode;
  }) => React.ReactNode;
  right: () => React.ReactNode;
}

export const TravelReviewHeaderContent: Record<
  TravelReviewHeaderType,
  TravelReviewContent
> = {
  review: {
    left: () => <Back color={COLOR.gray[900]} />,
    center: ({ title, icon }) => <Title title={title} icon={icon} />,
    right: () => <Empty />,
  },
  "travel-log": {
    left: () => <Back color={COLOR.gray[900]} />,
    center: ({ title, icon }) => <Title title={title} icon={icon} />,
    right: () => <Empty />,
  },
};
