import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
import type { TravelLogData } from "@/lib/types/api/travelLog";
import TagChip from "@/components/common/display/TagChip";
import UserProfile from "@/components/common/display/UserProfile";
import LikeCount from "@/components/common/display/LikeCount";
import CommentCount from "@/components/common/display/CommentCount";

interface Props {
  data: TravelLogData;
}

export default function TravelLogCard({ data }: Props) {
  return (
    <Link
      href={`/(tabs)/travelReview/(detail)/travel-log/${data.id}`}
      tw="mb-3"
    >
      <View tw="flex-row w-[343px] h-20">
        <View tw="w-[85px] h-full mr-2.5 rounded bg-gray-200"></View>
        {/* TODO Image  */}
        <View tw="flex-1 justify-between">
          <View tw="flex-row">
            {data.tags.map((tag) => (
              <TagChip key={tag} text={tag} />
            ))}
          </View>
          <View>
            <Text numberOfLines={1} tw="font-bold text-sm">
              {data.subject}
            </Text>
          </View>
          <View tw="flex-row items-center justify-between">
            <UserProfile
              profileUrl={data.userCompactResDto.picture}
              name={data.userCompactResDto.nickname}
            />
            <View tw="flex-row" style={{ gap: 8 }}>
              <LikeCount count={data.like} textColor="text-gray-300" />
              <CommentCount count={data.commentCnt} textColor="text-gray-300" />
            </View>
          </View>
        </View>
      </View>
    </Link>
  );
}
