import { PlaceId } from "@/lib/types/api/place";

export type HomeSectionId = PlaceId | "travel-log" | "review";

export type HomeListScreenId = PlaceId | "place-recommend";

export interface HomeSectionItemProps {
  id: HomeSectionId;
}
