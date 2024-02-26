import {
    Appearance,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    useColorScheme,
    View,
} from "react-native";
import ProfileInfo from "../../components/ProfileInfo";
import { useState } from "react";
import ProfileMenuItem from "../../components/ProfileMenuItem";
import { StackScreenProps } from "../../routes";
import setColorScheme = Appearance.setColorScheme;

const items = [
    {
        id: 1,
        title: "Edit Profile",
        description: "Name, phone no, address, email ...",
        image: require("../../../../assets/icons/menu-profile.png"),
        link: "",
    },
    {
        id: 2,
        title: "Statements & Reports",
        description: "Download transaction details, orders, deliveries",
        image: require("../../../../assets/icons/menu-certificate.png"),
        link: "",
    },
    {
        id: 3,
        title: "Notification Settings",
        description: "mute, unmute, set location & tracking setting",
        image: require("../../../../assets/icons/menu-notification.png"),
        link: "notification",
    },
    {
        id: 4,
        title: "Card & Bank account settings",
        description: "change cards, delete card details",
        image: require("../../../../assets/icons/menu-wallet.png"),
        link: "addPaymentMethod",
    },
    {
        id: 5,
        title: "Referrals",
        description: "check no of friends and earn",
        image: require("../../../../assets/icons/menu-person.png"),
        link: "",
    },
    {
        id: 6,
        title: "About Us",
        description: "know more about us, terms and conditions",
        image: require("../../../../assets/icons/menu-map.png"),
        link: "",
    },
    {
        id: 7,
        title: "Log Out",
        description: "",
        image: require("../../../../assets/icons/menu-logout.png"),
        link: "",
    },
];

const Profile = ({ navigation }: StackScreenProps) => {
    const colorScheme = useColorScheme();
    const [isDark, setIsDark] = useState(colorScheme);

    return (
        <SafeAreaView style={styles.contentContainer}>
            <ScrollView style={styles.scrollView}>
                <ProfileInfo name="Ken" balance="N10,712:00" />
                <View
                    style={{
                        marginVertical: 20,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "500",
                            fontSize: 16,
                            color: `${colorScheme === "dark" ? "#fff" : "#000"}`,
                        }}
                    >
                        Enable dark Mode
                    </Text>
                    <Switch
                        trackColor={{ false: "#D7D7D7", true: "#0560FA" }}
                        thumbColor="#ffff"
                        value={isDark === "light" ? true : false}
                        onChange={() => {
                            setIsDark(isDark === "light" ? "dark" : "light");
                            setColorScheme(isDark);
                        }}
                    />
                </View>
                <View style={{ gap: 21 }}>
                    {items.map(({ id, description, image, title, link }) => (
                        //@ts-ignore
                        <Pressable onPress={() => navigation.navigate(link)}>
                            <ProfileMenuItem key={id} title={title} description={description} image={image} />
                        </Pressable>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingHorizontal: 24,
    },
    scrollView: {},
});

export default Profile;
