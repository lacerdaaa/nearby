import { View, Text } from "react-native";
import { IconProps, IconQrcode } from "@tabler/icons-react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

type Props = {
  title: string;
  description: string;
};

export default function Step(props: Props) {
  return (
    <View style={s.container}>
      <IconQrcode size={32} color={colors.red.base} />
      <View style={s.details}>
        <Text style={s.title}>{props.title}</Text>
        <Text style={s.description}>{props.description}</Text>
      </View>
    </View>
  );
}
