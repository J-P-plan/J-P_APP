import { SafeAreaView, ScrollView } from "react-native";
import SearchBar from "@/components/common/SearchBar";
import HomeSection from "@/components/ui/home/index/Section";

export default function HomeScreen() {
  return (
    <SafeAreaView tw="flex-1 mb-20">
      <ScrollView tw="pt-2">
        <SearchBar />
        <HomeSection sectionId="place-trending" />
        <HomeSection sectionId="city-trending" />
        <HomeSection sectionId="place-theme" />
        <HomeSection sectionId="travel-log" />
        <HomeSection sectionId="review" />
      </ScrollView>
    </SafeAreaView>
  );
}
