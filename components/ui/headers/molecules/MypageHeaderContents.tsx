import {
  Back,
  Empty,
  Notification,
  Title,
} from "@/components/ui/headers/atoms/Components";
import { Done } from "@/components/ui/headers/atoms/MypageComponents";

const type = ["index", "write-log", "write-review", "add-place"] as const;
export type MypageHeaderType = (typeof type)[number];

interface HeaderContent {
  left: () => React.ReactNode;
  center: ({ title }: { title: string }) => React.ReactNode;
  right: () => React.ReactNode;
}

export const MypageHeaderContent: Record<MypageHeaderType, HeaderContent> = {
  index: {
    left: () => <Empty />,
    center: ({ title }) => <Title title={title} />,
    right: () => <Notification />,
  },
  "write-log": {
    left: () => <Back />,
    center: ({ title }) => <Title title={title} />,
    right: () => <Done />,
  },
  "write-review": {
    left: () => <Back />,
    center: ({ title }) => <Title title={title} />,
    right: () => <Done />,
  },
  "add-place": {
    left: () => <Back />,
    center: ({ title }) => <Title title={title} />,
    right: () => <Empty />,
  },
};
