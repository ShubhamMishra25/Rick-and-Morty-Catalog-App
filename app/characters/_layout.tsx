import CustomDrawerToggle from "@/components/CustomDrawerToggle";
import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";

export default function CharactersLayout() {
  return (
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
          headerTitle: "Characters",
          headerLeft: () => <CustomDrawerToggle />,
        }}
      />
      <Stack.Screen name="[id]" options={{ title: "Character Details" }} />
    </Stack>
  );
}
