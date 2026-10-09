import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";

export default function ProfileScreen() {
  const [points, setPoints] = useState<number>(0);

  const increasePoints = () => {
    setPoints((previousPoints) => previousPoints + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Profile Picture */}
        <View style={styles.profileContainer}>
          <View style={styles.profileCircle}>
            <Image
              source={require("../../assets/images/dula.jpg")}
              style={styles.profileImage}
            />

            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedText}>✓</Text>
            </View>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Name */}
        <View style={styles.section}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>Dulakshika Kumarathissa</Text>
        </View>

        {/* Email */}
        <View style={styles.section}>
          <Text style={styles.label}>Email</Text>

          <View style={styles.row}>
            <Text style={styles.emailIcon}>✉</Text>
            <Text style={styles.value}>madumalidulakshika@gmail.com</Text>
          </View>
        </View>

        {/* Points */}
        <View style={styles.section}>
          <Text style={styles.label}>Points</Text>

          <View style={styles.row}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.value}>{points}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Plus Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={increasePoints}
        activeOpacity={0.7}
      >
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    height: 70,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "bold",
  },

  content: {
    paddingHorizontal: 25,
    paddingBottom: 100,
  },

  profileContainer: {
    alignItems: "center",
    paddingVertical: 25,
  },

  profileCircle: {
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },

  profileImage: {
    width: 145,
    height: 145,
    borderRadius: 75,
  },

  verifiedBadge: {
    position: "absolute",
    right: 20,
    bottom: 40,
  },

  verifiedText: {
    color: "#00E600",
    fontSize: 55,
    fontWeight: "bold",
  },

  divider: {
    height: 3,
    backgroundColor: "#111111",
    marginBottom: 28,
  },

  section: {
    marginBottom: 35,
  },

  label: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#111111",
    marginBottom: 12,
  },

  value: {
    fontSize: 24,
    color: "#333333",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  emailIcon: {
    fontSize: 30,
    color: "#000000",
  },

  star: {
    fontSize: 32,
    color: "#000000",
  },

  addButton: {
    position: "absolute",
    bottom: 25,
    right: 25,
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },

  plusText: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "300",
    marginTop: -3,
  },
});
