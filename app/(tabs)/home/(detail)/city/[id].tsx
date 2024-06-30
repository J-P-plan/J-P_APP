import { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import PagerView from "react-native-pager-view";
import { useLocalSearchParams } from "expo-router";
import { usePlaceData } from "@/hooks/query/placeData";
import { cn } from "@/lib/util";
import StarRating from "@/components/ui/StarRating";
import VerticalSeparator from "@/components/ui/Separator";
import LikeCount from "@/components/ui/LikeCount";
import CommentCount from "@/components/ui/CommentCount";
import MarkerIcon from "@/assets/icons/common/marker.svg";
import EditIcon from "@/assets/icons/common/edit.svg";
import PlusIcon from "@/assets/icons/common/plus.svg";
import PlusLargeIcon from "@/assets/icons/common/plusLarge.svg";
import TagChip from "@/components/common/TagChip";

export default function CityDetailScreen() {
  const { id } = useLocalSearchParams();
  const { data: cityData } = usePlaceData(id as string | undefined);
  const [carouselPage, setCarouselPage] = useState<number>(0);

  return (
    <>
      {cityData && (
        <ScrollView tw="mb-20">
          <View tw="relative flex-1 h-[250px]">
            <PagerView
              initialPage={0}
              tw="flex-1 h-[250px]"
              scrollEnabled
              orientation={"horizontal"}
              onPageSelected={(e) => setCarouselPage(e.nativeEvent.position)}
            >
              {Array.from({ length: 3 }).map((item, i) => (
                <View
                  key={i}
                  tw={cn(
                    "relative w-full h-full",
                    i === 1 ? "bg-secondary" : "bg-primary-light"
                  )}
                ></View>
              ))}
            </PagerView>
            <View tw="absolute bottom-[22px] right-[25px] items-center justify-center w-8 h-4 rounded-full bg-white/60">
              <Text tw="font-normal text-[10px] text-gray-900">{`${
                carouselPage + 1
              } / 3`}</Text>
            </View>
          </View>
          <View tw="w-[343px] mx-auto">
            <View tw="flex-row items-center mt-6 mb-3">
              <MarkerIcon tw="w-6 h-6 text-gray-900" />
              <Text tw="ml-0.5 font-bold text-xl text-gray-900">
                {cityData.name}
              </Text>
            </View>
            <View tw="flex-row items-center">
              {["벚꽃 명소", "산책코스", "아름다운 길", "나들이"].map((tag) => (
                <TagChip key={tag} text={tag} margin="mr-1.5" />
              ))}
            </View>
            <Text tw="mt-4 font-normal text-base text-gray-900">
              {cityData.description}
            </Text>
          </View>
          <View tw="w-[343px] mx-auto">
            <View tw="flex-row items-center mt-6 mb-3">
              <Text tw="font-bold text-xl text-gray-900">
                {"주변 여행지 추천"}
              </Text>
              <Text tw="ml-3 font-normal text-xs text-gray-700">
                {"지도로 보기"}
              </Text>
              <Text tw="flex-1 text-right font-normal text-xs text-gray-300">
                {"더보기"}
              </Text>
            </View>
            <View tw="space-y-2">
              {["섬진강 대나무숲길", "구례 꽃강", "화엄사"].map((place) => (
                <View
                  key={place}
                  tw="flex-1 flex-row items-center h-[83px] p-3 rounded border border-gray-200 bg-white"
                >
                  <View tw="w-[60px] h-[60px] mr-[22px] rounded bg-primary"></View>
                  <View tw="space-y-1.5">
                    <Text tw="font-bold text-base text-gray-900">{place}</Text>
                    <View tw="flex-row items-center">
                      <StarRating rating={4.9} />
                      <VerticalSeparator />
                      <Text tw="font-normal text-xs text-gray-700">
                        {"위치 보기"}
                      </Text>
                    </View>
                  </View>
                  <View tw="flex-1 items-end mr-2">
                    <View tw="flex-row items-center py-2 px-3 rounded-full border border-gray-600">
                      <PlusIcon tw="w-[14px] h-[14px] text-gray-700" />
                      <Text tw="font-medium text-xs text-gray-700">
                        {"추가"}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
          <View tw="">
            <View tw="flex-row items-center w-[343px] mx-auto mt-6 mb-3">
              <Text tw="font-bold text-xl text-gray-900">{"리뷰"}</Text>
              <EditIcon tw="ml-1.5 w-[18px] h-[18px] text-gray-900" />
              <Text tw="flex-1 text-right font-normal text-xs text-gray-300">
                {"더보기"}
              </Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              tw="pl-5 space-x-2"
            >
              {Array.from({ length: 5 }).map((review, i) => (
                <View
                  key={i}
                  tw="space-y-2 w-[271px] h-[134px] py-4 px-7 rounded border border-gray-200 bg-white"
                >
                  <View tw="flex-row items-center justify-between">
                    <View tw="flex-row items-center">
                      <View tw="w-6 h-6 rounded-full border border-gray-200/60 bg-secondary" />
                      <Text tw="ml-2 font-normal text-xs text-gray-900">
                        {"jiyoo"}
                      </Text>
                      <VerticalSeparator />
                      <Text tw="font-normal text-xs text-gray-300">
                        {"24.04.01"}
                      </Text>
                    </View>
                    <View tw="flex-row">
                      <StarRating rating={4.9} textColor="text-gray-300" />
                    </View>
                  </View>
                  <View>
                    <Text
                      numberOfLines={2}
                      tw="font-normal text-sm text-gray-900"
                    >
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
              <View tw="w-10" />
            </ScrollView>
          </View>
          <View tw="self-center flex-row mt-10 mb-5 py-3 px-4 rounded-full bg-primary shadow">
            <PlusLargeIcon tw="w-[18px] h-[18px] text-white" />
            <Text tw="ml-[3px] font-bold text-sm text-white">
              {"내 일정에 추가"}
            </Text>
          </View>
        </ScrollView>
      )}
    </>
  );
}
