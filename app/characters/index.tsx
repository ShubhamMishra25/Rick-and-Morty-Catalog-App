import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet, FlatList } from "react-native";
import CharacterItem from "@/components/CharacterItem";
import React, { useState, useEffect } from "react";
import { fetchCharacters } from "@/services/characterApi";


export interface Character {
  id: number;
  name: string;
  episode: string[];
  image: string;
};

export default function Characters() {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchCharacters();
        console.log("Fetched characters:", res.results);
        setData(res.results);
      } catch (error) {
        console.error("Failed to fetch characters:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CharacterItem
            item={item}
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
