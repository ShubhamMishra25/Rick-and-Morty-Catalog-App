import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Character } from "@/app/characters";

type CharacterItemProps = {
  item: Character;
};

export default function CharacterItem({ item }: CharacterItemProps) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push(`/characters/${item.id}`)}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 60, height: 60, borderRadius: 50 }}
      />
      <View style={{ flexDirection: "column", marginLeft: 10 }}>
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
