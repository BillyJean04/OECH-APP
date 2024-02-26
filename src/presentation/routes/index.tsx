import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import Onboarding from "../screens/onboarding/Onboarding";
import SignUp from "../screens/signUp/SignUp";
import SignIn from "../screens/signIn/SignIn";
import ForgotPassword from "../screens/forgotPassword/ForgotPassword";
import otpVerification from "../screens/otpVerification/OtpVerification";
import changePassword from "../screens/changePassword/ChangePassword";
import { TabNavigator } from "./TabNavigator";
import addPaymentMethod from "../screens/addPaymentMethod/AddPaymentMethod";
import Notification from "../screens/notification/Notification";
import sendPackage from "../screens/sendPackage/SendPackage";
import sendPackageReceipt from "../screens/sendPackageReceipt/SendPackageReceipt";

type RootStackParamsList = {
    onboarding1: undefined;
    onboarding2: undefined;
    onboarding3: undefined;
    sigUp: undefined;
    signIn: undefined;
    forgotPassword: undefined;
    otpVerification: { email: string };
    changePassword: { email: string };
    home: undefined;
    addPaymentMethod: undefined;
    notification: undefined;
    sendPackage: undefined;
    sendPackageReceipt: {
        originAddress: string;
        originState: string;
        originPhoneNumber: string;
        originOther: string;
        destinationAddress: string;
        destinationState: string;
        destinationPhoneNumber: string;
        destinationOther: string;
        packageItems: string;
        weightOfItem: string;
        worthOfItems: string;
        trackingNumber: string;
    };
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export type StackScreenProps = NativeStackScreenProps<RootStackParamsList>;

export type ScreensWithEmailProps = NativeStackScreenProps<RootStackParamsList, "otpVerification" | "changePassword">;
export type ScreenSendPackageProps = NativeStackScreenProps<RootStackParamsList, "sendPackageReceipt">;
const Routes = () => {
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="forgotPassword"
            >
                <Stack.Screen name="onboarding1" component={Onboarding.Onboarding1} />
                <Stack.Screen name="onboarding2" component={Onboarding.Onboarding2} />
                <Stack.Screen name="onboarding3" component={Onboarding.Onboarding3} />
                <Stack.Screen name="sigUp" component={SignUp} />
                <Stack.Screen name="signIn" component={SignIn} />
                <Stack.Screen name="forgotPassword" component={ForgotPassword} />
                <Stack.Screen name="otpVerification" component={otpVerification} />
                <Stack.Screen name="changePassword" component={changePassword} />
                <Stack.Screen name="home" component={TabNavigator} />
                <Stack.Screen
                    options={{ headerShown: true, title: "Add Payment method", headerTitleAlign: "center" }}
                    name="addPaymentMethod"
                    component={addPaymentMethod}
                />
                <Stack.Screen
                    options={{ headerShown: true, title: "Notification", headerTitleAlign: "center" }}
                    name="notification"
                    component={Notification}
                />
                <Stack.Screen
                    options={{ headerShown: true, title: "Send a package", headerTitleAlign: "center" }}
                    name="sendPackage"
                    component={sendPackage}
                />
                <Stack.Screen
                    options={{ headerShown: true, title: "Send a package", headerTitleAlign: "center" }}
                    name="sendPackageReceipt"
                    component={sendPackageReceipt}
                />
            </Stack.Navigator>
        </>
    );
};

export default Routes;
