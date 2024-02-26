import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "../../components/Title";
import { Formik } from "formik";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import * as Yup from "yup";
import { ScreensWithEmailProps } from "../../routes";
import { useState } from "react";
import { OtpVerificationViewModel } from "./OtpVerificationViewModel";

const SigninSchema = Yup.object().shape({
    code: Yup.string().min(6).required(),
});
const OtpVerification = ({ navigation, route }: ScreensWithEmailProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const { email } = route.params;
    const viewModel = new OtpVerificationViewModel();
    async function handleSubmit(email: string, code: string) {
        setIsLoading(true);
        try {
            viewModel.otpVerification(email, code).then(() => navigation.navigate("changePassword", { email }));
            setIsLoading(false);
        } catch (error) {
            Alert.alert(String(error));
            setIsLoading(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            {isLoading && <ActivityIndicator />}
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Title title="OTP Verification" subtitle="Enter the 6 digit numbers sent to your email" />
                <Formik
                    validationSchema={SigninSchema}
                    initialValues={{
                        code: "",
                    }}
                    onSubmit={(values) => handleSubmit(email, values.code)}
                >
                    {({ handleChange, handleSubmit, isValid, values, errors }) => (
                        <>
                            <View style={styles.inputContainer}>
                                <Input.Primary
                                    errors={errors.code}
                                    label=""
                                    onChangeText={handleChange("code")}
                                    value={values.code}
                                />
                            </View>
                            <Button.Primary
                                disabled={!isValid}
                                onPress={() => handleSubmit()}
                                title="Set New Password"
                                size="lg"
                            />
                            <Text
                                style={{
                                    alignSelf: "center",
                                    color: "#A7A7A7",
                                    paddingVertical: 20,
                                }}
                            >
                                If you didn’t receive code, resend after 1:00
                            </Text>
                        </>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 24,
        paddingTop: 130,
    },
    scrollView: {
        // flex: 1,
        // flexDirection: "column",
        // justifyContent: "center",
    },
    inputContainer: {
        paddingTop: 56,
        paddingBottom: 56,
        gap: 24,
    },
});

export default OtpVerification;
