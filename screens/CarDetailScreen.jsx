import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CarDetailScreen({ route }) {
  const { car } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <Text style={styles.name}>{car.name}</Text>
      <Text>Range: {car.range}</Text>
      <Text>Top Speed: {car.topSpeed}</Text>
      <Text>Price: {car.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 300, height: 200, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
