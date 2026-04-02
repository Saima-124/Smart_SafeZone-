// LoginScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; 
import { AntDesign } from "@expo/vector-icons"; 
import { useRouter } from "expo-router";   // Expo Router navigation

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <MaterialIcons name="security" size={64} color="#2e7d32" />
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to your SafeZone account</Text>

      <TextInput style={styles.input} placeholder="Enter email or phone number" />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter password"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <MaterialIcons
            name={passwordVisible ? "visibility" : "visibility-off"}
            size={24}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <AntDesign name="google" size={20} color="red" />
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Navigate to SignUp */}
      <Text style={styles.signupText}>
        Don’t have an account?{" "}
        <Text style={styles.signupLink} onPress={() => router.push("/signup")}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

// (styles same as before)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 15,
    width: "100%",
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: "#2e7d32",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#2e7d32",
    marginBottom: 20,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    color: "#555",
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    width: "100%",
    justifyContent: "center",
    marginBottom: 20,
  },
  googleText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#000",
  },
  signupText: {
    fontSize: 14,
    color: "#555",
  },
  signupLink: {
    color: "#2e7d32",
    fontWeight: "bold",
  },
});
