import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
import type { ReviewData } from "@/types/api/review";
import CommentCount from "@/components/common/display/CommentCount";
import StarRating from "@/components/common/display/StarRating";
import UserProfile from "@/components/common/display/UserProfile";

interface Props {
  data: ReviewData;
}

export default function ReviewCard({ data }: Props) {
  return (
    <Link href={`/(tabs)/travelReview/(detail)/review/${data.id}`} tw="mb-3">
      <View tw="flex-row w-[343px] h-20">
        <View tw="w-[85px] h-full mr-2.5 rounded bg-gray-200"></View>
        {/* TODO Image  */}
        <View tw="flex-1 justify-between">
          <View>
            <Text numberOfLines={1} tw="font-bold text-sm">
              {data.subject}
            </Text>
            <Text numberOfLines={1} tw="text-sm">
              {data.content}
            </Text>
          </View>
          <View tw="flex-row items-center justify-between">
            <UserProfile
              profileUrl={data.userCompactResDto.picture}
              name={data.userCompactResDto.nickname}
            />
            <View tw="flex-row" style={{ gap: 8 }}>
              <StarRating rating={data.star} textColor="text-gray-300" />
              <CommentCount count={data.commentCnt} textColor="text-gray-300" />
            </View>
          </View>
        </View>
      </View>
    </Link>
  );
}
