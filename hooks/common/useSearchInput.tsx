import { useState } from "react";
import {
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  TextInputProps,
} from "react-native";
import { NativeViewGestureHandlerProps } from "react-native-gesture-handler";

export default function useSearchInput() {
  const [value, setValue] = useState("");

  const handleSearch = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    // console.log(e);
  };

  const inputProps: TextInputProps & NativeViewGestureHandlerProps = {
    value: value,
    onChangeText: setValue,
    onKeyPress: handleSearch,
  };

  return inputProps;
}
