import { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

// Responsive font scale
const scaleFont = (size: number) => (width / 375) * size;

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
    //   router.replace("splash");
    // router.replace({ pathname: "splash" });
    router.replace("./splash");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to our safety app</Text>
      <Text style={styles.subtitle}>
        Keeping you safe, whenever you go.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: scaleFont(22),
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
  },
  title: {
    fontSize: scaleFont(24),
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: scaleFont(16),
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
});
