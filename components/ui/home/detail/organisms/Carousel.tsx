import { useState } from "react";
import { View, Text, Image } from "react-native";
import PagerView from "react-native-pager-view";

interface Props {
  images: string[];
}

export default function DetailScreenImageCarousel({ images }: Props) {
  const [carouselPage, setCarouselPage] = useState<number>(0);

  return (
    <View tw="relative flex-1 h-[250px]">
      <PagerView
        initialPage={0}
        tw="flex-1 h-[250px]"
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
