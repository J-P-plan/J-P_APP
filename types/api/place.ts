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

const placeId = ["place-trending", "city-trending", "place-theme"] as const;

export type PlaceId = (typeof placeId)[number];
export type PlaceType = "TRAVEL_PLACE" | "CITY" | "THEME";

export const isPlace = (id: any): id is PlaceId => placeId.includes(id);

export const placeType: Record<PlaceId, PlaceType> = {
  "place-trending": "TRAVEL_PLACE",
  "city-trending": "CITY",
  "place-theme": "THEME",
};
