import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { StackScreenProps } from "../../routes";
import Title from "../../components/Title";
import { Formik } from "formik";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { Checkbox } from "expo-checkbox";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { SignInViewModel } from "./SignInViewModel";

const SigninSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});

const SignIn = ({ navigation }: StackScreenProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [savedPassword, setSavedPassword] = useState<string | null>("");

    const viewModel = new SignInViewModel();

    async function handleSubmit(email: string, password: string, rememberPassword: boolean) {
        setIsLoading(true);
        try {
            const res = await viewModel.signIn(email, password, rememberPassword);

            console.log(res);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            Alert.alert(String(error));
        }
    }

    useEffect(() => {
        viewModel.getExistedPassword().then((res) => setSavedPassword(res));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {isLoading && <ActivityIndicator />}
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Title title="Welcome Back" subtitle="Fill in your email and password to continue" />
                <Formik
                    validationSchema={SigninSchema}
                    initialValues={{
                        email: "",
                        password: "",
                        checkBox: false,
                    }}
                    onSubmit={(values) => handleSubmit(values.email, values.password, values.checkBox)}
                >
                    {({ handleChange, handleSubmit, values, isValid, dirty, setFieldValue, errors }) => (
                        <>
                            <View style={styles.inputContainer}>
                                <Input
                                    errors={errors.email}
                                    label="Email Address"
                                    onChangeText={handleChange("email")}
                                    value={values.email}
                                    placeholder="***********@mail.com"
                                />
                                <Input
                                    errors={errors.password}
                                    isProtect
                                    label="Password"
                                    onChangeText={handleChange("password")}
                                    value={savedPassword || values.password}
                                    placeholder="**********"
                                />
                            </View>
                            <View style={styles.checkboxContainer}>
                                <View style={{ flexDirection: "row", gap: 5 }}>
                                    <Checkbox
                                        value={values.checkBox}
                                        onValueChange={() => setFieldValue("checkBox", !values.checkBox)}
                                        color="#A7A7A7"
                                    />
                                    <Text style={{ color: "#A7A7A7" }}>Remember password</Text>
                                </View>

                                <Text style={{ color: "#0560FA", fontWeight: "bold" }}>Forgot Password?</Text>
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
                            >
                                Already have an account?
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
        paddingTop: 20,
        gap: 24,
    },
    checkboxContainer: {
        paddingTop: 17,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        paddingBottom: 180,
    },
});

export default SignIn;
