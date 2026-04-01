import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { commonStyles } from "../styles/commonStyles";

export default function Page3() {
  const router = useRouter();

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.headerBar}>
        <Text style={commonStyles.headerText}>Smart SafeZone</Text>
      </View>

      <View style={commonStyles.content}>
        <View style={commonStyles.circle}>
          <Ionicons name="shield" size={60} color="#4CAF50" />
        </View>
        <Text style={commonStyles.feature}>Safe Zone Protection</Text>
        <Text style={commonStyles.desc}>
          Set up safe zones and get notified when you enter or leave designated areas.
        </Text>
      </View>

      {/* <TouchableOpacity style={commonStyles.button} onPress={() => router.push("./page4")}>
        <Text style={commonStyles.buttonText}>Next</Text>
      </TouchableOpacity> */}

      <View style={commonStyles.dots}>
        <View style={[commonStyles.dot, { backgroundColor: "#ccc" }]} />
        <View style={[commonStyles.dot, { backgroundColor: "#4CAF50" }]} />
        <View style={[commonStyles.dot, { backgroundColor: "#ccc" }]} />
      </View>
      <TouchableOpacity style={commonStyles.button} onPress={() => router.push("./page4")}>
        <Text style={commonStyles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
