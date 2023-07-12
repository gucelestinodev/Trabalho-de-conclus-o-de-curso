import * as React from "react";
import {
  Title,
  Container,
  ContainerButton,
  TextButton,
  ContainerIteins,
  Separador,
  SubTitle,
} from "./styles";
import ImageHome from "../../assets/imageHome.js";

export default function Home({ navigation }) {
  return (
    <Container>
      <ContainerIteins>
        <Title>AlfabetizAI</Title>
        <ImageHome />
        <ContainerButton onPress={() => navigation.navigate("Activites")}>
          <TextButton>Iniciar</TextButton>
        </ContainerButton>
      </ContainerIteins>
    </Container>
  );
}
