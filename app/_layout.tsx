import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Drawer } from "expo-router/drawer";
import { Colors } from "@/constants/Colors";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import CustomDrawerContent from "@/components/CustomDrawerContent";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: Colors.secondaryBackground,
            margin: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
          drawerActiveTintColor: Colors.focused,
          drawerInactiveTintColor: Colors.inactive,
          headerStyle: { backgroundColor: Colors.secondaryBackground },
          headerTintColor: Colors.focused,
        }}
      >
        <Drawer.Screen
          name="characters"
          options={{
            drawerLabel: "Characters",
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="id-card" size={size} color={color} />
            ),
            headerTitle: "Characters",
          }}
        />
        <Drawer.Screen
          name="episodes"
          options={{
            drawerLabel: "Episodes",
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="tv" size={size} color={color} />
            ),
            headerTitle: "Episodes",
          }}
        />
        <Drawer.Screen
          name="locations"
          options={{
            drawerLabel: "Locations",
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="map" size={size} color={color} />
            ),
            headerTitle: "Locations",
          }}
        />
      </Drawer>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
