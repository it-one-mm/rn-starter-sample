import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter Password..."
        secureTextEntry={true}
        value={password}
        onChangeText={newText => setPassword(newText)}
      />
      {password.length <= 5 ? (
        <Text>Password must be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
});
