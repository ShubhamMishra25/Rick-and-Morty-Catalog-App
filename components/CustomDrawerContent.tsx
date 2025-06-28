import { Image } from "expo-image";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";

export default function CustomDrawerContent(
  props: DrawerContentComponentProps
) {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        source={require("@/assets/images/rick-morty-nav-img.jpg")}
        style={{ width: "100%", height: 200, marginBottom: 20 }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
