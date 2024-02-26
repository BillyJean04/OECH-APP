import { Image, Pressable, StyleSheet, Text, useColorScheme, View } from "react-native";
import { FC, useState } from "react";

interface ProfileInfoProps {
    image?: string;
    name: string;
    balance: string;
}
const ProfileInfo: FC<ProfileInfoProps> = ({ image, name, balance }) => {
    const [isHidden, setIsHidden] = useState(false);
    const colorScheme = useColorScheme();

    return (
        <View style={styles.contentContainer}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                <Image source={require("../../../assets/Profile.png")} />
                <View>
                    <Text style={{ color: `${colorScheme === "dark" ? "white" : "black"}` }}>Hello {name}</Text>
                    <Text style={{ color: `${colorScheme === "dark" ? "white" : "black"}` }}>
                        Current balance: <Text style={{ color: "#0560FA" }}>{isHidden ? "*********" : balance}</Text>
                    </Text>
                </View>
            </View>
            <Pressable onPress={() => setIsHidden(!isHidden)}>
                {isHidden ? (
                    <Image source={require("../../../assets/icons/eye.png")} />
                ) : (
                    <Image source={require("../../../assets/icons/eye-slash.png")} />
                )}
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {},
});

export default ProfileInfo;
