import { View, Text, Image } from "react-native";
import VerticalSeparator from "@/components/common/Separator";
import StarRating from "@/components/common/StarRating";
import LikeCount from "@/components/common/LikeCount";
import CommentCount from "@/components/common/CommentCount";
import { ReviewData } from "@/types/api/review";

interface Props {
  review: ReviewData;
}

export default function ReviewCard({ review }: Props) {
  return (
    <View tw="justify-between w-[271px] h-[134px] mr-2 py-4 px-6 rounded border border-gray-200 bg-white">
      <View tw="flex-row items-center justify-between">
        <View tw="flex-row items-center">
          {review.userCompactResDto.picture ? (
            <Image
              source={{ uri: review.userCompactResDto.picture }}
              tw="w-6 h-6 rounded-full border border-gray-200/60"
            />
          ) : (
            <View tw="w-6 h-6 rounded-full border border-gray-200/60 bg-secondary" />
          )}
          <Text tw="ml-2 font-normal text-xs text-gray-900">
            {review.userCompactResDto.nickname}
          </Text>
          <VerticalSeparator />
          <Text tw="font-normal text-xs text-gray-300">{review.createdAt}</Text>
        </View>
        <View tw="flex-row">
          <StarRating rating={review.star} textColor="text-gray-300" />
        </View>
      </View>
      <Text numberOfLines={2} tw="font-normal text-sm text-gray-900">
        {review.content}
      </Text>
      <View tw="space-x-1.5 flex-row">
        <LikeCount count={review.likeCnt} textColor="text-gray-300 mr-1.5" />
        <CommentCount count={review.commentCnt} textColor="text-gray-300" />
      </View>
    </View>
  );
}
