import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1', Age: 20 },
    { name: 'Friend 2', Age: 30 },
    { name: 'Friend 3', Age: 40 },
    { name: 'Friend 4', Age: 50 },
    { name: 'Friend 5', Age: 60 },
    { name: 'Friend 6', Age: 70 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name}-{item.Age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
