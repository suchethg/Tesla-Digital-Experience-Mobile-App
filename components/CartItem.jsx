import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CartItem({ car, onRemove }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{car.name}</Text>
      <Text style={styles.price}>{car.price}</Text>
      <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
        <Text style={{ color: '#fff' }}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 16 },
  removeButton: { backgroundColor: '#e82127', padding: 5, borderRadius: 5 },
});
