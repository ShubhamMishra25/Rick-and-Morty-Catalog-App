import { Stack } from "expo-router";
import CustomDrawerToggle from "@/components/CustomDrawerToggle";
import { Colors } from "@/constants/Colors";

export default function EpisodesLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: Colors.secondaryBackground },
          headerTintColor: Colors.focused,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Episodes",
            headerLeft: () => <CustomDrawerToggle />,
          }}
        />
        <Stack.Screen name="[id]" options={{ title: "Episode Details" }} />
      </Stack>
    </>
  );
}
