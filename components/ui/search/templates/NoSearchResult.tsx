import { Text, View } from "react-native";

export default function NoSearchResult() {
  return (
    <View>
      <Text tw="font-normal text-sm text-gray-700">
        {"검색 결과가 없습니다."}
      </Text>
    </View>
  );
}
