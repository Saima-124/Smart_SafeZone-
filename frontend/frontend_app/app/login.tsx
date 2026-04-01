import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { commonStyles } from "../styles/commonStyles";
import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = async () => {
    await WebBrowser.openBrowserAsync("https://accounts.google.com/signin/v2/identifier?service=github");
  };

  return (
    <View style={commonStyles.container}>
      {/* Logo */}
      <Ionicons name="shield-checkmark" size={50} color="#4CAF50" style={{ alignSelf: "center", marginBottom: 10 }} />

      <Text style={commonStyles.headerText}>Welcome Back</Text>
      <Text style={commonStyles.subText}>Sign in to your SafeZone account</Text>

      {/* Email/Phone */}
      <TextInput style={commonStyles.input} placeholder="Enter email or phone number" />

      {/* Password with eye toggle */}
      <View style={commonStyles.passwordContainer}>
        <TextInput
          style={commonStyles.passwordInput}
          placeholder="Enter password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={22} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={commonStyles.button}>
        <Text style={commonStyles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
      <Text style={commonStyles.linkSmall}>Forgot Password?</Text>

      {/* OR Divider */}
      <Text style={{ textAlign: "center", marginVertical: 10, color: "#777" }}>OR</Text>

      {/* Continue with Google */}
      <TouchableOpacity style={commonStyles.googleButton} onPress={handleGoogleLogin}>
        <Ionicons name="logo-google" size={22} color="#DB4437" style={{ marginRight: 8 }} />
        <Text style={commonStyles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <TouchableOpacity onPress={() => router.push("./signup")}>
        <Text style={commonStyles.linkText}>Don’t have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

