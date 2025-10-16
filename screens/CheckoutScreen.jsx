import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { CartContext } from '../context/CartContext.jsx';

export default function CheckoutScreen({ navigation }) {
  const { cartItems, getTotal } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your cart is empty!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backHome}>Go Back Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const car = cartItems[0]; // For one-click purchase, only one car in cart

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {/* Car Info */}
      <View style={styles.carContainer}>
        <Image source={{ uri: car.image }} style={styles.carImage} />
        <Text style={styles.carName}>{car.name}</Text>
        <Text style={styles.carPrice}>${car.price.replace('$','')}</Text>
      </View>

      {/* Add-Ons */}
      {car.addOns && car.addOns.length > 0 && (
        <View style={styles.addOnsContainer}>
          <Text style={styles.addOnsTitle}>Selected Add-Ons:</Text>
          {car.addOns.map(addOn => (
            <View key={addOn.id} style={styles.addOnItem}>
              <Text>{addOn.name}</Text>
              <Text>${addOn.price}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Total */}
      <Text style={styles.total}>Total: ${getTotal()}</Text>

      {/* Checkout Form */}
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />

      {/* Place Order */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payment')}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20 },
  title: { fontSize:24, fontWeight:'bold', marginBottom:20, textAlign:'center' },
  carContainer: { alignItems:'center', marginBottom:20 },
  carImage: { width:300, height:150, resizeMode:'contain', marginBottom:10 },
  carName: { fontSize:20, fontWeight:'bold' },
  carPrice: { fontSize:16, marginBottom:10 },
  addOnsContainer: { marginBottom:20 },
  addOnsTitle: { fontSize:18, fontWeight:'bold', marginBottom:5 },
  addOnItem: { flexDirection:'row', justifyContent:'space-between', paddingVertical:5 },
  total: { fontSize:18, fontWeight:'bold', marginBottom:20, textAlign:'center' },
  input: { borderWidth:1, borderColor:'#ccc', borderRadius:6, padding:10, marginBottom:10 },
  button: { backgroundColor:'#e82127', padding:15, borderRadius:6, alignItems:'center', marginTop:10 },
  emptyContainer: { flex:1, justifyContent:'center', alignItems:'center' },
  emptyText: { fontSize:18, marginBottom:10 },
  backHome: { fontSize:16, color:'blue' },
});
