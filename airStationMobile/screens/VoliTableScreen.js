import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VoliTable from './VoliTable';

const API_BASE_URL = 'http://127.0.0.1:8080'; // Sostituisci con l'IP locale della tua macchina

const fetchData = async (endpoint, setData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    const json = await response.json();
    setData(json);
  } catch (error) {
    console.error('Errore nel recupero dei dati:', error);
  }
};

const VoliInPartenzaScreen = () => {
  const navigation = useNavigation();
  const [voli, setVoli] = useState([]);

  useEffect(() => {
    fetchData('voliInPartenza', setVoli);
  }, []);

  return (
    <View style={styles.container}>
      {/* Intestazione con titolo e link */}
      <Text style={styles.title}>Voli in Partenza</Text>
      {/* Mostra la tabella direttamente in questa schermata */}
      {voli.length > 0 ? (
        <VoliTable data={voli} />
      ) : (
        <Text>Caricamento...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 15,
  },
});

export default VoliInPartenzaScreen;
