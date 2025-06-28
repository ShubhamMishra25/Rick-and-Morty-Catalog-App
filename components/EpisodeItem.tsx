import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
import { Episode } from "@/app/episodes";

type EpisodeItemProps = {
  item: Episode;
};

export default function EpisodeItem({ item }: EpisodeItemProps) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push(`/episodes/${item.id}`)}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <Text
          style={styles.episode}
          numberOfLines={2}
        >
          {item.name}
        </Text>
        <Text style={{ fontSize: 16, color: Colors.separator }}>
          {item.air_date}
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
  episode: {
    fontSize: 18,
    color: Colors.screenHead,
    flex: 1,
    flexWrap: "wrap",
    marginRight: 10,
  },
});
