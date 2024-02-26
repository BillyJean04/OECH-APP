import { FC } from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

interface ProfileMenuItemProps {
    image: ImageSourcePropType;
    title: string;
    description: string;
}

const ProfileMenuItem: FC<ProfileMenuItemProps> = ({ image, title, description }) => {
    return (
        <View style={styles.contentContainer}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                }}
            >
                <Image source={image} />
                <View style={{ gap: 4 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold", color: "#3A3A3A" }}>{title}</Text>
                    <Text style={{ fontSize: 12, fontWeight: "300", color: "#A7A7A7" }}>{description}</Text>
                </View>
            </View>
            <Image source={require("../../../assets/icons/arrow.png")} />
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 13,
        elevation: 2,
        shadowColor: "#00000026",
    },
});

export default ProfileMenuItem;
