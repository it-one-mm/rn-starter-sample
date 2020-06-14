import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  useDeviceOrientation,
  useDimensions,
} from '@react-native-community/hooks';

const BoxScreen = () => {
  const { landscape } = useDeviceOrientation();
  const { width } = useDimensions();
  return (
    <View
      style={{
        backgroundColor: 'green',
        width: width,
        height: landscape ? '100%' : '30%',
        margin: landscape ? 0 : 5,
        padding: 10,
      }}
    >
      <Text>Video Player</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({});
