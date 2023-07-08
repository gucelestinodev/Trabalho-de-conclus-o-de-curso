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

const Ex4Md5 = ({ navigation }) => {
  const [selectedButtonsNew, setSelectedButtonsNew] = useState({});
  const buttonNumbers = [85, 87];
  const buttonNumbers1 = [48, 46];
  const buttonNumbers2 = [33, 31];
  const buttonNumbers3 = [96, 94];

  useEffect(() => {
    retrieveSelectedButtons();
  }, []);

  useEffect(() => {
    storeSelectedButtons();
  }, [selectedButtonsNew]);

  const retrieveSelectedButtons = async () => {
    try {
      const value = await AsyncStorage.getItem("selectedButtonsNew");
      if (value !== null) {
        setSelectedButtonsNew(JSON.parse(value));
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
      const value = JSON.stringify(selectedButtonsNew);
      await AsyncStorage.setItem("selectedButtonsNew", value);
    } catch (error) {
      console.error("Error storing selected buttons in AsyncStorage:", error);
    }
  };

  const handleButtonClick = (container, number) => {
    setSelectedButtonsNew((prevState) => ({
      ...prevState,
      [container]: number,
    }));
  };

  const isButtonSelectedNew = (container, number) =>
    selectedButtonsNew[container] === number;

  const isContainerComplete = (container) => !!selectedButtonsNew[container];

  const handleGoBack = async () => {
    try {
      await AsyncStorage.setItem("paramsEx4Md5", "true");
      navigation.navigate("Modules5");
    } catch (error) {
      console.log("Erro ao armazenar os parâmetros no AsyncStorage:", error);
    }
  };

  return (
    <>
      <HeaderBack
        text="Exercicio 2"
        onPress={() => navigation.navigate("Modules5")}
      />
      <Container>
        <TitleOption>Clique no número sucessor:</TitleOption>
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
                    isButtonSelectedNew("container1", number) &&
                      styles.selectedButton,
                  ]}
                  onPress={() => handleButtonClick("container1", number)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      isButtonSelectedNew("container1", number) &&
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
                    isButtonSelectedNew("container2", number) &&
                      styles.selectedButton,
                  ]}
                  onPress={() => handleButtonClick("container2", number)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      isButtonSelectedNew("container2", number) &&
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
                    isButtonSelectedNew("container3", number) &&
                      styles.selectedButton,
                  ]}
                  onPress={() => handleButtonClick("container3", number)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      isButtonSelectedNew("container3", number) &&
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
                    isButtonSelectedNew("container4", number) &&
                      styles.selectedButton,
                  ]}
                  onPress={() => handleButtonClick("container4", number)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      isButtonSelectedNew("container4", number) &&
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
      {Object.keys(selectedButtonsNew).length === 4 ? (
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
    backgroundColor: "#5DB075",
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

export default Ex4Md5;
