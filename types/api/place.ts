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

export const isPlace = (id: any): id is PlaceId => placeId.includes(id);

export type PlaceParams = "page" | "placeType" | "searchString" | "elementCnt";

export enum PlaceType {
  TRAVEL_PLACE = "TRAVEL_PLACE",
  CITY = "CITY",
  THEME = "THEME",
}

export const placeType: Record<PlaceId, keyof typeof PlaceType> = {
  "place-trending": "TRAVEL_PLACE",
  "city-trending": "CITY",
  "place-theme": "THEME",
};
