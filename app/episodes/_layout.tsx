import { Stack } from "expo-router";

export default function EpisodesLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: "Episodes" }} />
        <Stack.Screen name="[id]" options={{ title: "Episode Details" }} />
      </Stack>
    </>
  );
}
