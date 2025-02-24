import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Benvenuto nella nostra Accademia!</Text>
      <Button
        title="Lista Professori"
        onPress={() => navigation.navigate('Professori')}
      />
      <Button
        title="Lista Ricercatori"
        onPress={() => navigation.navigate('Ricercatori')}
      />
    </View>
  );
};

const ProfessoriScreen = () => {
  const [professori, setProfessori] = useState([]);
  const [searchId, setSearchId] = useState('');

  const fetchProfessori = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5002/professori');
      setProfessori(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchProfessore = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5002/professori/${searchId}`);
      setProfessori([response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cerca professore per ID"
        value={searchId}
        onChangeText={setSearchId}
        keyboardType="numeric"
      />
      <Button title="Cerca" onPress={searchProfessore} />
      <Button title="Mostra tutti i professori" onPress={fetchProfessori} />
      {professori.map((prof) => (
        <View key={prof.id} style={styles.card}>
          <Text style={styles.cardText}>{prof.nome} {prof.cognome}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const RicercatoriScreen = () => {
  const [ricercatori, setRicercatori] = useState([]);
  const [searchId, setSearchId] = useState('');

  const fetchRicercatori = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5002/ricercatori');
      setRicercatori(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchRicercatore = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5002/ricercatori/${searchId}`);
      setRicercatori([response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cerca ricercatore per ID"
        value={searchId}
        onChangeText={setSearchId}
        keyboardType="numeric"
      />
      <Button title="Cerca" onPress={searchRicercatore} />
      <Button title="Mostra tutti i ricercatori" onPress={fetchRicercatori} />
      {ricercatori.map((ric) => (
        <View key={ric.id} style={styles.card}>
          <Text style={styles.cardText}>{ric.nome} {ric.cognome}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Professori" component={ProfessoriScreen} />
        <Stack.Screen name="Ricercatori" component={RicercatoriScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
  },
});

export default App;