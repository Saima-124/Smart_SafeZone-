import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Page7() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <MaterialIcons name="security" size={70} color="#2e7d32" />
                <Text style={styles.hello}>Hello, Saima</Text>
                <Text style={styles.welcome}>Welcome to Safety App</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/page8")}
            >
                <Text style={styles.buttonText}>Continue →</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#c8f0c8", justifyContent: "space-between", alignItems: "center", paddingVertical: 80, paddingHorizontal: 20 },
    inner: { flex: 1, justifyContent: "center", alignItems: "center" },
    hello: { fontSize: 26, fontWeight: "bold", color: "#000", marginTop: 20 },
    welcome: { fontSize: 16, color: "#333", marginTop: 8 },
    button: { backgroundColor: "#fff", paddingVertical: 16, paddingHorizontal: 60, borderRadius: 12, marginBottom: 20 },
    buttonText: { fontSize: 18, color: "#2e7d32", fontWeight: "600" },
});