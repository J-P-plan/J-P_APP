import { useLocalSearchParams } from "expo-router";
import { usePlaceData } from "@/lib/hooks/query/placeData";
import HomeDetailScreen from "@/components/ui/home/detail/Screen";

export default function PlaceDetailScreen() {
  const { id } = useLocalSearchParams();
  const { data: placeData } = usePlaceData(id as string | undefined);

  return <>{placeData && <HomeDetailScreen data={placeData} />}</>;
}
