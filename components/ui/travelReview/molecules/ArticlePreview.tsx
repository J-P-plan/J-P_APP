import { Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import type { ReviewData, TravelReviewType } from "@/types/api/review";
import ArticleSeparator from "@/components/ui/travelReview/atoms/ArticleSeparator";
import UserProfile from "@/components/common/UserProfile";
import StarRating from "@/components/common/StarRating";
import LikeCount from "@/components/common/LikeCount";
import CommentCount from "@/components/common/CommentCount";
import ImageCarousel from "@/components/common/Carousel";

const images = [
  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1300&maxheight=731&photo_reference=AUc7tXU6FtZzqj6wu5_unaWMcRWjOXdY-wAQ0WgiEhSZnENgl1f1v4M4Y3xGr4c3SdjhdcVKQB-se4NOq62_OrckT2rE1H1FdxNsiEC9bGoo2P23R6HS8NyNe_le9XKeqdqzi0RCih9xoh9Oa9CA8cuKi7mdQwqS3S4XKXAX4EuwH9haxHO1&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1300&maxheight=731&photo_reference=AUc7tXW856N3hWqbGPeCMQklQ4G58GANpRrZBqPlWFqrRw4x7u5ZoTQ1ww9XsgfmoCVN-e2BAqjayllTYgd6B1vtdPrZWTXtG6OUqmjFCOnySfb3pA6PJyqrAsceQ2D04ue-7-uZlVNEdmbdKv_WgUqP8GMPXFEdvHCfZNn8TtmjwurGHYUF&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1300&maxheight=731&photo_reference=AUc7tXVSze_WUcAhYj_ImLSxCy7buFe7N35VwEia9vzyL4FDMJgZCXVWwsa41pNrb1AMzZDPPmfaJXgIbUQRGJCbC_ewXs4gPPaKouFQp-AcOPSIPiOCwIpOLd9E6lRKPtFget7nC3-3MnWeqh6qPkHFKP_FgQHyGOnweg5Db1AluJO-LqU3&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
];

interface Props {
  type: TravelReviewType;
  article: ReviewData;
  last?: boolean;
}

export default function ArticlePreview({ type, article, last }: Props) {
  return (
    <>
      <View tw="flex-1 mt-4" style={{ gap: 8 }}>
        <View tw="flex-row items-center justify-between">
          <UserProfile
            size="medium"
            profileUrl={article.userCompactResDto.picture}
            name={article.userCompactResDto.nickname}
            createdAt="24.3.24"
          />
          <StarRating rating={article.star} />
        </View>
        <Link
          href={`/(tabs)/travelReview/(detail)/${type}/${article.id}`}
          asChild
        >
          <Pressable tw="py-5 px-[30px] rounded border border-gray-200 bg-white">
            <Text numberOfLines={1} tw="font-normal text-sm text-gray-900">
              {article.subject}
            </Text>
            <Text numberOfLines={2} tw="font-normal text-sm text-gray-900">
              {article.content}
            </Text>
            <Text tw="absolute top-3 right-4 font-normal text-xs text-gray-300">
              {"더보기"}
            </Text>
          </Pressable>
        </Link>
        {images && <ImageCarousel images={images} height={190} rounded />}
        <View tw="flex-row items-center" style={{ gap: 6 }}>
          <LikeCount count={article.likeCnt} />
          <CommentCount count={article.commentCnt} />
        </View>
      </View>
      {last ? <View tw="h-20" /> : <ArticleSeparator />}
    </>
  );
}
