import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TelaNotificacoes() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.notification}>
        <MaterialIcons name="notifications" size={24} color="#FF0000" />
        <View style={styles.notificationDetails}>
          <Text style={styles.notificationTitle}>
            Troque seus quilômetros de vantagem!
          </Text>
          <Text style={styles.notificationText}>
            Por Itens Resgatáveis nos Postos Shell.
          </Text>
        </View>
      </View>
      <Image
        source={require('./assets/shell.png')}
        style={styles.logo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F4DB0B',
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: '90%',
  },
  notificationDetails: {
    marginLeft: 10,
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  notificationText: {
    color: '#333',
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: 'auto',
  },
});
