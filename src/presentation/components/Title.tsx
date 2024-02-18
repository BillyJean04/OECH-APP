import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface TitleProps {
    title: string;
    subtitle: string;
}

const Title: FC<TitleProps> = ({ title, subtitle }) => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        gap: 8,
    },
    title: {
        color: "#3A3A3A",
        fontSize: 24,
        fontWeight: "500",
    },
    subtitle: {
        color: "#A7A7A7",
        fontSize: 14,
    },
});

export default Title;
