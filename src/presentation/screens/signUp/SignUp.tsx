import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Title from "../../components/Title";
import Input from "../../components/ui/Input";
import { Formik } from "formik";
import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import Button from "../../components/ui/Button";
import * as Yup from "yup";
import { SignUpViewModel } from "./SignUpViewModel";
import { StackScreenProps } from "../../routes";

const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
    emailAddress: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().required("Required"),
    checkBox: Yup.boolean().required().isTrue(),
});

const SignUp = ({ navigation }: StackScreenProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const viewModel = new SignUpViewModel();
    async function handleSubmit(
        fullName: string,
        phoneNumber: string,
        emailAddress: string,
        password: string,
        confirmPassword: string,
    ) {
        if (password === confirmPassword) {
            setIsLoading(true);
            try {
                await viewModel
                    .signUp(fullName, phoneNumber, emailAddress, password)
                    .then(() => navigation.navigate("signIn"));
            } catch (error) {
                Alert.alert(String(error));
                setIsLoading(false);
            }
            setIsLoading(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            {isLoading && <ActivityIndicator />}
            <ScrollView style={styles.scrollView}>
                <Title title="Create an account" subtitle="Complete the sign up process to get started" />
                <Formik
                    initialValues={{
                        fullName: "",
                        phoneNumber: "",
                        emailAddress: "",
                        password: "",
                        confirmPassword: "",
                        checkBox: false,
                    }}
                    onSubmit={(values) =>
                        handleSubmit(
                            values.fullName,
                            values.phoneNumber,
                            values.emailAddress,
                            values.password,
                            values.confirmPassword,
                        )
                    }
                    validationSchema={SignupSchema}
                >
                    {({ handleChange, handleSubmit, values, dirty, errors, setFieldValue, isValid }) => {
                        return (
                            <>
                                <View style={styles.inputContainer}>
                                    <Input.Primary
                                        errors={errors.fullName}
                                        label="Full Name"
                                        value={values.fullName}
                                        onChangeText={handleChange("fullName")}
                                        placeholder="Ivanov Ivan"
                                    />
                                    <Input.Primary
                                        errors={errors.phoneNumber}
                                        label="Phone Number"
                                        value={values.phoneNumber}
                                        onChangeText={handleChange("phoneNumber")}
                                        placeholder="+7(999)999-99-99"
                                    />
                                    <Input.Primary
                                        errors={errors.emailAddress}
                                        label="Email Address"
                                        value={values.emailAddress}
                                        onChangeText={handleChange("emailAddress")}
                                        placeholder="***********@mail.com"
                                    />
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
                                <View style={styles.checkboxContainer}>
                                    <Checkbox
                                        value={values.checkBox}
                                        onValueChange={() => setFieldValue("checkBox", !values.checkBox)}
                                        color="#006CEC"
                                    />
                                    <Text style={{ color: "#A7A7A7" }}>
                                        By ticking this box, you agree to our
                                        <Text style={{ color: "#EBBC2E" }}>
                                            Terms and conditions and private policy
                                        </Text>
                                    </Text>
                                </View>
                                <Button.Primary
                                    onPress={() => handleSubmit()}
                                    title="Sign Up"
                                    size="lg"
                                    disabled={!isValid || !dirty}
                                />
                                <Text
                                    style={{
                                        alignSelf: "center",
                                        color: "#A7A7A7",
                                        paddingVertical: 20,
                                    }}
                                >
                                    Already have an account?
                                    <Text style={{ color: "#0560FA" }} onPress={() => navigation.navigate("signIn")}>
                                        Sign in
                                    </Text>
                                </Text>
                            </>
                        );
                    }}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 66,
        backgroundColor: "#fff",
        paddingHorizontal: 24,
    },
    scrollView: {},
    inputContainer: {
        gap: 24,
        paddingTop: 33,
    },
    checkboxContainer: {
        paddingTop: 37,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        paddingBottom: 64,
    },
});

export default SignUp;
