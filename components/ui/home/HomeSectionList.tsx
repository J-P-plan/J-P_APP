import { View } from "react-native";
import HomeSectionListItem from "./HomeSectionListItem";
import type { HomeSectionItemProps } from "@/types/home";

export default function HomeSectionList({ id }: HomeSectionItemProps) {
  return (
    <View
      className={
        id === "travel-log" || id === "review" ? "flex-column" : "flex-row"
      }
    >
      <HomeSectionListItem id={id} />
    </View>
  );
}
