import { Colors } from "@/constants/Colors";
import { fetchEpisodeById } from "@/services/episodeApi";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InfoItem from "@/components/InfoItem";

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

export default function EpisodeDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpisode = async () => {
      try {
        const data = await fetchEpisodeById(id);
        setEpisode(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisode();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const infoToShow = [
    { label: "Name", value: episode?.name, icon: "info", id: "1" },
    { label: "Air Date", value: episode?.air_date, icon: "calendar", id: "2" },
    { label: "Code", value: episode?.episode, icon: "qrcode", id: "3" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtext}>INFO</Text>
      </View>
      {infoToShow.map((info) => (
        <InfoItem
          key={info.id}
          label={info.label}
          value={info.value ?? "N/A"}
          iconName={info.icon}
        />
      ))}
      <View style={styles.header}>
        <Text style={styles.subtext}>CHARACTERS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryBackground,
  },
  header: {
    padding: 10,
    backgroundColor: Colors.primaryBackground,
  },
  subtext: {
    fontSize: 20,
    color: Colors.separator,
  },
});
