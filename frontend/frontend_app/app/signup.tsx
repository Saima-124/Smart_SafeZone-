import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { commonStyles } from "../styles/commonStyles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={commonStyles.container}>
      {/* Logo */}
      <Ionicons
        name="shield-checkmark"
        size={50}
        color="#4CAF50"
        style={{ alignSelf: "center", marginBottom: 10 }}
      />

      {/* Title */}
      <Text style={commonStyles.headerText}>Create Account</Text>
      <Text style={commonStyles.subText}>Join SafeZone for better safety</Text>

      {/* Full Name */}
      <TextInput style={commonStyles.input} placeholder="Enter your full name" />

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
          <Ionicons
            name={showPassword ? "eye-outline" : "eye-off-outline"}
            size={22}
            color="#555"
          />
        </TouchableOpacity>
      </View>

      {/* User Type */}
      <View style={commonStyles.userTypeContainer}>
        <TouchableOpacity style={commonStyles.userTypeSelected}>
          <Ionicons
            name="school-outline"
            size={20}
            color="#4CAF50"
            style={{ marginRight: 6 }}
          />
          <Text>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity style={commonStyles.userTypeUnselected}>
          <Ionicons
            name="people-outline"
            size={20}
            color="#333"
            style={{ marginRight: 6 }}
          />
          <Text>Guardian</Text>
        </TouchableOpacity>
      </View>

      {/* Terms Checkbox */}
      <View style={commonStyles.checkboxContainer}>
        <Ionicons
          name="checkbox-outline"
          size={20}
          color="#4CAF50"
          style={{ marginRight: 6 }}
        />
        <Text>I agree to the Terms of Service and Privacy Policy</Text>
      </View>

      {/* Create Account Button */}
      <TouchableOpacity style={commonStyles.button}>
        <Text style={commonStyles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Already have account */}
      <TouchableOpacity onPress={() => router.push("./login")}>
        <Text style={commonStyles.linkText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
