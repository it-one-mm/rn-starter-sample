import React, { useState } from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  //   console.log(colors);

  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => setColors([...colors, getRandomColor()])}
      />
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => (
          <View style={{ width: 100, height: 100, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

export default ColorScreen;

const styles = StyleSheet.create({});
