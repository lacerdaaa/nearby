import { View, Text } from "react-native";
import { IconProps, IconQrcode } from "@tabler/icons-react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

type Props = {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>
};

export default function Step({title, description, icon: Icon}: Props) {
  return (
    <View style={s.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}
      <View style={s.details}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
}
