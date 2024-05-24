export type HomeSectionId =
  | "place-trending"
  | "city-trending"
  | "place-theme"
  | "travel-log"
  | "review";

export type HomeListScreenId =
  | "place-trending"
  | "city-trending"
  | "place-theme"
  | "place-recommend";

export interface HomeSectionItemProps {
  id: HomeSectionId;
}
