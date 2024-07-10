import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";
import type { ReviewData } from "@/lib/types/api/review";
import CommentCount from "@/components/common/display/CommentCount";
import LikeCount from "@/components/common/display/LikeCount";
import UserProfile from "@/components/common/display/UserProfile";

interface Props {
  item: ReviewData;
}

export default function ReviewListItem({ item }: Props) {
  return (
    <Link href={"/(tabs)/travelReview/(index)/review"} asChild>
      <Pressable tw="justify-between h-[140px] p-4 rounded border border-gray-200 bg-white">
        <View tw="flex-row items-center justify-between">
          <UserProfile
            profileUrl={item.userCompactResDto.picture}
            name={item.userCompactResDto.nickname}
            createdAt={item.createdAt}
          />
          <Pressable>
            <Text tw="font-normal text-xs text-gray-300">{"수정"}</Text>
          </Pressable>
        </View>
        <View>
          <Text numberOfLines={1} tw="font-normal text-sm text-gray-900">
            {item.subject}
          </Text>
          <Text numberOfLines={1} tw="font-normal text-sm text-gray-900">
            {item.content}
          </Text>
        </View>
        <View tw="flex-row" style={{ gap: 3 }}>
          <LikeCount count={item.likeCnt} textColor="text-gray-300" />
          <CommentCount count={item.commentCnt} textColor="text-gray-300" />
        </View>
      </Pressable>
    </Link>
  );
}
