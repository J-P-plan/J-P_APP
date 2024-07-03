import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
import TagChip from "@/components/common/TagChip";
import LikeCount from "@/components/common/LikeCount";
import CommentCount from "@/components/common/CommentCount";
import StarRating from "@/components/common/StarRating";
import type { HomeSectionItemProps } from "@/types/home";
import type { PlaceData } from "@/types/api/place";
import type { ReviewsData } from "@/types/api/review";
import type { TravelLogData } from "@/types/api/travelLog";

interface ItemProps {
  data: PlaceData | ReviewsData | TravelLogData;
}

export default function HomeSectionListItem({
  id,
  data,
}: HomeSectionItemProps & ItemProps) {
  switch (id) {
    case "place-trending":
      return <PlaceItem data={data as PlaceData} type="trending" />;
    case "city-trending":
      return <CityItem data={data as PlaceData} />;
    case "place-theme":
      return <PlaceItem data={data as PlaceData} type="theme" />;
    case "travel-log":
      return <TravelLogItem data={data as TravelLogData} />;
    case "review":
      return <ReviewItem data={data as ReviewsData} />;
  }
}

interface PlaceItemProps {
  data: PlaceData;
  type?: "trending" | "theme";
}

const PlaceItem = ({ data, type }: PlaceItemProps) => {
  return (
    <Link href={`/(tabs)/home/(detail)/place/${data.placeId}`} tw="mt-1">
      <View tw="mr-2">
        <View tw="w-[120px] h-[120px] rounded bg-gray-300">
          {type === "theme" && (
            <View tw="absolute top-[15px] right-[11px] items-center justify-center w-[43px] h-5 rounded-large bg-white/60">
              <Text tw="text-[10px] text-black">{"여행지"}</Text>
            </View>
          )}
        </View>
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

const CityItem = ({ data }: PlaceItemProps) => {
  return (
    <Link href={`/(tabs)/home/(detail)/city/${data.placeId}`} tw="mt-1">
      <View tw="mr-2">
        <View tw="w-[120px] h-[120px] rounded bg-gray-300">
          <View tw="absolute bottom-[13px] right-[10.5px] items-center justify-center w-[45px] h-[25px] rounded-large bg-white/60">
            <Text tw="font-bold text-sm text-gray-700">{data.name}</Text>
          </View>
        </View>
        {/* <Image source={{ uri: data.photoUrl }} /> */}
      </View>
    </Link>
  );
};

interface TravelLogItemProps {
  data: TravelLogData;
}

const TravelLogItem = ({ data }: TravelLogItemProps) => {
  return (
    <View tw="flex-row w-[343px] h-20 mb-3">
      <View tw="w-[85px] h-full mr-2.5 rounded bg-gray-300"></View>
      <View tw="flex-1 justify-between">
        <View tw="flex-row">
          {data.tags.map((tag) => (
            <TagChip key={tag} text={tag} />
          ))}
        </View>
        <View>
          <Text numberOfLines={1} tw="font-bold text-sm">
            {data.subject}
          </Text>
        </View>
        <View tw="flex-row items-center justify-between">
          <View tw="flex-row items-center">
            <View tw="w-6 h-6 rounded-full bg-secondary-light"></View>
            <Text tw="ml-2 text-xs">{data.userCompactResDto.nickname}</Text>
          </View>
          <View tw="space-x-2 flex-row">
            <View tw="flex-row">
              <LikeCount count={data.like} textColor="text-gray-300" />
            </View>
            <View tw="flex-row">
              <CommentCount count={data.commentCnt} textColor="text-gray-300" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

interface ReviewItemProps {
  data: ReviewsData;
}

const ReviewItem = ({ data }: ReviewItemProps) => {
  return (
    <View tw="flex-row w-[343px] h-20 mb-3">
      <View tw="w-[85px] h-full mr-2.5 rounded bg-gray-300"></View>
      <View tw="flex-1 justify-between">
        <View>
          <Text numberOfLines={1} tw="font-bold text-sm">
            {data.subject}
          </Text>
          <Text numberOfLines={1} tw="text-sm">
            {data.content}
          </Text>
        </View>
        <View tw="flex-row items-center justify-between">
          <View tw="flex-row items-center">
            <View tw="w-6 h-6 rounded-full bg-secondary-light"></View>
            <Text tw="ml-2 text-xs">{data.userCompactResDto.nickname}</Text>
          </View>
          <View tw="space-x-2 flex-row">
            <View tw="flex-row">
              <StarRating rating={data.star} textColor="text-gray-300" />
            </View>
            <View tw="flex-row">
              <CommentCount count={data.commentCnt} textColor="text-gray-300" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
