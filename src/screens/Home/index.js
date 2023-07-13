import * as React from "react";
import {
  Title,
  Container,
  ContainerButton,
  TextButton,
  Imgs,
  Separador,
} from "./styles";
import ImageHome from "../../assets/imageHome.js";
import LogoApp from "../../assets/Logo_app.js";
import IconIniciar from "../../assets/IconIniciar.js";

export default function Home({ navigation }) {
  return (
    <Container>
      <LogoApp />
      <Separador />
      <ContainerButton onPress={() => navigation.navigate("Activites")}>
        <TextButton>Iniciar</TextButton>
        <IconIniciar />
      </ContainerButton>
    </Container>
  );
}
