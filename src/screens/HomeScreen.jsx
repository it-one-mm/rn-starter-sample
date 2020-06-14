import React from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Welcome To IT ONE MM!</Text>
      <Button
        title="Go To Components Screen"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go To List Screen"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go To Image Screen"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go To Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go To Color Screen"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go To Square Screen"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go To Text Screen"
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title="Go To Box Screen"
        onPress={() => navigation.navigate('Box')}
      />
      <Button
        title="Go To Flex Screen"
        onPress={() => navigation.navigate('Flex')}
      />
      <Button
        title="Go To Welcome Screen"
        onPress={() => navigation.navigate('Welcome')}
      />
      <Button
        title="Go To ViewImage Screen"
        onPress={() => navigation.navigate('ViewImage')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
});
