import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ContainerItens = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
`;

export const ContainerItensPalavras = styled.View`
  flex-direction: row;
  margin: 0px 0 0px 10px;
  height: 60px;
`;

export const ContainerWords = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0px 10px 0px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #000000;
  margin-bottom: 10px;
  font-family: 'Roboto-Medium ';

`;

export const TextWords = styled.Text`
  font-size: 22px;
  color: #000000;
  font-weight: 500;
  margin-left: 10px;
  border: solid 1px #000000;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Roboto-Bold';
`;

export const WordsItens = styled.View`
  flex: 3;
  flex-direction: column;
  align-items: flex-start;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  margin-top: 5px;
`;

export const TextItens = styled.Text`
  font-size: 20px;
  color: #282828;
  font-family: "Roboto-Regular";
  flex-wrap: wrap;
  margin: 20px 0 -10px 10px;
`;

export const ButtonEnviar = styled.TouchableOpacity`
  background-color: #5DB075;
  width: 230px;
  height: 55px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ButtonEnviarCinza = styled.TouchableOpacity`
  background-color: #D9D9D9;
  width: 230px;
  height: 55px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #ffffff;
  margin-top: 10px;
`;

export const ContainerButtons1 = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 40px;
  background-color: #ffffff;
`;

export const ContainerWord = styled.View`
  max-width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  margin: 5px;
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
  margin-bottom: 60px;
`;

export const ButtonSalvar = styled.TouchableOpacity`
  background-color: #5db075;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const TextButtonAux = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-family: 'Roboto-Bold';
`;

export const TextButton = styled.Text`
  font-size: 25px;
  color: #ffffff;
  font-family: 'Roboto-Bold';
`;

export const Border = styled.View`
  width: 94%;
  height: 1.5px;
  background-color: #000000;
  margin: 5px 0 10px 10px;
`;
