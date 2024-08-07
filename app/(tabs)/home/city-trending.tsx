import { SafeAreaView, ScrollView, View } from "react-native";
import { usePlaceListData } from "@/lib/hooks/query/placeData";
import { PlaceType } from "@/lib/types/api/place";
import CityCard from "@/components/ui/home/list/CityCard";

export default function CityTrendingScreen() {
  const { data: placeList } = usePlaceListData(PlaceType.CITY);

  return (
    <SafeAreaView tw="flex-1 mb-20">
      <ScrollView tw="pt-2">
        <View tw="flex-row flex-wrap justify-between w-[343px] mx-auto mb-4">
          {placeList &&
            placeList.data.map((place) => (
              <CityCard key={place.id} data={place} />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
