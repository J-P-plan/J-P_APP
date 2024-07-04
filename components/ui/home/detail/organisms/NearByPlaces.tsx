import { View } from "react-native";
import ContentWrapper from "@/components/common/ContentWrapper";
import DetailScreenSectionTitle from "@/components/ui/home/detail/molecules/shared/Title";
import NearByPlaceCard from "@/components/ui/home/detail/molecules/NearByPlaceCard";
import type { Location } from "@/types/api/placeDetail";

interface Props {
  location: Location;
}

export default function DetailScreenNearByPlaces({ location }: Props) {
  return (
    <ContentWrapper>
      <DetailScreenSectionTitle
        title="주변 여행지 추천"
        link={`/(tabs)/home/place-recommend?lat=${location.lat}&lng=${location.lng}`}
      />
      <View>
        {["섬진강 대나무숲길", "구례 꽃강", "화엄사"].map((place) => (
          <NearByPlaceCard key={place} place={place} />
        ))}
      </View>
    </ContentWrapper>
  );
}
