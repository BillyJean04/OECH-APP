import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding/Onboarding";
import SignUp from "../screens/signUp/SignUp";
import SignIn from "../screens/signIn/SignIn";

type RootStackParamsList = {
    onboarding1: undefined;
    onboarding2: undefined;
    onboarding3: undefined;
    sigUp: undefined;
    signIn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export type StackScreenProps = NativeStackScreenProps<RootStackParamsList>;

const Routes = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="onboarding1"
        >
            <Stack.Screen name="onboarding1" component={Onboarding.Onboarding1} />
            <Stack.Screen name="onboarding2" component={Onboarding.Onboarding2} />
            <Stack.Screen name="onboarding3" component={Onboarding.Onboarding3} />
            <Stack.Screen name="sigUp" component={SignUp} />
            <Stack.Screen name="signIn" component={SignIn} />
        </Stack.Navigator>
    );
};

export default Routes;
