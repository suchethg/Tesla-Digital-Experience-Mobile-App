import React from 'react';
import { View, Text, TextInput, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Header({ darkMode, toggleDarkMode, searchText, setSearchText, showFavorites, toggleShowFavorites }) {
  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#000' : '#fff' }]}>
      <Text style={[styles.title, { color: darkMode ? '#fff' : '#000' }]}>Tesla Cars</Text>

      {/* Search Bar */}
      <TextInput
        style={[styles.searchInput, { backgroundColor: darkMode ? '#222' : '#eee', color: darkMode ? '#fff' : '#000' }]}
        placeholder="Search cars..."
        placeholderTextColor={darkMode ? '#aaa' : '#555'}
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Dark Mode Toggle */}
      <View style={styles.row}>
        <Text style={{ color: darkMode ? '#fff' : '#000' }}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  searchInput: { padding: 8, borderRadius: 8, marginBottom: 10 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between' },
  favoritesButton: { flexDirection: 'row', alignItems: 'center' },
});
