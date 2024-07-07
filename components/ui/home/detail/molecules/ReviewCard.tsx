import { View, Text } from "react-native";
import type { ReviewData } from "@/types/api/review";
import StarRating from "@/components/common/StarRating";
import LikeCount from "@/components/common/LikeCount";
import CommentCount from "@/components/common/CommentCount";
import UserProfile from "@/components/common/UserProfile";

interface Props {
  review: ReviewData;
}

export default function ReviewCard({ review }: Props) {
  return (
    <View tw="justify-between w-[271px] h-[134px] mr-2 py-4 px-6 rounded border border-gray-200 bg-white">
      <View tw="flex-row items-center justify-between">
        <UserProfile
          profileUrl={review.userCompactResDto.picture}
          name={review.userCompactResDto.nickname}
          createdAt={review.createdAt}
        />
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
