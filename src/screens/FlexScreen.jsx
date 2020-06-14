import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewOne} />
      <View style={styles.viewTwoParent}>
        <View style={styles.viewTwo} />
      </View>
      <View style={styles.viewThree} />
    </View>
  );
};

export default FlexScreen;

const styles = StyleSheet.create({
  container: {
    height: 300,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOne: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  viewTwoParent: {
    height: 100,
    justifyContent: 'flex-end',
    borderWidth: 3,
  },
  viewTwo: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  viewThree: {
    width: 50,
    height: 50,
    backgroundColor: 'purple',
  },
});
