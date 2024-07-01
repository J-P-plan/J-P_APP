import { Text } from "react-native";
import StarIcon from "@/assets/icons/common/star.svg";
import { cn } from "@/lib/util";

interface Props {
  rating: number;
  textColor?: string;
}

export default function StarRating({
  rating,
  textColor = "text-gray-700",
}: Props) {
  return (
    <>
      <StarIcon tw="w-4 h-4 text-point-star" />
      <Text tw={cn("ml-[3px] font-normal text-xs", textColor)}>{rating}</Text>
    </>
  );
}
