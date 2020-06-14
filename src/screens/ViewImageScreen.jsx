import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../assets/chair.jpg')}
      />
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />
    </View>
  );
};

export default ViewImageScreen;

/* Note: 
    closeIconStyle and deleteIconStyle are duplicate 
    To Avoid this see common styles mixins and solve this 
    https://www.reactnative.guide/8-styling/8.2-common-styles-mixins.html
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#EA676A',
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#72CAC3',
    position: 'absolute',
    top: 40,
    right: 30,
  },
});
