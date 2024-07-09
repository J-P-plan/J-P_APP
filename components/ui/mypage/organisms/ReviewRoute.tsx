import { ScrollView, Text, View } from "react-native";
import type { ReviewData } from "@/lib/types/api/review";
import ContentWrapper from "@/components/common/layout/ContentWrapper";
import ReviewListItem from "@/components/ui/mypage/molecules/ReviewListItem";

const reviewList: ReviewData[] = [
  {
    id: 2,
    subject: "전주 한옥마을, 벽화마을, 남부시장 먹방 여행",
    content:
      "오랜만에 한옥마을에서 힐링하고 갑니다~조용하고 혼자 편안히 휴식을 취하기 아주 좋은 곳이에요",
    userCompactResDto: {
      id: 1,
      nickname: "arami10",
      picture: null,
    },
    commentCnt: 0,
    likeCnt: 3,
    star: 4.8,
    placeId: "2",
    createdAt: "24.3.28",
  },
  {
    id: 1,
    subject: "파주 마장호수 산책, 호수 뷰 맛집",
    content: "생각보다 호수도 넓고 주변 경치가 너무 좋았어요~",
    userCompactResDto: {
      id: 1,
      nickname: "arami10",
      picture: null,
    },
    commentCnt: 3,
    likeCnt: 6,
    star: 4.8,
    placeId: "1",
    createdAt: "24.2.1",
  },
];

export default function ReviewRoute() {
  return (
    <ScrollView>
      <ContentWrapper tw="my-6">
        <Text tw="font-bold text-xl text-gray-900">
          {`내 작성 리뷰 ${reviewList.length || 0}`}
        </Text>
        <View tw="mt-4 mx-2.5" style={{ gap: 9 }}>
          {reviewList.map((item) => (
            <ReviewListItem key={item.id} item={item} />
          ))}
        </View>
      </ContentWrapper>
    </ScrollView>
  );
}
