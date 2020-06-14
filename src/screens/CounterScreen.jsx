import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const COUNTER_INCREMENT = 1;

const actions = {
  CHANGE_COUNTER: 'change_counter',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_COUNTER:
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  const { counter } = state;

  return (
    <View>
      <Button
        title="Increment"
        onPress={() =>
          dispatch({ type: actions.CHANGE_COUNTER, payload: COUNTER_INCREMENT })
        }
      />
      <Button
        title="Decrement"
        onPress={() =>
          dispatch({
            type: actions.CHANGE_COUNTER,
            payload: -COUNTER_INCREMENT,
          })
        }
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
