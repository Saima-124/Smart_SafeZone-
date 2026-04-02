// SignUpScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; 
import { useRouter } from "expo-router";

export default function SignUpScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userType, setUserType] = useState("Student");
  const [agreed, setAgreed] = useState(false);   // <-- checkbox state
  const router = useRouter();

  return (
    <View style={styles.container}>
      <MaterialIcons name="security" size={64} color="#2e7d32" />
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join SafeZone for better safety</Text>

      <TextInput style={styles.input} placeholder="Enter your full name" />
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

      {/* User Type Selection */}
      <View style={styles.userTypeContainer}>
        {["Student", "Guardian"].map(type => (
          <TouchableOpacity
            key={type}
            style={[
              styles.userTypeButton,
              userType === type && styles.userTypeSelected
            ]}
            onPress={() => setUserType(type)}
          >
            <Text style={styles.userTypeText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Terms Checkbox */}
      <TouchableOpacity 
        style={styles.checkboxContainer} 
        onPress={() => setAgreed(!agreed)}
      >
        <MaterialIcons 
          name={agreed ? "check-box" : "check-box-outline-blank"} 
          size={20} 
          color={agreed ? "#2e7d32" : "#555"} 
        />
        <Text style={styles.checkboxText}>
          I agree to the Terms of Service and Privacy Policy
        </Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity 
        style={[styles.signInButton, !agreed && { opacity: 0.5 }]} 
        disabled={!agreed}   // disable until checked
      >
        <Text style={styles.signInText}>Create Account</Text>
      </TouchableOpacity>

      {/* Navigate back to Login */}
      <Text style={styles.signupText}>
        Already have an account?{" "}
        <Text style={styles.signupLink} onPress={() => router.push("/login")}>
          Sign In
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:"#fff", alignItems:"center", justifyContent:"center", paddingHorizontal:20 },
  title: { fontSize:28, fontWeight:"bold", marginTop:10, color:"#000" },
  subtitle: { fontSize:14, color:"#555", marginBottom:20 },
  input: { width:"100%", borderWidth:1, borderColor:"#ccc", borderRadius:8, padding:12, marginBottom:15, fontSize:16 },
  passwordContainer: { flexDirection:"row", alignItems:"center", borderWidth:1, borderColor:"#ccc", borderRadius:8, paddingHorizontal:12, marginBottom:15, width:"100%" },
  passwordInput: { flex:1, paddingVertical:12, fontSize:16 },
  signInButton: { backgroundColor:"#2e7d32", width:"100%", padding:15, borderRadius:8, alignItems:"center", marginBottom:10 },
  signInText: { color:"#fff", fontSize:16, fontWeight:"bold" },
  userTypeContainer: { flexDirection:"row", marginBottom:15 },
  userTypeButton: { borderWidth:1, borderColor:"#ccc", borderRadius:8, padding:10, marginHorizontal:5 },
  userTypeSelected: { backgroundColor:"#2e7d32" },
  userTypeText: { color:"#000" },
  checkboxContainer: { flexDirection:"row", alignItems:"center", marginBottom:20 },
  checkboxText: { marginLeft:8, color:"#555" },
  signupText: { fontSize:14, color:"#555" },
  signupLink: { color:"#2e7d32", fontWeight:"bold" },
});
