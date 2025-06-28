import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet, FlatList } from "react-native";
import EpisodeItem from "@/components/EpisodeItem";
import React, { useState, useEffect } from "react";
import { fetchEpisodes } from "@/services/episodeApi";

export interface Episode {
  id: number;
  name: string;
  air_date: string;
}

export default function EpisodesScreen() {
  const [data, setData] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchEpisodes();
        setData(res.results);
      } catch (error) {
        console.error("Failed to fetch episodes:", error);
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
          <EpisodeItem item={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: Colors.separator, // use your color palette
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryBackground,
  },
});