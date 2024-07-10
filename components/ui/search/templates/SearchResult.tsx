import { ScrollView } from "react-native";
import type { SearchResult } from "@/lib/types/api/search";

interface Props {
  results: SearchResult[];
}

export default function SearchResult({ results }: Props) {
  return <ScrollView></ScrollView>;
}
