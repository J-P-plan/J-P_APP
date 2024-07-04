import { View, Text } from "react-native";
import VerticalSeparator from "@/components/common/Separator";
import StarRating from "@/components/common/StarRating";
import LikeCount from "@/components/common/LikeCount";
import CommentCount from "@/components/common/CommentCount";

interface Props {
  review: Object;
}

export default function ReviewCard({ review }: Props) {
  return (
    <View tw="justify-between w-[271px] h-[134px] mr-2 py-4 px-6 rounded border border-gray-200 bg-white">
      <View tw="flex-row items-center justify-between">
        <View tw="flex-row items-center">
          <View tw="w-6 h-6 rounded-full border border-gray-200/60 bg-secondary" />
          <Text tw="ml-2 font-normal text-xs text-gray-900">{"jiyoo"}</Text>
          <VerticalSeparator />
          <Text tw="font-normal text-xs text-gray-300">{"24.04.01"}</Text>
        </View>
        <View tw="flex-row">
          <StarRating rating={4.9} textColor="text-gray-300" />
        </View>
      </View>
      <Text numberOfLines={2} tw="font-normal text-sm text-gray-900">
        {
          "드라이브, 산책 코스로 딱 좋았던 섬진강길 벚꽃길은 구례부터 하동까지 쭉 이어져있는데 만개했을깨 벚꽃 터널을 드라이브 하면 너무 좋아요."
        }
      </Text>
      <View tw="space-x-1.5 flex-row">
        <LikeCount count={14} textColor="text-gray-300 mr-1.5" />
        <CommentCount count={2} textColor="text-gray-300" />
      </View>
    </View>
  );
}
