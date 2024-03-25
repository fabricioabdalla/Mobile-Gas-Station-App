import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function TelaCadastro({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo Cadastro</Text>

      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="E-mail" />
      <TextInput style={styles.input} placeholder="Telefone" />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Senha"
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Confirmar Senha"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TelaLogin')}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC300',
    padding: 8,
    paddingTop: 40,
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#FF0000',
  },
  input: {
    height: 30,
    marginTop: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#FF0000',
    borderRadius: 4,
  },
  button: {
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
  buttonText: {
    color: '#000',
  },
});
