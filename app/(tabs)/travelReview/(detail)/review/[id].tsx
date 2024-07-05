import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useReviewData } from "@/hooks/query/reviewData";

export default function ReviewDetailScreen() {
  const { id } = useLocalSearchParams();
  const { data: reviewData } = useReviewData(id as string);

  return (
    <View>
      <Text>ReviewDetail</Text>
    </View>
  );
}
