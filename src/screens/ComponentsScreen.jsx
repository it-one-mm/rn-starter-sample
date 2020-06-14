import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Min Thet Naing';

  return (
    <View>
      <Text style={styles.headerStyle}>Getting Started with React Native</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
