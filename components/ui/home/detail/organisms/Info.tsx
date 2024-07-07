import { View, Text } from "react-native";
import ContentWrapper from "@/components/common/layout/ContentWrapper";
import Map from "@/components/common/Map";
import DetailScreenSectionTitle from "@/components/ui/home/detail/molecules/shared/Title";
import MarkerIcon from "@/assets/icons/common/marker.svg";

interface Props {
  address: string;
}

export default function DetailScreenInfo({ address }: Props) {
  return (
    <ContentWrapper>
      <DetailScreenSectionTitle title="기본 정보" />
      <View tw="flex-row items-center">
        <MarkerIcon tw="w-[18px] h-[18px] text-gray-700" />
        <Text tw="ml-0.5 font-normal text-sm text-gray-700">{address}</Text>
      </View>
      <View tw="mt-3 flex-1 h-[146px] rounded bg-secondary-light">
        <Map isRounded />
      </View>
    </ContentWrapper>
  );
}
