import { Text, Pressable } from "react-native";

export const Done = () => {
  const handleSubmit = () => {};

  return (
    <Pressable tw="w-10" onPress={handleSubmit}>
      <Text tw="font-bold text-sm text-gray-400">{"완료"}</Text>
    </Pressable>
  );
};
