import { SafeAreaView, ScrollView, View } from "react-native";
import { usePlaceListData } from "@/lib/hooks/query/placeData";
import { PlaceType } from "@/lib/types/api/place";
import PlaceCard from "@/components/ui/home/list/PlaceCard";

export default function PlaceThemeScreen() {
  const { data: placeList } = usePlaceListData(PlaceType.THEME);

  return (
    <SafeAreaView tw="flex-1 mb-20">
      <ScrollView tw="pt-2">
        <View tw="flex-row flex-wrap justify-between w-[343px] mx-auto mb-4">
          {placeList &&
            placeList.data.map((place) => (
              <PlaceCard key={place.id} data={place} type={"theme"} />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
