import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../../components/ui/Button";
import { StackScreenProps } from "../../routes";
import { useEffect } from "react";
import { OnboardingViewModel } from "./OnboardingViewModel";

const Onboarding = {
    Onboarding1: ({ navigation }: StackScreenProps) => {
        const viewModel = new OnboardingViewModel();

        useEffect(() => {
            viewModel.isAlreadySeenOnBoarding().then((res) => res && navigation.navigate("onboarding3"));
        }, []);

        async function handleSubmit() {
            viewModel.setIsAlreadySeenOnBoarding().then(() => navigation.navigate("onboarding3"));
        }

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image style={styles.image} source={require("../../../../assets/onboarding/onboarding-1.png")} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Quick Delivery At Your Doorstep</Text>
                        <Text style={styles.subtitle}>Enjoy quick pick-up and delivery to your destination</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button.Secondary onPress={handleSubmit} title="Skip" size="sm" />
                        <Button.Primary onPress={() => navigation.navigate("onboarding2")} title="Next" size="sm" />
                    </View>
                </View>
            </SafeAreaView>
        );
    },
    Onboarding2: ({ navigation }: StackScreenProps) => {
        const viewModel = new OnboardingViewModel();

        useEffect(() => {
            viewModel.isAlreadySeenOnBoarding().then((res) => res && navigation.navigate("onboarding3"));
        }, []);

        async function handleSubmit() {
            viewModel.setIsAlreadySeenOnBoarding().then(() => navigation.navigate("onboarding3"));
        }

        return (
            <SafeAreaView style={styles.container}>
                <View style={[styles.contentContainer, { paddingTop: 70 }]}>
                    <Image style={styles.image} source={require("../../../../assets/onboarding/onboarding-2.png")} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Flexible Payment</Text>
                        <Text style={styles.subtitle}>
                            Different modes of payment either before and after delivery without stress
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button.Secondary onPress={handleSubmit} title="Skip" size="sm" />
                        <Button.Primary onPress={() => navigation.navigate("onboarding3")} title="Next" size="sm" />
                    </View>
                </View>
            </SafeAreaView>
        );
    },
    Onboarding3: ({ navigation }: StackScreenProps) => {
        const viewModel = new OnboardingViewModel();

        useEffect(() => {
            viewModel.setIsAlreadySeenOnBoarding();
        }, []);

        return (
            <SafeAreaView style={styles.container}>
                <View style={[styles.contentContainer, { paddingTop: 70 }]}>
                    <Image style={styles.image} source={require("../../../../assets/onboarding/onboarding-3.png")} />
                    <View style={[styles.textContainer, { marginBottom: 91, gap: 17 }]}>
                        <Text style={styles.title}>Real-time Tracking</Text>
                        <Text style={styles.subtitle}>
                            Track your packages/items from the comfort of your home till final destination
                        </Text>
                    </View>
                    <View style={[styles.buttonContainer, { flexDirection: "column", gap: 20 }]}>
                        <Button.Primary onPress={() => navigation.navigate("sigUp")} title="Sign Up" size="lg" />
                        <Text style={{ alignSelf: "center", color: "#A7A7A7" }}>
                            Already have an account?{" "}
                            <Text onPress={() => navigation.navigate("signIn")} style={{ color: "#0560FA" }}>
                                Sign in
                            </Text>
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 66,
        backgroundColor: "#fff",
    },
    contentContainer: {
        alignItems: "center",
    },
    image: {
        marginBottom: 48,
    },
    textContainer: {
        gap: 5,
        marginBottom: 87,
        paddingHorizontal: 30,
    },
    title: {
        color: "#0560FA",
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
        paddingHorizontal: 50,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        alignContent: "center",
    },
    buttonContainer: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 25,
    },
});

export default Onboarding;
