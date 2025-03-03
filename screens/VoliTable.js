import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VoliTable = ({ data }) => {
  return (
    <View style={styles.table}>
      {/* Intestazione */}
      <View style={styles.tableRowHeader}>
        <Text style={[styles.tableCell, styles.tableHeaderCell]}>ID</Text>
        <Text style={[styles.tableCell, styles.tableHeaderCell]}>Compagnia</Text>
      </View>
      {/* Righe dei dati */}
      {data.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.tableCellRow}>{item.id}</Text>
          <Text style={styles.tableCellRow}>{item.compagnia}</Text>
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
    backgroundColor: '#0062ff',
    
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: "#d0e2f5s"
  },
  tableCell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  tableCellRow: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor:"#d0e2f5"
  },
  tableHeaderCell: {
    fontWeight: 'bold',
  },
});

export default VoliTable;
