import { useRouter } from "expo-router";
import { useState } from "react";
import { TextInputProps } from "react-native";
import { NativeViewGestureHandlerProps } from "react-native-gesture-handler";

export default function useSearchInput() {
  const [value, setValue] = useState("");
  const { push } = useRouter();

  const handleSearch = () => {
    console.log(value);
    push("/(tabs)/search");
  };

  const inputProps: TextInputProps & NativeViewGestureHandlerProps = {
    value: value,
    onChangeText: setValue,
    onSubmitEditing: handleSearch,
  };

  return inputProps;
}
