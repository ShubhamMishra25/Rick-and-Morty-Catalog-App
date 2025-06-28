import { Colors } from "@/constants/Colors";
import { fetchCharacterById } from "@/services/characterApi";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InfoItem from "@/components/InfoItem";

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
  status: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
};

export default function CharacterDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await fetchCharacterById(id);
        setCharacter(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const infoToShow = [
    { label: "Species", value: character?.species, icon: "paw", id: "1" },
    { label: "Gender", value: character?.gender, icon: "user", id: "2" },
    { label: "Status", value: character?.status, icon: "heartbeat", id: "3" },
    {
      label: "Location",
      value: character?.location.name,
      icon: "map",
      id: "4",
    },
    {
      label: "Origin",
      value: character?.origin.name,
      icon: "location-arrow",
      id: "5",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{character?.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: character?.image }}
          style={styles.characterImage}
          contentFit="cover"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.subtext}>INFO</Text>
      </View>
      {infoToShow.map((info) => (
        <InfoItem
          key={info.label}
          iconName={info.icon}
          label={info.label}
          value={info.value ?? "Unknown"}
        />
      ))}
      <View style={styles.header}>
        <Text style={styles.subtext}>EPISODES</Text>
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
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.screenHead,
  },
  imageContainer: {
    padding: 20,
    alignItems: "center",
  },
  characterImage: {
    width: 250,
    height: 200,
    borderRadius: 10,
  },
  subtext: {
    fontSize: 20,
    color: Colors.separator,
  },
});
