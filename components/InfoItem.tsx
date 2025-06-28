import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors } from "@/constants/Colors";

interface InfoItemProps {
  iconName: string;
  label: string;
  value: string;
}

export default function InfoItem({ iconName, label, value }: InfoItemProps) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={iconName} size={25} color={Colors.focused} />
      </View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    backgroundColor: Colors.secondaryBackground,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: Colors.separator,
    borderBottomWidth: 1,
  },
  iconContainer: {
    width: 35,
    alignItems: "center",
  },
  label: {
    color: Colors.label,
    fontSize: 20,
    marginLeft: 10,
  },
  value: {
    marginLeft: "auto",
    color: Colors.focused,
    fontSize: 20,
    maxWidth: "60%",
  },
});
