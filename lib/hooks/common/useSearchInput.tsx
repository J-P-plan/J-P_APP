import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import type { TextInputProps } from "react-native";
import type { NativeViewGestureHandlerProps } from "react-native-gesture-handler";

export default function useSearchInput(currentValue: string = "") {
  const [value, setValue] = useState(currentValue);
  const { navigate } = useRouter();

  useEffect(() => {
    setValue(currentValue);
  }, [currentValue]);

  const handleSearch = () => {
    console.log(value);
    navigate(`/(tabs)/search?term=${value}`);
  };

  const inputProps: TextInputProps & NativeViewGestureHandlerProps = {
    value: value,
    onChangeText: setValue,
    onSubmitEditing: handleSearch,
  };

  return inputProps;
}
