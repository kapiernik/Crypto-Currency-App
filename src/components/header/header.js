import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={headerContainer}>
          <Text style={headerTitle}>Cryptocurency app</Text>
        </View>
      );
}

const hundredPercent =  '100%';
const half = '20%';


const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    width: hundredPercent
  },
  headerTitle: {
    borderStyle: 'solid',
    padding: 24,
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

const { headerContainer, headerTitle } = styles;