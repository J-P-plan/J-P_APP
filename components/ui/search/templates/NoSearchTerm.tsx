import { View } from "react-native";
import RecentSearch from "@/components/ui/search/organisms/RecentSearch";
import RealtimeSearch from "@/components/ui/search/organisms/RealtimeSearch";

export default function NoSearchTerm() {
  return (
    <View tw="mx-1" style={{ gap: 24 }}>
      <RecentSearch />
      <RealtimeSearch />
    </View>
  );
}
