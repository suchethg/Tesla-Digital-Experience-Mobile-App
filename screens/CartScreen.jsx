import React, { useContext } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext.jsx';
import CartItem from '../components/CartItem.jsx';

export default function CartScreen({ navigation }) {
  const { cartItems, removeFromCart, getTotal, clearCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CartItem car={item} onRemove={() => removeFromCart(item.id)} />
        )}
      />
      <Text style={styles.total}>Total: ${getTotal()}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Checkout')}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Checkout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Clear Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  total: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  checkoutButton: { backgroundColor: '#e82127', padding: 10, borderRadius: 6, alignItems: 'center', marginBottom: 10 },
  clearButton: { backgroundColor: '#555', padding: 10, borderRadius: 6, alignItems: 'center' },
});
