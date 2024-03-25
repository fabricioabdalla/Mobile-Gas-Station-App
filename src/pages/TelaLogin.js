import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, SafeAreaView  } from 'react-native';

export default function TelaLogin({ navigation }) {
  // hooks para armazenar os dados dos TextInputs
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  // função que verifica as credenciais do login e senha
  function autenticar () {
    // login e senha de teste
    let loginTeste = 'login';
    let senhaTeste = '123';

      
    // verficar as credenciais
    if ((login == loginTeste) && (senha == senhaTeste)) {
      // abre a tela principal
      navigation.navigate('TelaPrincipal')
    }

  }

  return (
    <SafeAreaView style={styles.container}>

    <View>
      <Image style={styles.TopImage} source={require('./assets/shell.png')} />
      <Text style={styles.title}>Autenticação</Text>
    </View>
     <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={(text) => setLogin(text)} // Atualiza o estado 'login' com o valor do campo
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Senha"
        onChangeText={(text) => setSenha(text)} // Atualiza o estado 'senha' com o valor do campo
      />
      
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => autenticar()}>
        <Text>Entrar</Text>
      </TouchableOpacity>

      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('TelaEsqueciMinhaSenha')}>
        Esqueci minha senha
      </Text>
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate('TelaNovoCadastro')}>
        Novo cadastro
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC300',
    padding: 8,
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#FF0000',
  },
  input: {
    width: 250,
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
  loginText: {
    color: '#333',
    marginTop: 10,
    fontSize: 15,
  },
  TopImage: {
    width: 200,
    height: 100,
  },
});