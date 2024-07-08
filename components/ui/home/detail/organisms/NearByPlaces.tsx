import { View } from "react-native";
import { useNearByListData } from "@/lib/hooks/query/googlePlaceData";
import type { Location } from "@/lib/types/api/placeDetail";
import ContentWrapper from "@/components/common/layout/ContentWrapper";
import DetailScreenSectionTitle from "@/components/ui/home/detail/molecules/shared/Title";
import NearByPlaceCard from "@/components/ui/home/detail/molecules/NearByPlaceCard";

interface Props {
  location: Location;
}

export default function DetailScreenNearByPlaces({ location }: Props) {
  const { data: nearbyList } = useNearByListData(location.lat, location.lng);

  return (
    <ContentWrapper>
      <DetailScreenSectionTitle
        title="주변 여행지 추천"
        link={`/(tabs)/home/place-recommend?lat=${location.lat}&lng=${location.lng}`}
      />
      <View>
        {nearbyList &&
          nearbyList.results
            .slice(0, 3)
            .map((place) => (
              <NearByPlaceCard key={place.placeId} place={place} />
            ))}
      </View>
    </ContentWrapper>
  );
}
