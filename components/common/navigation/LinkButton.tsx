import { TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";

interface Props {
  href: string;
  text: string;
  textStyle: string;
}

export default function LinkButton({ href, text, textStyle }: Props) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity activeOpacity={1}>
        <Text tw={textStyle}>{text}</Text>
      </TouchableOpacity>
    </Link>
  );
}
