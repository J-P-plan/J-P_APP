import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import useSearchInput from "@/lib/hooks/common/useSearchInput";
import COLOR from "@/lib/constants/colors";
import { cn } from "@/lib/util";
import SearchIcon from "@/assets/icons/common/search.svg";

interface Props {
  currentValue?: string;
  onSearchScreen?: boolean;
}

export default function SearchBar({ currentValue, onSearchScreen }: Props) {
  const textInputProps = useSearchInput(currentValue);

  return (
    <View
      tw={cn(
        "flex-row items-center w-[343px] mx-auto mb-[28px] px-[22px] rounded-full border-[0.8px] border-gray-200 bg-white",
        onSearchScreen ? "h-[45px]" : "h-[56px]"
      )}
    >
      <SearchIcon tw="w-6 h-6 text-gray-900" />
      <TextInput
        tw="flex-1 ml-[8px] font-normal text-xs"
        inputMode="search"
        placeholder={"여행지를 입력해주세요."}
        placeholderTextColor={COLOR.gray[300]}
        {...textInputProps}
      />
    </View>
  );
}
