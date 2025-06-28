import { Colors } from "@/constants/Colors";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { View } from "react-native";

export default function CustomDrawerToggle() {
  return (
    <View style={{ marginLeft: -15 }}>
      <DrawerToggleButton
        tintColor={Colors.focused}
        pressColor={Colors.inactive}
      />
    </View>
  );
}
