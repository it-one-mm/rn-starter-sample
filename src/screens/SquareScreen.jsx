import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const actions = {
  CHANGE_RED: 'change_red',
  CHANGE_GREEN: 'change_green',
  CHANGE_BLUE: 'change_blue',
};

const reducer = (state, action) => {
  // state === {red: 0, green: 0, blue: 0}
  // action === {colorToChange: 'red', amount: 15}
  switch (action.type) {
    case actions.CHANGE_RED:
      return state.red + COLOR_INCREMENT > 255 ||
        state.red + -COLOR_INCREMENT < 0
        ? state
        : { ...state, red: state.red + COLOR_INCREMENT };
    case actions.CHANGE_GREEN:
      return state.green + COLOR_INCREMENT > 255 ||
        state.green + COLOR_INCREMENT < 0
        ? state
        : { ...state, green: state.green + COLOR_INCREMENT };
    case actions.CHANGE_BLUE:
      return state.blue + COLOR_INCREMENT > 255 ||
        state.blue + COLOR_INCREMENT < 0
        ? state
        : { ...state, blue: state.blue + COLOR_INCREMENT };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: actions.CHANGE_RED })}
        onDecrease={() => dispatch({ type: actions.CHANGE_RED })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: actions.CHANGE_GREEN })}
        onDecrease={() => dispatch({ type: actions.CHANGE_GREEN })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: actions.CHANGE_BLUE })}
        onDecrease={() => dispatch({ type: actions.CHANGE_BLUE })}
      />

      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
