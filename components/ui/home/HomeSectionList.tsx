import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import HomeSectionListItem from "./HomeSectionListItem";
import { useSectionData } from "@/hooks/query/sectionData";
import type { HomeSectionItemProps } from "@/types/home";

export default function HomeSectionList({ id }: HomeSectionItemProps) {
  const { data } = useSectionData(id);

  return (
    <>
      {id === "travel-log" || id === "review" ? (
        <View>
          {data &&
            data.data.map((item) => (
              <HomeSectionListItem key={item.id} id={id} data={item} />
            ))}
        </View>
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} tw="pt-1">
          {data &&
            data.data.map((item) => (
              <HomeSectionListItem key={item.id} id={id} data={item} />
            ))}
        </ScrollView>
      )}
    </>
  );
}
