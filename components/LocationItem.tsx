import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
import { Location } from "@/app/locations";

type LocationItemProps = {
  item: Location;
};

export default function LocationItem({ item }: LocationItemProps) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push(`/locations/${item.id}`)}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Text style={styles.location} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={{ fontSize: 16, color: Colors.separator }}>
          {item.residents.length} Residents
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.secondaryBackground,
    padding: 10,
    height: 80,
    alignItems: "center",
  },
  location: {
    fontSize: 18,
    color: Colors.screenHead,
    flex: 1,
    flexWrap: "wrap",
    marginRight: 10,
  },
});