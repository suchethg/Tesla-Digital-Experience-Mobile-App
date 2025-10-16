import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { CartContext } from '../context/CartContext.jsx';

export default function PaymentScreen({ navigation }) {
  const { cartItems, getTotal, clearCart } = useContext(CartContext);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

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

  const car = cartItems[0]; // For one-click purchase, only one car

  const handlePayment = () => {
    if (!cardNumber || !expiry || !cvv) {
      alert('Please fill all card details');
      return;
    }

    // Mock payment success
    alert(`Payment Successful! Paid $${getTotal()}`);
    clearCart();
    navigation.navigate('OrderConfirmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>

      {/* Car Summary */}
      <View style={styles.carContainer}>
        <Image source={{ uri: car.image }} style={styles.carImage} />
        <Text style={styles.carName}>{car.name}</Text>
        <Text style={styles.carPrice}>${car.price.replace('$','')}</Text>
      </View>

      {/* Add-Ons Summary */}
      {car.addOns && car.addOns.length > 0 && (
        <View style={styles.addOnsContainer}>
          <Text style={styles.addOnsTitle}>Add-Ons:</Text>
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

      {/* Card Inputs */}
      <TextInput style={styles.input} placeholder="Card Number" value={cardNumber} onChangeText={setCardNumber} keyboardType="number-pad" />
      <TextInput style={styles.input} placeholder="Expiry MM/YY" value={expiry} onChangeText={setExpiry} />
      <TextInput style={styles.input} placeholder="CVV" value={cvv} onChangeText={setCvv} keyboardType="number-pad" secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={{ color: '#fff', fontWeight:'bold' }}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20 },
  title: { fontSize:24, fontWeight:'bold', textAlign:'center', marginBottom:20 },
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
