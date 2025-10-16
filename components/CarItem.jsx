import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

export default function CarItem({ car, onAddToCart, darkMode }) {
  return (
    <View style={[styles.card, { backgroundColor: darkMode ? '#111' : '#fff' }]}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={{ color: darkMode ? '#fff' : '#000', fontSize: 18, fontWeight: 'bold' }}>{car.name}</Text>
        <Text style={{ color: darkMode ? '#fff' : '#000' }}>Range: {car.range}</Text>
        <Text style={{ color: darkMode ? '#fff' : '#000' }}>Top Speed: {car.topSpeed}</Text>
        <Text style={{ color: darkMode ? '#fff' : '#000' }}>Price: {car.price}</Text>
    <TouchableOpacity style={styles.button} onPress={onAddToCart}>
  <Text style={styles.buttonText}>Add to Cart</Text>
</TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', marginBottom: 10, borderRadius: 10, overflow: 'hidden', padding: 10 },
  image: { width: 120, height: 80 },
  info: { flex: 1, paddingLeft: 10 },
  button: { marginTop: 10, backgroundColor: '#e82127', padding: 8, borderRadius: 6, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
