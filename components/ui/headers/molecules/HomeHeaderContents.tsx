import COLOR from "@/constants/colors";
import { Back, Empty, Title } from "@/components/ui/headers/atoms/Components";
import {
  HomeLeft,
  HomeRight,
  Like,
} from "@/components/ui/headers/atoms/HomeComponents";

const type = ["home", "list", "detail", "detailTransparent"] as const;
export type HomeHeaderType = (typeof type)[number];

interface HeaderContent {
  left: () => React.ReactNode;
  center: ({ title }: { title: string }) => React.ReactNode;
  right: () => React.ReactNode;
}

export const HomeHeaderContent: Record<HomeHeaderType, HeaderContent> = {
  home: {
    left: () => <HomeLeft />,
    center: () => <Empty />,
    right: () => <HomeRight />,
  },
  list: {
    left: () => <Back color={COLOR.gray[900]} />,
    center: ({ title }) => <Title title={title} />,
    right: () => <Empty />,
  },
  detailTransparent: {
    left: () => <Back color={COLOR.white} withBackground />,
    center: () => <Empty />,
    right: () => <Like color={COLOR.white} withBackground />,
  },
  detail: {
    left: () => <Back color={COLOR.gray[900]} />,
    center: ({ title }) => <Title title={title} size="small" />,
    right: () => <Like color={COLOR.gray[900]} />,
  },
};
