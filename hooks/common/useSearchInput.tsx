import { useState } from "react";
import { TextInputProps } from "react-native";
import { NativeViewGestureHandlerProps } from "react-native-gesture-handler";

export default function useSearchInput() {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    console.log(value);
  };

  const inputProps: TextInputProps & NativeViewGestureHandlerProps = {
    value: value,
    onChangeText: setValue,
    onSubmitEditing: handleSearch,
  };

  return inputProps;
}
