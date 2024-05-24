import { Text, View } from "react-native";
import type { HomeSectionItemProps } from "@/types/home";
import type { PlaceData } from "@/types/api/place";

export default function HomeSectionListItem({
  id,
  data,
}: HomeSectionItemProps & { data: PlaceData }) {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
}
