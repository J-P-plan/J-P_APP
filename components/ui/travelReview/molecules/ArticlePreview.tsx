import { Text, View, Pressable } from "react-native";
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
  last?: boolean;
}

export default function ArticlePreview({ last }: Props) {
  return (
    <>
      <View tw="flex-1 mt-4" style={{ gap: 8 }}>
        <View tw="flex-row items-center justify-between">
          <UserProfile size="medium" name="jandp" createdAt="24.3.24" />
          <StarRating rating={4.9} />
        </View>
        <Pressable tw="py-5 px-[30px] rounded border border-gray-200 bg-white">
          <Text numberOfLines={1} tw="font-normal text-sm text-gray-900">
            {"오대산 선재길에서 산책하기"}
          </Text>
          <Text numberOfLines={2} tw="font-normal text-sm text-gray-900">
            {
              "자연의 힐링을 동시에 누릴 수 있는 최고의 장소였어요! 산책로따라 걸으며 힐링을 만끽했어요! 호젓한 숲길을 계속 걷다보면 저절로 기분이 상쾌해지고 가벼워져요"
            }
          </Text>
          <Text tw="absolute top-3 right-[15px] font-normal text-xs text-gray-300">
            {"더보기"}
          </Text>
        </Pressable>
        {images && <ImageCarousel images={images} height={190} rounded />}
        <View tw="flex-row items-center" style={{ gap: 6 }}>
          <LikeCount count={12} />
          <CommentCount count={4} />
        </View>
      </View>
      {last ? <View tw="h-6" /> : <ArticleSeparator />}
    </>
  );
}
