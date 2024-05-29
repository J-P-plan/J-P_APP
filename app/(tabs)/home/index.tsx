import { View, SafeAreaView, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import useSearchInput from "@/hooks/common/useSearchInput";
import HomeSection from "@/components/ui/home/HomeSection";
import SearchIcon from "@/assets/icons/search.svg";
import MESSAGE from "@/message/common";
import COLORS from "@/constants/colors";

export default function HomeScreen() {
  const textInputProps = useSearchInput();

  return (
    <SafeAreaView tw="flex-1 mb-16">
      <ScrollView tw="px-5 pt-2">
        <View tw="flex-row items-center h-[56px] mb-[28px] px-[22px] rounded-full border-[0.8px] border-gray-200 bg-white">
          <SearchIcon />
          <TextInput
            tw="ml-[8px]"
            keyboardType="default"
            placeholder={MESSAGE.searchPlaceholder}
            placeholderTextColor={COLORS.gray[300]}
            {...textInputProps}
          />
        </View>
        <HomeSection sectionId="place-trending" />
        <HomeSection sectionId="city-trending" />
        <HomeSection sectionId="place-theme" />
        <HomeSection sectionId="travel-log" />
        <HomeSection sectionId="review" />
      </ScrollView>
    </SafeAreaView>
  );
}
