import { Pressable, Text } from "react-native";
import { Link } from "expo-router";

interface Props {
  href: string;
  text: string;
  textStyle: string;
}

export default function LinkButton({ href, text, textStyle }: Props) {
  return (
    <Link href={href} asChild>
      <Pressable>
        <Text tw={textStyle}>{text}</Text>
      </Pressable>
    </Link>
  );
}
