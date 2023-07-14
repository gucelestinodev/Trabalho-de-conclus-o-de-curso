import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ContainerItens = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const ContainerWords = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0px 10px 0px;
`;

export const TextWords = styled.Text`
  font-size: 22px;
  color: #000000;
  margin-left: 5px;
  font-family: "Roboto-Medium";
`;

export const WordsItens = styled.View`
  flex-direction: column;
  align-items: flex-start;
  height: 200px;
`;

export const TextItens = styled.Text`
  font-size: 25px;
  color: #282828;
  flex-wrap: wrap;
  margin: 20px 0 -10px 10px;
  font-family: "Roboto-Bold";
`;

export const ButtonEnviar = styled.TouchableOpacity`
  background-color: #5db075;
  width: 230px;
  height: 55px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ButtonEnviarCinza = styled.TouchableOpacity`
  background-color: #d9d9d9;
  width: 230px;
  height: 55px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonExcluir = styled.TouchableOpacity`
  background-color: #db675e;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ButtonApagar = styled.TouchableOpacity`
  background-color: #4682B4;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ButtonSalvar = styled.TouchableOpacity`
  background-color: #5db075;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const TextButtonAux = styled.Text`
  font-size: 15px;
  color: #ffffff;
  font-family: "Roboto-Bold";
`;

export const TextButton = styled.Text`
  font-size: 25px;
  color: #ffffff;
  font-family: "Roboto-Medium";
`;

export const Border = styled.View`
  width: 94%;
  height: 1.5px;
  background-color: #000000;
  margin: 0 0 0 10px;
`;
