import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";

import { ItemProps } from "@/app/characters";

export default function CharacterItem({ item, onPress }: ItemProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: item.image }}
        style={{ width: 60, height: 60, borderRadius: 50 }}
      />
      <View
      style={{ flexDirection: "column", marginLeft: 10}}
      >
        <Text style={{ fontSize: 20, color: Colors.focused }}>{item.name}</Text>
        <Text style={{ fontSize: 14, color: Colors.separator }}>
          {item.episode.length} Episodes
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.primaryBackground,
    padding: 10,
    height: 80,
    alignItems: "center",
  },
});
