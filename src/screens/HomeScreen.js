import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return <Text style={styles.text}>HomeScreen Is Mine</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
  },
});

export default HomeScreen;
