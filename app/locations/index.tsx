import { Text, View, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { fetchLocations } from "@/services/locationApi";
import { Colors } from "@/constants/Colors";
import LocationItem from "@/components/LocationItem";

export interface Location {
  id: number;
  name: string;
  residents: string[];
}

export default function LocationsScreen() {
  const [data, setData] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchLocations();
        setData(res.results);
      } catch (error) {
        console.error("Failed to fetch locations:", error);
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
        renderItem={({ item }) => <LocationItem item={item} />}
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
