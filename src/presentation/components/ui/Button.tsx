import {ButtonProps, Pressable, TouchableOpacity, Text, StyleSheet} from "react-native";

interface CustomButtonProps extends ButtonProps {
    title: string,
    size: "sm" | "lg",
}

const Button = {
    Primary: ({title, size, ...props}: CustomButtonProps) => {
        switch (size) {
            case "sm": return (
                <Pressable>
                    <TouchableOpacity style={[styles.base, styles.primary, props.disabled && styles.disabled]} {...props}>
                            <Text style={styles.primaryText}>
                                {title}
                            </Text>
                    </TouchableOpacity>
                </Pressable>
            )
            case "lg": return (
                <Pressable>
                    <TouchableOpacity style={[styles.base, styles.primaryLarge, props.disabled && styles.disabled]} {...props}>
                        <Text style={styles.primaryText}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                </Pressable>
            )
        }
    },
    Secondary: ({title, size, ...props}: CustomButtonProps) => {
        switch (size) {
            case "sm": return (
                <Pressable>
                    <TouchableOpacity style={[styles.base, styles.secondary, props.disabled && styles.disabled]} {...props}>
                        <Text style={styles.secondaryText}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                </Pressable>
            )
            case "lg": return (
                <Pressable>
                    <TouchableOpacity style={[styles.base, styles.secondaryLarge, props.disabled && styles.disabled]} {...props}>
                        <Text style={styles.secondaryText}>
                            {title}
                        </Text>
                    </TouchableOpacity>
                </Pressable>
            )
        }
    }
};

const styles = StyleSheet.create({
    base: {
        borderRadius: 5.69,
        paddingHorizontal: 37,
        paddingVertical: 17,
    },
    primary: {
        backgroundColor: "#0560FA",
    },
    primaryLarge: {
        minWidth: "100%",
        paddingVertical: 14,
        backgroundColor: "#0560FA",
    },
    primaryText: {
        color: "#ffffff",
        fontWeight: "bold",
        alignSelf: "center",
    },
    secondary: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#0560FA",
    },
    secondaryLarge: {
        minWidth: "100%",
    },
    secondaryText: {
        color: "#0560FA",
        fontWeight: "bold",
        alignSelf: "center",
    },
    disabled: {
        backgroundColor: "#A7A7A7"
    }
})

export default Button;