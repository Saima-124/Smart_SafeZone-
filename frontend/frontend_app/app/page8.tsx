// dashboard.tsx  (Page 8 – Main Dashboard)
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

// ─── Reusable Menu Card ────────────────────────────────────────────────────────
type MenuCardProps = {
  iconName: keyof typeof MaterialIcons.glyphMap;
  iconBg: string;
  title: string;
  subtitle: string;
  onPress: () => void;
};

function MenuCard({ iconName, iconBg, title, subtitle, onPress }: MenuCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.cardIcon, { backgroundColor: iconBg }]}>
        <MaterialIcons name={iconName} size={26} color="#fff" />
      </View>
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={24} color="#aaa" />
    </TouchableOpacity>
  );
}

// ─── Bottom Tab Item ───────────────────────────────────────────────────────────
type TabItemProps = {
  iconName: keyof typeof MaterialIcons.glyphMap;
  label: string;
  active?: boolean;
  onPress: () => void;
};

function TabItem({ iconName, label, active, onPress }: TabItemProps) {
  return (
    <TouchableOpacity style={styles.tabItem} onPress={onPress}>
      <View style={active ? styles.activeTabBg : null}>
        <MaterialIcons
          name={iconName}
          size={26}
          color={active ? "#2e7d32" : "#555"}
        />
      </View>
      <Text style={[styles.tabLabel, active && { color: "#2e7d32", fontWeight: "700" }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

// ─── Main Dashboard Screen ─────────────────────────────────────────────────────
export default function DashboardScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* ── Top Header Bar ── */}
      <View style={styles.header}>
        <MaterialIcons name="more-horiz" size={28} color="#fff" />
        <Text style={styles.headerTitle}>Safety App</Text>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={28} color="#fff" />
          {/* Red dot for notification badge */}
          <View style={styles.badge} />
        </TouchableOpacity>
      </View>

      {/* ── Menu Cards ── */}
      <View style={styles.cardsContainer}>
        <MenuCard
          iconName="location-on"
          iconBg="#4CAF50"
          title="Set Safety Zone"
          subtitle="0 zones configured"
          onPress={() => router.push("/set-safety-zone")}
        />
        <MenuCard
          iconName="contacts"
          iconBg="#e53935"
          title="Emergency Contacts"
          subtitle="0 contacts saved"
          onPress={() => router.push("/emergency-contacts")}
        />
        <MenuCard
          iconName="person-add"
          iconBg="#1e88e5"
          title="Add Guardian"
          subtitle="0 guardians active"
          onPress={() => router.push("/add-guardian")}
        />
      </View>

      {/* ── Bottom Tab Bar ── */}
      <View style={styles.bottomNav}>
        <TabItem
          iconName="home"
          label="Home"
          active
          onPress={() => router.push("/page8")}
        />
        <TabItem
          iconName="notifications"
          label="Alerts"
          onPress={() => router.push("/alerts")}
        />
        <TabItem
          iconName="phone"
          label="Helpline"
          onPress={() => router.push("/helpline")}
        />
        <TabItem
          iconName="person"
          label="Profile"
          onPress={() => router.push("/profile")}
        />
      </View>
    </View>
  );
}

// ─── Styles ────────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  // Header
  header: {
    backgroundColor: "#2e7d32",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  badge: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#f44336",
    position: "absolute",
    top: 0,
    right: 0,
    borderWidth: 1.5,
    borderColor: "#2e7d32",
  },

  // Cards
  cardsContainer: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 24,
    gap: 14,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#111",
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#888",
  },

  // Bottom Nav
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -2 },
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabBg: {
    backgroundColor: "#e8f5e9",
    borderRadius: 8,
    padding: 4,
  },
  tabLabel: {
    fontSize: 11,
    color: "#555",
    marginTop: 3,
  },
});