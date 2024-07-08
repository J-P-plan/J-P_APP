import { Location } from "@/lib/types/api/placeDetail";

export interface NearBySearchResponse {
  nextPageToken: string;
  results: NearByPlaceData[];
}

export interface NearByPlaceData {
  placeId: string;
  name: string;
  vicinity: string;
  geometry: { location: Location };
  rating: number;
  userRatingsTotal: number;
  photoUrls: string[];
}
