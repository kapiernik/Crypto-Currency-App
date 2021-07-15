import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from './src/components/header';
import CurrencyCard from './src/components/currencyCard';

export default function App() {
  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        <CurrencyCard />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 0
  }
})