import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
export default function TelaNoticia({ navigation }) {
  return (
    <ScrollView>
      <Image style={styles.paragraph} source={require('./assets/shell.png')} />

      <SafeAreaView style={styles.container}>
        <View style={styles.newsContainer}>
          <Text style={styles.newsTopTitle}>Notícias</Text>
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

        <View style={styles.newsContainer}>
          <Text style={styles.newsTitle}>
            Festival do Rio 2023 conta com recursos de acessibilidade para
            pessoas com deficiência
          </Text>
          <Text style={styles.newsDate}>out 05, 2023</Text>
          <Text style={styles.newsDescription}>
            25ª edição do festival terá cerca de 30 filmes com audiodescrição,
            Libras e legenda
          </Text>
        </View>

        <View style={styles.newsContainer}>
          <Text style={styles.newsTitle}>
            Animação musical ‘Atiraram no Pianista’ abre a 25ª edição do
            Festival do Rio
          </Text>
          <Text style={styles.newsDate}>out 05, 2023</Text>
          <Text style={styles.newsDescription}>
            Gala de abertura, no Cine Odeon, é uma homenagem à música brasileira
            e celebra a liberdade de expressão
          </Text>
        </View>

        <View style={styles.newsContainer}>
          <Text style={styles.newsTitle}>
            7º Evento Cultural Quilombola discute a potência da comunidade
          </Text>
          <Text style={styles.newsDate}>out 03, 2023</Text>
          <Text style={styles.newsDescription}>
            Participantes fazem parte do Quipea, projeto coordenado pela Shell
            Brasil
          </Text>
        </View>

        <View style={styles.newsContainer}>
          <Text style={styles.newsTitle}>
            Último painel do Shell Talks 2023 aborda a cultura como elemento
            para impulsionar o desenvolvimento
          </Text>
          <Text style={styles.newsDate}>Set 01, 2023</Text>
          <Text style={styles.newsDescription}>
            A Shell Brasil é a segunda maior patrocinadora cultural do país e
            reconhece a importância da cultura como um pilar essencial da
            sociedade.
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
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
});
