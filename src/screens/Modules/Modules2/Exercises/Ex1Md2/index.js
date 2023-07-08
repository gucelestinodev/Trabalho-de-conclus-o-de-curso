import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import {
  Container,
  ContainerItens,
  ButtonApagar,
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
  ContainerItensPalavras,
  TextPalavra,
  PalavrasJuntas,
  Title,
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderBack from "../../../../../components/Header";

const data = [
  ["FA", "DE", "DI", "GA", "CA"],
  ["CA", "MI", "LA", "BO", "NHO"],
  ["SI", "TI", "BA", "RE", "NA"],
  ["RU", "DRA", "PE", "DO", "PI"],
  ["TI", "NHA", "PI", "QUI"],
  ["VI", "JU", "QUE", "DA", "FE"],
];

const wordList = ["FADIGA", "CAMINHO", "RETINA", "PEDRA", "TINHA", "VIDA"];

const Ex1Md2 = ({ navigation }) => {
  const [word, setWord] = useState([]);
  const [savedWord, setSavedWord] = useState([]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleLetterClick = (letter) => {
    setWord((prevWord) => [...prevWord, letter]);
  };

  const handleReset = () => {
    setWord((prevWord) => {
      const newWord = [...prevWord];
      newWord.pop();
      return newWord;
    });
  };

  const handleClear = () => {
    setWord([]);
  };

  const handleSave = () => {
    const newWord = { word: word.join(""), index: currentWordIndex };
    setSavedWord((prevSavedWord) => {
      const newSavedWords = [...prevSavedWord, newWord];
      AsyncStorage.setItem("@saved_word", JSON.stringify(newSavedWords))
        .then(() => {
          console.log("Palavra salva com sucesso!");
          handleClear();
          setCurrentWordIndex((currentWordIndex + 1) % wordList.length);
        })
        .catch((error) => {
          console.log("Erro ao salvar a palavra:", error);
        });
      return newSavedWords;
    });
  };

  const handleDelete = async () => {
    if (savedWord.length > 0) {
      const lastWordIndex = savedWord[savedWord.length - 1].index;
      const newSavedWords = savedWord.slice(0, -1); // remove a última palavra salva
      setSavedWord(newSavedWords);
      setCurrentWordIndex(lastWordIndex);
      try {
        const serializedWords = JSON.stringify(newSavedWords);
        await AsyncStorage.setItem("@saved_word", serializedWords);
        console.log("Última palavra salva apagada com sucesso!");
      } catch (error) {
        console.log("Erro ao apagar a última palavra salva:", error);
      }
    }
  };

  useEffect(() => {
    const loadSavedWord = async () => {
      const storedWord = await AsyncStorage.getItem("@saved_word");
      if (storedWord !== null) {
        setSavedWord(JSON.parse(storedWord));
      }
    };

    loadSavedWord();
  }, []);

  const handleGoBack = async () => {
    try {
      await AsyncStorage.setItem("paramsEx1Md2", "true");
      navigation.navigate("Modules2");
    } catch (error) {
      console.log("Erro ao armazenar os parâmetros no AsyncStorage:", error);
    }
  };

  const lastIndex =
    savedWord.length > 0 ? savedWord[savedWord.length - 1].index : -1;

  return (
    <>
      <Container>
        <HeaderBack
          text="Exercicio 1"
          onPress={() => navigation.navigate("Modules2")}
        />
        <ContainerWords>
          <Title>Forme as palavras abaixo:</Title>
          <TextWords>{wordList[currentWordIndex]}</TextWords>
        </ContainerWords>
        <ContainerItens>
          {data[currentWordIndex].map((letter, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: 70,
                height: 70,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#D9D9D9",
                margin: 5,
                borderRadius: 5,
              }}
              onPress={() => handleLetterClick(letter)}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: "#000000",
                  fontFamily: "Roboto-Bold",
                }}
              >
                {letter}
              </Text>
            </TouchableOpacity>
          ))}
        </ContainerItens>
        <ContainerItensPalavras>
          {word.map((letter, index) => (
            <View
              key={index}
              style={{
                marginRight: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 25 }}>{letter}</Text>
            </View>
          ))}
        </ContainerItensPalavras>
        <Border />
        <ContainerButtons>
          <ButtonSalvar onPress={handleSave}>
            <TextButtonAux>Salvar</TextButtonAux>
          </ButtonSalvar>
          <ButtonExcluir onPress={handleReset}>
            <TextButtonAux>Excluir</TextButtonAux>
          </ButtonExcluir>
        </ContainerButtons>
        {savedWord.map((item, index) => (
          <TextPalavra key={index}>{item?.word}</TextPalavra>
        ))}
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
      {lastIndex === 5 ? (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviar onPress={() => handleGoBack()}>
            <TextButton>Enviar</TextButton>
          </ButtonEnviar>
        </View>
      ) : (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviarCinza>
            <TextButton>Enviar</TextButton>
          </ButtonEnviarCinza>
        </View>
      )}
    </>
  );
};

export default Ex1Md2;
