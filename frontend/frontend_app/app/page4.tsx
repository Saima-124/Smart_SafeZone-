import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";   
import { commonStyles } from "../styles/commonStyles";

export default function Page4() {
  const router = useRouter(); 

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.headerBar}>
        <Text style={commonStyles.headerText}>Smart SafeZone</Text>
      </View>

      <View style={commonStyles.content}>
        <View style={commonStyles.circle}>
          <Ionicons name="alert-circle" size={60} color="#4CAF50" />
        </View>
        <Text style={commonStyles.feature}>Emergency SOS</Text>
        <Text style={commonStyles.desc}>
          Quick access to emergency alerts that instantly notify your trusted contacts with your location.
        </Text>
      </View>

      {/* Pagination dots */}
      <View style={commonStyles.dots}>
        <View style={[commonStyles.dot, { backgroundColor: "#ccc" }]} />
        <View style={[commonStyles.dot, { backgroundColor: "#ccc" }]} />
        <View style={[commonStyles.dot, { backgroundColor: "#4CAF50" }]} />
      </View>

      {/* Button */}
      <TouchableOpacity style={commonStyles.button} onPress={() => router.push("./login")}>
        <Text style={commonStyles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

      