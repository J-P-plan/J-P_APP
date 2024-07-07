import { View, Text } from "react-native";
import ContentWrapper from "@/components/common/layout/ContentWrapper";
import TagChip from "@/components/common/display/TagChip";
import DetailScreenSectionTitle from "@/components/ui/home/detail/molecules/shared/Title";
import MarkerIcon from "@/assets/icons/common/marker.svg";

interface Props {
  name: string;
  tags: string[];
  description: string;
}

export default function DetailScreenSummary({
  name,
  tags,
  description,
}: Props) {
  return (
    <ContentWrapper>
      <DetailScreenSectionTitle
        title={name}
        iconLeft={<MarkerIcon tw="w-6 h-6 text-gray-900" />}
      />
      <View tw="flex-row items-center">
        {tags.map((tag) => (
          <TagChip key={tag} text={tag} margin="mr-1.5" />
        ))}
      </View>
      <Text tw="mt-4 font-normal text-base text-gray-900">{description}</Text>
    </ContentWrapper>
  );
}
