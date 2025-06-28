import { Colors } from "@/constants/Colors";
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CharacterItem from "@/components/CharacterItem";

export type Character = {
  id: number;
  name: string;
  episode: string[];
  image: string;
};

const DATA: Character[] = [
  {
    id: 1,
    name: "Rick Sanchez",
    episode: ["1", "2", "3"],
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 2,
    name: "Morty Smith",
    episode: ["1", "2", "3"],
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    id: 3,
    name: "Summer Smith",
    episode: ["1", "2", "3"],
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
];

export type ItemProps = {
  item: Character;
  onPress: () => void;
};

// const Item = ({ item, onPress }: ItemProps) => (
//   <View style={{ padding: 20, borderBottomWidth: 1, borderColor: "#ccc" }}>
//     <Text style={{ fontSize: 18 }} onPress={onPress}>
//       {item.name}
//     </Text>
//   </View>
// );

export default function Characters() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <CharacterItem
            item={item}
            onPress={() => console.log(`Selected character: ${item.name}`)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: Colors.secondaryBackground, // use your color palette
              
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryBackground,
  },
});
