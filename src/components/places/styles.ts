import { StyleSheet } from "react-native";
import { colors, fontFamily} from '@/styles/theme'
import BottomSheet from "@gorhom/bottom-sheet";

export const s = StyleSheet.create({
    container: {
        backgroundColor: colors.gray[100],

    },
    content: {
        gap: 12,
        padding: 14,
        paddingBottom: 100,
    },
    indicator: {
        width: 80,
        height: 4,
        backgroundColor: colors.gray[300],
    },
    title: {
        color: colors.gray[600],
        fontSize: 18,
        fontFamily: fontFamily.bold,
        marginBottom: 16,
    },
})