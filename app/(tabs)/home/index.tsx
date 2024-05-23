import { View, SafeAreaView, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Link } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import useSearchInput from "@/hooks/common/useSearchInput";
import COLORS from "@/constants/colors";
import MESSAGE from "@/message/common";
import HomeSection from "@/components/ui/home/HomeSection";

export default function HomeScreen() {
  const textInputProps = useSearchInput();

  return (
    <SafeAreaView tw="flex-1 bg-background">
      <ScrollView className="pt-2 px-5">
        <View className="flex-row items-center h-[56px] mb-[28px] px-[22px] rounded-full border-[0.8px] border-gray-200 bg-white">
          <Feather name="search" size={16.8} color={COLORS.gray[900]} />
          <TextInput
            className="ml-[8px]"
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
