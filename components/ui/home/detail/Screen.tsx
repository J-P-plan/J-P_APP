import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { Stack } from "expo-router";
import type { PlaceDetailData } from "@/types/api/placeDetail";
import HomeHeader from "@/components/ui/headers/HomeHeader";
import ImageCarousel from "@/components/common/layout/Carousel";
import DetailScreenSummary from "@/components/ui/home/detail/organisms/Summary";
import DetailScreenInfo from "@/components/ui/home/detail/organisms/Info";
import DetailScreenNearByPlaces from "@/components/ui/home/detail/organisms/NearByPlaces";
import DetailScreenReviews from "@/components/ui/home/detail/organisms/Reviews";
import DetailScreenAddButton from "@/components/ui/home/detail/organisms/AddButton";

interface Props {
  data: PlaceDetailData;
  type?: "place" | "city";
}

export default function HomeDetailScreen({ data, type = "place" }: Props) {
  const [scrollY, setScrollY] = useState<number>(0);
  const [headerOpacity, setHeaderOpacity] = useState<1 | 0>(0);

  useEffect(() => {
    if (scrollY > 100) {
      setHeaderOpacity(1);
    } else {
      setHeaderOpacity(0);
    }
  }, [scrollY]);

  return (
    <>
      <Stack.Screen
        options={{
          header: () =>
            headerOpacity ? (
              <HomeHeader type="detail" title={data.name} />
            ) : (
              <HomeHeader type="detailTransparent" transparent />
            ),
        }}
      />
      <ScrollView
        tw="mb-20"
        onScroll={(e) => setScrollY(e.nativeEvent.contentOffset.y)}
        scrollEventThrottle={10}
      >
        <ImageCarousel images={data.photoUrls} />
        <DetailScreenSummary
          name={data.name}
          tags={["벚꽃 명소", "산책코스", "아름다운 길", "나들이"]}
          //   tags={data.tags}
          description={data.description}
        />
        {type === "place" && (
          <DetailScreenInfo address={data.formattedAddress} />
        )}
        <DetailScreenNearByPlaces location={data.location} />
        <DetailScreenReviews id={data.placeId} />
        <DetailScreenAddButton />
      </ScrollView>
    </>
  );
}
