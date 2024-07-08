import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import useSearchInput from "@/hooks/common/useSearchInput";
import SearchIcon from "@/assets/icons/common/search.svg";
import COLOR from "@/constants/colors";

export default function SearchBar() {
  const textInputProps = useSearchInput();

  return (
    <View tw="flex-row items-center w-[343px] h-[56px] mx-auto mb-[28px] px-[22px] rounded-full border-[0.8px] border-gray-200 bg-white">
      <SearchIcon tw="w-6 h-6 text-gray-900" />
      <TextInput
        tw="ml-[8px]"
        keyboardType="default"
        placeholder={"여행지를 입력해주세요."}
        placeholderTextColor={COLOR.gray[300]}
        {...textInputProps}
      />
    </View>
  );
}
