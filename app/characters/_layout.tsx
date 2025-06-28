import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function CharactersLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // contentStyle: { backgroundColor: Colors.primaryBackground },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="[id]"
        options={{ title: "Character Details" }}
      />
    </Stack>
  );
}
