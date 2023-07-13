import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import {
  Container,
  ContainerItens,
  TextItens,
  WordsItens,
  ContainerWords,
  TextWords,
  ButtonEnviar,
  TextButton,
  Border,
  ButtonExcluir,
  ButtonSalvar,
  TextButtonAux,
  ContainerButtons,
  ButtonEnviarCinza,
  ButtonApagar,
  ContainerNames,
} from "./styles";
import Grid from "../../../../../components/Jogos/NamesChoices";

import AsyncStorage from "@react-native-async-storage/async-storage";

import HeaderBack from "../../../../../components/Header";

const data = [
  ["Dezembro", "Fevereiro", "Março", "Janeiro"],
  ["Abril", "Julho", "Agosto", "Maio"],
  ["Setembro", "Novembro", "Outubro", "Junho"],
];

const Ex1Md3 = ({ navigation }) => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [undo, setUndo] = useState(false);
  const [selectedNames, setSelectedNames] = useState([]);

  const [selectedMonths, setSelectedMonths] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedNames = await AsyncStorage.getItem("selectedNamesEx1Md3");
        if (storedNames) {
          setSelectedNames(JSON.parse(storedNames));
        }
      } catch (error) {
        console.log("Error loading data: ", error);
      }
    };

    loadData();
  }, []);

  const handleLetterPress = (row, col) => {
    const name = data[row][col];
    if (!selectedMonths.includes(name)) {
      // Verifica se o mês já foi selecionado
      setSelectedLetters([...selectedLetters, { row, col }]);
      setSelectedNames([...selectedNames, name]);
      setSelectedMonths([...selectedMonths, name]); // Adiciona o mês à lista de meses selecionados
      setUndo(false);
    }
  };

  const handleUndo = () => {
    if (selectedLetters.length > 0) {
      const lastSelectionIndex = selectedLetters.length - 1;
      const lastSelection = selectedLetters[lastSelectionIndex];
      const newSelectedLetters = [...selectedLetters];
      newSelectedLetters.splice(lastSelectionIndex, 1);
      setSelectedLetters(newSelectedLetters);

      const name = data[lastSelection.row][lastSelection.col];
      const newSelectedNames = selectedNames.filter(
        (selectedName, index) => index !== lastSelectionIndex
      );
      setSelectedNames(newSelectedNames);

      // Remove o último mês selecionado da lista de meses selecionados
      const newSelectedMonths = selectedMonths.filter(
        (selectedMonth, index) => index !== lastSelectionIndex
      );
      setSelectedMonths(newSelectedMonths);
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(
        "selectedNamesEx1Md3",
        JSON.stringify(selectedNames)
      );
      await AsyncStorage.setItem("paramsEx1Md3", "true");
      navigation.navigate("Modules3");
    } catch (error) {
      console.log("Error saving data: ", error);
    }
  };

  const handleNameClick = (index) => {
  // Remova o item selecionado das listas selectedLetters, selectedNames e selectedMonths
  const newSelectedLetters = selectedLetters.filter(
    (selectedLetter, i) => i !== index
  );
  setSelectedLetters(newSelectedLetters);

  const newSelectedNames = selectedNames.filter(
    (selectedName, i) => i !== index
  );
  setSelectedNames(newSelectedNames);

  const newSelectedMonths = selectedMonths.filter(
    (selectedMonth, i) => i !== index
  );
  setSelectedMonths(newSelectedMonths);
};


  return (
    <>
      <HeaderBack
        text="Exercicio 1"
        onPress={() => navigation.navigate("Modules3")}
      />
      <Container>
        <ContainerWords>
          <TextWords>Coloque os meses na ordem:</TextWords>
        </ContainerWords>
        <ContainerItens>
          <Grid
            data={data}
            onLetterPress={handleLetterPress}
            isLetterSelected={(row, col) =>
              selectedMonths.includes(data[row][col])
            }
          />
        </ContainerItens>
        <ContainerButtons>
          <ButtonExcluir onPress={handleUndo}>
            <TextButtonAux>Excluir</TextButtonAux>
          </ButtonExcluir>
        </ContainerButtons>

        {[0, 3, 6, 9].map((start) => (
          <View style={{ flexDirection: "row" }} key={start}>
            {Array(3)
              .fill(null)
              .map((_, index) => {
                const name = selectedNames[start + index];
                return (
                  <ContainerNames key={index}>
                    {name ? (
                      <TextItens onPress={() => handleNameClick(index)}>
                        {name}
                      </TextItens>
                    ) : (
                      <View style={{ height: 46 }} />
                    )}
                    <Border />
                  </ContainerNames>
                );
              })}
          </View>
        ))}
      </Container>
      {selectedNames.length < 12 ? (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviarCinza>
            <TextButton>Enviar</TextButton>
          </ButtonEnviarCinza>
        </View>
      ) : (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviar onPress={() => saveData()}>
            <TextButton>Enviar</TextButton>
          </ButtonEnviar>
        </View>
      )}
    </>
  );
};

export default Ex1Md3;
