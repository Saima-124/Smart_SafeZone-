import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const DEFAULT_EMAIL = "saima@safezone.com";
const DEFAULT_PASSWORD = "saima1234";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSignIn = () => {
    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPassword = password.trim();

    if (!normalizedEmail || !normalizedPassword) {
      alert("Please enter both email and password.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);

      if (normalizedEmail === DEFAULT_EMAIL && normalizedPassword === DEFAULT_PASSWORD) {
        router.push("/page7");
      } else {
        alert("Invalid credentials! Use default email/password.");
      }
    }, 300);
  };

  const handleForgotPassword = () => {
    alert("Password reset is coming soon. Please contact support.");
  };

  const handleGoogleSignIn = () => {
    alert("Google sign-in is not configured in demo mode.");
  };

  return (
    <View style={styles.container}>
      <MaterialIcons name="security" size={64} color="#2e7d32" />
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to your SafeZone account</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter password"
          secureTextEntry={!passwordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <MaterialIcons
            name={passwordVisible ? "visibility" : "visibility-off"}
            size={24}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.signInButton, isSubmitting && styles.signInButtonDisabled]}
        onPress={handleSignIn}
        disabled={isSubmitting}
      >
        <Text style={styles.signInText}>{isSubmitting ? "Signing in..." : "Sign In"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
        <AntDesign name="google" size={20} color="red" />
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        {"Don\'t have an account? "}
        <Text style={styles.signupLink} onPress={() => router.push("/signup")}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", paddingHorizontal: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginTop: 10, color: "#000" },
  subtitle: { fontSize: 14, color: "#555", marginBottom: 20 },
  input: { width: "100%", borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, marginBottom: 15, fontSize: 16 },
  passwordContainer: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 12, marginBottom: 15, width: "100%" },
  passwordInput: { flex: 1, paddingVertical: 12, fontSize: 16 },
  signInButton: { backgroundColor: "#2e7d32", width: "100%", padding: 15, borderRadius: 8, alignItems: "center", marginBottom: 10 },
  signInText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  forgotPassword: { color: "#2e7d32", marginBottom: 20 },
  dividerContainer: { flexDirection: "row", alignItems: "center", marginVertical: 10, width: "100%" },
  divider: { flex: 1, height: 1, backgroundColor: "#ccc" },
  orText: { marginHorizontal: 10, color: "#555", fontWeight: "bold" },
  googleButton: { flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 12, width: "100%", justifyContent: "center", marginBottom: 20 },
  googleText: { marginLeft: 8, fontSize: 16, color: "#000" },
  signInButtonDisabled: { opacity: 0.6 },
  signupText: { fontSize: 14, color: "#555" },
  signupLink: { color: "#2e7d32", fontWeight: "bold" },
});