import { Image, Pressable, StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { useState } from "react";

interface InputProps extends TextInputProps {
    label: string;
    isProtect?: boolean;
    errors?: string;
}

const Input = {
    Primary: ({ label, isProtect = false, errors = "", ...props }: InputProps) => {
        const [isHidden, setIsHidden] = useState(false);
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{label}</Text>
                <View style={[styles.input, Boolean(errors) && { borderColor: "red" }]}>
                    <TextInput style={[Boolean(errors) && { color: "red" }]} {...props} secureTextEntry={isHidden} />
                    <Pressable onPress={() => setIsHidden(!isHidden)}>
                        {isProtect &&
                            (isHidden ? (
                                <Image source={require("../../../../assets/icons/eye.png")} />
                            ) : (
                                <Image source={require("../../../../assets/icons/eye-slash.png")} />
                            ))}
                    </Pressable>
                </View>
            </View>
        );
    },
    Secondary: ({ ...props }: TextInputProps) => {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput
                        {...props}
                        style={{ elevation: 2, shadowColor: "#00000026", paddingHorizontal: 15, paddingVertical: 15 }}
                    />
                </View>
            </View>
        );
    },
};

const styles = StyleSheet.create({
    container: {
        gap: 8,
    },
    label: {
        color: "#A7A7A7",
        fontSize: 14,
    },
    input: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#A7A7A7",
        color: "#A7A7A7",
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 4,
    },
});

export default Input;
