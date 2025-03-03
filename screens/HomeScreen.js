import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  ImageBackground 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const API_BASE_URL = 'http://127.0.0.1:8080'; // Sostituisci con l'indirizzo IP corretto

const fetchData = async (endpoint, setData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);
    const json = await response.json();
    setData(json);
  } catch (error) {
    console.error('Errore nel recupero dei dati:', error);
  }
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const [compagnie, setCompagnie] = useState([]);

  useEffect(() => {
    fetchData('compagnia', setCompagnie);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text style={styles.cardSubtitle}>Fondato nel {item.annoFondaz}</Text>
    </View>
  );

  return (
    <ImageBackground 
      source={require('../assets/airplane-bg.jpg')} 
      style={styles.background}
      resizeMode='repeat'
    >
      <View style={styles.overlay}>
        <Text style={styles.header}>Compagnie Aeree</Text>
        <Text style={styles.subHeader}>Scopri le migliori compagnie del mondo!</Text>
        
        <FlatList
          data={compagnie}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('VoliTableScreen')}
        >
          <Text style={styles.buttonText}>Visualizza Voli in Partenza</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    resizeMode:"repeat",
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // overlay scuro per migliorare la leggibilità
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  header: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
    textAlign: 'center',
    
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    marginLeft: "25%",
    marginRight: "25%",
    
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 'auto',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
