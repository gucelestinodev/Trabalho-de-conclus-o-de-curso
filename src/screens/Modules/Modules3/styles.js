import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ContainerIteins = styled.View`
  padding-horizontal: 24px;
  padding-top: 36px;
`;

export const ContainerExercicios = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
`;

export const Check = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border: solid 4px #000000;
  border-radius: 5px;
`;

export const Text = styled.Text`
  font-size: 26px;
  color: #282828;
  text-align: center;
  margin-bottom: 30px;
  font-family: "Roboto-Bold";
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #282828;
  font-family: "Roboto-Medium";
`;

export const Border = styled.View`
  width: 100%;
  height: 1.5px;
  background-color: #e8e8e8;
  margin: 15px 0 25px 0;
`;

export const Separador = styled.View`
  margin-left: 95px;
`;
