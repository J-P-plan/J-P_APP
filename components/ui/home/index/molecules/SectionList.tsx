import { View } from "react-native";
import { useSectionData } from "@/hooks/query/sectionData";
import type { HomeSectionItemProps } from "@/types/screen/home";
import type { PlaceData } from "@/types/api/place";
import type { ReviewData } from "@/types/api/review";
import type { TravelLogData } from "@/types/api/travelLog";
import HorizontalScrollView from "@/components/common/layout/HorizontalScrollView";
import PlaceCard from "@/components/ui/home/index/atoms/PlaceCard";
import CityCard from "@/components/ui/home/index/atoms/CityCard";
import TravelLogCard from "@/components/ui/home/index/atoms/TravelLogCard";
import ReviewCard from "@/components/ui/home/index/atoms/ReviewCard";

interface ItemProps extends HomeSectionItemProps {
  data: PlaceData | ReviewData | TravelLogData;
}

const Item = ({ id, data }: ItemProps) => {
  switch (id) {
    case "place-trending":
      return <PlaceCard data={data as PlaceData} type="trending" />;
    case "city-trending":
      return <CityCard data={data as PlaceData} />;
    case "place-theme":
      return <PlaceCard data={data as PlaceData} type="theme" />;
    case "travel-log":
      return <TravelLogCard data={data as TravelLogData} />;
    case "review":
      return <ReviewCard data={data as ReviewData} />;
  }
};

interface WrapperProps {
  children: React.ReactNode;
  scrollable: boolean;
}

const Wrapper = ({ children, scrollable }: WrapperProps) => {
  if (scrollable) {
    return <HorizontalScrollView>{children}</HorizontalScrollView>;
  } else {
    return <View tw="w-[343px] mx-auto">{children}</View>;
  }
};

export default function HomeSectionList({ id }: HomeSectionItemProps) {
  const { data } = useSectionData(id);

  return (
    <Wrapper scrollable={!(id === "travel-log" || id === "review")}>
      {data &&
        data.data.map((item) => <Item key={item.id} id={id} data={item} />)}
    </Wrapper>
  );
}
