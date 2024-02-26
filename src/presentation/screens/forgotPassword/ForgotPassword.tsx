import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "../../components/Title";
import { Formik } from "formik";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import * as Yup from "yup";
import { StackScreenProps } from "../../routes";
import { useState } from "react";
import { ForgotPasswordViewModel } from "./ForgotPasswordViewModel";
import { GlobalStyles } from "../../styles/globalStyles";

const SigninSchema = Yup.object().shape({
    email: Yup.string().email().required(),
});
const ForgotPassword = ({ navigation }: StackScreenProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const viewModel = new ForgotPasswordViewModel();

    async function handleSubmit(email: string) {
        setIsLoading(true);
        try {
            await viewModel.sendOtpCode(email).then(() => navigation.navigate("otpVerification", { email: email }));
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
                <Title title="Forgot Password" subtitle="Enter yoафur email address" />
                <Formik
                    validationSchema={SigninSchema}
                    initialValues={{
                        email: "",
                    }}
                    onSubmit={(values) => handleSubmit(values.email)}
                >
                    {({ handleChange, handleSubmit, isValid, values, errors }) => (
                        <>
                            <View style={styles.inputContainer}>
                                <Input.Primary
                                    errors={errors.email}
                                    label="Email Address"
                                    onChangeText={handleChange("email")}
                                    value={values.email}
                                    placeholder="***********@mail.com"
                                />
                            </View>
                            <Button.Primary
                                disabled={!isValid}
                                onPress={() => handleSubmit()}
                                title="Send OTP"
                                size="lg"
                            />
                            <Text
                                style={[
                                    {
                                        alignSelf: "center",
                                        color: "#A7A7A7",
                                        paddingVertical: 20,
                                    },
                                    GlobalStyles.RobotoRegular,
                                ]}
                            >
                                Remember password? Back to
                                <Text style={{ color: "#0560FA" }} onPress={() => navigation.navigate("signIn")}>
                                    Sign in
                                </Text>
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

export default ForgotPassword;
