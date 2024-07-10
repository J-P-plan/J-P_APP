import type { Location } from "@/lib/types/api/common";

export interface TextSearchResponse {
  nextPageToken: null;
  results: SearchResult[];
}

export interface SearchResult {
  placeId: string;
  name: string;
  formattedAddress: string;
  geometry: {
    location: Location;
  };
  rating: number;
  userRatingsTotal: number;
  photoUrls: string[];
}
