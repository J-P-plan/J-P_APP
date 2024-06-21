import { SafeAreaView, ScrollView, View, Text } from "react-native";
import PagerView from "react-native-pager-view";
import { useLocalSearchParams } from "expo-router";
import { usePlaceData } from "@/hooks/query/placeData";

export default function PlaceDetailScreen() {
  const { id } = useLocalSearchParams();
  const { data: placeData } = usePlaceData(id as string | undefined);

  return (
    <SafeAreaView tw="flex-1 mb-20">
      <ScrollView tw="pt-2">
        {placeData && (
          <>
            <PagerView initialPage={0} tw="flex-1 h-[250px]">
              {Array.from({ length: 3 }).map((item, i) => (
                <View key={i} tw="relative w-full h-full bg-primary-light">
                  <View tw="absolute bottom-[22px] right-[25px] items-center justify-center w-8 h-4 rounded-full bg-white/60">
                    <Text tw="font-normal text-[10px] text-gray-900">{`${
                      i + 1
                    }/3`}</Text>
                  </View>
                </View>
              ))}
            </PagerView>
            <View>
              <Text>{placeData.name}</Text>
              <View tw="flex-row items-center gap-1.5">
                {["벚꽃 명소", "산책코스", "아름다운 길", "나들이"].map(
                  (tag) => (
                    <View
                      key={tag}
                      tw="py-1 px-2 rounded-full border border-gray-700 bg-white"
                    >
                      <Text tw="font-normal text-xs text-gray-700">{`#${tag}`}</Text>
                    </View>
                  )
                )}
              </View>
              <Text>{placeData.description}</Text>
            </View>
            <View>
              <Text>{"기본 정보"}</Text>
              <Text>{placeData.formattedAddress}</Text>
            </View>
            <View>
              <View tw="flex-row">
                <Text>{"주변 여행지 추천"}</Text>
                <Text>{"지도로 보기"}</Text>
                <Text>{"더보기"}</Text>
              </View>
              <View>
                {["섬진강 대나무숲길", "구례 꽃강", "화엄사"].map((place) => (
                  <View key={place}>
                    <View></View>
                    <View></View>
                    <View></View>
                  </View>
                ))}
              </View>
            </View>
            <View>
              <View tw="flex-row">
                <Text>{"리뷰"}</Text>
                <Text>{"더보기"}</Text>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {Array.from({ length: 5 }).map((review, i) => (
                  <View key={i}>
					<View></View>
					<View></View>
					<View></View>
				  </View>
                ))}
              </ScrollView>
            </View>
			<View></View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
