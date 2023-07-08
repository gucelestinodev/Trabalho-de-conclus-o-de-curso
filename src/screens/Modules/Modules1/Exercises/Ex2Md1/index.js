import React, { useState, useEffect } from "react";
import { View } from "react-native";
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
  WordsItens1,
} from "./styles";
import Grid from "../../../../../components/Jogos/HuntingWords/Grid";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HeaderBack from "../../../../../components/Header";

const data = [
  ["TRA", "TRE", "TRI", "TRO", "TRU"],
  ["BA", "BE", "BI", "BO", "BU"],
  ["LHA", "LHE", "LHI", "LHO", "LHU"],
];

const Ex2Md1 = ({ navigation }) => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [undo, setUndo] = useState(false);
  const [words, setWords] = useState([]);

  console.log(words);

  const saveWords = async (words, screen) => {
    try {
      const serializedWords = JSON.stringify(words);
      await AsyncStorage.setItem(`${screen}_palavras`, serializedWords);
      console.log("Palavras salvas com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar as palavras:", error);
    }
  };

  useEffect(() => {
    const loadWords = async () => {
      try {
        const serializedWords = await AsyncStorage.getItem("Ex2Md1_palavras");
        if (serializedWords !== null) {
          const loadedWords = JSON.parse(serializedWords);
          setWords(loadedWords);
        }
      } catch (error) {
        console.log("Erro ao carregar as palavras:", error);
      }
    };
    loadWords();
  }, []);

  const handleLetterPress = (row, col) => {
    setSelectedLetters([...selectedLetters, { row, col }]);
    setUndo(false);
  };

  const handleUndo = () => {
    setSelectedLetters(selectedLetters.slice(0, -1));
    setUndo(true);
  };

  const handleSave = () => {
    const selectedWord = selectedLetters
      .map((letter) => data[letter.row][letter.col])
      .join("");
    if (selectedWord !== "") {
      const newWords = [...words, selectedWord];
      setWords(newWords);
      setSelectedLetters([]);
      saveWords(newWords, "Ex2Md1"); // Salva as palavras atualizadas no AsyncStorage, passando o nome da tela como parâmetro
    }
  };

  const handleDelete = async () => {
    const newWords = words.slice(0, -1); // remove a última palavra
    setWords(newWords);
    try {
      const serializedWords = JSON.stringify(newWords);
      await AsyncStorage.setItem("palavrasEx1Md1", serializedWords);
      console.log("Palavra apagada com sucesso!");
    } catch (error) {
      console.log("Erro ao apagar a palavra:", error);
    }
  };

  const selectedWord = selectedLetters
    .map((letter) => data[letter.row][letter.col])
    .join("");

  const handleGoBack = async () => {
    try {
      await AsyncStorage.setItem("params2", "true");
      navigation.navigate("Modules1");
    } catch (error) {
      console.log("Erro ao armazenar os parâmetros no AsyncStorage:", error);
    }
  };

  return (
    <>
      <Container>
        <HeaderBack
          text="Exercicio 2"
          onPress={() => navigation.navigate("Modules1")}
        />
        <ContainerWords>
          <TextWords>Forme 4 palavras juntando as sílabas abaixo:</TextWords>
        </ContainerWords>
        <ContainerItens>
          <Grid data={data} onLetterPress={handleLetterPress} />
        </ContainerItens>
        <ContainerButtons>
          <ButtonSalvar onPress={handleSave}>
            <TextButtonAux>Salvar</TextButtonAux>
          </ButtonSalvar>
          <ButtonExcluir onPress={handleUndo}>
            <TextButtonAux>Excluir</TextButtonAux>
          </ButtonExcluir>
        </ContainerButtons>
        <TextWords>{selectedWord}</TextWords>
        <Border />
        <View style={{ flexDirection: "row", width: "50%" }}>
          <WordsItens>
            <TextItens>{words[0]}</TextItens>
            <TextItens>{words[1]}</TextItens>
          </WordsItens>
          <WordsItens1>
            <TextItens>{words[2]}</TextItens>
            <TextItens>{words[3]}</TextItens>
          </WordsItens1>
        </View>
        <View
          style={{
            position: "absolute",
            left: 260,
            top: 620,
          }}
        >
          <ButtonApagar onPress={handleDelete}>
            <TextButtonAux>Apagar</TextButtonAux>
          </ButtonApagar>
        </View>
      </Container>
      {words.length < 4 ? (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviarCinza>
            <TextButton>Enviar</TextButton>
          </ButtonEnviarCinza>
        </View>
      ) : (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviar onPress={() => handleGoBack()}>
            <TextButton>Enviar</TextButton>
          </ButtonEnviar>
        </View>
      )}
    </>
  );
};

export default Ex2Md1;
