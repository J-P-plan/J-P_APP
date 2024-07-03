import { View, Text } from "react-native";
import ContentWrapper from "@/components/common/ContentWrapper";
import HorizontalScrollView from "@/components/common/HorizontalScrollView";
import VerticalSeparator from "@/components/common/Separator";
import StarRating from "@/components/common/StarRating";
import LikeCount from "@/components/common/LikeCount";
import CommentCount from "@/components/common/CommentCount";
import EditIcon from "@/assets/icons/common/edit.svg";
import DetailScreenSectionTitle from "@/components/ui/home/detail/molecules/shared/Title";

interface Props {
  id: string;
}

export default function DetailScreenReviews({ id }: Props) {
  return (
    <ContentWrapper>
      <DetailScreenSectionTitle
        title="리뷰"
        icon={<EditIcon tw="ml-1.5 w-[18px] h-[18px] text-gray-900" />}
        link="/"
      />
      <HorizontalScrollView>
        {Array.from({ length: 5 }).map((review, i) => (
          <View
            key={i}
            tw="space-y-2 w-[271px] h-[134px] mr-2 py-4 px-7 rounded border border-gray-200 bg-white"
          >
            <View tw="flex-row items-center justify-between">
              <View tw="flex-row items-center">
                <View tw="w-6 h-6 rounded-full border border-gray-200/60 bg-secondary" />
                <Text tw="ml-2 font-normal text-xs text-gray-900">
                  {"jiyoo"}
                </Text>
                <VerticalSeparator />
                <Text tw="font-normal text-xs text-gray-300">{"24.04.01"}</Text>
              </View>
              <View tw="flex-row">
                <StarRating rating={4.9} textColor="text-gray-300" />
              </View>
            </View>
            <View>
              <Text numberOfLines={2} tw="font-normal text-sm text-gray-900">
                {
                  "드라이브, 산책 코스로 딱 좋았던 섬진강길 벚꽃길은 구례부터 하동까지 쭉 이어져있는데 만개했을깨 벚꽃 터널을 드라이브 하면 너무 좋아요."
                }
              </Text>
            </View>
            <View tw="space-x-1.5 flex-row">
              <View tw="flex-row">
                <LikeCount count={14} textColor="text-gray-300" />
              </View>
              <View tw="flex-row">
                <CommentCount count={2} textColor="text-gray-300" />
              </View>
            </View>
          </View>
        ))}
      </HorizontalScrollView>
    </ContentWrapper>
  );
}
