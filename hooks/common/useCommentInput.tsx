import { useState } from "react";
import type { TextInputProps } from "react-native";
import type { NativeViewGestureHandlerProps } from "react-native-gesture-handler";

export default function useCommentInput(type: "comment" | "reply") {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    console.log(value);
    if (type === "comment") {
      // TODO POST /comment/{targetId} api
    } else if (type === "reply") {
      // TODO POST /reply/{commentId} api
    }
  };

  const inputProps: TextInputProps & NativeViewGestureHandlerProps = {
    value: value,
    onChangeText: setValue,
  };

  return { inputProps, handleSubmit };
}
