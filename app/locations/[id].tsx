import { Colors } from "@/constants/Colors";
import { fetchLocationById } from "@/services/locationApi";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import InfoItem from "@/components/InfoItem";

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

export default function LocationDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const data = await fetchLocationById(id);
        setLocation(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const infoToShow = [
    { label: "Name", value: location?.name, icon: "info", id: "1" },
    { label: "Type", value: location?.type, icon: "map", id: "2" },
    { label: "Dimension", value: location?.dimension, icon: "globe", id: "3" },
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
        <Text style={styles.subtext}>RESIDENTS</Text>
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
