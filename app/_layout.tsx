import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
        name="characters"
        options={{ drawerLabel: 'Characters' }}
      />
      <Drawer.Screen
        name="episodes"
        options={{ drawerLabel: 'Episodes' }}
      />
      <Drawer.Screen
        name="locations"
        options={{ drawerLabel: 'Locations' }}
      />
      </Drawer>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
