import { SafeAreaView, ScrollView, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useNearByListData } from "@/hooks/query/googlePlaceData";
import Map from "@/components/common/Map";
import BottomSheet from "@/components/common/layout/BottomSheet";
import RecommendCard from "@/components/ui/home/list/RecommendCard";

export default function PlaceRecommendScreen() {
  const { lat, lng } = useLocalSearchParams<{ lat: string; lng: string }>();
  const { data: placeList } = useNearByListData(lat, lng);

  return (
    <SafeAreaView tw="flex-1 mb-20">
      <Map />
      <BottomSheet>
        <ScrollView tw="mb-56">
          <View tw="w-[343px] mx-auto">
            {placeList &&
              placeList.results.map((place) => (
                <RecommendCard key={place.placeId} data={place} />
              ))}
          </View>
        </ScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
}
