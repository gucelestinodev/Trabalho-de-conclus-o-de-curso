import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Title,
  Container,
  ButtonEnviar,
  TextButton,
  ButtonEnviarCinza,
  ContainerFull,
  TitleOption,
  ContainerSepareitor,
} from "./styles";

import HeaderBack from "../../../../../components/Header";
import ModalError from "../../../../../components/Modal/ModalError";

const Ex2Md5 = ({ navigation }) => {
  const [selectedButtons, setSelectedButtons] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);

  const buttonNumbers = [85, 87];
  const buttonNumbers1 = [40, 46];
  const buttonNumbers2 = [33, 31];
  const buttonNumbers3 = [91, 94];

  useEffect(() => {
    retrieveSelectedButtons();
  }, []);

  useEffect(() => {
    storeSelectedButtons();
  }, [selectedButtons]);

  const checkSelections = () => {
    const targetNumbers = {
      container1: 85,
      container2: 46,
      container3: 31,
      container4: 94,
    };

    // Verificar se as propriedades e valores dos objetos correspondem
    for (let container in targetNumbers) {
      if (selectedButtons[container] !== targetNumbers[container]) {
        return false;
      }
      console.log(
        selectedButtons[container],
        "aqui tem mais coisa",
        targetNumbers[container]
      );
    }
    return true;
  };

  const retrieveSelectedButtons = async () => {
    try {
      const value = await AsyncStorage.getItem("selectedButtons");
      if (value !== null) {
        setSelectedButtons(JSON.parse(value));
      }
    } catch (error) {
      console.error(
        "Error retrieving selected buttons from AsyncStorage:",
        error
      );
    }
  };

  const storeSelectedButtons = async () => {
    try {
      const value = JSON.stringify(selectedButtons);
      await AsyncStorage.setItem("selectedButtons", value);
    } catch (error) {
      console.error("Error storing selected buttons in AsyncStorage:", error);
    }
  };

  const handleButtonClick = (container, number) => {
    setSelectedButtons((prevState) => ({
      ...prevState,
      [container]: number,
    }));
  };

  const isButtonSelected = (container, number) =>
    selectedButtons[container] === number;

  const handleGoBack = async () => {
    // Verificar se as respostas estão corretas
    if (!checkSelections()) {
      // Mostrar uma mensagem ao usuário se a resposta estiver errada
      alert(
        "Por favor, verifique sua resposta. Os números selecionados devem ser antecessores dos números dados."
      );
      return;
    }

    try {
      await AsyncStorage.setItem("paramsEx2Md5", "true");
      navigation.navigate("Modules5");
    } catch (error) {
      console.log("Erro ao armazenar os parâmetros no AsyncStorage:", error);
    }
  };

  return (
    <>
      <ModalError
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
      <HeaderBack
        text="Exercicio 2"
        onPress={() => navigation.navigate("Modules5")}
      />
      <Container>
        <TitleOption>Clique no número antecessor</TitleOption>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 60,
          }}
        >
          <ContainerFull>
            <Title>86</Title>
            <View style={styles.buttonContainer}>
              {buttonNumbers.map((number) => (
                <TouchableOpacity
                  key={number}
                  style={[
                    styles.button,
                    isButtonSelected("container1", number) &&
                      styles.selectedButton,
                  ]}
                  onPress={() => handleButtonClick("container1", number)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      isButtonSelected("container1", number) &&
                        styles.selectedButtonText,
                    ]}
                  >
                    {number}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ContainerFull>
          <ContainerSepareitor />
          <ContainerFull>
            <Title>47</Title>
            <View style={styles.buttonContainer}>
              {buttonNumbers1.map((number) => (
                <TouchableOpacity
                  key={number}
                  style={[
                    styles.button,
                    isButtonSelected("container2", number) &&
                      styles.selectedButton,
                  ]}
                  onPress={() => handleButtonClick("container2", number)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      isButtonSelected("container2", number) &&
                        styles.selectedButtonText,
                    ]}
                  >
                    {number}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ContainerFull>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ContainerFull>
            <Title>32</Title>
            <View style={styles.buttonContainer}>
              {buttonNumbers2.map((number) => (
                <TouchableOpacity
                  key={number}
                  style={[
                    styles.button,
                    isButtonSelected("container3", number) &&
                      styles.selectedButton,
                  ]}
                  onPress={() => handleButtonClick("container3", number)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      isButtonSelected("container3", number) &&
                        styles.selectedButtonText,
                    ]}
                  >
                    {number}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ContainerFull>
          <ContainerSepareitor />
          <ContainerFull>
            <Title>95</Title>
            <View style={styles.buttonContainer}>
              {buttonNumbers3.map((number) => (
                <TouchableOpacity
                  key={number}
                  style={[
                    styles.button,
                    isButtonSelected("container4", number) &&
                      styles.selectedButton,
                  ]}
                  onPress={() => handleButtonClick("container4", number)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      isButtonSelected("container4", number) &&
                        styles.selectedButtonText,
                    ]}
                  >
                    {number}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ContainerFull>
        </View>
      </Container>
      {Object.keys(selectedButtons).length === 4 ? (
        <View style={{ alignItems: "center", backgroundColor: "#FFFFFF" }}>
          <ButtonEnviar
            onPress={() => {
              if (checkSelections()) {
                handleGoBack();
              } else {
                setModalVisible(true);
              }
            }}
          >
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

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  selectedButton: {
    backgroundColor: "#4682B4",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  selectedButtonText: {
    color: "white",
  },
});

export default Ex2Md5;
