import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListScreen = () => {
  const friendList = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 30 },
    { name: 'Friend #3', age: 21 },
    { name: 'Friend #4', age: 18 },
    { name: 'Friend #5', age: 34 },
    { name: 'Friend #6', age: 40 },
    { name: 'Friend #7', age: 19 },
    { name: 'Friend #8', age: 16 },
    { name: 'Friend #9', age: 22 },
    { name: 'Friend #10', age: 25 },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friendList}
        renderItem={({ item }) => {
          return (
            <Text style={styles.itemStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  itemStyle: {
    marginVertical: 30,
  },
});
