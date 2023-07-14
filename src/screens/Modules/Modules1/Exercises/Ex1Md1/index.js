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
  WordsLetras,
  ButtonApagar,
  TitleEx
} from "./styles";
import Grid from "../../../../../components/Jogos/HuntingWords/Grid";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HeaderBack from "../../../../../components/Header";
import Modal from "../../../../../components/Modal/ModalError";

const data = [["A", "E", "I", "O", "U"]];

const Ex1Md1 = ({ navigation }) => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [undo, setUndo] = useState(false);
  const [words, setWords] = useState([]);
  const [palavras, setPalavras] = useState([]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const wordList = ["AMANDA", "ELZA", "IVONE", "ODILON", "UBALDO"];

  const saveWords = async (key, selectedLetters) => {
    try {
      const selectedWord = selectedLetters
        .map((letter) => data[letter.row][letter.col])
        .join("");
      const serializedWords = JSON.stringify([...words, selectedWord]);
      await AsyncStorage.setItem(key, serializedWords);
      console.log("Palavras salvas com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar as palavras:", error);
    }
  };

  const loadWords = async () => {
    try {
      const serializedWords = await AsyncStorage.getItem("palavrasEx1Md1");
      if (serializedWords !== null) {
        const loadedWords = JSON.parse(serializedWords);
        setWords(loadedWords);
      }
    } catch (error) {
      console.log("Erro ao carregar as palavras:", error);
    }
  };

  useEffect(() => {
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
    const currentWord = wordList[currentWordIndex];

    if (getVowels(currentWord) === selectedWord) {
      setWords([...words, selectedWord]);
      setSelectedLetters([]);
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      setIsModalVisible(true);
      console.log("aqui");
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
      await saveWords("palavrasEx1Md1", selectedLetters);
      await AsyncStorage.setItem("params", "true");
      navigation.navigate("Modules1");
    } catch (error) {
      console.log("Erro ao armazenar os parâmetros no AsyncStorage:", error);
    }
  };

  function getVowels(word) {
    return Array.from(word)
      .filter((letter) => "AEIOU".includes(letter))
      .join("");
  }

  return (
    <>
      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
      <Container>
        <HeaderBack
          text="Exercicio 1"
          onPress={() => navigation.navigate("Modules1")}
        />
        <TitleEx>Digite as vogais:</TitleEx>
        <ContainerWords>
          <TextWords>{wordList[currentWordIndex]}</TextWords>
        </ContainerWords>
        <ContainerItens>
          <Grid data={data} onLetterPress={handleLetterPress} />
        </ContainerItens>
        <TextWords>{selectedWord}</TextWords>
        <Border />
        <ContainerButtons>
          <ButtonSalvar onPress={handleSave}>
            <TextButtonAux>Salvar</TextButtonAux>
          </ButtonSalvar>
          <ButtonExcluir onPress={handleUndo}>
            <TextButtonAux>Excluir</TextButtonAux>
          </ButtonExcluir>
        </ContainerButtons>
        <WordsItens>
          <View styles={{ flexDirection: "column" }}>
            <WordsLetras>Amanda</WordsLetras>
            <WordsLetras>Elza</WordsLetras>
            <WordsLetras>Ivone</WordsLetras>
            <WordsLetras>Odilon</WordsLetras>
            <WordsLetras>Ubaldo</WordsLetras>
          </View>
          <View style={{ flexDirection: "column" }}>
            <TextItens>{words[0]}</TextItens>
            <TextItens>{words[1]}</TextItens>
            <TextItens>{words[2]}</TextItens>
            <TextItens>{words[3]}</TextItens>
            <TextItens>{words[4]}</TextItens>
          </View>
        </WordsItens>
        <View style={{ position: "absolute", left: 260, top: 640 }}>
          <ButtonApagar onPress={handleDelete}>
            <TextButtonAux>Apagar</TextButtonAux>
          </ButtonApagar>
        </View>
      </Container>
      {words.length < 5 ? (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviarCinza>
            <TextButton>Enviar</TextButton>
          </ButtonEnviarCinza>
        </View>
      ) : (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviar
            onPress={() => {
              handleGoBack();
            }}
          >
            <TextButton>Enviar</TextButton>
          </ButtonEnviar>
        </View>
      )}
    </>
  );
};

export default Ex1Md1;
