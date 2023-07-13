import React, { useState, useEffect } from "react";
import {
  Title,
  Container,
  ContainerIteins,
  ContainerExercicios,
  Separador,
  Text,
  Border,
} from "./styles";
import CheckMark from "../../../assets/checkmark.js";
import DeniedCheck from "../../../assets/deniedCheck.js";
import { useIsFocused } from "@react-navigation/native";
import HeaderBack from "../../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Modules4({ navigation }) {
  const [paramsEx1Md4, setParamsEx1Md4] = useState(false);
  const [paramsEx2Md4, setParamsEx2Md4] = useState(false);
  const [paramsEx3Md4, setParamsEx3Md4] = useState(false);

  const isFocused = useIsFocused();

  const getParamsFromStorage = async () => {
    try {
      const storedParams = await AsyncStorage.getItem("paramsEx1Md4");
      const storedParams2 = await AsyncStorage.getItem("paramsEx2Md4");
      const storedParams3= await AsyncStorage.getItem("paramsEx3Md4");

      setParamsEx1Md4(storedParams === "true");
      setParamsEx2Md4(storedParams2 === "true");
      setParamsEx3Md4(storedParams3 === "true");
    } catch (error) {
      console.log("Erro ao obter os parâmetros do AsyncStorage:", error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getParamsFromStorage();
    }
  }, [isFocused]);

  return (
    <Container>
      <HeaderBack
        text="Módulo 4"
        onPress={() => navigation.navigate("Activites")}
      />
      <ContainerIteins>
        <Text>Exercícios</Text>
        <ContainerExercicios onPress={() => navigation.navigate("Ex1Md4")}>
          <Title>Lição 1</Title>
          <Separador />
          {paramsEx1Md4 ? <CheckMark /> : <DeniedCheck />}
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex2Md4")}>
          <Title>Lição 2</Title>
          <Separador />
          {paramsEx2Md4 ? <CheckMark /> : <DeniedCheck />}
        </ContainerExercicios>
        <Border />
        <ContainerExercicios onPress={() => navigation.navigate("Ex3Md4")}>
          <Title>Lição 3</Title>
          <Separador />
          {paramsEx3Md4 ? <CheckMark /> : <DeniedCheck />}
        </ContainerExercicios>
        <Border />
      </ContainerIteins>
    </Container>
  );
}
