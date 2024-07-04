import { View } from "react-native";
import type { HomeSectionId } from "@/types/home";
import HomeSectionHeader from "@/components/ui/home/index/SectionHeader";
import HomeSectionList from "@/components/ui/home/index/SectionList";

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
