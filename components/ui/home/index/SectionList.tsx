import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HomeSectionListItem from "@/components/ui/home/index/SectionListItem";
import { useSectionData } from "@/hooks/query/sectionData";
import type { HomeSectionItemProps } from "@/types/home";

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
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          tw="pt-1 pl-5"
        >
          {data &&
            data.data.map((item) => (
              <HomeSectionListItem key={item.id} id={id} data={item} />
            ))}
        </ScrollView>
      )}
    </>
  );
}
