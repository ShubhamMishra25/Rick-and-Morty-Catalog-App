import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CharacterDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}
      >Character Details Screen</Text>
    </View>
  );
}
