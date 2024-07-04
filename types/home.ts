import { PlaceId } from "./api/place";

export type HomeSectionId = PlaceId | "travel-log" | "review";

export type HomeListScreenId = PlaceId | "place-recommend";

export interface HomeSectionItemProps {
  id: HomeSectionId;
}
