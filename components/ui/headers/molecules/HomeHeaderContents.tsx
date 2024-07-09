import COLOR from "@/lib/constants/colors";
import {
  Back,
  Empty,
  Notification,
  Title,
} from "@/components/ui/headers/atoms/Components";
import { Logo, Like } from "@/components/ui/headers/atoms/HomeComponents";

const type = ["home", "list", "detail", "detailTransparent"] as const;
export type HomeHeaderType = (typeof type)[number];

interface HeaderContent {
  left: () => React.ReactNode;
  center: ({ title }: { title: string }) => React.ReactNode;
  right: () => React.ReactNode;
}

export const HomeHeaderContent: Record<HomeHeaderType, HeaderContent> = {
  home: {
    left: () => <Logo />,
    center: () => <Empty />,
    right: () => <Notification />,
  },
  list: {
    left: () => <Back />,
    center: ({ title }) => <Title title={title} />,
    right: () => <Empty />,
  },
  detailTransparent: {
    left: () => <Back color={COLOR.white} withBackground />,
    center: () => <Empty />,
    right: () => <Like color={COLOR.white} withBackground />,
  },
  detail: {
    left: () => <Back />,
    center: ({ title }) => <Title title={title} size="small" />,
    right: () => <Like color={COLOR.gray[900]} />,
  },
};
