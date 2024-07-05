import { useState } from "react";
import { View, Text, Image } from "react-native";
import PagerView from "react-native-pager-view";

interface Props {
  images: string[];
  height?: number;
  rounded?: boolean;
}

export default function ImageCarousel({
  images,
  height = 280,
  rounded = false,
}: Props) {
  const [carouselPage, setCarouselPage] = useState<number>(0);

  return (
    <View>
      <PagerView
        initialPage={0}
        style={{ height }}
        scrollEnabled
        orientation={"horizontal"}
        onPageSelected={(e) => setCarouselPage(e.nativeEvent.position)}
      >
        {images.map((url, i) => (
          <Image
            key={i}
            source={{ uri: url }}
            alt={`사진 ${i}`}
            tw="w-full h-full"
            style={{ borderRadius: rounded ? 16 : 0 }}
          />
        ))}
      </PagerView>
      <View tw="absolute bottom-[22px] right-[25px] items-center justify-center py-0.5 px-1.5 rounded-full bg-white/60">
        <Text tw="font-normal text-[10px] text-gray-900">
          {`${carouselPage + 1} / ${images.length}`}
        </Text>
      </View>
    </View>
  );
}
