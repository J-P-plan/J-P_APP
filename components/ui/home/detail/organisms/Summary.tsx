import { View, Text } from "react-native";
import TagChip from "@/components/common/TagChip";
import MarkerIcon from "@/assets/icons/common/marker.svg";

interface Props{
	name: string;
	tags: string[];
	description: string;
}

export default function DetailScreenSummary({name, tags, description}:Props) {
  return (
    <View tw="w-[343px] mx-auto">
      <View tw="flex-row items-center mt-6 mb-3">
        <MarkerIcon tw="w-6 h-6 text-gray-900" />
        <Text tw="ml-0.5 font-bold text-xl text-gray-900">{name}</Text>
      </View>
      <View tw="flex-row items-center">
        {tags.map((tag) => (
          <TagChip key={tag} text={tag} margin="mr-1.5" />
        ))}
      </View>
      <Text tw="mt-4 font-normal text-base text-gray-900">
        {description}
      </Text>
    </View>
  );
}
