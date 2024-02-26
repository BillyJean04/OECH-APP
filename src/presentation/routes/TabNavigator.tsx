import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import { Image, useColorScheme, View } from "react-native";
import Profile from "../screens/profile/Profile";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    const colorScheme = useColorScheme();
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: `${colorScheme === "dark" ? "#000D1D" : "#ffff"}`,
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    if (route.name === "Home") {
                        return focused ? (
                            <View>
                                <Image source={require("../../../assets/tabsIcons/Home-outlined.png")} />
                            </View>
                        ) : (
                            <Image source={require("../../../assets/tabsIcons/Home.png")} />
                        );
                    }
                    if (route.name === "Wallet") {
                        return focused ? (
                            <View>
                                <Image source={require("../../../assets/tabsIcons/Home-outlined.png")} />
                            </View>
                        ) : (
                            <Image source={require("../../../assets/tabsIcons/Wallet.png")} />
                        );
                    }
                    if (route.name === "Track") {
                        return focused ? (
                            <View>
                                <Image source={require("../../../assets/tabsIcons/Home-outlined.png")} />
                            </View>
                        ) : (
                            <Image source={require("../../../assets/tabsIcons/Track.png")} />
                        );
                    }
                    if (route.name === "Profile") {
                        return focused ? (
                            <View>
                                <Image source={require("../../../assets/tabsIcons/Home-outlined.png")} />
                            </View>
                        ) : (
                            <Image source={require("../../../assets/tabsIcons/Profile.png")} />
                        );
                    }
                },
                tabBarStyle: {
                    backgroundColor: `${colorScheme === "dark" ? "#000D1D" : "#ffff"}`,
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Wallet" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Track" component={Home} options={{ headerShown: false }} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: "Profile",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: `${colorScheme === "dark" ? "#001B3B" : "#fff"}`,
                    },
                    headerTitleStyle: {
                        color: `${colorScheme === "dark" ? "#A7A7A7" : "#A7A7A7"}`,
                    },
                }}
            />
        </Tab.Navigator>
    );
}
