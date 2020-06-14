import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo-red.png')}
        />
        <Text>Sell What you Don't Need</Text>
      </View>
      <View style={styles.register} />
      <View style={styles.login} />
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  register: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  login: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ECDC4',
  },
});
