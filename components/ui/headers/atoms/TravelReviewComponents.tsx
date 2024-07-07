import { Text, View } from "react-native";

export const Title = ({
  title,
  icon,
}: {
  title: string;
  icon?: React.ReactNode;
}) => {
  return (
    <View tw="flex-row items-center" style={{ gap: 3 }}>
      {icon}
      <Text tw="font-bold text-base text-gray-900">{title}</Text>
    </View>
  );
};
