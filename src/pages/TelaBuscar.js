import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function BuscaTela() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <MaterialIcons name="gps-fixed" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Buscar local..."
          placeholderTextColor="#888"
        />
      </View>
      <Image
        source={require('./assets/mapa.png')}
        style={styles.mapImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
});