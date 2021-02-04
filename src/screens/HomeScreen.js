import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen Is Mine</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to list demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Image Screen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
  },
});

export default HomeScreen;
