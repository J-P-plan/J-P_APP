import { View } from "react-native";
import { useSectionData } from "@/hooks/query/sectionData";
import type { HomeSectionItemProps } from "@/types/screen/home";
import HorizontalScrollView from "@/components/common/HorizontalScrollView";
import HomeSectionListItem from "@/components/ui/home/index/SectionListItem";

export default function HomeSectionList({ id }: HomeSectionItemProps) {
  const { data } = useSectionData(id);

  return (
    <>
      {id === "travel-log" || id === "review" ? (
        <View tw="w-[343px] mx-auto">
          {data &&
            data.data.map((item) => (
              <HomeSectionListItem key={item.id} id={id} data={item} />
            ))}
        </View>
      ) : (
        <HorizontalScrollView>
          {data &&
            data.data.map((item) => (
              <HomeSectionListItem key={item.id} id={id} data={item} />
            ))}
        </HorizontalScrollView>
      )}
    </>
  );
}
