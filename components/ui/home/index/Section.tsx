import { View } from "react-native";
import type { HomeSectionId } from "@/lib/types/screen/home";
import HomeSectionHeader from "@/components/ui/home/index/molecules/SectionHeader";
import HomeSectionList from "@/components/ui/home/index/molecules/SectionList";

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
