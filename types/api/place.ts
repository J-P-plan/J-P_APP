import type { PageInfo } from "./common";

export interface PlaceResponse {
  pageInfo: PageInfo;
  data: PlaceData[];
}

export interface PlaceData {
  id: number;
  placeId: string;
  name: string;
  subName: string;
  photoUrl: null;
}

export type PlaceType = "TRAVEL_PLACE" | "CITY" | "THEME";

const placeId = ["place-trending", "city-trending", "place-theme"] as const;
export type PlaceId = (typeof placeId)[number];
export const isPlace = (id: any): id is PlaceId => placeId.includes(id);