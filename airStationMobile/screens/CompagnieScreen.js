import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CompagnieTable from './Table';

const API_BASE_URL = 'http://127.0.0.1:8080'; // Sostituisci con il tuo IP locale

const fetchData = async (endpoint, setData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    const json = await response.json();
    console.log("Dati ricevuti:", json);
    setData(json);
  } catch (error) {
    console.error('Errore nel recupero dei dati:', error);
  }
};


const CompagnieScreen = () => {
  const [compagnie, setCompagnie] = useState([]);

  useEffect(() => {
    fetchData('compagnia', setCompagnie);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compagnie Aeree</Text>
      {compagnie.length > 0 ? (
        <CompagnieTable data={compagnie} />
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CompagnieScreen;
