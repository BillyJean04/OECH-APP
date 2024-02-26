import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "../../components/Title";
import { Formik } from "formik";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import * as Yup from "yup";
import { ScreensWithEmailProps } from "../../routes";
import { useState } from "react";
import { ChangePasswordViewModel } from "./ChangePasswordViewModel";

const SigninSchema = Yup.object().shape({
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
});
const ChangePassword = ({ navigation, route }: ScreensWithEmailProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const { email } = route.params;
    const viewModel = new ChangePasswordViewModel();
    async function handleSubmit(password: string, confirmPassword: string) {
        setIsLoading(true);
        try {
            if (password === confirmPassword) {
                viewModel.changePassword(email, password).then(() => navigation.navigate("home"));
            }

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
                <Title title="New Password" subtitle="Enter new password" />
                <Formik
                    validationSchema={SigninSchema}
                    initialValues={{
                        password: "",
                        confirmPassword: "",
                    }}
                    onSubmit={(values) => handleSubmit(values.password, values.confirmPassword)}
                >
                    {({ handleChange, handleSubmit, isValid, values, dirty, errors }) => (
                        <>
                            <View style={styles.inputContainer}>
                                <Input.Primary
                                    errors={errors.password}
                                    isProtect
                                    label="Password"
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    placeholder="**********"
                                />
                                <Input.Primary
                                    errors={errors.confirmPassword}
                                    isProtect
                                    label="Confirm Password"
                                    value={values.confirmPassword}
                                    onChangeText={handleChange("confirmPassword")}
                                    placeholder="**********"
                                />
                            </View>
                            <Button.Primary
                                disabled={!isValid || !dirty}
                                onPress={() => handleSubmit()}
                                title="Log in"
                                size="lg"
                            />
                            <Text
                                style={{
                                    alignSelf: "center",
                                    color: "#A7A7A7",
                                    paddingVertical: 20,
                                }}
                            ></Text>
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

export default ChangePassword;
