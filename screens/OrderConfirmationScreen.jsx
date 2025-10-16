import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function OrderConfirmationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Order Confirmed!</Text>
      <Text style={styles.text}>Thank you for your purchase. Your Tesla will be on its way soon.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={{ color: '#fff', fontWeight:'bold' }}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  title: { fontSize:28, fontWeight:'bold', marginBottom:20 },
  text: { fontSize:16, textAlign:'center', marginBottom:20 },
  button: { backgroundColor:'#e82127', padding:15, borderRadius:6, alignItems:'center' },
});
