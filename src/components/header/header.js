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


const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    width: hundredPercent,
    zIndex: 5
  },
  headerTitle: {
    borderStyle: 'solid',
    paddingBottom: 40,
    paddingTop: 55,
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000'
  }
});

const { headerContainer, headerTitle } = styles;