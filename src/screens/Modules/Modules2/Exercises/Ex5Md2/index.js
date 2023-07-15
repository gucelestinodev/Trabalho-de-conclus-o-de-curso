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
  ContainerButtons1,
  Title,
} from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderBack from "../../../../../components/Header";
import Modal from "../../../../../components/Modal/ModalError";


const data = [
  ["P", "E", "I", "R", "D", "A", "B", "O"],
  ["Ô", "T", "A", "R", "O", "N", "I", "E"],
  ["O", "Ã", "J", "B", "O", "A", "T", "I"],
  ["D", "E", "L", "U", "A", "R", "O", "T"],
  ["R", "N", "O", "D", "I", "T", "B", "E"],
];

const wordList = ["PEDRO", "ANTÔNIO", "JOÃO", "EDUARDO", "BENEDITO"];

const Ex5Md2 = ({ navigation }) => {
  const [word, setWord] = useState([]);
  const [savedWord, setSavedWord] = useState([]);
  const [isError, setIsError] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleLetterClick = (letter) => {
    setWord([...word, letter]);
  };

  const handleCloseError = () => {
    setIsError(false);
  };

  const handleReset = () => {
    setWord([]);
  };

  const saveCurrentWordIndex = async (index) => {
    try {
      await AsyncStorage.setItem("@current_word_index", index.toString());
      console.log("Índice da palavra atual salva com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar o índice da palavra atual:", error);
    }
  };
  
  const loadCurrentWordIndex = async () => {
    try {
      const storedIndex = await AsyncStorage.getItem("@current_word_index");
      if (storedIndex !== null) {
        setCurrentWordIndex(parseInt(storedIndex, 10));
      }
    } catch (error) {
      console.log("Erro ao carregar o índice da palavra atual:", error);
    }
  };
  

  const handleSave = async () => {
    if (word.join("") !== wordList[currentWordIndex]) {
      setIsError(true);
      return;
    }

    const newWord = { word: word.join(""), index: currentWordIndex };
    setSavedWord([...savedWord, newWord]);
    await AsyncStorage.setItem(
      "@saved_wordEx2Md2",
      JSON.stringify([...savedWord, newWord])
    );
    handleReset();
    setCurrentWordIndex((currentWordIndex + 1) % wordList.length);
    await saveCurrentWordIndex((currentWordIndex + 1) % wordList.length);
  };
  

  const handleDelete = async () => {
    if (savedWord.length > 0) {
      const lastWordIndex = savedWord[savedWord.length - 1].index;
      const newSavedWords = savedWord.slice(0, -1); // remove a última palavra salva
      setSavedWord(newSavedWords);
      setCurrentWordIndex(lastWordIndex);
      try {
        const serializedWords = JSON.stringify(newSavedWords);
        await AsyncStorage.setItem("@saved_wordEx2Md2", serializedWords);
        console.log("Última palavra salva apagada com sucesso!");
      } catch (error) {
        console.log("Erro ao apagar a última palavra salva:", error);
      }
    }
  };

  useEffect(() => {
    const loadSavedWord = async () => {
      const storedWord = await AsyncStorage.getItem("@saved_wordEx2Md2");
      if (storedWord !== null) {
        setSavedWord(JSON.parse(storedWord));
      }
    };

    loadSavedWord();
  }, []);

  const loadCurrentWord = async () => {
    try {
      const serializedWord = await AsyncStorage.getItem("@current_wordEx2Md2");
      if (serializedWord !== null) {
        const loadedWord = JSON.parse(serializedWord);
        setWord(loadedWord);
      }
    } catch (error) {
      console.log("Erro ao carregar a palavra atual:", error);
    }
  };

  const saveCurrentWord = async (key, word) => {
    try {
      const serializedWord = JSON.stringify(word);
      await AsyncStorage.setItem(key, serializedWord);
      console.log("Palavra atual salva com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar a palavra atual:", error);
    }
  };

  const handleGoBack = async () => {
    try {
      await saveCurrentWord("@current_wordEx2Md2", word);
      await AsyncStorage.setItem("params3Ex3Md2", "true");
      navigation.navigate("Modules2");
    } catch (error) {
      console.log("Erro ao armazenar os parâmetros no AsyncStorage:", error);
    }
  };

  useEffect(() => {
    const loadSavedWord = async () => {
      const storedWord = await AsyncStorage.getItem("@saved_wordEx2Md2");
      if (storedWord !== null) {
        setSavedWord(JSON.parse(storedWord));
      }
    };
    loadCurrentWord();
    loadSavedWord();
    loadCurrentWordIndex();
  }, []);

  return (
    <>
    <Modal
        isVisible={isError}
        onClose={() => setIsError(false)}
      />
      <Container>
        <HeaderBack
          text="Exercicio 4"
          onPress={() => navigation.navigate("Modules2")}
        />
        <ContainerWords>
          <Title>Forme os nomes abaixo:</Title>
          <TextWords>{wordList[currentWordIndex]}</TextWords>
        </ContainerWords>
        <ContainerItens>
          {data[currentWordIndex].map((letter, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: 40,
                height: 40,
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
                padding: 10,
                marginRight: 5,
                borderBottomWidth: 2,
              }}
            >
              <Text style={{ fontSize: 30 }}>{letter}</Text>
            </View>
          ))}
        </ContainerItensPalavras>
        <ContainerButtons>
          <ButtonSalvar onPress={savedWord.length === 5 ? null : handleSave}>
            <TextButtonAux>Salvar</TextButtonAux>
          </ButtonSalvar>
          <ButtonExcluir onPress={handleReset}>
            <TextButtonAux>Excluir</TextButtonAux>
          </ButtonExcluir>
        </ContainerButtons>
        {savedWord.map((item, index) => (
          <Text
            key={index}
            style={{ fontSize: 22, marginLeft: 10, marginBottom: 10 }}
          >
            {item?.word}
          </Text>
        ))}
      </Container>
      <ContainerButtons1>
        <ButtonApagar onPress={handleDelete}>
          <TextButtonAux>Apagar</TextButtonAux>
        </ButtonApagar>
      </ContainerButtons1>
      {savedWord.length < 5 ? (
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

export default Ex5Md2;
