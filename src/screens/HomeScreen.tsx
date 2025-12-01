import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { HelloWorld } from '../components/HelloWorld';

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      <HelloWorld />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});

