import { Colors } from "@/constants/Colors";
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function LoadingContainer({ text = "Loading..." }: { text?: string }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.screenHead} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.secondaryBackground,
  },
  text: {
    marginTop: 12,
    fontSize: 18,
    color: Colors.screenHead,
  },
});
