import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompagnieTable = ({ data }) => {
  return (
    <View style={styles.table}>
      {/* Intestazione della tabella */}
      <View style={styles.tableRowHeader}>
        <Text style={[styles.tableCell, styles.tableHeaderCell]}>Nome</Text>
        <Text style={[styles.tableCell, styles.tableHeaderCell]}>
          Anno di Fondazione
        </Text>
      </View>
      {/* Corpo della tabella */}
      {data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.tableCell}>{item.nome}</Text>
          <Text style={styles.tableCell}>{item.annoFondaz}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tableRowHeader: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  tableHeaderCell: {
    fontWeight: 'bold',
  },
});

export default CompagnieTable;
