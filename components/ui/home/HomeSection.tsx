import { View } from "react-native";
import HomeSectionHeader from "./HomeSectionHeader";
import HomeSectionList from "./HomeSectionList";
import type { HomeSectionId } from "@/types/home";

interface Props {
  sectionId: HomeSectionId;
}

export default function HomeSection(props: Props) {
  return (
    <View tw="mb-6">
      <HomeSectionHeader id={props.sectionId} />
      <HomeSectionList id={props.sectionId} />
    </View>
  );
}
