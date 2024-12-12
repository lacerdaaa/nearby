import { Pressable, Text, PressableProps } from "react-native";

import { s } from "./style";
import { categoriesIcons } from "@/utils/categories-icons";

type Props = PressableProps & {
    iconId: string,
    isSelected?: boolean,
    name: string,
}

export function Category({name, iconId, isSelected = false, ...rest}:Props) {
    const Icon = categoriesIcons[iconId]
     return (
        <Pressable style={[s.container]}>
            <Icon size={16}/>
            <Text style={[s.name]}>{name}</Text>
        </Pressable>
     )
}