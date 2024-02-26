import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import Input from "../../components/ui/Input";
import * as Yup from "yup";
import { Formik } from "formik";
import { StackScreenProps } from "../../routes";
import { SendPackageViewModel } from "./SendPackageViewModel";

const SendPackageSchema = Yup.object().shape({
    originAddress: Yup.string().required(),
    originState: Yup.string().required(),
    originPhoneNumber: Yup.string().required(),
    originOther: Yup.string(),
    destinationAddress: Yup.string().required(),
    destinationState: Yup.string().required(),
    destinationPhoneNumber: Yup.string().required(),
    destinationOther: Yup.string(),
    packageItems: Yup.string().required(),
    weightOfItem: Yup.string().required(),
    worthOfItems: Yup.string().required(),
});

const SendPackage = ({ navigation }: StackScreenProps) => {
    const viewModel = new SendPackageViewModel();

    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 24, backgroundColor: "#fff" }}>
            <ScrollView>
                <Formik
                    validationSchema={SendPackageSchema}
                    initialValues={{
                        originAddress: "",
                        originState: "",
                        originPhoneNumber: "",
                        originOther: "",
                        destinationAddress: "",
                        destinationState: "",
                        destinationPhoneNumber: "",
                        destinationOther: "",
                        packageItems: "",
                        weightOfItem: "",
                        worthOfItems: "",
                    }}
                    onSubmit={(values) => {
                        navigation.navigate("sendPackageReceipt", {
                            ...values,
                            trackingNumber: viewModel.generateTrackingAddress(),
                        });
                    }}
                >
                    {({ handleChange, values, errors, handleSubmit }) => (
                        <>
                            <View style={{ paddingTop: 43 }}>
                                <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                                    <Image source={require("../../../../assets/icons/original-details.png")} />
                                    <Text style={{ fontSize: 14, fontWeight: "500" }}>Origin Details</Text>
                                </View>
                                <Input.Secondary
                                    value={values.originAddress}
                                    onChangeText={handleChange("originAddress")}
                                    placeholder="Address"
                                />
                                <Input.Secondary
                                    value={values.originState}
                                    onChangeText={handleChange("originState")}
                                    placeholder="State,Country"
                                />
                                <Input.Secondary
                                    value={values.originPhoneNumber}
                                    onChangeText={handleChange("originPhoneNumber")}
                                    placeholder="Phone number"
                                />
                                <Input.Secondary
                                    value={values.originOther}
                                    onChangeText={handleChange("originOther")}
                                    placeholder="Others"
                                />
                            </View>
                            <View style={{ paddingTop: 39 }}>
                                <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                                    <Image source={require("../../../../assets/icons/destination-details.png")} />
                                    <Text style={{ fontSize: 14, fontWeight: "500" }}>Destination Details</Text>
                                </View>
                                <Input.Secondary
                                    value={values.destinationAddress}
                                    onChangeText={handleChange("destinationAddress")}
                                    placeholder="Address"
                                />
                                <Input.Secondary
                                    value={values.destinationState}
                                    onChangeText={handleChange("destinationState")}
                                    placeholder="State,Country"
                                />
                                <Input.Secondary
                                    value={values.destinationPhoneNumber}
                                    onChangeText={handleChange("destinationPhoneNumber")}
                                    placeholder="Phone number"
                                />
                                <Input.Secondary
                                    value={values.destinationOther}
                                    onChangeText={handleChange("destinationOther")}
                                    placeholder="Others"
                                />
                            </View>
                            <View>
                                <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                                    <Text style={{ fontSize: 14, fontWeight: "500" }}>Package Details</Text>
                                </View>
                                <Input.Secondary
                                    value={values.packageItems}
                                    onChangeText={handleChange("packageItems")}
                                    placeholder="Package items"
                                />
                                <Input.Secondary
                                    value={values.weightOfItem}
                                    onChangeText={handleChange("weightOfItem")}
                                    placeholder="Weight of item(kg)"
                                />
                                <Input.Secondary
                                    value={values.worthOfItems}
                                    onChangeText={handleChange("worthOfItems")}
                                    placeholder="Worth of Items"
                                />
                            </View>
                            <View style={{ paddingTop: 39, paddingBottom: 5 }}>
                                <View style={{ flexDirection: "row", gap: 5, alignItems: "center", marginBottom: 15 }}>
                                    <Text style={{ fontSize: 14, fontWeight: "500" }}>Select delivery type</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Pressable onPress={() => handleSubmit()}>
                                        <View
                                            style={{
                                                alignItems: "center",
                                                backgroundColor: "#0560FA",
                                                paddingVertical: 12,
                                                paddingHorizontal: 32,
                                                gap: 10,
                                                borderRadius: 8,
                                            }}
                                        >
                                            <Image source={require("../../../../assets/icons/clock.png")} />
                                            <Text style={{ color: "#fff", fontWeight: "500", fontSize: 14 }}>
                                                Instant delivery
                                            </Text>
                                        </View>
                                    </Pressable>
                                    <Pressable>
                                        <View
                                            style={{
                                                alignItems: "center",
                                                shadowColor: "#A7A7A7",
                                                paddingVertical: 12,
                                                paddingHorizontal: 32,
                                                gap: 10,
                                                borderRadius: 8,
                                            }}
                                        >
                                            <Image source={require("../../../../assets/icons/calendar.png")} />
                                            <Text style={{ color: "#A7A7A7", fontWeight: "500", fontSize: 14 }}>
                                                Scheduled delivery
                                            </Text>
                                        </View>
                                    </Pressable>
                                </View>
                            </View>
                        </>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SendPackage;
