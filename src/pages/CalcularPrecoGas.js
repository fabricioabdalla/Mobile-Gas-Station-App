import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function CalcularPrecoGas() {
  const [Alcool, setAlcool] = useState("");
  const [Gasolina, setGasolina] = useState("");
  const [resultado, setResultado] = useState("");

  function calcular() {
    const AlcoolNum =Number(Alcool);
    const GasolinaNum = Number(Gasolina);

    if (AlcoolNum && GasolinaNum) {
      const calculo = AlcoolNum / GasolinaNum;

  if (calculo < 0.7) {
        setResultado(`${calculo.toFixed(2)}: Álcool é mais vantajoso`);
      } else {
        setResultado(`${calculo.toFixed(2)}: Gasolina é mais vantajosa`);
      }
    } else {
      setResultado('Informe os preços corretamente');
    }
  }

  function limpar() {
    setAlcool("");
    setGasolina("");
    setResultado("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Calculadora de Combustível</Text>
      </View>

      <TextInput 
        style={styles.input} 
        placeholder="Preço do Álcool (R$/litro)" 
        value={Alcool}
        onChangeText={v => setAlcool(v)}
      />

      <TextInput
        style={styles.input} 
        placeholder="Preço da Gasolina (R$/litro)" 
        value={Gasolina}
        onChangeText={v => setGasolina(v)}
      />

      <TextInput 
        style={styles.input} 
        placeholder="Resultado" 
        value={resultado} 
      />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.textButton}>Calcular Vantagem</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonClear} onPress={limpar}>
        <Text style={styles.textButtonClear}>Limpar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: "center",
    height: "16%",
    paddingStart: 20,
    backgroundColor: "#FFC300",
  },
  textHeader: {
    fontSize: 32,
    color: "#000",
  },
  input: {
    marginTop: 10,
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    fontSize: 20,
    borderColor: "#d6d6d6",
  },
  button: {
    marginHorizontal: 12,
    paddingVertical: 4,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC300",
  },
  textButton: {
    fontSize: 25,
    color: "#000",
  },
  buttonClear: {
    marginHorizontal: 12,
    paddingVertical: 4,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fa0505",
  },
  textButtonClear: {
    fontSize: 25,
    color: "#000",
  },
});
