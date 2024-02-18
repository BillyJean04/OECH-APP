import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./presentation/routes";

function App() {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
}

export default registerRootComponent(App);
