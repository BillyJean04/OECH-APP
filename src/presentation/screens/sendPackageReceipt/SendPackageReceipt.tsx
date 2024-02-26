import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { ScreenSendPackageProps } from "../../routes";
import Button from "../../components/ui/Button";

const SendPackage = ({ route, navigation }: ScreenSendPackageProps) => {
    const {
        destinationOther,
        destinationState,
        destinationAddress,
        originOther,
        originState,
        originAddress,
        originPhoneNumber,
        destinationPhoneNumber,
        packageItems,
        worthOfItems,
        weightOfItem,
        trackingNumber,
    } = route.params;

    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 24, backgroundColor: "#fff" }}>
            <ScrollView>
                <Text style={{ color: "#0560FA", fontWeight: "500", fontSize: 16, paddingTop: 24 }}>
                    Package Information
                </Text>
                <View style={{ paddingTop: 8, gap: 4 }}>
                    <Text style={{ color: "#3A3A3A", fontSize: 12 }}>Origin details</Text>
                    <Text style={{ color: "#A7A7A7", fontSize: 12 }}>
                        {originAddress}, {originState}
                    </Text>
                    <Text style={{ color: "#A7A7A7", fontSize: 12 }}>{originPhoneNumber}</Text>
                </View>
                <View style={{ paddingTop: 8, gap: 4 }}>
                    <Text style={{ color: "#3A3A3A", fontSize: 12 }}>Destination details</Text>
                    <Text style={{ color: "#A7A7A7", fontSize: 12 }}>
                        {destinationAddress}, {destinationState}
                    </Text>
                    <Text style={{ color: "#A7A7A7", fontSize: 12 }}>{destinationPhoneNumber}</Text>
                </View>
                <View style={{ paddingTop: 8, paddingBottom: 37, gap: 8 }}>
                    <Text style={{ color: "#3A3A3A", fontSize: 12 }}>Other details</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "#A7A7A7", fontSize: 12 }}>Package Items</Text>
                        <Text style={{ color: "#EC8000", fontSize: 12 }}>{packageItems}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "#A7A7A7", fontSize: 12 }}>Weight of items</Text>
                        <Text style={{ color: "#EC8000", fontSize: 12 }}>{weightOfItem}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "#A7A7A7", fontSize: 12 }}>Worth of Items</Text>
                        <Text style={{ color: "#EC8000", fontSize: 12 }}>{worthOfItems}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "#A7A7A7", fontSize: 12 }}>Tracking Number</Text>
                        <Text style={{ color: "#EC8000", fontSize: 12 }}>{trackingNumber}</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 1, borderColor: "#A7A7A7" }} />
                <View style={{ paddingTop: 8, paddingBottom: 46, gap: 8 }}>
                    <Text style={{ color: "#0560FA", fontWeight: "500", fontSize: 16, paddingTop: 24 }}>Charges</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "#A7A7A7", fontSize: 12 }}>Delivery Charges</Text>
                        <Text style={{ color: "#EC8000", fontSize: 12 }}>{packageItems}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "#A7A7A7", fontSize: 12 }}>Instant delivery</Text>
                        <Text style={{ color: "#EC8000", fontSize: 12 }}>{weightOfItem}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "#A7A7A7", fontSize: 12 }}>Tax and Service Charges</Text>
                        <Text style={{ color: "#EC8000", fontSize: 12 }}>{worthOfItems}</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: "#A7A7A7" }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "#A7A7A7", fontSize: 12 }}>Package total</Text>
                        <Text style={{ color: "#EC8000", fontSize: 12 }}>{packageItems}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", gap: 24 }}>
                    <Button.Secondary onPress={() => navigation.goBack()} title="Edit package" size="sm" />
                    <Button.Primary title="Make payment" size="sm" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SendPackage;
