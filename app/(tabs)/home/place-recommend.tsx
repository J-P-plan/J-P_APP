import { SafeAreaView, ScrollView, View } from "react-native";
import { usePlaceListData } from "@/hooks/query/placeData";
import Map from "@/components/common/Map";
import BottomSheet from "@/components/common/BottomSheet";
import RecommendCard from "@/components/ui/home/list/RecommendCard";

export default function PlaceRecommendScreen() {
  const { data: placeList } = usePlaceListData("place-trending");

  return (
    <SafeAreaView tw="flex-1 mb-20">
      <Map />
      <BottomSheet>
        <ScrollView tw="mb-56">
          <View tw="w-[343px] mx-auto">
            {placeList &&
              placeList.data.map((place) => (
                <RecommendCard key={place.id} data={place} />
              ))}
          </View>
        </ScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
}
