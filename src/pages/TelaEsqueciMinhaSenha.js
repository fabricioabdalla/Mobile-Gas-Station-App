import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function TelaEsqueciMinhaSenha({ navigation }) {
  return (
    <SafeAreaView style={styles.esqueciSenhaContainer}>
      <Text style={styles.esqueciSenhaTitle}>Esqueci minha senha</Text>

      <Text style={styles.esqueciSenhaText}>
        Informe seu e-mail para recuperar sua senha.
      </Text>

      <TextInput style={styles.input} placeholder="E-mail" />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('TelaLogin')}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    marginTop: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#FF0000',
    borderRadius: 4,
  },
  loginButton: {
    width: 100,
    alignItems: 'center',
    backgroundColor: '#FF0000',
    marginTop: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#265C4B',
    borderRadius: 4,
  },
  esqueciSenhaContainer: {
    flex: 1,
    backgroundColor: '#FFC300',
    padding: 8,
    paddingTop: 40,
  },
  esqueciSenhaTitle: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#FF0000',
  },
  esqueciSenhaText: {
    marginTop: 16,
  },
});
