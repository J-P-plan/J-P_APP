export type HomeSectionId =
  | "place-trending"
  | "city-trending"
  | "place-theme"
  | "travel-log"
  | "review";

export interface HomeSectionItemProps {
  id: HomeSectionId;
}
