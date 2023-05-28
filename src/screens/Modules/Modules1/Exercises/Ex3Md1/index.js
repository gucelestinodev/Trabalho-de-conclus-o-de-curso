import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const data = [
  ["S", "I", "C", "M", "H", "I"],
  ["A", "U", "K", "A", "J", "A"],
  ["L", "L", "O", "P", "H", "E"],
  ["A", "C", "Z", "L", "M", "A"],
  ["R", "R", "O", "V", "O", "O"],
  ["I", "U", "U", "V", "H", "A"],
  ["O", "T", "E", "H", "H", "A"],
];

const wordList = ["SALARIO", "BALA", "OVO"];

const ROW_HEIGHT = 50;
const COL_WIDTH = 50;

export default function Ex3Md1() {
  const [selectedWord, setSelectedWord] = useState("");
  const [selectedCells, setSelectedCells] = useState([]);

  console.log(selectedCells)
  console.log(selectedWord)

  const handleGestureEvent = (event) => {
    const { x, y } = event.nativeEvent;
    const rowIndex = Math.floor(y / ROW_HEIGHT);
    const colIndex = Math.floor(x / COL_WIDTH);
    if (!selectedCells.includes(`${rowIndex}-${colIndex}`)) {
      setSelectedCells([...selectedCells, `${rowIndex}-${colIndex}`]);
      setSelectedWord(selectedWord + data[rowIndex][colIndex]);
    }
  };

  const handleStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      checkIfWordExists();
      setSelectedCells([]);
      setSelectedWord("");
    }
  };

  const checkIfWordExists = () => {
    if (wordList.includes(selectedWord)) {
      console.log("Palavra encontrada: ", selectedWord);
    }
  };

  return (
    <GestureHandlerRootView style={{ padding: 20 }}>
      <Text>Encontre as palavras: SALARIO, BALA, OVO</Text>
      <PanGestureHandler
        onGestureEvent={handleGestureEvent}
        onHandlerStateChange={handleStateChange}
      >
        <View style={{ height: ROW_HEIGHT * data.length, width: COL_WIDTH * data[0].length }}>
          {data.map((row, rowIndex) => (
            <View key={rowIndex} style={{ flexDirection: 'row' }}>
              {row.map((letter, colIndex) => (
                <View 
                  key={colIndex} 
                  style={[styles.cell, selectedCells.includes(`${rowIndex}-${colIndex}`) ? styles.selectedCell : null]}
                >
                  <Text>{letter}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  cell: {
    height: ROW_HEIGHT,
    width: COL_WIDTH,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedCell: {
    backgroundColor: 'lightblue'
  }
});