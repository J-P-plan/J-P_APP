import { View, Text } from "react-native";
import TagChip from "@/components/common/TagChip";
import MarkerIcon from "@/assets/icons/common/marker.svg";
import DetailScreenSectionTitle from "@/components/ui/home/detail/molecules/shared/Title";

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
    <View tw="w-[343px] mx-auto">
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
    </View>
  );
}
