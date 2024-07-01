import { useLocalSearchParams } from "expo-router";
import { usePlaceData } from "@/hooks/query/placeData";
import HomeDetailScreen from "@/components/ui/home/detail/Screen";

export default function CityDetailScreen() {
  const { id } = useLocalSearchParams();
  const { data: cityData } = usePlaceData(id as string | undefined);

  return <>{cityData && <HomeDetailScreen data={cityData} type="city" />}</>;
}
