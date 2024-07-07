import { useState } from "react";
import type { TextInputProps } from "react-native";
import type { NativeViewGestureHandlerProps } from "react-native-gesture-handler";

export default function useCommentInput() {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    console.log(value);
    // TODO POST /comment/{targetId} api
  };

  const inputProps: TextInputProps & NativeViewGestureHandlerProps = {
    value: value,
    onChangeText: setValue,
  };

  return { inputProps, handleSubmit };
}
