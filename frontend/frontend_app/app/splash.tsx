// import { View, Text, StyleSheet, ActivityIndicator, Dimensions } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const { width } = Dimensions.get("window");
// const scaleFont = (size: number) => (width / 375) * size;

// export default function SplashScreen() {
//   return (
//     <View style={styles.container}>
//       <Ionicons name="shield-checkmark" size={width * 0.2} color="#fff" />
//       <Text style={styles.title}>Smart SafeZone</Text>
//       <Text style={styles.subtitle}>Your Safety, Our Priority</Text>
//       <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#4CAF50",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: scaleFont(28),
//     fontWeight: "bold",
//     color: "#fff",
//     marginTop: 20,
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: scaleFont(16),
//     color: "#fff",
//     marginTop: 8,
//     textAlign: "center",
//   },
// });

import { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("./page2"); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Ionicons name="shield-checkmark" size={80} color="#fff" />
      <Text style={styles.title}>Smart SafeZone</Text>
      <Text style={styles.subtitle}>Your Safety, Our Priority</Text>
      <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#4CAF50", justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", color: "#fff", marginTop: 20 },
  subtitle: { fontSize: 16, color: "#fff", marginTop: 8 },
});
