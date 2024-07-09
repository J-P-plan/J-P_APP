import type { Location } from "@/lib/types/api/common";

export interface PlaceDetailData {
  id: number;
  placeId: string;
  name: string;
  formattedAddress: string;
  location: Location;
  description: string;
  tags: string[];
  photoUrls: string[];
  placeType: string;
  likeCount: number;
  userId: number;
  isLiked: boolean;
}
