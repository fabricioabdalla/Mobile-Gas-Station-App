import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
export default function Noticias({ navigation }) {
  return (
    <SafeAreaView>
      <Image style={styles.paragraph} source={require('./assets/shell.png')} />

      <View style={styles.container}>
        <View style={styles.newsTitleContainer}>
          <Text style={styles.newsTopTitle}>Notícias Recentes</Text>

         <TouchableOpacity onPress={() => navigation.navigate('TelaBuscar')}>
            <Text style={styles.SeeMoreButton}>Postos na Sua Cidade</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.newsContainer}>
          <Text style={styles.newsTitle}>
            Shell Brasil lança nova campanha de marca com foco no futuro da
            energia
          </Text>
          <Text style={styles.newsDate}>nov 06, 2023</Text>
          <Text style={styles.newsDescription}>
            “Caminhos do Amanhã” contará com uma mininovela de cinco capítulos,
            estrelada por Sophia Abrahão e Sergio Malheiros
          </Text>
        </View>

        <View style={styles.newsContainer}>
          <Text style={styles.newsTitle}>
            SBM Offshore e SHELL desenvolvem sistema para aumentar eficiência
            energética e reduzir emissão de CO2 nos FPSOs
          </Text>
          <Text style={styles.newsDate}>out 10, 2023</Text>
          <Text style={styles.newsDescription}>
            Previsto para 2024, projeto inédito de desenvolvimento de captação
            de água
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    alignItems: 'center',
    width: 300,
    height: 150,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  newsContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  newsDate: {
    color: '#666',
    marginBottom: 5,
  },
  newsDescription: {
    fontSize: 14,
  },
  newsTopTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  newsTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  SeeMoreButton: {
    textDecorationLine: 'underline', /*Tracejado pro Posto */
    marginTop: 5,
  },
});
