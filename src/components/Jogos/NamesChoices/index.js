import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, ButtonWord, TextButton } from './styles';

const NamesChoices = ({ data, onLetterPress, isLetterSelected }) => {
  return (
    <Container>
      {data.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={{ flexDirection: 'row' }}>
          {row.map((letter, colIndex) => (
            <ButtonWord 
              key={`col-${colIndex}`} 
              onPress={() => onLetterPress(rowIndex, colIndex)}
              style={{ backgroundColor: isLetterSelected(rowIndex, colIndex) ? 'white' : '#D9D9D9' }} // Adicionado
            >
              <TextButton style={{ margin: 5 }}>{letter}</TextButton>
            </ButtonWord>
          ))}
        </View>
      ))}
    </Container>
  );
};

export default NamesChoices;
