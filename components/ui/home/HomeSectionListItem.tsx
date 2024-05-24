import { Text, View, Image } from "react-native";
import type { HomeSectionItemProps } from "@/types/home";
import type { PlaceData } from "@/types/api/place";
import { Link } from "expo-router";

interface ItemProps {
  data: PlaceData;
}

export default function HomeSectionListItem({
  id,
  data,
}: HomeSectionItemProps & ItemProps) {
  switch (id) {
    case "place-trending":
      return <PlaceItem data={data} type="trending" />;
    case "city-trending":
      return <CityItem data={data} />;
    case "place-theme":
      return <PlaceItem data={data} type="theme" />;
    case "travel-log":
      return <TravelLogItem data={data} />;
    case "review":
      return <ReviewItem data={data} />;
  }
}

interface PlaceItemProps extends ItemProps {
  type: "trending" | "theme";
}

const PlaceItem = ({ data, type }: PlaceItemProps) => {
  return (
    <Link href={`/(tabs)/home/(detail)/place/${data.placeId}`}>
      <View tw="mr-2">
        <View tw="w-[120px] h-[120px] rounded-2xl bg-gray-300"></View>
        {/* <Image source={{ uri: data.photoUrl }} /> */}
        <Text tw="ml-1.5 mt-2 font-bold text-sm text-gray-900">
          {data.name}
        </Text>
        <Text tw="ml-1.5 mt-1 font-bold text-xs text-gray-600">
          {data.subName}
        </Text>
      </View>
    </Link>
  );
};

const CityItem = ({ data }: ItemProps) => {
  return (
    <Link href={`/(tabs)/home/(detail)/city/${data.placeId}`}>
      <View tw="mr-2">
        <View tw="w-[120px] h-[120px] rounded-2xl bg-gray-300">
          <View tw="absolute bottom-[13px] right-[10.5px] items-center justify-center w-[45px] h-[25px] rounded-full bg-white/60">
            <Text tw="font-bold text-sm text-gray-700">{data.name}</Text>
          </View>
        </View>
        {/* <Image source={{ uri: data.photoUrl }} /> */}
      </View>
    </Link>
  );
};

const TravelLogItem = ({ data }: ItemProps) => {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

const ReviewItem = ({ data }: ItemProps) => {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};
