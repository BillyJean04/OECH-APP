import { Image, SafeAreaView, Text, View } from "react-native";

const Notification = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingTop: 120, alignItems: "center", gap: 8 }}>
                <Image source={require("../../../../assets/notification.png")} />
                <Text style={{ fontWeight: "500", fontSize: 16 }}>You have no notifications</Text>
            </View>
        </SafeAreaView>
    );
};

export default Notification;
